import { Client, workflow } from "@novu/framework";
import { renderPasswordResetEmail } from "./emails/password-reset";
export const client = new Client({
  /**
   * Enable this flag only during local development
   */
  strictAuthentication: false,
});



export const renderPasswordResetEmailWorkflow = workflow(
  "password-reset-email",
  async ({ step, payload }) => {
    await step.email(
      "send-email",
      async () => {
        return {
          subject: "Verify your OTP!",
          body: renderPasswordResetEmail(payload),
        };
      }
    );
  },
  {
    payloadSchema: {
      type: "object",
      properties: {
        headingText: {
          type: "string",
          default: "Password reset requested",
          title: "Heading text",
        },
        headingTextColour: {
          type: "string",
          enum: ['#059A05', '#f00', '#08080A'],
          default: "#08080A"
        },
        headingTextSize: {
          type: "string",
          enum: ['16px', '20px', '24px'],
          default: "20px"
        },
        bodyTextOne: {
          type: "string",
          default: "Someone recently requested a password change for your Dropbox account. If this was you, you can set a new password.",
          title: "Body text One",
        },
        bodyTextOneColour: {
          type: "string",
          enum: ['#059A05', '#f00', '#08080A'],
          default: "#08080A"
        },
        bodyTextTwo: {
          type: "string",
          default: "If you don't want to change your password or didn't request this, just ignore and delete this message.",
          title: "Body text Two",
        },
        bodyTextTwoColour: {
          type: "string",
          enum: ['#059A05', '#f00', '#08080A'],
          default: "#08080A"
        },
        bodyTextThree: {
          type: "string",
          default: "To keep your account secure, please don&apos;t forward this email to anyone. See our Help Center for more secutiry tips",
          title: "Body text Three",
        },
        bodyTextThreeColour: {
          type: "string",
          enum: ['#059A05', '#f00', '#08080A'],
          default: "#08080A"
        },
        resetPasswordLink: {
          type: "string",
          format: "uri",
          title: "Reset Password Link",
        },
        showButton: {
          type: "boolean",
          default: true
        },
        showMagicLink: {
          type: "boolean",
          default: false
        },
        linkText: {
          type: 'string',
          default: "Use this link to reset your password",
          title: "Link text"
        }
      },
    },
  },
);
