const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      baseUrl: "https://gorest.co.in",
      API_URL: "https://gorest.co.in/public/v2",
      API_TOKEN:
        "d43bf897a11bfac9c5543027f57d529840a15bc328c7c0fe64d303d6c088ba9b",
    },
  },
  watchForFileChanges: false,
});
