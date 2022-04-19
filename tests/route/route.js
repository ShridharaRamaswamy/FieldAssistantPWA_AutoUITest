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

describe("PWA, Route Module test cases", () => {

  beforeEach(async function () {
    await browser.waitForAngularEnabled(false);

    await browser.get(env.config.baseurl);

    await registerPage.registerClient(Date.now(),"1357");

    
    await registerPage.okButtonClick();

    
    await loginPage.login(env.config.userName, env.config.password, env.config.baseurl);

    console.log("login done")
    
    await syncRoutePage.getRoute();

    console.log("getRoute done")

    await syncRoutePage.syncRoute();

    await syncRoutePage.teamSelection();

    await syncRoutePage.syncSuccess();

    console.log("syncRoute done")
  });

  afterEach(async function () {
    await common.clear();

  });

  console.log("Route Suite");



  it("Initial Download, Check Device Pending Count", async () => {

    console.log("Inside First it block");

    var routePageDevicePendingCount = await routePage.routePageDevicePedningCount();

    console.log(routePageDevicePendingCount);

    expect(routePageDevicePendingCount).toEqual('8');

  }), it("Download, Upload from Route Level using more vert icon", async () => {

    console.log("Inside Second it block");

    await routePage.uploadDataFromMenuAtRouteLevel();

    await routePage.confirmUploadDataAtRouteLevel();

    await routePage.downloadRoute();

    expect(await browser.getCurrentUrl()).toEqual(env.config.sync_url);

  }), it("Download 2 routes, Upload one route from Route Level using more vert icon and check ", async () => {

    console.log("Inside Third it block");

    await common.selectMenu();

    await routePage.adocSync();

    await syncRoutePage.getRoute();

    await syncRoutePage.syncRoute();

    await syncRoutePage.teamSelection();

    await syncRoutePage.syncSuccess();

    await routePage.uploadDataFromMenuAtRouteLevel();

    await routePage.confirmUploadDataAtRouteLevel();

    expect(await browser.getCurrentUrl()).toEqual(env.config.route_selection_url);

    await syncRoutePage.checkRouteAtSyncPage();

  }),
    it("Download, Upload from Route Level using more vert icon and Logout", async () => {

      console.log("Inside Fourth it block");

      await routePage.uploadDataFromMenuAtRouteLevel();

      await routePage.confirmUploadDataAtRouteLevel();

      await routePage.downloadRoute();

      await common.selectMenu();

      await logoutPage.logout();

     // await logoutPage.confirmLogout();
     
      await browser.sleep(5000);

      expect(await browser.getCurrentUrl()).toEqual(env.config.login_url);

    }),
    it("Download, Upload from Route Level using upload button and Logout", async () => {

      console.log("Inside Fifth it block");

      await routePage.uploadDataAtRouteLevel();

      await routePage.confirmUploadDataAtRouteLevel();

      await routePage.downloadRoute();

      expect(await browser.getCurrentUrl()).toEqual(env.config.sync_url);

    });

})
