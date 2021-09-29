module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  //Setup enzyme
  // snapshotSerializers: ["enzyme-to-json/serializer"],
  // setupFilesAfterEnv: [
  //   "<rootDir>/src/setupEnzyme.ts",
  //   "<rootDir>/src/setupTests.ts",
  // ],
};
