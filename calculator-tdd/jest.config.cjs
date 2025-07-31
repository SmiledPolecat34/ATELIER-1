/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',

  globals: {
    'ts-jest': { useESM: true },
  },

  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.ts$': ['ts-jest'],
  },

  roots: ['<rootDir>/tests'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  testMatch: ['**/?(*.)+(spec|test).ts'],
};
