
const additonalEnvironments = require("./environments");

if(!additonalEnvironments.test_settings)
  additonalEnvironments.test_settings = {};

const bstackOptions = {
  'bstack:options' : {
    "os" : "OS X",
    "osVersion" : "Big Sur",
    "buildName" : "End-to-end flow-build",
    "sessionName" : "Automate Tricentis Vehicle Insurance App",
    "seleniumVersion" : "4.0.0",
    userName: '${BROWSERSTACK_USERNAME}' || 'BROWSERSTACK_USERNAME',
    accessKey: '${BROWSERSTACK_ACCESS_KEY}' || 'BROWSERSTACK_ACCESS_KEY',
  },
}

const browserStack = {
  webdriver: {
    start_process: false,
    timeout_options: {
      timeout: 120000,
      retry_attempts: 3
    },
    keep_alive: true
  },

  selenium: {
    host: 'hub.browserstack.com',
    port: 443
  },

  desiredCapabilities: {
    browserName: 'chrome',
    browserVersion: 'latest',
      ...bstackOptions
  }
}

const nightwatchConfigs = {
  src_folders: ['tests'],
  live_output: true,
  plugins: ['@nightwatch/browserstack'],
  '@nightwatch/browserstack': {
    browserstackLocal: true // set true to manage browserstack local tunnel. Defaults to false.
  },

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org'
    },

    browserstack:  {
      ...browserStack
    },

    "browserstack.chrome": {
      ...browserStack,
      desiredCapabilities:{
        browserName: 'chrome',
        ...bstackOptions
      }
    },
    "browserstack.firefox": {
      ...browserStack,
      desiredCapabilities:{
        browserName: 'firefox',
        ...bstackOptions
      }
    },
    "browserstack.edge": {
      ...browserStack,
      desiredCapabilities:{
        browserName: 'Edge',
        ...bstackOptions
      }
    },
    "browserstack.safari": {
      ...browserStack,
      desiredCapabilities:{
        browserName: 'Safari',
        ...bstackOptions
      }
    },
    "browserstack.opera": {
      ...browserStack,
      desiredCapabilities:{
        browserName: 'Opera',
        ...bstackOptions
      }
    }
  }
}

for(let key in additonalEnvironments.test_settings) {
  nightwatchConfigs.test_settings[key] = {
    ...browserStack,
    ...additonalEnvironments.test_settings[key]
  };
}

module.exports = nightwatchConfigs;
