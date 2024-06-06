module.exports = {
  test_settings: {
    default: {},
    env0: {
      desiredCapabilities: {
        browserName: 'Edge',
        'bstack:options': {
          browserVersion: 'latest',
          os: 'Windows',
          osVersion: '10',
          debug: true
        }
      }
    },
    env1: {
      desiredCapabilities: {
        browserName: 'Chrome',
        'bstack:options': {
          browserVersion: 'latest',
          os: 'Windows',
          osVersion: '11',
          debug: true
        }
      }
    },
    env2: {
      desiredCapabilities: {
        browserName: 'Firefox',
        'bstack:options': {
          browserVersion: 'latest',
          os: 'OS X',
          osVersion: 'Sierra',
          debug: true
        }
      }
    },
    env3: {
      desiredCapabilities: {
        browserName: 'Safari',
        'bstack:options': {
          browserVersion: 'latest',
          os: 'OS X',
          osVersion: 'Big Sur',
          debug: true
        }
      }
    },
    envYes: {
      desiredCapabilities: {
        browserName: 'chrome',
        'bstack:options': {
          browserVersion: 'latest',
          os: 'OS X',
          osVersion: 'Big Sur',
          debug: true,
        }
      }
    },
    envNo: {
      desiredCapabilities: {
        browserName: 'chrome',
        'bstack:options': {
          browserVersion: 'latest',
          os: 'OS X',
          osVersion: 'Big Sur',
          debug: true,
        }
      }
    },
  }
};