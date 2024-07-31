import { workflow } from "@novu/framework";
import { renderEmail } from "../../emails/linear-digest";
import { z } from "zod";

export const multiDigestWorkflow = workflow(
  "multi-digest",
  async ({ step }) => {
    // Digest all notifications from different workflows
    const digestedNotifications = await step.digest(
      "digest-all-notifications",
      async () => {
        return {
          amount: 30,
          unit: "seconds",
        };
      }
    );

    // Send digested notifications via email
    await step.email("send-email", async (controls) => {
      return {
        subject: `${digestedNotifications.events.length} unread notifications on Novu`,
        body: renderEmail(digestedNotifications.events),
      };
    });
  }
);

export const someoneCommentedOnTicket = workflow(
  "someone-commented-on-ticket",
  async ({ step, payload, subscriber }) => {
    await step.inApp("send-inbox-notification", async () => {
      return {
        body: `${payload.comment.author.userName} commented ${payload.comment.text} on ticket ${payload.ticket.id}`,
      };
    });

    await step.custom("digest-the-message", async () => {
      try {
        await multiDigestWorkflow.trigger({
          to: subscriber?.subscriberId as string,
          payload: {},
        });
        return {
          success: true,
          error: null,
        };
      } catch (error) {
        return {
          success: false,
          error: error,
        };
      }
    });
  },
  {
    payloadSchema: z.object({
      type: z.string().default("ticket:comment"),
      ticket: z.object({
        id: z.string(),
        title: z.string(),
        descreption: z.string().optional(),
        status: z.enum(["open", "closed"]).default("open").optional(),
      }),
      comment: z.object({
        id: z.string(),
        text: z.string(),
        author: z.object({
          id: z.string(),
          name: z.string().optional(),
          userName: z.string(),
        }),
      }),
    }),
  }
);

export const ticketAssigned = workflow(
  "ticket-assigned-to-user",
  async ({ step, payload, subscriber }) => {
    await step.inApp("send-inbox-notification", async () => {
      return {
        // body: `${payload.comment.author.userName} commented ${payload.comment.text} on ticket ${payload.ticket.id}`,
        body: `${payload.assign.author.userName} assigned ticket ${payload.ticket.id} ${payload.ticket.title} to you.`,
      };
    });

    await step.custom("digest-the-message", async () => {
      try {
        await multiDigestWorkflow.trigger({
          to: subscriber?.subscriberId as string,
          payload: payload,
        });
        return {
          success: true,
          error: null,
        };
      } catch (error) {
        return {
          success: false,
          error: error,
        };
      }
    });
  },
  {
    payloadSchema: z.object({
      type: z.string().default("ticket:assign"),
      ticket: z.object({
        id: z.string(),
        title: z.string(),
        descreption: z.string().optional(),
        status: z.enum(["open", "closed"]).default("open").optional(),
      }),
      assign: z.object({
        author: z.object({
          id: z.string(),
          name: z.string().optional(),
          userName: z.string(),
        }),
      }),
    }),
  }
);
