module.exports = {
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/src/test/setup.ts"],
	transform: { "^.+\\.(ts|tsx|js|jsx)$": "babel-jest" },
	moduleNameMapper: {
		"\\.(css|less|scss|sass)$": "identity-obj-proxy",
		"\\.(jpg|jpeg|png|gif|svg|webp)$": "<rootDir>/src/test/fileMock.js",
	},
	moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
	testMatch: ["<rootDir>/src/**/*.test.ts", "<rootDir>/src/**/*.test.tsx"],
};
