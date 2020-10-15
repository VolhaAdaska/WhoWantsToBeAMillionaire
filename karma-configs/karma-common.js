module.exports = coverageIstanbulReporter = {
  dir: require('path').join(__dirname, '../reports'),
  reports: ['html', 'lcovonly', 'text-summary'],
  fixWebpackSourcePaths: true,
  thresholds: {
    global: {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70
    },
    each: {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70
    }
  },
};
