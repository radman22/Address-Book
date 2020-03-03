/// <reference types="Cypress" />
let  signupscreen = require('../ElementLocators/SignUpScreen');

class SignUpPageObjects{


   visitSignUpPage(){

    cy.fixture('AppConfig.json').then((data) => {
        cy.visit(data.SIGNUP_URL)
      })

   }

   verifyUserOnSignUpScreen(){

    cy.get(signupscreen.UIElements.PAGE_MAINHEADING).contains("Sign up");

   }

   typeEmail(){

    cy.fixture('UserData').then((userData)=>{

        cy.get(signupscreen.UIElements.EMAIL_FIELD).type(userData.username);

    })
     
   }

   typePassowrd(){

    cy.fixture('UserData').then((userData)=>{

        cy.get(signupscreen.UIElements.PASSWORD_FIELD).type(userData.password);

    })

}

    clickOnSignUpButton(){

        cy.get(signupscreen.UIElements.SIGN_UP_BUTTON).click(); 
    }

    verifySignUp(){
        cy.wait(3000);
        cy.get(signupscreen.UIElements.ADDRESS_BOOK_MAINHEADING).contains("Welcome to Address Book");
    }

}
export default SignUpPageObjects