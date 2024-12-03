import { defineConfig } from "tsup";
import type { Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src", "!src/**/__tests__/**", "!src/**/*.test.*"],
  format: ["cjs", "esm"],
  splitting: false,
  sourcemap: true,
  clean: true,
  ...options,
}));
