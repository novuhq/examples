import { Client, workflow } from "@novu/framework";
import { renderLoginEmail } from "./emails/yelp-recent-login";

export const client = new Client({
  /**
   * Enable this flag only during local development
   */
  strictAuthentication: false,
});

/**
 * Recent Login Workflow
 */
const date = new Date();
const formattedDate = new Intl.DateTimeFormat("en", {
  dateStyle: "long",
  timeStyle: "short",
}).format(date);

export const YelpRecentLogin = workflow(
  "Yelp Recent Login",
  async ({ step, payload }) => {
    await step.email(
      "send-email",
      async (inputs) => {
        return {
          subject: "Recent login to your Account",
          body: renderLoginEmail(inputs, payload),
        };
      },
      {
        inputSchema: {
          type: "object",
          properties: {
            noticeHeaderText: {
              type: "string",
              default: "We noticed a recent login to your Yelp account.",
              title: "Notice Header"
            },
            receiptSubject: {
              title: "Email Subject",
              type: "string",
              default: "Recent login to your Account"
            },
            bodyContentText: {
              title: "First Content Text",
              type: "string",
              default: "If this was you, there's nothing else you need to do."
            },
            additionalBodyContentText: {
              title: "Additional Content Text",
              type: "string",
              default: "If this wasn't you or if you have additional questions, please see our support page."
            }
          },
        },
      },
    );
  },
  { payloadSchema: {
      type: "object",
      properties: {
        time: {
          title: "Time",
          type: "string",
          default: formattedDate
        },
        loginDevice: {
          title: "Device",
          type: "string",
          default: 'Desktop',
        },
        loginLocation: {
          title: "Location",
          type: "string",
          default: "London, United Kingdom"
        },
        loginIp: {
          title: "IP Address",
          type: "string",
          default: "47.149.53.167",
        },
        userFirstName: {
          title: "User First Name",
          type: "string",
          default: "Jane"
        }
      }
    }
  },
);