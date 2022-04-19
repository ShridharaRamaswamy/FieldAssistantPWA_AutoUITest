let loginPage = require('../../pages/loginPage');
let syncRoutePage = require("../../pages/syncRoutePage");
let routePage = require("../../pages/routePage");
let devicePage = require("../../pages/devicePage");
let workProcedurePage = require("../../pages/workProcedurePage");
let logPage = require("../../pages/logPage");
let logoutPage = require("../../pages/logoutPage");
let env = require('../../environment/env');
let common = require("../../pages/commonPage");
var EC = protractor.ExpectedConditions;
let syncLocators = element(by.css(".mat-raised-button"));
const registerPage = require('../../pages/registerPage');
const { syncRoute } = require('../../pages/syncRoutePage');
let selectedDeviceCountOnRouteCardLocator = element.all(by.xpath("//strong")).get(1)
let downloadingEquipments = element(by.xpath("//span[.='Downloading equipments']"));

let shiftLocator = element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"));

describe("PWA Sync module test cases", () => {

   beforeEach(async function () {

      console.log('ctest start beforeEach')

      await browser.waitForAngularEnabled(false);
      
      await browser.get(env.config.login_url);

      await registerPage.registerClient(Date.now(),"1357");

      await registerPage.okButtonClick();

      await loginPage.login(env.config.userName, env.config.password, env.config.baseurl);

      console.log("Login done");

     // await browser.wait(EC.invisibilityOf(downloadingEquipments),350000);

    //  await browser.waitForAngularEnabled(true);

    // await  browser.sleep(60000)
    
     await syncRoutePage.getRoute();

      console.log('ctest stop beforeEach')

   });

   afterEach(async function () {
      await common.clear();

   });

   console.log("Sync suite");

   it("Check Available routes", async () => {

      console.log("Inside First it block");

      await syncRoutePage.checkRoutesDuringInitialGetRoutes();

   }),

      it("Get routes and clear shfit, then sync", async () => {

         console.log("Inside Second it block");

         await syncRoutePage.clearShift();

         expect(syncLocators.isEnabled()).toBe(false);

         expect(browser.getCurrentUrl()).toEqual(env.config.sync_url)

      }), 
      it("Get routes , sync success , verify HistoryDataCheckBox", async () => {


         console.log("Inside Third it block");

         await syncRoutePage.syncRoute();

         await syncRoutePage.verifyHistoryDataCheckBox();
         
      }),
      it("Get routes , sync success, verify route and history sync success message", async () => {


         console.log("Inside Third it block");

         await syncRoutePage.syncRoute();

         await syncRoutePage.teamSelection();

         await syncRoutePage.verifyMessageAfterRouteAndHistorySyncSuccess();
      }),
   it("Get routes , sync success, uncheck history data and  verify only route  sync success message", async () => {


         console.log("Inside Third it block");

         await syncRoutePage.syncRoute();

         await syncRoutePage.unCheckHistoryData();

         await syncRoutePage.teamSelection();

         await syncRoutePage.verifyMessageAfterRouteSyncSuccess();
      })
 
    it("Get routes , sync success", async () => {

      console.log("Inside Third it block");

      await syncRoutePage.syncRoute();

      await syncRoutePage.teamSelection();

      await syncRoutePage.syncSuccess();

      expect(await browser.getCurrentUrl()).toEqual(env.config.route_selection_url);

   }), 
   it("Get routes , clear selected route and check sync button disabled", async () => {

      console.log("Inside Fourth it block");

      await syncRoutePage.clearRoute();

      await syncRoutePage.unCheckRouteVerification();

      expect(await browser.getCurrentUrl()).toEqual(env.config.sync_url);

      expect(syncLocators.isEnabled()).toBe(false);

   }),
   it("Get routes , clear selected route", async () => {

      console.log("Inside Fourth it block");

      await syncRoutePage.clearRoute();

      await syncRoutePage.unCheckRouteVerification();

      expect(await browser.getCurrentUrl()).toEqual(env.config.sync_url);


   }), it("Get routes ,clear work Center and sync ", async () => {

      console.log("Inside Fifth it block");

      await syncRoutePage.clearWorkCenter();

      expect(syncLocators.isEnabled()).toBe(false);


   }),
    it("Adoc Sync Team Selection check", async () =>{
         await syncRoutePage.syncRoute();

         await syncRoutePage.teamSelection();

         await syncRoutePage.syncSuccess();

         await common.selectMenu();

         await routePage.adocSync();

         await syncRoutePage.getRoute();

         await syncRoutePage.checkTeam();


      }),
      it("Adoc sync checking the downloaded route avaiblity at sync page. Fail scenario", async () => {

         console.log("Inside Sixth it block");

         await syncRoutePage.syncRoute();

         await syncRoutePage.teamSelection();

         await syncRoutePage.syncSuccess();


         await common.selectMenu();

         await routePage.adocSync();

         await syncRoutePage.getRoute();

         expect(await browser.getCurrentUrl()).toEqual(env.config.sync_url);

         await syncRoutePage.checkRouteAtSyncPage();

      }),
       it("Adoc sync and check routes", async () => {

         console.log("Inside Seven it block");

         await syncRoutePage.syncRoute();

         await syncRoutePage.teamSelection();

         await syncRoutePage.syncSuccess();


         await common.selectMenu();

         await routePage.adocSync();

         await syncRoutePage.getRoute();

         await syncRoutePage.syncRoute();

         await syncRoutePage.teamSelection();

         await syncRoutePage.syncSuccess();


         await syncRoutePage.checkRoutesAtRoutePage();

         expect(await browser.getCurrentUrl()).toEqual(env.config.route_selection_url);

  })
it("Device select in route card, sync particular route", async () => {

         console.log("Inside Seven it block");

         let count =  await syncRoutePage.totalDeviceCount();

         await syncRoutePage.clickSelectDeviceOnRoute();

         await syncRoutePage.clearAllOnSelectDevice();

      
          syncRoutePage.selectDeviceOnDeviceSelectPopUp();

         await syncRoutePage.clickOkOnDeviceSelectPopUp();

        let te = await selectedDeviceCountOnRouteCardLocator.getText() ;
        
        let check = parseInt(te);

        expect(check).toEqual(8)


      }),it("Device select in route card, select some equipment , cancel", async () => {

         console.log("Inside Seven it block");

         let count =  await syncRoutePage.totalDeviceCount();

         await syncRoutePage.clickSelectDeviceOnRoute();

         await syncRoutePage.clearAllOnSelectDevice();

          syncRoutePage.selectDeviceOnDeviceSelectPopUp();

          syncRoutePage.selectDeviceOnDeviceSelectPopUp2();

         await syncRoutePage.clickCancelOnDeviceSelectPopUp();

      
        let te = await selectedDeviceCountOnRouteCardLocator.getText() ;

        expect(te).toEqual(count)


      }),it("Device select in route card, select some equipment ,clear , cancel", async () => {

         console.log("Inside Seven it block");

         let count =  await syncRoutePage.totalDeviceCount();

         await syncRoutePage.clickSelectDeviceOnRoute();

         await syncRoutePage.clearAllOnSelectDevice();

          syncRoutePage.selectDeviceOnDeviceSelectPopUp();

          syncRoutePage.selectDeviceOnDeviceSelectPopUp2();

          await syncRoutePage.clearAllOnSelectDevice();

         await syncRoutePage.clickCancelOnDeviceSelectPopUp();

      
        let te = await selectedDeviceCountOnRouteCardLocator.getText() ;

        expect(te).toEqual(count)


      }),it("Device select in route card, sync one equipment and Adoc sync other equipment in same route", async () => {

         console.log("Inside Seven it block");

         let count =  await syncRoutePage.totalDeviceCount();

         await syncRoutePage.clickSelectDeviceOnRoute();

         await syncRoutePage.clearAllOnSelectDevice();

          syncRoutePage.selectDeviceOnDeviceSelectPopUp();

          await syncRoutePage.clickOkOnDeviceSelectPopUp();

         await syncRoutePage.syncRoute();

         await syncRoutePage.teamSelection();

         await syncRoutePage.syncSuccess();


         await common.selectMenu();

         await syncRoutePage.adocSync();

         await syncRoutePage.getRoute();

         await syncRoutePage.clickSelectDeviceOnRoute();

         await syncRoutePage.clearAllOnSelectDevice();

          syncRoutePage.selectDeviceOnDeviceSelectPopUp();

          await syncRoutePage.clickOkOnDeviceSelectPopUp();

         await syncRoutePage.syncRoute();

         await syncRoutePage.teamSelection();

         await syncRoutePage.syncSuccess();


         await common.selectMenu();

         await syncRoutePage.adocSync();

         await syncRoutePage.getRoute();

         let expected = count-2;

         let te = await selectedDeviceCountOnRouteCardLocator.getText() ;
        
         let check = parseInt(te);
 
         expect(check).toEqual(expected)
 


      })
})

