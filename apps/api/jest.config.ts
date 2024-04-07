import type { Config as JestConfig } from "jest";

export default async (): Promise<JestConfig> => {
  return {
    verbose: true,
    testEnvironment: "node",
    roots: ["<rootDir>"],
    transform: {
      "^.+\\.ts$": "ts-jest",
    },
    testRegex: "\\.spec\\.ts$",
    moduleFileExtensions: ["ts", "js", "json", "node"],
    moduleNameMapper: {
      "^@/(.+)": "<rootDir>/src/$1",
      "^\\^/(.+)": "<rootDir>/$1",
      "^\\^test/(.+)": "<rootDir>/__test__/$1",
    },
  };
};
