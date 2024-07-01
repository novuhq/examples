import { z } from 'zod';

export const zodControlSchema = z.object({
    emailSubject: z.string().default("Verify your Slack OTP!"),
    confirmAddressHeader: z.string().default("Confirm your email address"),
    majorBodyText: z.string().default("Your confirmation code is below - enter it in your open browser window and we'll help you get signed in."),
    showMagicLink: z.boolean().default(false),
    linkText: z.string().default("Click this link if the OTP does not work for you!"),
    showOTP: z.boolean().default(true)
});

export const zodPushControlSchema = z.object({
  pushNotificationSubject: z.string().default("You received a Slack OTP")
});

export const zodSmsControlSchema = z.object({
  smsSubject: z.string().default("You received a Slack OTP")
});

export const zodPayloadSchema = z.object({
    validationCode: z.number().int().default(123456),
    magicLinkURL: z.string().url().default('https://slack.com/magic/link')
});
