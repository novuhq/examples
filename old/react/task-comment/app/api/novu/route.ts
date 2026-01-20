import { serve } from "@novu/framework/next";
import { taskComment } from "@/app/novu/workflows/task-comment-email";

// the workflows collection can hold as many workflow definitions as you need
export const { GET, POST, OPTIONS } = serve({
  workflows: [taskComment],
});
