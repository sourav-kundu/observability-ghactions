# observability-ghactions
This is a Sample WDIO Project to demonstrate how Test Observability works. Try it out...

## Execute Suite - WDIO - Mocha & Cucumber
1. Install nvm and Switch to nvm v16.10.0 - ```nvm use v16.10.0```
2. Clone Test Samples repo - ```git@github.com:browserstack/test-observability-samples.git``` - ```develop``` branch
3. Go to Test folder ```test-samples/nodejs/wdio``` folder and run - ```npm install```
4. To run the wdio mocha suite with execution on automate: 
    - a. In Test folder - ```test-samples/nodejs/wdio``` - update credentials,  project & build name in: ```wdio-mocha-bs.conf.js```
    - b. Run tests: ```BROWSERSTACK_USERNAME=<user-name> BROWSERSTACK_ACCESS_KEY=<access-key> npm run e2e-test-wdio-mocha-bs```
5. To run the wdio mocha suite with execution on local: 
    - a. In Test folder - ```test-samples/nodejs/wdio``` - update credentials,  project & build name in: ```wdio-mocha.conf.js```
    - b. Run tests: ```BROWSERSTACK_USERNAME=<user-name> BROWSERSTACK_ACCESS_KEY=<access-key> npm run e2e-test-wdio-mocha```
6. To run the wdio cucumber suite with execution on automate:
    - a. In Test folder - ```test-samples/nodejs/wdio``` - update credentials,  project & build name in: ```wdio-cucumber-bs.conf.js```
    - b. Run tests: ```BROWSERSTACK_USERNAME=<user-name> BROWSERSTACK_ACCESS_KEY=<access-key> npm run e2e-test-wdio-cucumber-bs```
7. To run the wdio cucumber suite with execution on local:
    - a. In Test folder - ```test-samples/nodejs/wdio``` - update credentials,  project & build name in: ```wdio-cucumber.conf.js```
    - b. Run tests: ```BROWSERSTACK_USERNAME=<user-name> BROWSERSTACK_ACCESS_KEY=<access-key> npm run e2e-test-wdio-cucumber```
8. To check the test suite results go to - [Observability Dashboard](https://observability.browserstack.com/) 
9. To generate allure reports - ```npm run allure-generate```
10. Done

