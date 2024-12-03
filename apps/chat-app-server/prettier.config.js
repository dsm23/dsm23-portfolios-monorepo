export default {
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  importOrder: [
    "^express$",
    "<TYPES>^(express)",
    "<BUILTIN_MODULES>",
    "<TYPES>^(node:)",
    "<THIRD_PARTY_MODULES>",
    "<TYPES>^([@a-z])",
    "^~/(.*)$",
    "<TYPES>^~/(.*)",
    "^[.]",
    "<TYPES>",
  ],
  importOrderTypeScriptVersion: "5.7.2",
};
