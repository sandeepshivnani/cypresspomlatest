const { commonPage } = require("../support/pages/common.page");
const { createAccountPage } = require("../support/pages/create-account.page");
const { faker } = require('@faker-js/faker');

describe('Create a new account', () => {
    beforeEach(() => {
        cy.visit('/customer/account/create/');
        commonPage.verifyPageTitle('Create New Customer Account');
    })

    afterEach(() => {
        cy.screenshot();
    })

    it('Create new account - valid', () => {


        cy.fixture('example.json').then((data)=>{

       
        createAccountPage.enterFirstName(data.firstName);
        createAccountPage.enterLastName(data.lastName);
        createAccountPage.enterEmail(data.email);
        createAccountPage.enterPassword(data.pwd);
        createAccountPage.enterConfirmPassword(data.confirmpwd);
        createAccountPage.clickCreateAccountButton();
        cy.contains('Thank you for registering with Main Website Store').should('be.visible');
        commonPage.verifyPageTitle('My Account');
    })
    })
})