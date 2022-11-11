const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotsFolder: './integration-tests/screenshots',
  videosFolder: './integration-tests/videos',
  video: false,
  reporter: '../../node_modules/cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  fixturesFolder: 'fixtures',
  defaultCommandTimeout: 30000,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./plugins/index.ts')(on, config);
    },
    specPattern: 'tests/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'support/index.ts',
    baseUrl: 'http://localhost:9000/',
  },
});
