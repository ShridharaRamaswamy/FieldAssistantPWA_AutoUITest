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

describe("PWA, Logout Module test cases", () => {

    beforeEach(async function () {

        await browser.waitForAngularEnabled(false);

        await browser.get(env.config.baseurl);

        await registerPage.registerClient(Date.now(),"1357");
  
        await registerPage.okButtonClick();

        await loginPage.login(env.config.userName, env.config.password, env.config.baseurl);

        await browser.sleep(60000)

    });

    afterEach(async function () {
        await common.clear();

    });

    console.log("Device Suite");

    it("Logout from sync route level", async () => {

        console.log("Inside First it block");

        await common.selectMenu();

        await logoutPage.logout();

      //  await logoutPage.confirmLogout();

    });
}); 
