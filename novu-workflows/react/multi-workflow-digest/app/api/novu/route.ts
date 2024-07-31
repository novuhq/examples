import { serve } from "@novu/framework/next";
import {
  multiDigestWorkflow,
  someoneCommentedOnTicket,
  ticketAssigned,
} from "../../novu/workflows";

// the workflows collection can hold as many workflow definitions as you need
export const { GET, POST, OPTIONS } = serve({
  workflows: [multiDigestWorkflow, someoneCommentedOnTicket, ticketAssigned],
});
