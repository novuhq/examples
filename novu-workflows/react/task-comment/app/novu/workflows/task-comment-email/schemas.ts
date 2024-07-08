import { z } from "zod";

// Learn more about zod at the official website: https://zod.dev/
export const delayControlSchema = z.object({
  unit: z.enum(["seconds","minutes","hours","days"]).default("hours"),
  amount: z.number().int().default(1)
});

export const notionControlSchema = z.object({
  subject: z.string().default("You have a comment!"),
  commentNotice: z.string().default("Comment on a task from Notion"),
  showButton: z.boolean().default(true),
  buttonColor: z.enum([ '#2383E2', '#059A05', '#08080A']).default('#2383E2'),
  updateSettingsText: z.string().default("Update notifications settings for this page"),


});

export const payloadSchema = z.object({
  userName: z
    .string()
    .default(
      "User Name",
    ),
  fileName: z
    .string()
    .default(
      "Product Mockup Diagrams",
    ),
  userComment: z
    .string()
    .default(
      "This is the user's comment"
    )
});



