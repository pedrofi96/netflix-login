const { defineConfig } = require("cypress");

require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    env:{
      login_netflix: process.env.login_netflix , 
      senha_netflix: process.env.senha_netflix
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
