import { serve } from "@novu/framework/next";
import { client, DropboxPasswordResetEmail } from "../../novu/client";

export const { GET, POST, PUT, OPTIONS } = serve({ client, workflows: [DropboxPasswordResetEmail] });
