import { serve } from "@novu/framework/next";
import { AirbnbReview } from "../../novu/workflows";

export const { GET, POST, OPTIONS } = serve({ workflows: [AirbnbReview] });
