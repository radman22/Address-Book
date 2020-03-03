/// <reference types="Cypress" />
let  addressbookscreen = require('../ElementLocators/AddressBookScreen');

class AddressBookPageObjects{



   verifyAddressButtonPresent(){

    cy.get(addressbookscreen.UIElements.ADDRESS_BUTTON).should("be.visible");
    cy.get(addressbookscreen.UIElements.ADDRESS_BUTTON).click();

   }

   createAddress(){

    cy.get(addressbookscreen.UIElements.ADDRESS_BUTTON).click();
    cy.get(addressbookscreen.UIElements.NEW_ADDRESS).click();
    cy.get(addressbookscreen.UIElements.FIRST_NAME_FIELD).type("radman");
    cy.get(addressbookscreen.UIElements.LAST_NAME_FIELD).type("sheikh");
    cy.get(addressbookscreen.UIElements.ADDRESS_FIELD).type("House No 447 ,2C2 Township Lahore");
    cy.get(addressbookscreen.UIElements.CITY_FIELD).type("Lahore");
    cy.get(addressbookscreen.UIElements.STATE_DROPDOWN_MENU).select('Arizona');
    cy.get(addressbookscreen.UIElements.ZIPCODE_FIELD).type('52074');
    cy.get(addressbookscreen.UIElements.COUNTRY_RADIOBUTTON).click();
    cy.get(addressbookscreen.UIElements.BIRTHDAY_MENU).click().type('1991-01-20');
    cy.get(addressbookscreen.UIElements.COLOR_PALATTE).click();
    cy.get(addressbookscreen.UIElements.COLOR_PALATTE).invoke('attr','value','#808080');
    cy.get(addressbookscreen.UIElements.AGE_FIELD).type('25');
    cy.get(addressbookscreen.UIElements.PHONE_FIELD).type('+491725824715');
    cy.get(addressbookscreen.UIElements.INTEREST_CHECKBOX).click();
    cy.get(addressbookscreen.UIElements.INTEREST_CHECKBOX_READING).click();
    cy.get(addressbookscreen.UIElements.ADDRESS_NOTE).type("This is a sample address");
    cy.get(addressbookscreen.UIElements.CREATE_ADDRESS_BUTTON).click();
    cy.get(addressbookscreen.UIElements.CREATION_NOTICE).contains("Address was successfully created.");
    cy.get(addressbookscreen.UIElements.ADDRESSES_BUTTON).click();
     
   }

   editAddress(){

    cy.get(addressbookscreen.UIElements.ADDRESS_LIST).should('be.visible');
    cy.get(addressbookscreen.UIElements.EDIT_LINK).first().click();
    cy.wait(3000);
    cy.get(addressbookscreen.UIElements.EDIT_SCREEN_HEADER).contains('Editing Address');
    cy.get(addressbookscreen.UIElements.ADDRESSES_BUTTON).click(); 

}

    showAddress(){

        cy.get(addressbookscreen.UIElements.ADDRESS_LIST).should('be.visible');
        cy.get(addressbookscreen.UIElements.SHOWADRESS_LINK).first().click();
        cy.wait(3000);
        cy.get(addressbookscreen.UIElements.EDITOR_PANE).should('be.visible');
        cy.get(addressbookscreen.UIElements.ADDRESSES_BUTTON).click();  
    }

    deleteAddress(){
        cy.get(addressbookscreen.UIElements.ADDRESS_LIST).should('be.visible');
        cy.get(addressbookscreen.UIElements.FIRST_ADDRESS).first().within(()=>{

          cy.get(addressbookscreen.UIElements.DELETE_LINK).last().click();

        })

        cy.get(addressbookscreen.UIElements.DELETE_ADDRESS_MESSAGE).contains("Address was successfully destroyed.");
    }

}
export default AddressBookPageObjects