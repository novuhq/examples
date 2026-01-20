import { workflow } from '@novu/framework';
import { renderAppleReceiptEmail } from '../emails/apple-receipt';
import { zodControlSchema, jsonSchema, zodPayloadSchema } from './schemas';

/**
 * Apple Receipt Workflow
 */
export const appleReceipt = workflow(
  "apple-receipt",
  async ({ step, payload }) => {
    await step.email(
      "send-email",
      async (controls) => {
        return {
          subject: controls.receiptSubject,
          body: renderAppleReceiptEmail(controls, payload),
        };
      },
      {
        controlSchema: zodControlSchema
      },
    );
  },
  { 
    payloadSchema: zodPayloadSchema
  }
);
