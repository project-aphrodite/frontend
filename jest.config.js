/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	transform: {
		'\\.js$': '<rootDir>/node_modules/babel-jest',
		'^.+\\.tsx?$': 'ts-jest'
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1'
	}
};
