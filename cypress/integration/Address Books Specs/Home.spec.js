import HomePageObjects  from '../PageObjects/HomePageObjects'
describe('Home screen test suite', () => {

    let homepage = new HomePageObjects();
      
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    beforeEach(()=>{

          homepage.visitHomePage()
          
    })
    
    it('Verify the user is on home screen', () => {
       
        
      homepage.verifyUserOnHomeScreen();
        
       
      })

      it('Verify Home and Sign In Buttons are present home screen', () => {
       
        
        homepage.verifyHomeButtonPresent();
        homepage.verifySignInButtonPresent();    
           
          })  
    
      it('Verify Sign In button takes you to Sign In screen ', () => {
       
        homepage.verifyRedirection();
               
        }) 

    })

  
    