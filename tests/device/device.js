let loginPage = require('../../pages/loginPage');
let syncRoutePage = require("../../pages/syncRoutePage");
let routePage = require("../../pages/routePage");
let devicePage = require("../../pages/devicePage");
let workProcedurePage = require("../../pages/workProcedurePage");
let logPage = require("../../pages/logPage");
let logoutPage = require("../../pages/logoutPage");
let env = require('../../environment/env');
let common = require("../../pages/commonPage");
const { browserBackButton } = require('../../pages/commonPage');
let markDoneAtWorkProcedureLocator = element(by.css("div.mat-menu-content > button:nth-of-type(1)"));
let discardLocator = element(by.xpath("//button[.='Discard']"));
let loadingEquipmentLocator = element(by.xpath("//span[.='Loading equipments']"));
const registerPage = require('../../pages/registerPage');
var EC = protractor.ExpectedConditions;

describe("PWA, Device Module test cases", () => {

   let devicePendingCount;
   let initialDevicePendingCount;

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

      initialDevicePendingCount = await routePage.routePageDevicePedningCount();

      devicePendingCount = parseInt(initialDevicePendingCount);

      await routePage.selectRoute();
   });

   afterEach(async function () {
      await common.clear();

   });

   console.log("Device Suite");

   it("Device Page Work procedure Pending Count Visibility", async () => {

      console.log("Inside First it block");

      await devicePage.devicePageWorkProcedurePedningCount();

   }), 
   it("Download and mark done at device level and check pending count to show all work procedures are marked as done and Upload from Device Level ", async () => {

      console.log("Inside Second it block");

      await devicePage.markDoneAtDeviceLevel();

      await devicePage.deviceSelect();

      await common.goBack();

      var workPrcodurePendingCount = await devicePage.devicePageWorkProcedurePedningCount();

      workProcedurePending = parseInt(workPrcodurePendingCount);

      expect(workProcedurePending).toEqual(0);

      await common.selectMenu();

      await routePage.myRoute();

      await routePage.uploadDataAtRouteLevel();

      await routePage.confirmUploadDataAtRouteLevel();

      await routePage.downloadRoute();

      expect(await browser.getCurrentUrl()).toEqual(env.config.sync_url)

   }),
       it("Download and mark done at device level and Upload from Device Level and sync then check the device count", async () => {

         console.log("Inside Fourth it block");

         await devicePage.markDoneAtDeviceLevel();
         
         await devicePage.deviceSelect();

         await common.goBack();

         var expectedDevicePendingCount = devicePendingCount - 1;

         await common.selectMenu();

         await routePage.myRoute();

         await routePage.uploadDataAtRouteLevel();

         await routePage.confirmUploadDataAtRouteLevel();

         await routePage.downloadRoute();

         await syncRoutePage.getRoute();

         await syncRoutePage.syncRoute();

         await syncRoutePage.teamSelection();

         await syncRoutePage.syncSuccess();

         let currentDevicePendingCount = await routePage.routePageDevicePedningCount();

         currentDevicePendingCounts = parseInt(currentDevicePendingCount);

         expect(expectedDevicePendingCount).toEqual(currentDevicePendingCounts);

      }),
      it("Mark done at device level and check mark done is diabled at work procedure level", async () => {

         console.log("Inside Fifth it block");

         await devicePage.markDoneAtDeviceLevel();

         await browser.wait(EC.visibilityOf(element(by.xpath("//span[.='Pending 0']"))), 15000);

         var currentCount = await devicePage.devicePageWorkProcedurePedningCount();
         expect(currentCount).toBe('0');

         await devicePage.deviceSelect();

         await workProcedurePage.selectMenuAtWorkProcedureLevel();

         expect(markDoneAtWorkProcedureLocator.isEnabled()).toBe(false);

      }),
      it("Mark done at device level and check discard is enabled at work procedure level", async () => {

         console.log("Inside Sixth it block");

         await devicePage.markDoneAtDeviceLevel();

         await browser.wait(EC.visibilityOf(element(by.xpath("//span[.='Pending 0']"))), 15000);

         var currentCount = await devicePage.devicePageWorkProcedurePedningCount();
         expect(currentCount).toBe('0');

         await devicePage.deviceSelect();

         await workProcedurePage.selectMenuAtWorkProcedureLevel();

         expect(discardLocator.isEnabled()).toBe(true);

      }), 
   it("Do not Mark done at device level and check mark done is enabled at work procedure level", async () => {

         console.log("Inside Seventh it block");

         await devicePage.deviceSelect();

         await workProcedurePage.selectMenuAtWorkProcedureLevel();

         expect(markDoneAtWorkProcedureLocator.isEnabled()).toBe(true);

      }), it("Download, mark done and discard at device level and Upload from Device Level and check device count", async () => {

         console.log("Inside Eigth it block");

         await devicePage.markDoneAtDeviceLevel();

         await browser.wait(EC.visibilityOf(element(by.xpath("//span[.='Pending 0']"))), 15000);

         await devicePage.discardAtDeviceLevel();

         await common.selectMenu();

         await routePage.myRoute();

         await routePage.uploadDataAtRouteLevel();

         await routePage.confirmUploadDataAtRouteLevel();

         await routePage.downloadRoute();

         await syncRoutePage.getRoute();

         await syncRoutePage.syncRoute();

         await syncRoutePage.teamSelection();

         await syncRoutePage.syncSuccess();

         let currentDevicePendingCount = await routePage.routePageDevicePedningCount();

         expect(currentDevicePendingCount).toEqual(initialDevicePendingCount);


      })
      it("QR code scan and back button", async()=>{

         console.log("Inside 9th it block");
   
         var currentUrl = await browser.getCurrentUrl();
   
         await devicePage.scanQRCode();
   
         await common.browserBackButton();
   
         expect(browser.getCurrentUrl()).toEqual(currentUrl);
       }) 
})
