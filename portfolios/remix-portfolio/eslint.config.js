import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";

const compat = new FlatCompat();

const compatConfig = compat.config({
  extends: ["plugin:react-hooks/recommended"],
});

/** @type {import("eslint").FlatConfig[]} */
export default tseslint.config(
  {
    ignores: [
      "node_modules",
      ".turbo",
      ".react-router",
      "build",
      "coverage",
      "global.d.ts",
      "junit.xml",
      "storybook-static/**",
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  jsxA11y.flatConfigs.recommended,
  {
    settings: { react: { version: "19" } },
    plugins: {
      react,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
    },
  },
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
