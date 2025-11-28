const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mp5sc2',
  e2e: {
    // precisa estar presente para ativar o modo E2E
    setupNodeEvents(on, config) {
      // configurações de plugin aqui
    }, 
    specPattern: "cypress/e2e/**/*.spec.{js,ts}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

