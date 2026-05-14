import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignInAppErrorPage extends Page {
    /**
     * define selectors using getter methods
     */

     get userNameInput() {
        return $('#username input');
    }

    get passwordInput() {
        return $('#password input');
    }

    get loginBtn() {
        return $('#login-btn');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.userNameInput.waitForExist({ timeout: 15000 });
        await this.userNameInput.setValue(username);
        await this.passwordInput.waitForExist({ timeout: 15000 });
        await this.passwordInput.setValue(password);
        await this.loginBtn.click();
        await browser.pause(10000);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return browser.url('http://54.165.70.189:3000/signin');
    }

    async openErrorPage () {
        browser.url('http://54.165.70.189:3000/recommended');
        await browser.pause(10000);
    }

}

export default new SignInAppErrorPage();
