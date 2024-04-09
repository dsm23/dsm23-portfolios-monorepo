// https://jestjs.io/docs/configuration
import type { Config } from "jest";

const config = {
  displayName: "next-portfolio",
  preset: "../jest.preset.js",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nx/react/plugins/jest",
    "^.+\\.[tj]sx?$": ["babel-jest", { presets: ["@nx/next/babel"] }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../coverage/next-portfolio",
} satisfies Config;

export default config;
