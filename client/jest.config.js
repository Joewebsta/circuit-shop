module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTest.js"],
  moduleNameMapper: {
    "^.+\\.(css|less)$": "<rootDir>/test/jest/__mocks__/fontSourceMock.js",
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};
