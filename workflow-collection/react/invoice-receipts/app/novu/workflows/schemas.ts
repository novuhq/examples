import { z } from 'zod';

const date = new Date();
const formattedDate = new Intl.DateTimeFormat("en", {
  dateStyle: "long",
  timeStyle: "short",
}).format(date);


const componentTypeSchema = z.discriminatedUnion('componentType', [
  z.object({
    componentType: z.literal("heading"),
    componentText: z.string().default(""),
    align: z.enum(["left", "center", "right"]).default("center"),
  }),
  z.object({ componentType: z.literal("apple-card-purchase") }),
  z.object({ componentType: z.literal("apple-card-campaign") }),
  z.object({
    componentType: z.literal("button"),
    componentText: z.string().default("asasasa"),
  }),
  z.object({
    componentType: z.literal("text"),
    componentText: z.string().default(""),
    align: z.enum(["left", "center", "right"]).default("center"),
  }),
  z.object({ componentType: z.literal("divider") })
]);

export const zodControlSchema = z.object({
  components: z.array(componentTypeSchema).default([
    {
      componentType: 'heading',
      componentText: "Other offerings you'd find useful",
    },
    {
      componentType: 'apple-card-purchase'
    },
    {
      componentType: 'apple-card-campaign'
    }
  ]),
  applePurchaseAd: z.string().default("Save 3% on all your Apple purchases with Apple Card."),
  applyUseLink: z.string().url().default("https://www.apple.com/apple-card"),
  receiptSubject: z.string().default("Your receipt from Apple Stratford City")
});


export const zodPayloadSchema = z.object({
    appleID: z.string().default("alan.turing@gmail.com"),
    invoiceDate: z.string().default(formattedDate),
    orderID: z.string().default("ML4F5L8522"),
    billedTo: z.string().default("Alan Turing"),
    documentNo: z.number().int().default(186623754793)
});

export const jsonSchema = {
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
              "heading", "apple-card-purchase", "apple-card-campaign"
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
      title: "Top Apple Purchase Campaign"
    },
    applyUseLink: {
      type: "string",
      default: "https://www.apple.com/apple-card",
      title: "Top Apple Purchase Campaign Link",
      format: "uri"
    },
    receiptSubject: {
      title: "Email Subject",
      type: "string",
      default: "Your receipt from Apple Stratford City"
    }
  },
};