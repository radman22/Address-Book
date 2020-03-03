/// <reference types="cypress" />
import SignInPageObjects from '../PageObjects/SignInPageObjects'
import AddressBookPageObjects from '../PageObjects/AddressBookPageObjects'
    describe('Address Screen Test Suite', () => {
      let signinpage = new SignInPageObjects();
      let addressbook = new AddressBookPageObjects();

      before(()=>{
        signinpage.visitSignInPage();
        signinpage.typeSuperEmail();
        signinpage.typePassowrd();
        signinpage.clickOnSignInButton();

      })
      
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
        

      it('Verify address button presence on screen', () => {

       addressbook.verifyAddressButtonPresent();
     
      })

      it('Veirfy system allows you to create a addresses',()=>{

        addressbook.createAddress();
        
      })

      it('Verify the system allows the user to edit an address ',()=>{

        addressbook.editAddress();  
      })

      it('Verify the system allows the user to show  the last stored address ',()=>{

        addressbook.showAddress();

      })


      it('Verify the system allows the user to delete the last stored address ',()=>{

        addressbook.deleteAddress();

      })

    })

  
    