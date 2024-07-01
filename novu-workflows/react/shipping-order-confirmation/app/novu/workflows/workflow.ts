import { workflow } from '@novu/framework';
import { renderShippingOrderEmail } from '../emails/shipping-order-confirmation';
import { zodControlSchema, zodPayloadSchema, jsonControlSchema, jsonPayloadSchema } from './schemas';

export const AmazonShippingOrderConfirmation = workflow(
    "Amazon Shipping Order",
    async ({ step, payload }) => {
      await step.email(
        "send-email",
        async (controls) => {
          return {
            subject: controls.emailSubject,
            body: renderShippingOrderEmail(controls, payload),
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