const { defineConfig } = require("cypress")

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    env: {
      demoQA: "https://demoqa.com/",
      sauceDemo: "https://www.saucedemo.com/",
      todoMVC:"https://todomvc.com/examples/vanillajs/",
      phpTravels: "https://phptravels.com/demo/",
      demoAut:"https://demo.automationtesting.in/Register.html",
      herokuapp:"http://the-internet.herokuapp.com/"

    },
  }
}) 