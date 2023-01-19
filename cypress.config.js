const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // viewportHeight: 760,
  // viewportWidth: 360,
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
    baseUrl: "https://demoqa.com",

    //numero de reintentos por cada test
    // retries: 2
    // retries: {
    //   //Configure retry attempts for 'cypress run'
    //   //Default is 0
    //   runMode: 2,
    //   //Configure retry attemps for 'cypress open'
    //   //Default is 0
    //   openMode: 0,
    // }

  },
});
