import { serve } from "@novu/framework/next";
import { YelpRecentLogin } from "../../novu/workflows";

export const { GET, POST, PUT, OPTIONS } = serve({ workflows: [YelpRecentLogin]});
