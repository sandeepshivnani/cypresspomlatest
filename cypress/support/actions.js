class Actions {
    getElement({ locator, text }) {
        if (!text)
            return cy.get(locator)
        else
            return cy.get(locator).contains(text)
    }

    verifyText({ locator, expectedText, exact }) {
        this.getElement({locator: locator}).should(exact ? 'have.text' : 'include.text', expectedText)
    }

    enterText({ locator, textToEnter, append }) {
        if (append)
            this.getElement({locator: locator}).type(textToEnter)
        else
            this.getElement({locator: locator}).clear().type(textToEnter)
    }

    click({locator}) {
        this.getElement({locator: locator}).click()
    }
}

export const actions = new Actions();