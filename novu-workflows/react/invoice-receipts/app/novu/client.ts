import { Client, workflow } from "@novu/framework";
import { renderAppleReceiptEmail } from "./emails/apple-receipt";

export const client = new Client({
  /**
   * Enable this flag only during local development
   */
  strictAuthentication: false,
});

/**
 * Apple Receipt Workflow
 */
export const appleReceipt = workflow(
  "apple-receipt-email",
  async ({ step, payload }) => {
    await step.email(
      "send-email",
      async (inputs) => {
        return {
          subject: "Your receipt from Apple Stratford City",
          body: renderAppleReceiptEmail(inputs, payload),
        };
      },
      {
        inputSchema: {
          type: "object",
          properties: {
            components: {
              title: "Add Custom Fields:",
              type: "array",
              default: [{
                "componentType": "heading",
                "componentText": "Other offerings you'd find useful"
              }],
              items: {
                type: "object",
                properties: {
                  componentType: {
                    type: "string",
                    enum: [
                      "text", "divider", "button", 
                      "heading", "apple-card-purchase"
                    ],
                    default: "text",
                  },
                  componentText: {
                    type: "string",
                    default: "",
                  },
                  align: {
                    type: "string",
                    enum: ["left", "center", "right"],
                    default: "center",
                  },
                },
              },
            },
            applePurchaseAd: {
              type: "string",
              default: "Save 3% on all your Apple purchases with Apple Card.",
              title: "Top Apple Purchase Ad"
            },
            applyUseLink: {
              type: "string",
              default: "https://www.apple.com/apple-card",
              title: "Apply and Use Link",
              format: "uri"
            },
          },
        },
      },
    );
  },
  { payloadSchema: {
      type: "object",
      properties: {
        appleID: {
          title: "APPLE ID",
          type: "string",
          default: "alan.turing@gmail.com"
        },
        invoiceDate: {
          title: "Invoice Date",
          type: "string",
          default: formattedDate,
        },
        orderID: {
          title: "ORDER ID",
          type: "string",
          default: "ML4F5L8522"
        },
      }
    }
  },
);