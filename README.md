# Address Book Automation Task 

This repository contains a complete test automation framework for a basic address book application. This application is a basic CRUD application which allows you to create, edit, show and delete addresses.

This test framework has almost automated all the CRUD operations, additionally all the happy flows are also automated like sign in, sign up etc to give advance test coverage   

*Although! It is a common knowledge but the development pattern that is used to develop this framework is **Page Object Pattern** *

## Framework Instruction

1. The automation tool that is used to develop this framework is **cypress**. You do not need an additional testing framework; cypress will take care of your assertions, hooks and test execution.  

2. In order to run tests in the framework you only need **npm (node package manager)**.cypress will take care of the rest. 

3. JavaScript is used as programming language. Typescript can also be used with cypress   

### Test cases automated 

These test cases were automated:
- Sign In 
- Sign Up
- Add Address
- edit Address
- show Address
- delete Address


These test cases should cover a selection of requirements of the application.

### Target Audience 

- You should have some programming background.
- You should have knowledge about cypress.
- Knowledge of page object development pattern.
- You should be expert with npm and node JS.
- You already have developed a test automation framework.
- experience in reading and reviewing code 


## Provided Codebase

The codebase consists of following folder structure:
- **Fixture Folder:** Used for data driven testing, all the data files used by your tests are stored in this folder 
- **Integrations folder: Your main code is present in this folder. The file that cypress framework runs has .spec.js extension. The file with this extension is your starting point 
- **Page Objects:** The rest of folders are upon page object pattern   



### How to run tests 


- **install npm:** This is the most important part, if you don’t have npm, nothing will work. Install npm according to your operating system and hit this command on your command line npm –version 
- **clone the repo:** clone this repo into your own private repo , please don’t fork it  
- **npm install:** Go into the main folder and you will see a package.json file. In the folder open your cmd and type npm install. This will install cypress and all the other dependencies. Don’t worry it will take time 
- **run test:** After the install run command npm run test. This will launch cypress test runner. A window will open in which there will be an option of *Run all scripts* at top right corner. This will launch all the specs      



