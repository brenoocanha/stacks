import type { Config } from '@jest/types'

const baseDir = '<rootDir>/src/app/server_app/data';
const baseTestDir = '<rootDir>/src/test/server_app/data';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
        `${baseDir}/**/*.ts`
    ],
    testMatch:[
        `${baseTestDir}/**/*.ts`,
        `${baseTestDir}/**/*.ts`
    ]
}

export default config;