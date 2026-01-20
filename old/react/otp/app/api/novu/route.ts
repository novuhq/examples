import { serve } from "@novu/framework/next";
import { SlackVerificationOTP } from "../../novu/workflows";

export const { GET, POST, OPTIONS } = serve({ workflows: [SlackVerificationOTP] });
