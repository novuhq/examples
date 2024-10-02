import { workflow } from '@novu/framework';
import { renderOtpEmail } from '../emails/slack-otp';
import { zodControlSchema, zodPayloadSchema, zodPushControlSchema, zodSmsControlSchema } from './schemas';

export const SlackVerificationOTP = workflow(
  "slack-verify-otp",
  async ({ step, payload }) => {
    await step.email(
      "send-email",
      async (controls) => {
        return {
          subject: controls.emailSubject,
          body: renderOtpEmail(controls, payload),
        };
      },
      {
        controlSchema: zodControlSchema
      });

    // -----------------------------------push flow-------------------------------------------------------------------------
    await step.push('send-push', async (controls) => {
      return {
        subject: controls.pushNotificationSubject,
        body: `Your verification code from Slack is ${payload.validationCode}`,
      };
    },
    {
      controlSchema: zodPushControlSchema
    });

    // -----------------------------------sms flow-------------------------------------------------------------------------  
    await step.sms('send-sms', async (controls) => {
      return {
        subject: controls.smsSubject,
        body: `Your verification code from Slack is ${payload.validationCode}`,
      };
    },
    {
      controlSchema: zodSmsControlSchema
    });
  },
  {
    payloadSchema: zodPayloadSchema
  },
);