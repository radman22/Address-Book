/// <reference types="Cypress" />
let  homescreen = require('../ElementLocators/HomeScreen');

class HomePageObjects{


   visitHomePage(){

      cy.fixture('AppConfig.json').then((data) => {
      cy.visit(data.HOME_URL);

      })

   }

   verifyUserOnHomeScreen(){

      cy.get(homescreen.UIElements.HOMESCREEN_MAINHEADING).contains("Welcome to Address Book");
      cy.get(homescreen.UIElements.HOMESCRREN_MESSAGE).contains("A simple web app for showing off your testing");

   }

   verifyHomeButtonPresent(){

      cy.get(homescreen.UIElements.HOME_BUTTON).should("be.visible");
     
   }

   verifySignInButtonPresent(){

      cy.get(homescreen.UIElements.SIGN_IN_BUTTON).should("be.visible"); 
   }

   verifyRedirection(){

      cy.get(homescreen.UIElements.SIGN_IN_BUTTON).click();   
      cy.get(homescreen.UIElements.SIGNIN_SCREEN_HEADING).contains("Sign in"); 

   }

}
export default HomePageObjects