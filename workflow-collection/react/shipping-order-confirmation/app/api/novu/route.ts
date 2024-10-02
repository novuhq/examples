import { serve } from "@novu/framework/next";
import { AmazonShippingOrderConfirmation } from "../../novu/workflows";

export const { GET, POST, OPTIONS } = serve({ workflows: [AmazonShippingOrderConfirmation]});
