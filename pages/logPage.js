let logPage = function () {
    let addLogLocator = element(by.css("[alt='Add Log']"));
    let selectEntityLocator = element(by.css(".mat-select-placeholder"));
    let equipmentEntityLocator = element(by.xpath("//span[contains(.,'Equipment')]"));
    let areaEntityLocator = element(by.xpath("//span[contains(.,'Area')]"));
    let workCeneterEntityLocator = element(by.xpath("//span[contains(.,'Work Center')]"));
    let workUnitEntityLocator = element(by.xpath("//span[contains(.,'Work Unit')]"));
    let routeEntityLocator = element(by.xpath("//span[contains(.,'Route')]"));
    let logTemplateLocator = element(by.xpath("//img[@alt='Fill Log Template']"));
    let selectEmergencyLogTemplateLocator = element(by.xpath("//span[.='emergency']"));
    let selectLessOilLogTemplateLocator = element(by.xpath("//span[.='less oil']"));
    let selectValveLeakLogTemplateLocator = element(by.xpath("//span[.='valve leak']"))
    let saveLogLocator = element(by.xpath("//span[contains(.,'SAVE')]"));
    let downloadingDialogLocator = element(by.xpath("//span[.='Downloading Teams and Work Centers.']"));
    let loadingLocator = element(by.xpath("//span[.='Loading...']"));
    let logCountLocator = element(by.xpath("//span[@class='count-badge ng-star-inserted']"));
    let editEntityDropDownLocator = element(by.css("mat-select[name='entityTypeId'] .mat-select-value"));
    let abnormalLocator = element(by.xpath("//img[@src='assets/images/abnormal_outline.svg']"));
    let importantLocator = element(by.xpath("//img[@src='assets/images/important_outline.svg']"));
    let maintenanceLocator = element(by.xpath("//img[@src='assets/images/maintenance_required_outline.svg']"));
    let abnormalFilledLocator = element(by.xpath("//img[@src='assets/images/abnormal_filled.svg']"));
    let importantFilledLocator = element(by.xpath("//img[@src='assets/images/important_filled.svg']"));
    let maintenanceFilledLocator = element(by.xpath("//img[@src='assets/images/maintenance_required_filled.svg']"));
    let logLocatorInMenu = element(by.css("mat-list.mat-list > mat-list-item:nth-of-type(3) .mat-button"));
    let logDescriptionLocator = element(by.css(".mat-input-element"));
    let editSelectEntityLocator = element(by.css("mat-select[name='entityTypeId'] .mat-select-value"));
    let inputLocater = element(by.css("input"));
    let discardLogPopLocator = element(by.xpath("//span[.='DISCARD']"));
    let resetLocator = element(by.xpath("//span[contains(.,'RESET')]"));
    let saveLogPopLocators = element(by.xpath("//span[.='SAVE']"));
    let closeLocator = element(by.css(".mat-stroked-button"));
    let closePopupLocator = element(by.xpath("//span[.='CLOSE']"));
    let snackBarLocator1 = element(by.xpath("//*[text() = 'Please fill all the details.']"));
    let snackBarLocator = element(by.xpath("//*[text() = 'Please fill the log and save.']"));
    let descriptionLocator = element(by.xpath("//textarea[@name='memo']"));
    let secondEntityLocator = element(by.xpath("//span[.='Bubble Cap Tray Column']"));
    let uploadLocator = element(by.xpath("//mat-icon[.='cloud_upload']")) ;
    let uploadAllLocator = element(by.xpath("//span[text()='Upload All Logs']"));
    let uploadButtonLocator = element(by.xpath("//span[.='UPLOAD']")) ;
    let uploadMessageLocator = element(by.xpath("//span[.='Uploading Logs']")) ; 
    let deleteLogLocator = element(by.css(".delete-button")) ;
    let deleteDiscardLocator = element(by.xpath("//span[.='DISCARD']"));
    
    var EC = protractor.ExpectedConditions;

    this.addLog = async function () {
        await browser.wait(EC.visibilityOf(addLogLocator), 15000);
        await addLogLocator.click();

    }

    this.secondEntitySelection = async function (data) {
        await browser.wait(EC.visibilityOf(inputLocater), 90000);
        await inputLocater.sendKeys(data);

        await browser.wait(EC.visibilityOf(element(by.css("div[role='option']"))), 280000);

        await (element(by.css("div[role='option']"))).click()

    }

    this.getLogCount = async function () {
        await browser.wait(EC.visibilityOf(logCountLocator), 50000);
        return await logCountLocator.getText();
    }

    this.descriptionCheck = async function (expectedMsg) {
        await browser.wait(EC.visibilityOf(descriptionLocator), 15000);
        var msg = await descriptionLocator.getText();
        expect(msg).toBe(expectedMsg);
    }

    this.reset = async function () {
        await browser.wait(EC.visibilityOf(resetLocator), 15000);
        await resetLocator.click();
    }

    this.invisibilityOfTeams = async function () {
        await browser.wait(EC.invisibilityOf(downloadingDialogLocator));
    }

    this.invisibilityOfLoading = async function () {
        await browser.wait(EC.invisibilityOf(loadingLocator), 60000)
    }

    this.verifyLog = async function () {

        await browser.wait(EC.visibilityOf(abnormalFilledLocator), 5000);
        await browser.wait(EC.visibilityOf(importantFilledLocator), 5000);
        await browser.wait(EC.visibilityOf(maintenanceFilledLocator), 5000);
        await browser.wait(EC.visibilityOf(logDescriptionLocator), 5000);

    }


    this.editLogEntityDropDown = async function () {

        await browser.wait(EC.visibilityOf(editEntityDropDownLocator), 20000);
        await editEntityDropDownLocator.click();
    }

    this.removeSecondEntity = async function () {
        await browser.wait(EC.visibilityOf(inputLocater), 15000);
        await inputLocater.clear();
    }

    this.verifySecondEntity = async function () {
        await browser.wait(EC.invisibilityOf(loadingLocator), 15000)
        await browser.wait(EC.visibilityOf(secondEntityLocator), 15000);
        return await secondEntityLocator.getText();
    }

    this.close = async function () {
        await browser.wait(EC.visibilityOf(closeLocator), 15000);
        await closeLocator.click();
    }

    this.closePop = async function () {
        await browser.wait(EC.visibilityOf(closePopupLocator), 15000);
        await closePopupLocator.click();
    }

    this.selectEntityDropDown = async function () {
        await browser.wait(EC.visibilityOf(selectEntityLocator), 15000);
        await selectEntityLocator.click();

    }

    this.editEntityDorpDown = async function () {

        await browser.wait(EC.visibilityOf(editSelectEntityLocator), 15000);

        await editSelectEntityLocator.click();
    }

    this.equipmentEntitySelection = async function () {
        browser.wait(EC.visibilityOf(equipmentEntityLocator), 15000);
        await equipmentEntityLocator.click();

    }

    this.areaEntitySelection = async function () {
        await browser.wait(EC.visibilityOf(areaEntityLocator), 15000);
        await areaEntityLocator.click();

    }

    this.workCenterEntitySelection = async function () {
        await browser.wait(EC.visibilityOf(workCeneterEntityLocator), 15000);
        await workCeneterEntityLocator.click();

    }

    this.workUnitEntitySelection = async function () {
        await browser.wait(EC.visibilityOf(workUnitEntityLocator), 15000);
        await workUnitEntityLocator.click();

    }

    this.routeEntitySelection = async function () {
        await browser.wait(EC.visibilityOf(routeEntityLocator), 15000);
        await routeEntityLocator.click();

    }

    this.logTemplateSelection = async function () {
        await browser.wait(EC.visibilityOf(logTemplateLocator), 20000);
        await logTemplateLocator.click();

    }

    this.emergencyLogSelection = async function () {

        await browser.wait(EC.visibilityOf(selectEmergencyLogTemplateLocator), 30000);
        await selectEmergencyLogTemplateLocator.click();

    }

    this.lessOilLogSelection = async function () {
        await browser.wait(EC.visibilityOf(selectLessOilLogTemplateLocator), 30000);
        await selectLessOilLogTemplateLocator.click();

    }

    this.valveLeakLogSelection = async function () {
        await browser.wait(EC.visibilityOf(selectValveLeakLogTemplateLocator), 30000);
        await selectValveLeakLogTemplateLocator.click();

    }

    this.abnormalSelection = async function () {
        await browser.wait(EC.visibilityOf(abnormalLocator), 15000);
        await abnormalLocator.click();

    }

    this.unCheckAbnormalSelection = async function () {
        await browser.wait(EC.visibilityOf(abnormalFilledLocator), 15000);
        await abnormalFilledLocator.click();
    }

    this.importantSelection = async function () {

        await browser.wait(EC.visibilityOf(importantLocator), 5000);
        await importantLocator.click();

    }

    this.maintainanceSelection = async function () {
        await browser.wait(EC.visibilityOf(maintenanceLocator), 5000);
        await maintenanceLocator.click();

    }

    this.saveLog = async function () {
        await browser.wait(EC.visibilityOf(saveLogLocator), 20000);
        await saveLogLocator.click();
    }

    this.checkMessage = async function (expectedMsg) {
        await browser.wait(EC.visibilityOf(snackBarLocator));
        var msg = snackBarLocator.getText();
        expect(msg).toBe(expectedMsg);
    }

    this.validatekMessage = async function (expectedMsg) {
        await browser.wait(EC.visibilityOf(snackBarLocator1));
        var msg = snackBarLocator1.getText();
        expect(msg).toBe(expectedMsg);
    }
    
    this.editLog = async function () {
        await browser.wait(EC.visibilityOf(logLocatorInMenu), 5000);
        await logLocatorInMenu.click();

    }

    this.addLogDescription = async function (log) {
        await browser.wait(EC.visibilityOf(logDescriptionLocator), 5000);
        await logDescriptionLocator.sendKeys(log);

    }

    this.savePopLog = async function () {
        await browser.wait(EC.visibilityOf(saveLogPopLocators), 6000);
        await saveLogPopLocators.click();

    }
    this.discardPopLog = async function () {
        await browser.wait(EC.visibilityOf(discardLogPopLocator), 5000);
        await discardLogPopLocator.click();

    }

    this.uploadLog = async function(){
        await browser.wait(EC.visibilityOf(uploadLocator),15000);
        await uploadLocator.click();
    }

    this.invisibilityOfLoadMessage = async function(){

        await browser.wait(EC.invisibilityOf(uploadMessageLocator),40000) ;
    }

    this.uploadAll = async function(){
        await browser.wait(EC.visibilityOf(uploadAllLocator),15000);
        await uploadAllLocator.click();
        
    }

    this.clickUpload = async function(){
        await browser.wait(EC.visibilityOf(uploadButtonLocator),15000);
        await uploadButtonLocator.click();
    }

    this.clickOutside = async function(){

        await element(by.xpath("//div[@class='cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing']")).click() 
    }

    this.clickDeleteLog = async function(){

        await browser.wait(EC.visibilityOf(deleteLogLocator),15000);
        await deleteLogLocator.click();
    }
    this.deleteLog = async function(){
        await browser.wait(EC.visibilityOf(deleteDiscardLocator),5000)
        await deleteDiscardLocator.click();
    }

}

module.exports = new logPage();