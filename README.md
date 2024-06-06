# End-to-End Testing with Nightwatch.js, Travis CI/CD Integration, and BrowserStack Automation

- What is Nightwatch? - [Framwork: Nightwatch](https://nightwatchjs.org/guide/overview/what-is-nightwatch.html)

- Travis-CI Dashboard - [CI/CD Platform: Travis CI](https://www.travis-ci.com/) 

- Documentation Nightwatch on BrowserStack - [Application: BrowserStack](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs/nightwatch)  

<img src = "https://media.licdn.com/dms/image/C4D12AQGMIktpYpEAQg/article-cover_image-shrink_600_2000/0/1615289582528?e=1722470400&v=beta&t=q9Wsf9rXntdMTowxkPvkQ0O4EMZx_kxk_7fsiRAlE-Y" height = "70">

<img src = "https://www.travis-ci.com/wp-content/uploads/2022/09/Logo.png" height = "50">

<img src = "https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780" height = "50">

## Contents
- [Setup](#Setup)
- [RunningTests](#Runningtests)
- [Notes](#Notes)
- [Resources](#Resources)
##
## ⚙️ Setup
#### 1. Clone the repo: 
 ```
  git clone https://github.com/cicitech12/endtoendflowtest.git
  ```
#### 2. Change directory: 
 ```
  cd endtoendflowtest
  ```

#### 3. Install all dependencies - `npm` manages downloads of dependencies of your project:
  ```
  npm install
  ```
#### 4. Export the environment variables for the Username and Access Key of your BrowserStack account:
  ``` sh
  export BROWSERSTACK_USERNAME=<browserstack-username> &&
  export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```

## RunningTests
Run on the command line for test in the BrowserStack automate dashboard:
  ```sh
  npm run sample-test
  ```
Run on the command line for test local:
```
  npm run local
  ```
Run on the command line for test parallel in the BrowserStack automate dashboard:
```sh
  npm run parallel
  ```
Run on the command line for the variation of the tests performs two separate runs to test different input values for the “Courtesy Car” field:
```sh
  npm run test-courtesy
  ```

## Notes

- You can view your test results on the [BrowserStack automate dashboard](https://automate.browserstack.com)
- To test on a different set of browsers, check out our [capabilities generator](https://www.browserstack.com/automate/capabilities)
- Run a Nightwatch test with a cloud provider [Running on BrowserStack](https://nightwatchjs.org/guide/quickstarts/create-and-run-a-test-with-cloud-providers.html)
- A guide to help you integrate Travis CI with the [BrowserStack device cloud for running all your tests](https://www.browserstack.com/docs/automate/selenium/travis-ci)

## Resources
- [Install Nightwatch](https://nightwatchjs.org/guide/quickstarts/create-and-run-a-nightwatch-test.html)
- [Nightwatch.js - Git repository](https://github.com/nightwatchjs/nightwatch?tab=readme-ov-file)
- [Documentation for writing automate test NodeJS/Nightwatch](https://automate.browserstack.com/dashboard/v2/quick-start/get-started)
- [Browsers &amp; mobile devices for selenium testing on BrowserStack](https://www.browserstack.com/list-of-browsers-and-platforms?product=automate)
- [Using REST API to access information about your tests via the command-line interface](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction)
- [Example to update the Browserstack session status based on the test results](https://github.com/blueimp/nightwatch-browserstack)
- [Tricentis Vehicle Insurance Application](https://sampleapp.tricentis.com/101/app.php)
