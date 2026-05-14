import { Given, Then, When } from '@wdio/cucumber-framework';
import signInPage from '../pageobjects/bstack-demo/signIn.page.js';
import signInAppErrorPage from '../pageobjects/bstack-demo/signIn.app.error.page.js';

import winston from 'winston';
import log4js from 'log4js';

const logConfiguration = {
    'transports': [
        new (winston.transports.Console)({
            level: 'silly',
            json: true        
        })
    ]
};
const loggerWinston = winston.createLogger(logConfiguration);

log4js.configure({
    appenders: { app: { type: 'file', filename: 'app.log' } },
    categories: { default: { appenders: ['app'], level: 'all' } }
  });
var logger4js = log4js.getLogger();
logger4js.level = "all";

Given(/^I go to Bstack Sign In page$/, async() => {
    await signInPage.open();
});

Given(/^the logo wrapper should be visible on the page$/, async() => {
    await expect(signInPage.loginWrapper).toBeExisting();
});

Given(/^the username input should be visible on the page$/, async() => {
    await expect(signInPage.userNameInput).toBeExisting();
});

Given(/^the password input should be visible on the page$/, async() => {
    await expect(signInPage.passwordInput).toBeExisting();
});

Given(/^the login button should be visible on the page$/, async() => {
    await expect(signInPage.loginBtn).toBeExisting();
    //await expect(signInPage.passwordInput).toBeExisting();
});

Given(/^I login using credentials - ([a-zA-Z0-9., ]+) and ([a-zA-Z0-9., ]+)$/, async(username, password) => {
    await signInPage.login(username, password);
});


Given(/^the logo wrapper text should contain - ([a-zA-Z0-9., ]+)$/, async(logoWrapperText) => {
    await expect(signInPage.loginWrapper).toHaveTextContaining(logoWrapperText);
});

Given(/^the logo wrapper icon should be - ([a-zA-Z0-9., ]+)$/, async(logoWrapperIconSize) => {
    console.log("Logo wrapper icon size:"+logoWrapperIconSize);
});

Given(/^I verify the validation message for invalid login should be - ([a-zA-Z0-9., ]+)$/, async(validationMsg) => {
    await expect(signInPage.error).toBeExisting();
    await expect(signInPage.error).toHaveTextContaining(validationMsg);
});

Given(/^Verify all SignInPage UI logging - ([0-9]+)$/, {timeout: 5*60*1000}, async (count) => {

    //1 loop - runs 1*2*120sec -> 4mins
    //5 loops - runs 5*2*120sec -> 20mins
    //10 loops - runs 10*2*120sec -> 40mins
    var sleep_time = count*60000

    console.log('homePageUI - console log - logging '+count)
    console.info('homePageUI - console info - logging '+count)
    console.trace('homePageUI - console trace - logging '+count)
    console.debug('homePageUI - console debug - logging '+count)
    console.warn('homePageUI - console warn - logging '+count)
    console.error('homePageUI - console error - logging '+count)

    loggerWinston.info('homePageUI - winston info 1 - logging '+count)
    loggerWinston.log('info', 'homePageUI - winston info 2 - logging '+count)
    loggerWinston.log('debug', 'homePageUI - winston debug - logging '+count)
    loggerWinston.log('verbose', 'homePageUI - winston verbose - logging '+count)
    loggerWinston.log('silly', 'homePageUI - winston silly - logging '+count)
    loggerWinston.log('http', 'homePageUI - winston http - logging '+count)
    loggerWinston.log('warn', 'homePageUI - winston warn - logging '+count)
    loggerWinston.log('error', 'homePageUI - winston error - logging '+count)

    logger4js.info('homePageUI - 4js info - logging '+count);
    logger4js.trace('homePageUI - 4js trace - logging '+count);
    logger4js.debug('homePageUI - 4js debug - logging '+count);
    logger4js.warn('homePageUI - 4js warn - logging '+count);
    logger4js.error('homePageUI - 4js error - logging '+count);
    logger4js.fatal('homePageUI - 4js fatal - logging '+count);

    await signInAppErrorPage.open();
    await new Promise(r => setTimeout(r, sleep_time));
    await signInAppErrorPage.open();
    await new Promise(r => setTimeout(r, sleep_time));
    await signInAppErrorPage.login("demouser\t", "testingisfun99\t");
    await new Promise(r => setTimeout(r, sleep_time));
    await signInAppErrorPage.login("demouser\t", "testingisfun99\t");
    await new Promise(r => setTimeout(r, sleep_time));
    await signInAppErrorPage.openErrorPage();
});
