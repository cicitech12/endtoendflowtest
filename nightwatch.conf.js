module.exports = {
    // An array of folders (excluding subfolders) where your tests are located;
    // if this is not specified, the test source must be passed as the second argument to the test runner.
    src_folders: ['tests'],
  
    // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
    plugins: [],
    
    // See https://nightwatchjs.org/guide/concepts/test-globals.html
    globals_path: '',
    
    test_workers: {
      enabled: true
    },
  
    test_settings: {
      default: {
        disable_error_log: false,
        launch_url: 'http://localhost',
  
        screenshots: {
          enabled: false,
          path: 'screens',
          on_failure: true
        },
  
        desiredCapabilities: {
          browserName: 'chrome'
        },
  
        webdriver: {
          start_process: true,
          server_path: ''
        },
        
      },
      
      firefox: {
        desiredCapabilities: {
          browserName: 'firefox',
          alwaysMatch: {
            acceptInsecureCerts: true,
            'moz:firefoxOptions': {
              args: [
                // '-headless',
                // '-verbose'
              ]
            }
          }
        },
        webdriver: {
          start_process: true,
          server_path: '',
          cli_args: [
            // very verbose geckodriver logs
            // '-vv'
          ]
        }
      },
      
      chrome: {
        desiredCapabilities: {
          browserName: 'chrome',
          'goog:chromeOptions': {
            // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
            args: [
              //'--no-sandbox',
              //'--ignore-certificate-errors',
              //'--allow-insecure-localhost',
              //'--headless=new'
            ]
          }
        },
  
        webdriver: {
          start_process: true,
          server_path: '',
          cli_args: [
            // --verbose
          ]
        }
      },
      
      edge: {
        desiredCapabilities: {
          browserName: 'MicrosoftEdge',
          'ms:edgeOptions': {
            // More info on EdgeDriver: https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/capabilities-edge-options
            args: [
              //'--headless=new'
            ]
          }
        },
  
        webdriver: {
          start_process: true,
          server_path: '',
          cli_args: [
            // --verbose
          ]
        }
      },
    },
}