/// <reference types="cypress" />
import SignInPageObjects  from '../PageObjects/SignInPageObjects'
describe('Sign In  Screen test suite', () => {

    let pageOject = new SignInPageObjects();
      
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    beforeEach(()=>{

        pageOject.visitSignInPage();

    })
    
    it('Verify the user is on Sign In Screen', () => {
       
        
        pageOject.verifyRedirection();
        
      })

      it('Verify the system allows Sign In', () => {
       
            pageOject.typeEmail();
            pageOject.typePassowrd();
            pageOject.clickOnSignInButton();
            pageOject.verifySignIn();     
           
          })  
    


    })

  
    