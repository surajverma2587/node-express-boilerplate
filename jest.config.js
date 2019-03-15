module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  clearMocks: true,
  timers: 'fake',
  testPathIgnorePatterns: ['.node_modules_production'],
  testURL: 'http://localhost/',
  testEnvironment: 'node',
};
