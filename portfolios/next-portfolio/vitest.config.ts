import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import {
  coverageConfigDefaults,
  defaultExclude,
  defineConfig,
} from "vitest/config";

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: false,
    environment: "jsdom",
    setupFiles: "./vitest.setup.js",
    coverage: {
      include: ["src/**/*.[jt]s?(x)"],
      exclude: [
        "src/**/*.stories.[jt]s?(x)",
        "src/test-utils/**",
        "src/mocks/**",
        "**/*.d.ts",
        ...coverageConfigDefaults.exclude,
      ],
      thresholds: {
        lines: 10,
        functions: 10,
        branches: 10,
        statements: 10,
      },
    },
    projects: [
      {
        extends: true,
        test: {
          name: "unit",
          include: ["src/**/?(*.)+(spec|test).[jt]s?(x)"],
          exclude: [...defaultExclude, "**/playwright-tests/**"],
        },
      },
    ],
  },
});
