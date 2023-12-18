module.exports = {
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/.jest/Mock.js'
  },
  setupFiles: ['<rootDir>/.jest/setup.js'],
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  modulePaths: ['<rootDir>'],
  transform: {
    '^.+\\.stories\\.tsx$': '<rootDir>/injectFileName',
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx',
    '^.+\\.(js|tsx?)$': 'babel-jest'
  }
};
