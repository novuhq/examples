import { serve } from "@novu/framework/next";
import { StackWorkflowNewsletter } from "../../novu/workflows";

export const { GET, POST, OPTIONS } = serve({ workflows: [StackWorkflowNewsletter] });
