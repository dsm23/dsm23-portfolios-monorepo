import next from "@next/eslint-plugin-next";
import eslint from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

/** @type {import("eslint").FlatConfig[]} */
export default defineConfig(
  globalIgnores([
    "node_modules",
    ".turbo",
    ".next",
    "out",
    "build",
    "coverage",
    "global.d.ts",
    "next-env.d.ts",
    "junit.xml",
    "storybook-static/**",
  ]),
  eslint.configs.recommended,
  tseslint.configs.recommended,
  reactHooks.configs.flat.recommended,
  next.configs["core-web-vitals"],
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    // TODO: re-write code to not require disabling these rules
    rules: {
      "react-hooks/immutability": "off",
      "react-hooks/incompatible-library": "off",
      "react-hooks/purity": "off",
      "react-hooks/refs": "off",
      "react-hooks/set-state-in-effect": "off",
    },
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
