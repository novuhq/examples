import { z } from "zod";
import {
  commentOnTicketPayloadSchema,
  ticketAssignedPayloadSchema,
  commentSchema,
  authorSchema,
  ticketSchema,
} from "./schemas";

export type TicketAssignedSchema = z.infer<typeof ticketAssignedPayloadSchema>;
export type CommentOnTicketSchema = z.infer<
  typeof commentOnTicketPayloadSchema
>;
export type CommentSchema = z.infer<typeof commentSchema>;
export type AuthorSchema = z.infer<typeof authorSchema>;
export type TicketSchema = z.infer<typeof ticketSchema>;
