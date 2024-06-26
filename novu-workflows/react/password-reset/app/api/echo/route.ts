import { serve } from "@novu/framework/next";
import { client, renderPasswordResetEmailWorkflow } from "../../echo/client";

export const { GET, POST, PUT, OPTIONS } = serve({ client, workflows: [renderPasswordResetEmailWorkflow] });
