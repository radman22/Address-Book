/// <reference types="cypress" />
describe('Home screen test suite', () => {

      
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    beforeEach(()=>{

        cy.fixture('AppConfig.json').then((data) => {
            cy.visit(data.HOME_URL)
          })

    })
    
    it('Verify the user is on home screen', () => {
       
        
          cy.get('.text-center> h1').contains("Welcome to Address Book");
          cy.get('.text-center> h4').contains("A simple web app for showing off your testing");
        
       
      })

      it('Verify Home and Sign In Buttons are present home screen', () => {
       
        
        cy.get("#navbar > div.navbar-nav.mr-auto > a.nav-item.nav-link.active").should("be.visible");
        cy.get("#sign-in").should("be.visible");    
           
          })  
    
      it('Verify Sign In button takes you to Sign In screen ', () => {
       
    
        cy.get("#sign-in").click();   
        cy.get("#clearance>h2").contains("Sign in"); 
               
        }) 

    })

  
    