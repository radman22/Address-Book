/// <reference types="cypress" />
import SignUpPageObjects from '../PageObjects/SignUpPageObjects'
describe('Sign Up Screen test suite', () => {

    let pageObject = new SignUpPageObjects();
      
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    beforeEach(()=>{

        pageObject.visitSignUpPage();

    })
    
    it('Verify the user is on Sign Up Screen', () => {
       
        
          pageObject.verifyUserOnSignUpScreen();
        
      })

      it('Verify the system allows Sign Up', () => {
       
        pageObject.typeEmail();
        pageObject.typePassowrd();
        pageObject.clickOnSignUpButton();
        pageObject.verifySignUp();



          })  
    


    })

  
    