import { serve } from "@novu/framework/next";
import { client, AirbnbReview } from "../../novu/client";

export const { GET, POST, OPTIONS } = serve({ client, workflows: [AirbnbReview] });
