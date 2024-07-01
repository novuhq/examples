import { serve } from "@novu/framework/next";
import { Client } from "@novu/framework";
import { myWorkflow, stackWorkflow } from "../../novu/workflows";

const client = new Client({ strictAuthentication: false });

export const { GET, POST, OPTIONS } = serve({
  client,
  workflows: [stackWorkflow],
});
