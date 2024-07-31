import { z } from "zod";

export const ticketSchema = z.object({
  id: z.string(),
  title: z.string(),
  descreption: z.string().optional(),
  status: z.enum(["open", "closed"]).default("open").optional(),
});

export const authorSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  userName: z.string(),
  avatar: z.string().url().optional(),
});

export const commentSchema = z.object({
  id: z.string(),
  text: z.string(),
  author: authorSchema,
});

export const commentOnTicketPayloadSchema = z.object({
  type: z.string().default("ticket:comment"),
  workspaceId: z.string().default("novu-abc"),
  ticket: ticketSchema,
  comment: commentSchema,
});

export const ticketAssignedPayloadSchema = z.object({
  type: z.string().default("ticket:assign"),
  workspaceId: z.string().default("novu-abc"),
  ticket: ticketSchema,
  assign: z.object({
    author: authorSchema,
  }),
});

export const summaryWorkflowPayloadSchema = z.union([
  commentOnTicketPayloadSchema,
  ticketAssignedPayloadSchema,
]);
