const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    env: {
    //  url: 'https://bookcart.azurewebsites.net',
    url: 'https://petstore.swagger.io',
    },
    specPattern: '**/*.cy.js',
    trashAssetsBeforeRuns: true,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/report',
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true,
      reportPageTitle: 'API Automation'
    }
  }
});
