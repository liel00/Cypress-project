const { defineConfig } = require('cypress')

module.exports = defineConfig({
  failOnStatusCode: false,
  defaultCommandTimeout: 8000,
  env: {
    url: 'http://automationpractice.pl/index.php',
  },
  projectId: '96r8oq',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
