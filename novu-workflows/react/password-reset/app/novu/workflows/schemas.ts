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

export const jsonControlSchema = {
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
};
  
export const jsonPayloadSchema = {
  type: "object",
  properties: {
    resetPasswordLink: {
      type: "string",
      format: "uri",
      default: "https://dropbox.com/password/reset",
      title: "Reset Password Link",
    },
  },
};
