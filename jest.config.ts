export default {
  preset: "ts-jest", // Use ts-jest to handle TypeScript
  testEnvironment: "jsdom", // Simulate a browser environment
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Setup file
  testMatch: ["**/__tests__/**/*.{ts,tsx}", "**/?(*.)+(spec|test).{ts,tsx}"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
  },
};
