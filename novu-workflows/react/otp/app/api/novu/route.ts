import { serve } from "@novu/framework/next";
import { client, SlackVerificationOTP } from "../../novu/client";

export const { GET, POST, PUT, OPTIONS } = serve({ client, workflows: [SlackVerificationOTP] });
