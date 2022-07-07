let loginPage = require('../../pages/loginPage');
let syncRoutePage = require("../../pages/syncRoutePage");
let routePage = require("../../pages/routePage");
let devicePage = require("../../pages/devicePage");
let workProcedurePage = require("../../pages/workProcedurePage");
let logPage = require("../../pages/logPage");
let logoutPage = require("../../pages/logoutPage");
let env = require('../../environment/env');
let common = require("../../pages/commonPage");
let register = require("../../pages/registerPage")
var EC = protractor.ExpectedConditions;
let syncLocators = element(by.css(".mat-raised-button"));
let selectedDeviceCountOnRouteCardLocator = element.all(by.xpath("//strong")).get(1)

describe("PWA Register Client test cases", () => {

  beforeEach(async function () {
    await browser.waitForAngularEnabled(false);
        await browser.get(env.config.baseurl);

  });

      afterEach(async function () {
        await common.clear();
    
      });

     it("Valid Client Name Registration", async () => {

        console.log("Inside First it block");
        await register.registerClient("AutoTestValid","1357");
        await register.verifyValidResult();
        await register.okButtonClick();
        // await browser.waitForAngularEnabled(true);
    
      }),
      it("Invalid Client Name Registration", async () => {

        console.log("Inside Second it block");
       
        await register.registerClient("er@33","137");
        await register.verifyInvalidResult();
        await register.okButtonClick();
        // await browser.waitForAngularEnabled(true);
    
      }),
      it("Already Exists Client Name Registration & Rename and register", async () => {

        console.log("Inside Third it block");
        await register.registerClient("AutoTestValid","1357");
        await register.verifyAlreadyExists();
        await register.registerClient("AutoTestRenamed","");   
        await register.verifyValidResult();
        await register.okButtonClick();
        
    
      })
})