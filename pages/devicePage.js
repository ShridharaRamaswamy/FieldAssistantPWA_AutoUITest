let devicePage = function () {
    let deviceCardSelect = element(by.xpath("//mat-card[1]//div[@class='card-chart']"));
    let snackBarLocator = element(by.xpath("//lib-snackbar[@class='ng-star-inserted']/div"))
    let deviceMenuSelectLocator = element(by.xpath("//mat-icon[.='more_vert']"));
    let markDoneAtDeviceLevel = element(by.css(".mat-menu-item"));
    let deviceLevelUploadLocator = element(by.css(".mat-raised-button"));
    let dicardAtDeviceLevelLocator = element(by.css(".mat-menu-item"));
    let confirmUploadDataLocator = element(by.xpath("//span[.='OK']"));
    let uploadSuccessLocator = element(by.xpath("//span[.='OK']"));
    let downloadingRoutesLocator = element(by.xpath("//span[.='Downloading routes']"));
    let devicePageWorkProcedurePendingCountLocator = element(by.xpath("//strong"));
    let loadingEquipmentLocator = element(by.xpath("//span[.='Loading equipments']"));
    let loadingLocator = element(by.xpath("//span[.='Loading...']"));
    let loadingEquipmentDetailsLocator = element(by.xpath("//span[.='Loading equipment details and work procedures']"));
    let qrCodeLocator = element(by.css("[alt='QR']")); 
    var EC = protractor.ExpectedConditions;

    this.deviceSelect = async function () {
        await browser.wait(EC.visibilityOf(deviceCardSelect));
        await deviceCardSelect.click();

        await browser.wait(EC.invisibilityOf(loadingEquipmentDetailsLocator), 15000);
        await browser.sleep(5000);
    }

    this.devicePageWorkProcedurePedningCount = async function () {
        await browser.wait(EC.visibilityOf(devicePageWorkProcedurePendingCountLocator), 15000);
        return devicePagePendingCountValue = await devicePageWorkProcedurePendingCountLocator.getText();

    }

    this.markDoneAtDeviceLevel = async function () {
        await browser.wait(EC.visibilityOf(deviceMenuSelectLocator), 5000);
        await deviceMenuSelectLocator.click();

        await browser.wait(EC.visibilityOf(markDoneAtDeviceLevel), 5000);
        await markDoneAtDeviceLevel.click();

        await browser.wait(EC.invisibilityOf(loadingLocator),50000)

        
    }

    this.uploadDataAtDeviceLevel = async function () {
        await browser.wait(EC.visibilityOf(deviceLevelUploadLocator));
        await deviceLevelUploadLocator.click();

        await browser.wait(EC.visibilityOf(confirmUploadDataLocator), 25000);

        await confirmUploadDataLocator.click();

        await browser.wait(EC.visibilityOf(uploadSuccessLocator), 600000);
        await uploadSuccessLocator.click();

    }

    this.discardAtDeviceLevel = async function () {
        await browser.wait(EC.visibilityOf(deviceMenuSelectLocator), 5000);
        await deviceMenuSelectLocator.click();

        await browser.wait(EC.visibilityOf(dicardAtDeviceLevelLocator), 10000);
        await dicardAtDeviceLevelLocator.click();
        await browser.wait(EC.invisibilityOf(loadingLocator),50000)

    }

    this.scanQRCode = async function(){
        await browser.wait(EC.visibilityOf(qrCodeLocator),10000);
        await qrCodeLocator.click();
    }
}

module.exports = new devicePage();
