import { z } from 'zod';

export const zodControlSchema = z.object({
    emailSubject: z.string().default("Dropbox - Reset your password"),
    headerText: z.string().default("Password reset requested"),
    headerTextSize: z.enum(['16px', '20px', '24px']).default("20px"),
    headerTextColour: z.enum(['#059A05', '#f00', '#08080A']).default("#08080A"),
    bodyTextOne: z.string().default("Someone recently requested a password change for your Dropbox account. If this was you, you can set a new password."),
    bodyTextOneColour: z.enum(['#059A05', '#f00', '#08080A']).default("#08080A"),
    bodyTextTwo: z.string().default("If you don't want to change your password or didn't request this, just ignore and delete this message."),
    bodyTextTwoColour: z.enum(['#059A05', '#f00', '#08080A']).default("#08080A"),
    bodyTextThree: z.string().default("To keep your account secure, please don&apos;t forward this email to anyone. See our Help Center for more secutiry tips"),
    bodyTextThreeColour: z.enum(['#059A05', '#f00', '#08080A']).default("#08080A"),
    showResetPasswordButton: z.boolean().default(true),
    showResetLink: z.boolean().default(false),
    resetLinkText: z.string().default("Use this link to reset your password"),
});

export const zodPayloadSchema = z.object({
    resetPasswordLink: z.string().url().default('https://dropbox.com/password/reset')
});

