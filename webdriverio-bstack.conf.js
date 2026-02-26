exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  hostname: 'hub.browserstack.com',
  specs: ['./features/e2e/bstack_demo/signIn/**'],
  services: [
    [
      'browserstack',
      { browserstackLocal: false, 
        opts: { forcelocal: false },
        testObservability: true,
        testObservabilityOptions: {
                'projectName': 'BStack Integration Demo',
                'buildName': 'Run on BStack',
                'buildTag': 'Pre-release',
            },
        accessibility: true
      },
    ],
  ],
  // add path to the test file
  capabilities: [
    {
      browserName: 'Chrome',
      'bstack:options': {
        browserVersion: '120.0',
        os: 'Windows',
        osVersion: '10'
      }
    },
    {
      browserName: 'Safari',
      'bstack:options': {
        browserVersion: '15.6',
        os: 'OS X',
        osVersion: 'Monterey'
      }
    },
    {
      browserName: 'Chrome',
      'bstack:options': {
        browserVersion: '136.0',
        deviceName: 'iPhone 13 Pro',
        osVersion: '15'
      }
    }
  ],
  commonCapabilities: {
    'bstack:options': {
      buildIdentifier: "${BUILD_NUMBER}",
      consoleLogs: 'info',
      networkLogs: 'true'
    }
  },
  maxInstances: 25,
  // rest of your config goes here...
  framework: 'cucumber',
  cucumberOpts: {
        require: ['./stepdefinitions/*.js'],
        backtrace: false,
        dryRun: false,
        failFast: false, // Fail on first step, useful for debugging
        format: ['pretty'],
        snippets: true, // Show pending step suggestions
        ignoreUndefinedDefinitions: false // Treat undefined definitions as warnings
    },
};
exports.config.capabilities.forEach(function (caps) {
  for (let i in exports.config.commonCapabilities)
    caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i]};
})