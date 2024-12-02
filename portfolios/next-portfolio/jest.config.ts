import nextJest from "next/jest.js";
import type { Config } from "jest";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  collectCoverageFrom: [
    "**/src/**/*.{js,jsx,ts,tsx}",
    "!**/src/**/*.stories.{js,jsx,ts,tsx}",
  ],
  coveragePathIgnorePatterns: [".next/", "dist/", "node_modules/", "stories/"],
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  testPathIgnorePatterns: ["<rootDir>/playwright-tests"],
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
  },
} satisfies Config;

export default createJestConfig(customJestConfig);
