import { workflow } from '@novu/framework';
import { renderFeedbackEmail } from '../emails/feedback';
import { zodControlSchema, zodDelayControlSchema, zodPayloadSchema } from './schemas';

export const AirbnbReview = workflow(
  "airbnb-review",
  async ({ step, payload }) => {
    /**
     *  Delay Step
     */
    await step.delay(
      'delay-1-week', 
      async (controls) => {
        return {
          type: "regular",
          unit: controls.unit, // 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months'
          amount: controls.amount, // the number of units to delay workflow execution for
        };
      },
      {
        controlSchema: zodDelayControlSchema
      }
    );

    /** 
     *  Email Step
     */
    await step.email(
      "send-email",
      async (controls) => {
        return {
          subject: controls.emailSubject,
          body: renderFeedbackEmail(controls, payload),
        };
      },
      {
        controlSchema: zodControlSchema
      }
    );
  },
  {
    payloadSchema: zodPayloadSchema
  },
);
