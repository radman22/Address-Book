/// <reference types="cypress" />
    describe('Implicit Assertions', () => {

      before(()=>{

        cy.fixture('AppConfig.json').then((data) => {
          cy.visit(data.SIGNIN_URL)
        })
        cy.fixture('UserData').then((userData)=>{

          cy.get("#session_email").type(userData.username);
          cy.get("#session_password").type(userData.password);
  
         })
  
         cy.get(".btn.btn-primary").click();


      })
      
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
        

      it('Verify address button presence on screen', () => {
        


        cy.get(".nav-item.nav-link:nth-child(2)").should("be.visible");
        cy.get(".nav-item.nav-link:nth-child(2)").click();
     
     
     
      })

      it('Veirfy system allows you to create a addresses',()=>{

        cy.get(".nav-item.nav-link:nth-child(2)").click();
        cy.get(".row.justify-content-center").click();

      })

    })

  
    