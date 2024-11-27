import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

const compat = new FlatCompat();

const compatConfig = compat.config({
  extends: [
    "plugin:@next/eslint-plugin-next/core-web-vitals",
    "plugin:react-hooks/recommended",
  ],
});

/** @type {import("eslint").FlatConfig[]} */
export default tseslint.config(
  {
    ignores: [
      "node_modules",
      ".turbo",
      ".next",
      "build",
      "coverage",
      "global.d.ts",
      "junit.xml",
      "storybook-static/**",
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ["**/*"],
    extends: [...compatConfig],
  },
  {
    files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
    rules: {
      "no-console": [
        "error",
        {
          allow: ["debug", "error", "info", "trace", "warn"],
        },
      ],
    },
  },
);
