import { workflow } from "@novu/framework";
import { renderNotionEmail } from "../../emails/notion-notification";
import { delayControlSchema, notionControlSchema, payloadSchema } from "./schemas";

export const taskComment = workflow(
  "task-comment-notion",
  async ({ step, payload }) => {
  await step.delay(
    'Delay Comment Send', 
    async (controls) => {
      return {
        type: "regular",
        unit: controls.unit, // 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months'
        amount: controls.amount, // the number of units to delay workflow execution for
      };
    },
    {
      controlSchema: delayControlSchema
    }
  );


    await step.email(
      "Send Notion Comment Email",
      async (controls) => {
        return {
          subject: controls.subject,
          body: renderNotionEmail(controls, payload),
        };
      },
      {
        controlSchema: notionControlSchema,
      },
    );
  },
  {
    payloadSchema,
  },
);
