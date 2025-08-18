exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'souravkundu_t3yK7L',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'ZpxZHpVnTtzraRbppTnu',
  hostname: 'hub.browserstack.com',
  services: [
    [
      'browserstack',
      { browserstackLocal: false, opts: { forcelocal: false } },
      {
        testObservabilityOptions: {
          buildName: "Regression",
          projectName: "Setup App",
          buildTag: 'Pre-Prod'}},
    ],
  ],
  // add path to the test file
  specs: ['./features/e2e/**'],
  capabilities: [
    {
      browserName: 'Chrome',
      'bstack:options': {
        browserVersion: 'latest',
        os: 'Windows',
        osVersion: '11'
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
      browserName: 'safari',
      'bstack:options': {
        deviceOrientation: 'portrait',
        deviceName: 'iPhone 15 Pro Max',
        osVersion: '17'
      }
    }
  ],
  commonCapabilities: {
    'bstack:options': {
      networkLogs: 'true',
      consoleLogs: 'info',
      percy: 'false',
      percyCaptureMode: 'auto'
    }
  },
  maxInstances: 10,
  // rest of your config goes here...
};
exports.config.capabilities.forEach(function (caps) {
  for (let i in exports.config.commonCapabilities)
    caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i]};
});