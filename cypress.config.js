const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
      
    },
    baseUrl: 'https://magento.softwaretestingboard.com/',
    execTimeout: 30000,
    requestTimeout: 30000,
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 30000,
    responseTimeout: 30000,
    viewportHeight: 800,
    viewportWidth: 1280,
    projectId: "yhtq6c",
    reporterOptions: {
      reportDir: 'cypress/report',
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true,
      reportPageTitle: 'UI Automation'
    }
  },
});
