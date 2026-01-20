import { workflow } from '@novu/framework';
import { renderLoginEmail } from '../emails/yelp-recent-login';
import { zodControlSchema, zodPayloadSchema, zodPushControlSchema } from './schemas';

export const YelpRecentLogin = workflow(
  "yelp-recent-login",
  async ({ step, payload }) => {
    /**
     *  Email Flow
     */
    await step.email(
      "send-email",
      async (controls) => {
        return {
          subject: "Recent login to your Account",
          body: renderLoginEmail(controls, payload),
        };
      },
      {
        controlSchema: zodControlSchema
      },
    );

    /** 
     *  Push Flow
     */
    await step.push(
      "send-push",
      async (controls) => {
        return {
          subject: controls.pushNotificationSubject,
          body: `Hi ${payload.userFirstName}, we noticed a recent login to your Yelp account. If this was you, there's nothing else you need to do. If this wasn't you or please see our support page.`,
        };
      },
      {
        controlSchema: zodPushControlSchema
      }
    );
  },
  { 
    payloadSchema: zodPayloadSchema
  },
);