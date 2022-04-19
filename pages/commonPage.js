let commonPage = function () {
    let backButtonLocator = element(by.xpath("//mat-icon[.='arrow_back']"));
    let menuLocator = element(by.xpath("//mat-icon[.='menu']"));
    var EC = protractor.ExpectedConditions;
  
    this.clear = async function () {
        await browser.executeScript('window.localStorage.clear();');
        await browser.executeScript('window.sessionStorage.clear();');
        await browser.driver.manage().deleteAllCookies();
        await browser.executeScript('window.indexedDB.databases().then((r) => {for(var i = 0; i < r.length; i++) window.indexedDB.deleteDatabase(r[i].name);});')
        console.log("Called")
    }
    
    this.selectMenu = async function () {
        console.log("Called Select")
        await browser.wait(EC.visibilityOf(menuLocator), 130000);
        await menuLocator.click();

    }

    this.goBack = async function () {
        await browser.wait(EC.visibilityOf(backButtonLocator), 120000);
        await backButtonLocator.click();

    }

    this.browserBackButton = async function () {
        await browser.navigate().back();
    }

}

module.exports = new commonPage;