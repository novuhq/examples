import { serve } from "@novu/framework/next";
import { client, amazonShippingOrderEmail} from "../../novu/client";

export const { GET, POST, PUT, OPTIONS } = serve({ client, workflows: [amazonShippingOrderEmail]});
