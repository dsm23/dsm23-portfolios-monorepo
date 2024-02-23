import { z } from "zod";
import { isValidPhoneNumber } from "libphonenumber-js/min";

const schema = z.object({
  firstName: z.string().min(1, {
    message: "First Name is required",
  }),
  lastName: z.string().min(1, {
    message: "Last Name is required",
  }),
  employed: z.boolean(),
  favoriteColour: z
    .literal("#ff0000")
    .or(z.literal("#00ff00"))
    .or(z.literal("#0000ff")),
  toppings: z
    .array(
      z
        .literal("chicken")
        .or(z.literal("ham"))
        .or(z.literal("mushrooms"))
        .or(z.literal("cheese"))
        .or(z.literal("tuna"))
        .or(z.literal("pineapple")),
    )
    .min(1),
  sauces: z
    .array(
      z
        .literal("ketchup")
        .or(z.literal("mustard"))
        .or(z.literal("mayonnaise"))
        .or(z.literal("guacamole")),
    )
    .min(1),
  stooge: z.literal("larry").or(z.literal("moe")).or(z.literal("curly")),
  phoneNumber: z.string().transform((value, ctx) => {
    if (isValidPhoneNumber(value, "GB")) {
      return value;
    }

    // when it's not
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Invalid phone number",
    });
    return z.NEVER;
  }),
  notes: z.string(),
});

export default schema;
