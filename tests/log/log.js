let loginPage = require('../../pages/loginPage');
let syncRoutePage = require("../../pages/syncRoutePage");
let routePage = require("../../pages/routePage");
let devicePage = require("../../pages/devicePage");
let workProcedurePage = require("../../pages/workProcedurePage");
let logPage = require("../../pages/logPage");
let logoutPage = require("../../pages/logoutPage");
let env = require('../../environment/env');
let common = require("../../pages/commonPage");
const registerPage = require('../../pages/registerPage');
var EC = protractor.ExpectedConditions;

describe("PWA, Log test cases", () => {

  beforeEach(async function () {
    await browser.waitForAngularEnabled(false);

    await browser.get(env.config.baseurl);

    await registerPage.registerClient(Date.now(),"1357");

    await registerPage.okButtonClick();
    await loginPage.login(env.config.userName, env.config.password, env.config.baseurl);
    await browser.sleep(60000)
    await logPage.addLog();
    await logPage.selectEntityDropDown();
  });

  afterEach(async function () {
    await common.clear();

  });

  console.log("Log Suite");

  it("Add Plant hierarchy Log, log description and save", async () => {

    console.log("Inside First it block");

    await logPage.workCenterEntitySelection();

    await logPage.addLogDescription("WU3");

    await logPage.abnormalSelection();

    await logPage.importantSelection();

    await logPage.saveLog();


    await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));

    await logPage.invisibilityOfTeams();

    expect(browser.getCurrentUrl()).toEqual(env.config.sync_url);

    await common.selectMenu();

    var logCount = await logPage.getLogCount();

    expect(logCount).toEqual('1');


  }),
    it("Add Plant hierarchy Log, log template and save", async () => {

      console.log("Inside Second it block");

      await logPage.workUnitEntitySelection();

      await logPage.logTemplateSelection();

      await logPage.lessOilLogSelection();

      await logPage.abnormalSelection();

      await logPage.importantSelection();

      await logPage.saveLog();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));

      await logPage.invisibilityOfTeams();

      await expect(browser.getCurrentUrl()).toEqual(env.config.sync_url);



      await common.selectMenu();

      var logCount = await logPage.getLogCount();

      expect(logCount).toEqual('1');

    }), it("Add Plant hierarchy Log and save using pop dialog", async () => {

      console.log("Inside Third it block");

      await logPage.routeEntitySelection();

      await logPage.addLogDescription("Route1");

      await logPage.abnormalSelection();

      await logPage.importantSelection();

      await common.goBack();

      await logPage.savePopLog();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));

      await logPage.invisibilityOfTeams();

      expect(browser.getCurrentUrl()).toEqual(env.config.sync_url);

      await common.selectMenu();

      var logCount = await logPage.getLogCount();

      expect(logCount).toEqual('1');

    }), it("Add Plant hierarchy Log and discard using pop dialog", async () => {

      console.log("Inside Fourth it block");

      await browser.sleep(15000);

      await logPage.equipmentEntitySelection();

      await logPage.invisibilityOfLoading();

      await logPage.addLogDescription("Equipment Log");

      await logPage.abnormalSelection();

      await logPage.importantSelection();

      await logPage.maintainanceSelection();

      await common.goBack();

      await logPage.discardPopLog();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));

      await logPage.invisibilityOfTeams();

      expect(browser.getCurrentUrl()).toEqual(env.config.sync_url);

      await common.selectMenu();

      var logCount = await logPage.getLogCount();

      expect(logCount).toEqual('0');


    }), it("Add Plant hierarchy Log ,close and  discard using pop dialog", async () => {

      console.log("Inside Fifth it block");

      await logPage.workCenterEntitySelection();

      await logPage.addLogDescription("WU3");

      await logPage.abnormalSelection();

      await logPage.importantSelection();

      await logPage.close();

      await logPage.discardPopLog();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));

      await logPage.invisibilityOfTeams();

      expect(browser.getCurrentUrl()).toEqual(env.config.sync_url);

      await common.selectMenu();

      var logCount = await logPage.getLogCount();

      expect(logCount).toEqual('0');


    })
    , it("Add Plant hierarchy Log ,close and save using pop dialog", async () => {

      console.log("Inside sixth it block");

      await logPage.workCenterEntitySelection();

      await logPage.addLogDescription("WU3");

      await logPage.abnormalSelection();

      await logPage.importantSelection();

      await logPage.close();

      await logPage.savePopLog();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));

      await logPage.invisibilityOfTeams();

      expect(browser.getCurrentUrl()).toEqual(env.config.sync_url);

      await common.selectMenu();

      var logCount = await logPage.getLogCount();

      expect(logCount).toEqual('1');


    }), 
    
    it("Add Plant hierarchy Log , save and edit log by adding the log description and mark flags", async () => {

      console.log("Inside seventh it block");

      await logPage.workCenterEntitySelection();

      await logPage.addLogDescription("WU3");

      await common.goBack();

      await logPage.savePopLog();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));

      await logPage.invisibilityOfTeams();

      await common.selectMenu();

      await logPage.editLog();

      await logPage.addLogDescription("Edited Log WU3")

      await logPage.abnormalSelection();

      await logPage.importantSelection();

      await logPage.saveLog();

      expect(browser.getCurrentUrl()).toEqual(env.config.log_url);

    }), it("Add Plant hierarchy Log , save and edit log by changing the Log description by selecting logtemplate ", async () => {

      console.log("Inside eigth it block");

      await logPage.workCenterEntitySelection();

      await logPage.addLogDescription("WU3");

      await logPage.saveLog();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));

      await logPage.invisibilityOfTeams();

      await common.selectMenu();

      await logPage.editLog();

      await logPage.logTemplateSelection();

      await logPage.emergencyLogSelection();

      await logPage.saveLog();

      expect(browser.getCurrentUrl()).toEqual(env.config.log_url);

    }), it("Add Plant hierarchy Log , save and verify the added log ", async () => {

      console.log("Inside Ninth it block");

      await browser.sleep(15000);
      

      await logPage.equipmentEntitySelection();

      await logPage.invisibilityOfLoading();

      await logPage.addLogDescription("Equipment Test");

      await logPage.maintainanceSelection();

      await logPage.importantSelection();

      await logPage.abnormalSelection();

      await logPage.saveLog();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));

      await logPage.invisibilityOfTeams();

      await common.selectMenu();

      await logPage.editLog();

      await logPage.verifyLog();

    }), it("Add Plant hierarchy Log , save ", async () => {

      console.log("Inside 10th it block");

      await browser.sleep(15000);

      await logPage.equipmentEntitySelection();

      var currentUrl = await browser.getCurrentUrl();

      await logPage.invisibilityOfLoading();

      await logPage.maintainanceSelection();

      await logPage.importantSelection();

      await logPage.abnormalSelection();

      await logPage.saveLog();

      expect(browser.getCurrentUrl()).toEqual(currentUrl);


    }), it("Add Plant hierarchy Log , save and verify the log in edit page ", async () => {


      console.log("Inside 11th it block");
      await browser.sleep(15000);

      await logPage.equipmentEntitySelection();

      await logPage.invisibilityOfLoading();

      await logPage.secondEntitySelection("Bubble Cap Tray Column");

      await logPage.addLogDescription("Equipment Test2");

      await logPage.maintainanceSelection();

      await logPage.importantSelection();

      await logPage.abnormalSelection();

      await logPage.saveLog();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));

      await common.selectMenu();

      await logPage.editLog();

      await logPage.verifyLog();

      let secondEntity = await logPage.verifySecondEntity();

      expect(secondEntity).toEqual("Bubble Cap Tray Column");


    }), it("Add Plant hierarchy Log , save and edit log by changing the Log description by selecting logtemplate and mark flags", async () => {

      console.log("Inside 12th it block");

      await logPage.workCenterEntitySelection();

      await logPage.addLogDescription("WU3");

      await logPage.saveLog();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));

      await logPage.invisibilityOfTeams();

      await common.selectMenu();

      await logPage.editLog();

      await logPage.logTemplateSelection();

      await logPage.lessOilLogSelection();

      await logPage.abnormalSelection();

      await logPage.importantSelection();

      await logPage.saveLog();

      expect(browser.getCurrentUrl()).toEqual(env.config.log_url);


    }), it("Add Plant hierarchy Log , save and edit log by adding the log description and mark flags", async () => {

      console.log("Inside 13th it block");

      await logPage.workCenterEntitySelection();

      await logPage.logTemplateSelection();

      await logPage.valveLeakLogSelection();

      await logPage.abnormalSelection();

      await common.goBack();

      await logPage.savePopLog();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))), 90000);

      await logPage.invisibilityOfTeams();

      await common.selectMenu();

      await logPage.editLog();

      await logPage.addLogDescription("Edited Log with log template")

      await logPage.unCheckAbnormalSelection();

      await logPage.importantSelection();

      await logPage.saveLog();

      await logPage.invisibilityOfLoading();

      expect(browser.getCurrentUrl()).toEqual(env.config.log_url);

      await common.goBack();

      await logPage.savePopLog(); //line added by sagar

      await common.selectMenu();

      var logCount = await logPage.getLogCount();

      expect(logCount).toEqual('1');

    }), 
        it("Add Plant hierarchy Log , save and edit log ,reset", async () => {

      console.log("Inside 14th it block");

      await logPage.workCenterEntitySelection();

      await logPage.logTemplateSelection();

      await logPage.valveLeakLogSelection();

      await logPage.abnormalSelection();

      await common.goBack();

      await logPage.savePopLog();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));

      await logPage.invisibilityOfTeams();

      await common.selectMenu();

      await logPage.editLog();

      await logPage.reset();

      logPage.checkMessage("No changes made.");


    }),
    it("Add Plant hierarchy Log , save and edit log by adding the log description ,reset,discard", async () => {

      console.log("Inside 15th it block");

      await logPage.workCenterEntitySelection();

      await logPage.logTemplateSelection();

      await logPage.valveLeakLogSelection();

      await logPage.abnormalSelection();

      await common.goBack();

      await logPage.savePopLog();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));

      await logPage.invisibilityOfTeams();

      await common.selectMenu();

      await logPage.editLog();

      var currentUrl = await browser.getCurrentUrl();

      await logPage.addLogDescription("Adding");

      await logPage.reset();

      await logPage.discardPopLog();

      expect(browser.getCurrentUrl()).toEqual(currentUrl);

    }), it("Add Plant hierarchy Log , save and edit log by adding the log description, reset,close", async () => {

      console.log("Inside 16th it block");

      await logPage.workCenterEntitySelection();

      await logPage.logTemplateSelection();

      await logPage.valveLeakLogSelection();

      await logPage.abnormalSelection();

      await common.goBack();

      await logPage.savePopLog();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));

      await logPage.invisibilityOfTeams();

      await common.selectMenu();

      await logPage.editLog();

      var currentUrl = await browser.getCurrentUrl();

      await logPage.addLogDescription("Adding");

      await logPage.reset();

      await logPage.closePop();

      expect(browser.getCurrentUrl()).toEqual(currentUrl);


    }), it("Add Area ,abnormal , important Log , Log success", async () => {
      console.log("Inside 17th Describe");

      await logPage.areaEntitySelection();

      await logPage.addLogDescription("Area1");

      await logPage.abnormalSelection();

      await logPage.importantSelection();

      await logPage.saveLog();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));


      expect(browser.getCurrentUrl()).toEqual(env.config.sync_url);

      await logPage.invisibilityOfTeams();

      await common.selectMenu();

      var logCount = await logPage.getLogCount();

      expect(logCount).toEqual('1');


    }), it("Add Work Unit ,abnormal , important Log, Empty Log description Log fail scenario", async () => {

      console.log("Inside 18th Describe");

      await logPage.workCenterEntitySelection();

      await logPage.logTemplateSelection();

      await logPage.emergencyLogSelection();

      await logPage.abnormalSelection();

      await logPage.importantSelection();

      await logPage.saveLog();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));

      expect(browser.getCurrentUrl()).toEqual(env.config.sync_url);

      await logPage.invisibilityOfTeams();

      await common.selectMenu();

      var logCount = await logPage.getLogCount();

      expect(logCount).toEqual('1');



    // }), it("Add Work Unit ,abnormal , important Log, Empty Log description Log fail scenario", async () => {

    //   console.log("Inside 19th Describe");

    //   await logPage.workCenterEntitySelection();

    //   await logPage.abnormalSelection();

    //   await logPage.importantSelection();

    //   await logPage.saveLog();

    //   // await logPage.checkMessage("Please fill the log and save.");
    //   await logPage.checkMessage("No changes made."); //changed by sagar

    }),
 it("Add Work Unit ,abnormal , important Log, Empty Log description click back button and save Log fail scenario", async () => {

      console.log("Inside 20th Describe");

      await logPage.workCenterEntitySelection();

      await logPage.abnormalSelection();

      await logPage.importantSelection();

      await common.goBack();

      await logPage.savePopLog()

      await logPage.validatekMessage("Please fill all the details.");
      
      await common.goBack();
      
      await logPage.discardPopLog()

     }),

     it("Add Area ,abnormal , important Log ,and edit log by selecting equipment entity and mark maintainance ", async () => {
      console.log("Inside 21st Describe");

      await logPage.areaEntitySelection();

      await logPage.addLogDescription("Area1");

      await logPage.abnormalSelection();

      await logPage.importantSelection();

      await logPage.saveLog();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));


      await logPage.invisibilityOfTeams();

      await common.selectMenu();

      await logPage.editLog();


      await logPage.editLogEntityDropDown();

      await logPage.equipmentEntitySelection();

      await logPage.invisibilityOfLoading();

      await logPage.maintainanceSelection();

      await logPage.saveLog();

      expect(browser.getCurrentUrl()).toEqual(env.config.log_url);
    }),
    
    it("Add Plant hierarchy Log, click browser back and save using pop dialog", async () => {

      console.log("Inside 22nd it block");

      await logPage.routeEntitySelection();

      await logPage.addLogDescription("Route1");

      await logPage.abnormalSelection();

      await logPage.importantSelection();

      await common.browserBackButton();

      await logPage.savePopLog();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));

      await logPage.invisibilityOfTeams();

      expect(browser.getCurrentUrl()).toEqual(env.config.sync_url);

      await common.selectMenu();

      var logCount = await logPage.getLogCount();

      expect(logCount).toEqual('1');
    }), it("Add Plant hierarchy Log ,click browser back and discard using pop dialog", async () => {

      console.log("Inside 23rd it block");

      await logPage.routeEntitySelection();

      await logPage.addLogDescription("Route1");

      await logPage.abnormalSelection();

      await logPage.importantSelection();

      await common.browserBackButton();

      await logPage.discardPopLog();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));

      await logPage.invisibilityOfTeams();

      expect(browser.getCurrentUrl()).toEqual(env.config.sync_url);

      await common.selectMenu();

      var logCount = await logPage.getLogCount();

      expect(logCount).toEqual('0');
    }), it("Add Plant hierarchy Log, upload log , and check count", async () => {

      console.log("Inside 24th it block");
  
      await logPage.workCenterEntitySelection();
  
      await logPage.addLogDescription("WU3");
  
      await logPage.abnormalSelection();
  
      await logPage.importantSelection();
  
      await logPage.uploadLog();

      await logPage.invisibilityOfLoadMessage();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));

      expect(browser.getCurrentUrl()).toEqual(env.config.sync_url);

      await common.selectMenu();

      var logCount = await logPage.getLogCount();

      expect(logCount).toEqual('0');

    }),

it("Add 3 Plant hierarchy Log, upload all log, check log count", async () => {

      console.log("Inside 25th it block");
  
      await logPage.workCenterEntitySelection();
  
      await logPage.addLogDescription("WU3");
  
      await logPage.abnormalSelection();
  
      await logPage.importantSelection();

      await logPage.saveLog();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));

      await logPage.invisibilityOfTeams();

      await logPage.addLog();

      await logPage.selectEntityDropDown();

      await logPage.workUnitEntitySelection();

      await logPage.logTemplateSelection();

      await logPage.emergencyLogSelection();

      await logPage.saveLog();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));

      await logPage.invisibilityOfTeams();
  
      await logPage.addLog();

      await logPage.selectEntityDropDown();

      await logPage.equipmentEntitySelection();

      await logPage.addLogDescription("Sd");

      await logPage.saveLog();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));

      await logPage.invisibilityOfTeams();

      await common.selectMenu();

      await logPage.uploadAll();

      await logPage.clickUpload();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));

      expect(browser.getCurrentUrl()).toEqual(env.config.sync_url);

      await common.selectMenu();

      var logCount = await logPage.getLogCount();

      expect(logCount).toEqual('0');

    });
    
// it("Add Plant hierarchy Log, upload all log when there is no log to upload", async () => {

//       console.log("Inside 26th it block");

//       await logPage.clickOutside();

//       await common.goBack();

//       await logPage.invisibilityOfTeams();

//       await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))),40000);
  
//       await common.selectMenu();

//       await logPage.uploadAll();

//       let uploadQuestionLocator = element(by.css(".mat-dialog-title")) ;

//       expect(uploadQuestionLocator.isPresent()).toBe(false);
//     }),
    
it("Add Plant hierarchy Log,edit log and upload log", async () => {

      console.log("Inside 27th it block");
  
      await logPage.workCenterEntitySelection();
  
      await logPage.addLogDescription("WU3");
  
      await logPage.abnormalSelection();
  
      await logPage.importantSelection();
  
      await logPage.saveLog();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));

      await common.selectMenu();

      await logPage.editLog();

      await logPage.editLogEntityDropDown();

      await logPage.workUnitEntitySelection();

      await logPage.uploadLog();

      await logPage.invisibilityOfLoadMessage();

      await common.selectMenu();

      var logCount = await logPage.getLogCount();

      expect(logCount).toEqual('0');
    }),it("Add Plant hierarchy Log,upload log without adding log description", async () => {

      console.log("Inside 28th it block");

      let logUrl = await browser.getCurrentUrl();
  
      await logPage.workCenterEntitySelection();
  
      await logPage.abnormalSelection();
  
      await logPage.importantSelection();

      await logPage.uploadLog();

      expect(browser.getCurrentUrl()).toEqual(logUrl);
    }),
// // it("Add Plant hierarchy Log,edit log ,upload log without adding log description", async () => {

//       console.log("Inside 29th it block");

//       let logUrl = await browser.getCurrentUrl();
  
//       await logPage.workCenterEntitySelection();
  
//       await logPage.abnormalSelection();
  
//       await logPage.importantSelection();

//       await logPage.saveLog();

//       await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));

//       await common.selectMenu();

//       await logPage.editLog();

//       await logPage.removeSecondEntity();

//       await logPage.uploadLog();

//       expect(browser.getCurrentUrl()).toEqual(logUrl);
//     }),
    
    it("Add Plant hierarchy Log,edit log and delete log", async () => {

      console.log("Inside 30th it block");
  
      await logPage.workCenterEntitySelection();
  
      await logPage.addLogDescription("WU3");
  
      await logPage.abnormalSelection();
  
      await logPage.importantSelection();
  
      await logPage.saveLog();

      await browser.wait(EC.visibilityOf(element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"))));

      await common.selectMenu();

      await logPage.editLog();

      await logPage.clickDeleteLog();

      await logPage.deleteLog();

      await logPage.invisibilityOfTeams();

      await common.selectMenu();

      var logCount = await logPage.getLogCount();

      expect(logCount).toEqual('0');

})
});
