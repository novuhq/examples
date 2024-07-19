import { workflow } from '@novu/framework';
import { renderPasswordResetEmail } from '../emails/password-reset';
import { zodControlSchema, zodPayloadSchema } from './schemas';

export const DropboxPasswordResetEmail = workflow(
  "dropbox-password-reset",
  async ({ step, payload }) => {
    await step.email(
      "send-email",
      async (controls) => {
        return {
          subject: controls.emailSubject,
          body: renderPasswordResetEmail(controls, payload),
        };
      },
      {
        controlSchema: zodControlSchema
      }
    );
  },
  {
    payloadSchema: zodPayloadSchema
  }
);