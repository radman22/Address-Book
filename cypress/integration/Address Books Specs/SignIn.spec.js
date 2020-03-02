/// <reference types="cypress" />
describe('Sign In  Screen test suite', () => {

      
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    beforeEach(()=>{

        cy.fixture('AppConfig.json').then((data) => {
            cy.visit(data.SIGNIN_URL)
          })

    })
    
    it('Verify the user is on Sign In Screen', () => {
       
        
        cy.get("#clearance>h2").contains("Sign in"); 
        
      })

      it('Verify the system allows Sign In', () => {
       
        cy.fixture('UserData').then((userData)=>{

            cy.get("#session_email").type(userData.username);
            cy.get("#session_password").type(userData.password);
    
           })
    
           cy.get(".btn.btn-primary").click();
           cy.get('.text-center> h1').contains("Welcome to Address Book");      
           
          })  
    


    })

  
    