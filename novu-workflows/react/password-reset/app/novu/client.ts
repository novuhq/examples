import { Client, workflow } from "@novu/framework";
import { renderPasswordResetEmail } from "./emails/password-reset";


export const client = new Client({
  /**
   * Enable this flag only during local development
   */
  strictAuthentication: false,
});

export const DropboxPasswordResetEmail = workflow(
  "Dropbox Password Reset",
  async ({ step, payload }) => {
    await step.email(
      "send-email",
      async (inputs) => {
        return {
          subject: inputs.emailSubject,
          body: renderPasswordResetEmail(inputs, payload),
        };
      },
      {
        inputSchema: {
          type: "object",
          properties: {
            emailSubject: {
              title: "Email Subject",
              type: "string",
              default: "Dropbox - Reset your password"
            },
            headerText: {
              type: "string",
              default: "Password reset requested",
              title: "Header",
            },
            headerTextSize: {
              type: "string",
              enum: ['16px', '20px', '24px'],
              default: "20px",
              title: "Header Font Size"
            },
            headerTextColour: {
              type: "string",
              enum: ['#059A05', '#f00', '#08080A'],
              default: "#08080A",
              title: "Header Text Color"
            },
            bodyTextOne: {
              type: "string",
              default: "Someone recently requested a password change for your Dropbox account. If this was you, you can set a new password.",
              title: "Body Text - Beginning",
            },
            bodyTextOneColour: {
              type: "string",
              enum: ['#059A05', '#f00', '#08080A'],
              default: "#08080A",
              title: "Body Text - Beginning Color"
            },
            bodyTextTwo: {
              type: "string",
              default: "If you don't want to change your password or didn't request this, just ignore and delete this message.",
              title: "Body Text - Middle",
            },
            bodyTextTwoColour: {
              type: "string",
              enum: ['#059A05', '#f00', '#08080A'],
              default: "#08080A",
              title: "Body Text - Middle Color",
            },
            bodyTextThree: {
              type: "string",
              default: "To keep your account secure, please don&apos;t forward this email to anyone. See our Help Center for more secutiry tips",
              title: "Body Text - End",
            },
            bodyTextThreeColour: {
              type: "string",
              enum: ['#059A05', '#f00', '#08080A'],
              default: "#08080A",
              title: "Body Text - End Color",
            },
            showButton: {
              type: "boolean",
              default: true,
              title: "Show Reset Password Button"
            },
            showResetLink: {
              type: "boolean",
              default: false,
              title: "Show Reset Link"
            },
            linkText: {
              type: 'string',
              default: "Use this link to reset your password",
              title: "Reset Link Text"
            }
          },
        },
      }
    );
  },
  {
    payloadSchema: {
      type: "object",
      properties: {
        resetPasswordLink: {
          type: "string",
          format: "uri",
          default: "https://dropbox.com/password/reset",
          title: "Reset Password Link",
        },
      },
    },
  },
);
