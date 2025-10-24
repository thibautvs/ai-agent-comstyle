module.exports = {
  setupFiles: ['<rootDir>/src/utils/jest/test-setup.js'],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/src/utils/jest/style-mock.js',
    '\\.(jpe?g|png|gif|woff2?|eot|ttf|otf|svg)$':
      '<rootDir>/src/utils/jest/file-mock.js',
    'config/environment': '<rootDir>/src/utils/jest/environment-mock.js',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '^toolbox(.*)$': '<rootDir>/src/components/toolbox$1',
  },
}
