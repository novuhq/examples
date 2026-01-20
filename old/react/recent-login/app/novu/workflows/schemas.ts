import { z } from 'zod';

const date = new Date();

const formattedDate = new Intl.DateTimeFormat("en", {
  weekday: "long",
  month: "long",
  day: "numeric"
}).format(date);


export const zodControlSchema = z.object({
    topText: z.string().default("We wanted to let you know that we have shipped your items."),
    receiptSubject: z.string().default("Recent login to your Account"),
    noticeHeaderText: z.string().default("We noticed a recent login to your Yelp account."),
    headerImage: z.enum([
      'yellow', 
      'purple', 
    ]).default('yellow'),
    bodyContentText: z.string().default("If this was you, there's nothing else you need to do."),
    additionalBodyContentText: z.string().default("If this wasn't you or if you have additional questions, please see our support page.")
});

export const zodPushControlSchema = z.object({
  pushNotificationSubject: z.string().default("Recent login to your Account")
});

export const zodPayloadSchema = z.object({
    time: z.string().default(formattedDate),
    loginDevice: z.string().default('Desktop'),
    loginLocation: z.string().default('London, United Kingdom'),
    loginIP: z.string().ip({ version: "v4" }).default('47.149.53.167'),
    userFirstName: z.string().default('Jane'),
});