import { serve } from "@novu/framework/next";
import { client, verificationOTP } from "../../novu/client";

export const { GET, POST, PUT, OPTIONS } = serve({ client, workflows: [verificationOTP] });
