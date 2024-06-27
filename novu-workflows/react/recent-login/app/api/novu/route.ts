import { serve } from "@novu/framework/next";
import { client, YelpRecentLogin} from "../../novu/client";

export const { GET, POST, PUT, OPTIONS } = serve({ client, workflows: [YelpRecentLogin]});
