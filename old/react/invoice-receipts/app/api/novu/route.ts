import { serve } from "@novu/framework/next";
import { appleReceipt } from "../../novu/workflows";

export const { GET, POST, OPTIONS } = serve({ workflows: [ appleReceipt ]});
