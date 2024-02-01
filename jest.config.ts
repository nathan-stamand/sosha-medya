import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';
import type { Config } from 'jest';

const jestConfig: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>',
  }),
  globals: {
    uri: 'http://localhost:8000'
  },
  verbose: false,
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/client/'],
};

export default jestConfig;
