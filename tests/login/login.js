let loginPage = require('../../pages/loginPage');
let syncRoutePage = require("../../pages/syncRoutePage");
let routePage = require("../../pages/routePage");
let devicePage = require("../../pages/devicePage");
let workProcedurePage = require("../../pages/workProcedurePage");
let logPage = require("../../pages/logPage");
let logoutPage = require("../../pages/logoutPage");
let env = require('../../environment/env');
let common = require("../../pages/commonPage");
let register = require("../../pages/registerPage");
const commonPage = require('../../pages/commonPage');
const registerPage = require('../../pages/registerPage');
const { registerClient } = require('../../pages/registerPage');
let shiftLocator = element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"));
var EC = protractor.ExpectedConditions;


describe("PWA Login Module test cases - ", () => {

   console.log("Login suite")
   
    beforeEach(async function () {
       
     await browser.waitForAngularEnabled(false);
      
       await browser.get(env.config.baseurl);


      await registerPage.registerClient(Date.now(),"1357");

      await registerPage.okButtonClick();

      browser.waitForAngularEnabled(false);

      
   });  
 

   afterEach(async function () {
      await common.clear();
      
   });


   it("Login Success", async () => {

      console.log("Inside First it block");

      
      await loginPage.login(env.config.userName, env.config.password, env.config.baseurl);

      await browser.wait(EC.visibilityOf(shiftLocator),80000)

     
      expect(browser.getCurrentUrl()).toEqual(env.config.sync_url);
   }),
      it("Invalid username and password", async () => {

         console.log("Inside Second block");
         
         await loginPage.login(env.config.invalidUserName, env.config.invalidPassword, env.config.baseurl);
         

         expect(browser.getCurrentUrl()).toEqual(env.config.login_url);


      })
})



