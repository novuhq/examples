import { workflow } from '@novu/framework';
import { renderStackReactEmail } from '../emails/newsletter_stackoverflow';
import { zodControlSchema, jsonSchema } from './schemas';

export const StackWorkflowNewsletter = workflow(
    "stack-overflow",
    async ({ step }) => {
      await step.email(
        "send-email",
        async (controls) => {
          return {
            subject: `This is an email subject for`,
            body: renderStackReactEmail(controls),
          };
        },
        {
          controlSchema: zodControlSchema
        },
      );
  },
)
