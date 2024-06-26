import { Client, workflow } from "@novu/framework";
import { renderLoginEmail } from "./emails/recent-login";

export const client = new Client({
  /**
   * Enable this flag only during local development
   */
  strictAuthentication: false,
});

/**
 * Recent Login Workflow
 */
const detectDeviceType = () =>
  /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';

const date = new Date();
const formattedDate = new Intl.DateTimeFormat("en", {
dateStyle: "long",
timeStyle: "short",
}).format(date);

export const recentLogin = workflow(
  "recent-login-email",
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
              title: "Notice Header Text"
            },
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
          default: detectDeviceType(),
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
      }
    }
  },
);