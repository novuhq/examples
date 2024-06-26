import { serve } from "@novu/framework/next";
import { client, amazonShippingOrderEmail} from "../../echo/client";

export const { GET, POST, PUT, OPTIONS } = serve({ client, workflows: [amazonShippingOrderEmail]});
