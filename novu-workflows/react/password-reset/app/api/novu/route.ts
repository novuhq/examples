import { serve } from "@novu/framework/next";
import { DropboxPasswordResetEmail } from "../../novu/workflows";

export const { GET, POST, OPTIONS } = serve({ workflows: [DropboxPasswordResetEmail] });
