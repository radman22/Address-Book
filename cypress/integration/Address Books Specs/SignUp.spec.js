/// <reference types="cypress" />
describe('Sign Up Screen test suite', () => {

      
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    beforeEach(()=>{

        cy.fixture('AppConfig.json').then((data) => {
            cy.visit(data.SIGNUP_URL)
          })

    })
    
    it('Verify the user is on Sign Up Screen', () => {
       
        
          cy.get('#clearance>h2').contains("Sign up");
        
      })

      it('Verify the system allows Sign Up', () => {
       
       cy.fixture('UserData').then((userData)=>{

        cy.get("#user_email").type(userData.username);
        cy.get("#user_password").type(userData.password);

       })

       cy.get(".btn.btn-primary").click();
       cy.get('.text-center> h1').contains("Welcome to Address Book");    
           
          })  
    


    })

  
    