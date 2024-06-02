import type { Config as JestConfig } from "jest";

export default (): JestConfig => {
  return {
    verbose: true,
    testEnvironment: "node",
    roots: ["<rootDir>/__test__"],
    transform: {
      "^.+\\.ts$": "ts-jest",
    },
    testRegex: ".+\\.test\\.ts$",
    moduleFileExtensions: ["ts", "js", "json", "node"],
    moduleNameMapper: {
      "^@/(.+)": "<rootDir>/src/$1",
      "^\\^/(.+)": "<rootDir>/$1",
      "^\\^test/(.+)": "<rootDir>/__test__/$1",
    },
  };
};
