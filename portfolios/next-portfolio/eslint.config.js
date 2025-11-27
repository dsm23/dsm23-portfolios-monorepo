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
  // reactHooks.configs.flat["recommended-latest"],
  next.configs["core-web-vitals"],
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "react-hooks": reactHooks,
    },
    extends: ["react-hooks/recommended"],
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
