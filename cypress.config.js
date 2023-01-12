const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 900,
  viewportWidth: 1440,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message){
          console.log(`Soy el console log del task ${message}`)
          return null
        }
      })
    },
    excludeSpecPattern: [
      "**/1-getting-started/*.js",
      "**/2-advanced-examples/*.js"
    ],
    baseUrl: "https://demoqa.com"
  },
});
