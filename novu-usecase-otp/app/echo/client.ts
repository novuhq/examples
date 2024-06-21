import { Client, workflow } from "@novu/framework";
import { otpWorkflow } from "./emails/otp";
export const client = new Client({
  /**
   * Enable this flag only during local development
   */
  strictAuthentication: false,
});


// ------------------email flow-----------------------------------------------------------------------------------------------


export const verificationOTP = workflow(
  "verify-OTP",
  async ({ step, payload }) => {
    await step.email(
      "send-email",
      async () => {
        return {
          subject: "Verify your OTP!",
          body: otpWorkflow(payload),
        };
      }
    )
    // -----------------------------------push flow-------------------------------------------------------------------------
    await step.push('send-push', async () => {
      return {
        subject: 'You received an OTP',
        body: `Your verification code is ${payload.validationCode}`,
      };
    });
    // -----------------------------------sms flow-------------------------------------------------------------------------  
    await step.sms('send-sms', async () => {
      return {
        body: `Your verification code is ${payload.validationCode}`,
      };
    });

  },
  {
    payloadSchema: {
      type: "object",
      properties: {
        headerText: {
          type: "string",
          default: "Confirm your email address",
          title: "heading",
        },
        bodyText: {
          type: "string",
          title: "Body Text",
          default: "Your confirmation code is below - enter it in your open browser window and we'll help you get signed in.",
        },
        showOTP: {
          type: "boolean",
          default: true
        },
        validationCode: {
          type: "string",
          default: "123456",
          title: "OTP",
        },
        showMagicLink: { type: "boolean", default: false },
        linkText: {
          type: 'string',
          default: 'Click this link if the OTP does not work for you!',
          title: 'Magic link text'
        }
      },
      required: [""],
    },
  },
);

