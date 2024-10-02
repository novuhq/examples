import { z } from "zod";

export const zodControlSchema = z.object({
  headerText: z.string().default("Here's the latest review"),
  headerTextSize: z.enum(["20px", "25px", "30px", "35px"]).default("25px"),
  headerTextColour: z.enum(["#059A05", "#f00", "#08080A"]).default("#08080A"),
  bodyText: z
    .string()
    .default(
      "was a great guest! Easy communication, the apartment was left in great condition, very polite, and respectful of all house rules. He’s welcome back anytime and would easily recommend him to any host!"
    ),
  questionOne: z.string().default("How do reviews work?"),
  linkToAnswerOne: z
    .string()
    .url()
    .default("https://airbnb.com/help/article/13"),
  questionTwo: z.string().default("How do reviews work?"),
  linkToAnswerTwo: z
    .string()
    .url()
    .default("https://airbnb.com/help/article/14"),
  questionThree: z.string().default("How do reviews work?"),
  linkToAnswerThree: z
    .string()
    .url()
    .default("https://airbnb.com/help/article/15"),
  btnColor: z.enum(["#ff5a5f", "#f00", "#f0f"]).default("#ff5a5f"),
  textSize: z.enum(["10px", "15px", "25px"]).default("15px"),
  emailSubject: z.string().default("You have a new review"),
});

export const zodDelayControlSchema = z.object({
  unit: z
    .enum(["seconds", "minutes", "hours", "days", "weeks", "months"])
    .default("weeks"),
  amount: z.number().int().default(2),
});

export const zodPayloadSchema = z.object({
  userName: z.string().default("Alan"),
});
