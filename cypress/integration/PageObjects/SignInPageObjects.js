/// <reference types="Cypress" />
let  signinscreen = require('../ElementLocators/SignInScreen');

class SignInPageObjects{


   visitSignInPage(){

    cy.fixture('AppConfig.json').then((data) => {
        cy.visit(data.SIGNIN_URL)
      })

   }

   verifyRedirection(){

    cy.get(signinscreen.UIElements.PAGE_MAINHEADING).contains("Sign in"); 

   }

   typeEmail(){

    cy.fixture('UserData').then((userData)=>{

        cy.get(signinscreen.UIElements.EMAIL_FIELD).type(userData.super_user);

    })
     
   }

   typeSuperEmail(){

    cy.fixture('UserData').then((userData)=>{

        cy.get(signinscreen.UIElements.EMAIL_FIELD).type(userData.super_user);

    })
     
   }
   

   typePassowrd(){

    cy.fixture('UserData').then((userData)=>{

        cy.get(signinscreen.UIElements.PASSWORD_FIELD).type(userData.password);

    })

}

    clickOnSignInButton(){

        cy.get(signinscreen.UIElements.SIGN_IN_BUTTON).click(); 
    }

    verifySignIn(){
        cy.wait(3000);
        cy.get(signinscreen.UIElements.ADDRESS_BOOK_MAINHEADING).contains("Welcome to Address Book"); 
    }

   

}
export default SignInPageObjects