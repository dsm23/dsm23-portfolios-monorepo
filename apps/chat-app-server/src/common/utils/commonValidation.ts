import { z } from "zod";

export const commonValidations = {
  id: z
    .string()
    .refine(
      (data: string) => !Number.isNaN(Number(data)),
      "ID must be a numeric value",
    )
    .transform(Number)
    .refine((num: number) => num > 0, "ID must be a positive number"),
  // ... other common validations
};
