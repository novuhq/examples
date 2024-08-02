import { CronExpression, workflow } from "@novu/framework";
import { renderLinearDigestEmail } from "../../emails/linear-digest";
import {
  ticketAssignedPayloadSchema,
  commentOnTicketPayloadSchema,
  summaryWorkflowPayloadSchema,
} from "./schemas";

export const summaryWorkflow = workflow(
  "multi-workflow-digest",
  async ({ step }) => {
    // Digest all notifications from different workflows
    const digestedNotifications = await step.digest(
      "digest-all-notifications",
      async () => {
        return {
          cron: CronExpression.EVERY_DAY_AT_8AM,
        };
      }
    );

    // Send digested notifications via email
    await step.email("send-email", async () => {
      return {
        subject: `${digestedNotifications.events.length} unread notifications on Novu - Linear`,
        body: renderLinearDigestEmail(digestedNotifications.events),
      };
    });
  },
  {
    payloadSchema: summaryWorkflowPayloadSchema,
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
        await summaryWorkflow.trigger({
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
    payloadSchema: commentOnTicketPayloadSchema,
  }
);

export const ticketAssigned = workflow(
  "ticket-assigned-to-user",
  async ({ step, payload, subscriber }) => {
    await step.inApp("send-inbox-notification", async () => {
      return {
        body: `${payload.assign.author.userName} assigned ticket ${payload.ticket.id} ${payload.ticket.title} to you.`,
      };
    });

    await step.custom("digest-the-message", async () => {
      try {
        await summaryWorkflow.trigger({
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
    payloadSchema: ticketAssignedPayloadSchema,
  }
);
