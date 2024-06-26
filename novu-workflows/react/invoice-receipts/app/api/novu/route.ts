import { serve } from "@novu/framework/next";
import { client, appleReceipt} from "../../novu/client";

export const { GET, POST, PUT, OPTIONS } = serve({ client, workflows: [ appleReceipt ]});
