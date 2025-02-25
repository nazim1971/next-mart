import { z } from "zod";

export const categorySchema = z.object({
  name: z
    .string({ required_error: "Name is required" }),
  description: z
    .string({ required_error: "Description is required" })
    .min(8, "Description must be at least 8 characters"),
});
