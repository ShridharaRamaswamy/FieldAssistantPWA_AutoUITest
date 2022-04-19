let routePage = function () {
    let routeSelectionLocator = element(by.xpath("//div[@class='pie-chart-container']/canvas[@class='chartjs-render-monitor']"));
    let routeUploadLocator = element(by.css(".mat-raised-button"));
    let confirmUploadDataLocator = element(by.xpath("//span[.='OK']"));
    let snackBarLocator = element(by.xpath("//lib-snackbar[@class='ng-star-inserted']/div"))
    let uploadSuccessLocator = element(by.xpath("//span[.='OK']"));
    let routeMenuSelectLocator = element(by.xpath("//mat-icon[.='more_vert']"));
    let uploadFromRouteCardMenu = element(by.css(".mat-menu-item"));
    let myRouteLocator = element(by.xpath("//span[contains(.,'My Routes')]"));
    let adocSyncRouteLocator = element(by.xpath("//span[contains(.,'Sync Routes')]"))
    let downloadRouteLocator = element(by.xpath("//span[.='DOWNLOAD ROUTES']"));
    let routePageDevicePendingCountLocator = element(by.xpath("//strong"));   
    var EC = protractor.ExpectedConditions;

    this.myRoute = async function () {
        await browser.wait(EC.visibilityOf(myRouteLocator), 90000);
        await myRouteLocator.click();
    }

    this.routePageDevicePedningCount = async function () {
        await browser.wait(EC.visibilityOf(routePageDevicePendingCountLocator), 120000);
        return routePagePendingCountValue = await routePageDevicePendingCountLocator.getText();
        

    }

    this.adocSync = async function () {
        await browser.wait(EC.visibilityOf(adocSyncRouteLocator), 120000);
        await adocSyncRouteLocator.click();
    }

    this.selectRoute = async function () {
        await browser.wait(EC.visibilityOf(routeSelectionLocator), 120000);
        await routeSelectionLocator.click();
        await browser.sleep(5000);
    }

    this.uploadDataFromMenuAtRouteLevel = async function () {
        await browser.wait(EC.visibilityOf(routeMenuSelectLocator), 90000);
        await routeMenuSelectLocator.click();

        await browser.wait(EC.visibilityOf(uploadFromRouteCardMenu), 90000);
        await uploadFromRouteCardMenu.click();

    }

    this.uploadDataAtRouteLevel = async function () {
        await browser.wait(EC.visibilityOf(routeUploadLocator), 20000);
        await routeUploadLocator.click();
    }

    this.confirmUploadDataAtRouteLevel = async function () {
        await browser.wait(EC.visibilityOf(confirmUploadDataLocator), 60000);
        await confirmUploadDataLocator.click();

        await browser.sleep(20000);

        await browser.wait(EC.visibilityOf(uploadSuccessLocator), 60000);
        await uploadSuccessLocator.click();

    }

    this.downloadRoute = async function () {
        var EC = protractor.ExpectedConditions;
        await browser.wait(EC.visibilityOf(downloadRouteLocator), 20000);
        await downloadRouteLocator.click();
        await browser.sleep(10000);
    }
}
module.exports = new routePage()