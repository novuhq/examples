import { z } from "zod";
import { payloadSchema, emailControlSchema, notionControlSchema } from "./schemas";

export type PayloadSchema = z.infer<typeof payloadSchema>;
export type ControlSchema = z.infer<typeof notionControlSchema>;
