const { actions } = require("../actions");

class CreateAccount {
    constructor() {
        this.firstName = '#firstname';
        this.lastName = '#lastname';
        this.signForNewsletter = '#is_subscribed';
        this.email = '#email_address';
        this.password = '#password';
        this.confirmPassword = '#password-confirmation';
        this.createAccountButton = `button[title='Create an Account']`;
    }

    enterFirstName(firstName) {
        actions.enterText({ locator: this.firstName, append: false, textToEnter: firstName })
    }

    enterLastName(lastName) {
        actions.enterText({ locator: this.lastName, textToEnter: lastName, append: false })
    }

    enterEmail(email) {
        actions.enterText({ locator: this.email, textToEnter: email, append: false })
    }

    enterPassword(password) {
        actions.enterText({ locator: this.password, textToEnter: password, append: false })
    }

    enterConfirmPassword(confirmPassword) {
        actions.enterText({ locator: this.confirmPassword, textToEnter: confirmPassword, append: false })
    }

    clickCreateAccountButton() {
        actions.click({ locator: this.createAccountButton })
    }
}

export const createAccountPage = new CreateAccount();