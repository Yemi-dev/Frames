module.exports = {
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts',
    '@testing-library/jest-dom/extend-expect',
    'jest-styled-components'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/cypress/',
    '<rootDir>/app/',
    '<rootDir>/data/',
    '<rootDir>/node_modules/'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest'
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  moduleDirectories: [
    'node_modules',
    // add the directory with the test-utils.js file, for example:
    'utils', // a utility folder
    __dirname // the root directory
  ],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy'
  }
};
