
module.exports = {
  "transform": {
    "\\.[jt]sx?$": "babel-jest"
  },
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-dom']
};

