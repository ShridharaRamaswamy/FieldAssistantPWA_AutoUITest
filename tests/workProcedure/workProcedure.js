let loginPage = require('../../pages/loginPage');
let syncRoutePage = require("../../pages/syncRoutePage");
let routePage = require("../../pages/routePage");
let devicePage = require("../../pages/devicePage");
let workProcedurePage = require("../../pages/workProcedurePage");
let logPage = require("../../pages/logPage");
let logoutPage = require("../../pages/logoutPage");
let env = require('../../environment/env');
const registerPage = require('../../pages/registerPage');
let common = require("../../pages/commonPage");

describe("PWA, Wrok Procedure Module test cases", () => {

  let workProcedurePending;
  let devPending;
  let EC = protractor.ExpectedConditions;
  let currentDeviceUrl;
  let CurrentRouteUrl;

  beforeEach(async function () {
    await browser.waitForAngularEnabled(false);

    await browser.get(env.config.baseurl);

    await registerPage.registerClient(Date.now(),"1357");

    await registerPage.okButtonClick();

    await loginPage.login(env.config.userName, env.config.password, env.config.baseurl);

    await syncRoutePage.getRoute();

    await syncRoutePage.syncRoute();

    await syncRoutePage.teamSelection();

    await syncRoutePage.syncSuccess();

    var devicePendingCount = await routePage.routePageDevicePedningCount();

    devPending = parseInt(devicePendingCount);

    CurrentRouteUrl = browser.getCurrentUrl();

    await routePage.selectRoute();

    var workPrcodurePendingCount = await devicePage.devicePageWorkProcedurePedningCount();

    workProcedurePending = parseInt(workPrcodurePendingCount);

    console.log(workProcedurePending);

    currentDeviceUrl = browser.getCurrentUrl();
    
    await devicePage.deviceSelect();

  });

  afterEach(async function () {
    await common.clear();

  });

  console.log("Work Procedure Suite");

  it("Check equipment detail, specific data and threshold data", async () => {

    console.log("Inside First it block");

    await workProcedurePage.info();

    await workProcedurePage.equipmentDetail();

    await workProcedurePage.equipmentSpecificData();

    await workProcedurePage.thresholdData();

  }),
    it("Check work result at work procedure level", async () => {

     console.log("Inside Second it block");

   await workProcedurePage.workResult();


   }),
    it("Download and execute at work procedure level Check work Procedure progress count at device level", async () => {

      console.log("Inside Third it block");

      await workProcedurePage.openWorkItem();

      await workProcedurePage.executeWorkItem("Test 3", 49);

      let ExpectedPendingWorkProcedureCount = workProcedurePending - 6;

      console.log(FinalPendingWorkProcedureCount);

      await workProcedurePage.closeWorkItem();

      await common.goBack();

      var FinalPendingWorkProcedureCount = await devicePage.devicePageWorkProcedurePedningCount();

      FinalPendingWorkProcedureCounts = parseInt(FinalPendingWorkProcedureCount);

      expect(ExpectedPendingWorkProcedureCount).toEqual(FinalPendingWorkProcedureCounts);

    }), it("Download and execute numeric and text at work procedure level Check work Procedure progress count at device level", async () => {

      console.log("Inside Fourth it block");

      await workProcedurePage.openWorkItem();

      await workProcedurePage.executeNumericAndTextWorkItem("T", 1);

      let ExpectedPendingWorkProcedureCount = workProcedurePending - 2;

      await workProcedurePage.closeWorkItem();

      await common.goBack();

      var currentCount = await devicePage.devicePageWorkProcedurePedningCount();

      currentCounts = parseInt(currentCount);

      expect(currentCounts).toEqual(ExpectedPendingWorkProcedureCount);

    })
    , it("Download and execute at work procedure level and upload then download and check work Procedure progress count at device level", async () => {

      console.log("Inside Fifth it block");

      await workProcedurePage.openWorkItem();

      await workProcedurePage.executeWorkItem("Test 3", 45.60);

      let FinalPendingWorkProcedureCount = workProcedurePending - 6;

      await workProcedurePage.closeWorkItem();

      await common.goBack();

      await common.selectMenu();

      await routePage.myRoute();

      await routePage.uploadDataAtRouteLevel();

      await routePage.confirmUploadDataAtRouteLevel();

      await routePage.downloadRoute();

      await syncRoutePage.getRoute();

      await syncRoutePage.syncRoute();

      await syncRoutePage.teamSelection();

    await syncRoutePage.syncSuccess();

      await routePage.selectRoute();

      var ExpectedPendingWorkProcedureCount = await devicePage.devicePageWorkProcedurePedningCount();

      ExpectedPendingWorkProcedureCounts = parseInt(ExpectedPendingWorkProcedureCount);

      expect(ExpectedPendingWorkProcedureCounts).toEqual(FinalPendingWorkProcedureCount);

    }),
    it("Download and execute at work procedure ", async () => {

      console.log("Inside sixth it block");

      await workProcedurePage.openWorkItem();

      await workProcedurePage.executeWorkItem("Test", 43);

      await workProcedurePage.closeWorkItem();


    }),

    it("Download and mark done at work procedure level and Upload from Device Level and Logout", async () => {

      console.log("Inside Seven it block");

      await workProcedurePage.selectMenuAtWorkProcedureLevel();

      await workProcedurePage.markDoneAtWorkProcedure();

      await common.goBack();

      await common.selectMenu();

      await routePage.myRoute();

      await routePage.uploadDataAtRouteLevel();

      await routePage.confirmUploadDataAtRouteLevel();

      await routePage.downloadRoute();

      await common.selectMenu();

      await logoutPage.logout();

     // await logoutPage.confirmLogout();


    }),
     it("Open work procedure and trend from work item", async () => {

      console.log("Inside Eight it block");

      await workProcedurePage.openWorkItem();

      await workProcedurePage.openTrendFromWorkItem();

    }),
    it("Open work procedure and Log history check", async () => {

      console.log("Inside Ninth it block");

      await workProcedurePage.openWorkItem();

      await workProcedurePage.openLogHistory();


    }),
    it("Work Procedure Log Add and Save and verify", async () => {

      console.log("Inside Tenth it block");

      await workProcedurePage.openWorkProcedureLog();

      await workProcedurePage.addWorkProcedureLog("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

      await workProcedurePage.saveLog();

      console.log("log added");

      await workProcedurePage.openWorkProcedureLog();

      await workProcedurePage.verifyWorkProcedureLog();

      console.log("log verified")

    }), it("Work Procedure Log , dont add log and Save", async () => {

      console.log("Inside 11th it block");

      await workProcedurePage.openWorkProcedureLog();

      var currentUrl = await browser.getCurrentUrl()

      await workProcedurePage.saveLog();

      expect(browser.getCurrentUrl()).toEqual(currentUrl);

    }), it("Open Work Procedure Log, close and Save", async () => {

      console.log("Inside 12th it block");

      await workProcedurePage.openWorkProcedureLog();

      await workProcedurePage.addWorkProcedureLog("Data Added");

      await common.goBack();

      await workProcedurePage.saveLogPopUp();


    }), 

   it("Open Work Procedure Log, select log template and Save", async () => {

      console.log("Inside 13th it block");

     // var currentUrl = await browser.getCurrentUrl();

      await workProcedurePage.openWorkProcedureLog();

      await workProcedurePage.selectLogTemplate();
      var currentUrl = await browser.getCurrentUrl();
      // modified by Sagar
      await workProcedurePage.saveLog();

      let loadingEquipmentDetailsLocator = element(by.xpath("//span[.='Loading equipment details and work procedures']"));

      await browser.wait(EC.invisibilityOf(loadingEquipmentDetailsLocator), 50000)

      expect(browser.getCurrentUrl()).toEqual(currentUrl);

    });
    
    it("Download and mark done at work procedure level and Discard", async () => {

      console.log("Inside 14th it block");

      await workProcedurePage.selectMenuAtWorkProcedureLevel();

      await workProcedurePage.markDoneAtWorkProcedure();

      await workProcedurePage.selectMenuAtWorkProcedureLevel();

      await workProcedurePage.discardAtWorkProcedureLevel();

      await common.goBack();

      var currentWorkProcedureCount = await devicePage.devicePageWorkProcedurePedningCount();

      currentCount = parseInt(currentWorkProcedureCount);

      expect(currentCount).toEqual(workProcedurePending);

    }), it("Download and Open and close at work procedure level ", async () => {

      console.log("Inside 15th it block");

      await workProcedurePage.openWorkItem();

      await workProcedurePage.selectMenuAtWorkProcedureLevel();

      await workProcedurePage.closeWorkItemMenu();

    }), it("Download and mark done at work procedure level and Upload from Device Level and Logout", async () => {

      console.log("Inside 16th it block");

      await workProcedurePage.selectMenuAtWorkProcedureLevel();

      await workProcedurePage.markDoneAtWorkProcedure();

      await workProcedurePage.selectMenuAtWorkProcedureLevel();

      await workProcedurePage.discardAtWorkProcedureLevel();
    }), it("Execute half and upload and check", async()=>{
      console.log("Inside 17th it block");

      await workProcedurePage.openWorkItem();

      await workProcedurePage.executeNumericAndTextWorkItem("Test", 43);

      await workProcedurePage.closeWorkItem();

      await common.goBack();

      await common.selectMenu();

      await routePage.myRoute();

      await routePage.uploadDataAtRouteLevel();

      await routePage.confirmUploadDataAtRouteLevel();

      var currentUrl = browser.getCurrentUrl();

      expect(currentUrl).toEqual(CurrentRouteUrl);

    }) ,it("Open Work Procedure Log, select log template and upload", async () => {

      console.log("Inside 13th it block");

      var currentUrl = await browser.getCurrentUrl();

      await workProcedurePage.openWorkProcedureLog();

      await workProcedurePage.selectLogTemplate();

      await workProcedurePage.uploadLog();

      await workProcedurePage.invisibilityOfLoadMessage();

      await browser.sleep(10000)

      expect(browser.getCurrentUrl()).toEqual(currentUrl);

    }),it("Open Work Procedure Log, add log description and upload", async () => {

      console.log("Inside 13th it block");

      var currentUrl = await browser.getCurrentUrl();

      await workProcedurePage.openWorkProcedureLog();

      await workProcedurePage.addWorkProcedureLog("df");

      await workProcedurePage.uploadLog();

      await workProcedurePage.invisibilityOfLoadMessage();

      await browser.sleep(10000)

      expect(browser.getCurrentUrl()).toEqual(currentUrl);

    }),
    it("Open Work Procedure Log, without log description and upload", async () => {

      console.log("Inside 13th it block");

      
      await workProcedurePage.openWorkProcedureLog();
      var currentUrl = await browser.getCurrentUrl();

      await workProcedurePage.uploadLog();

      expect(browser.getCurrentUrl()).toEqual(currentUrl);

    }) 

});
