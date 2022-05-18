let syncRoutePage = function () {
    let shiftLocator = element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-placeholder"));
   // let downloadingDialogLocator = element(by.xpath("//span[.='Downloading Teams and Work Centers.']"));
    let removeShiftLocator = element(by.css("mat-select[formcontrolname='selectedShifts'] .mat-select-value"));
    let downloadingEquipments = element(by.xpath("//span[.='Downloading equipments']"));
    let removeSelectedShiftLocator = element(by.css("mat-option[aria-selected='true'] > .mat-option-text"));
    let selectedShift = element(by.xpath("//span[.='Test Shift']"));
    let removeWorkCenterLocator = element(by.css("mat-select[formcontrolname='selectedWorkplaces'] .mat-select-value"));
    let removeSelectedWorkCenterLocator = element(by.css("mat-option[aria-selected='true'] > .mat-option-text"));
    let cursorLocator = element(by.xpath("//div[@class='cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing']"));
    let outsideLocator = element(by.xpath("//mat-sidenav-container[@class='mat-drawer-container mat-sidenav-container mat-drawer-container-explicit-backdrop mat-drawer-transition']"));
    let workCenterLocater = element(by.css("mat-select[formcontrolname='selectedWorkplaces'] .mat-select-placeholder"));
    let selectedWorkCenter = element(by.xpath("//span[.='Yokogawa work center']"));
    let getRoutes = element(by.css(".mat-stroked-button"));
    let routeLocators = element(by.css("div[fxlayout='row wrap'] > mat-card:nth-of-type(1) > .mat-card-content"));
    let syncLocators = element(by.css(".mat-raised-button"));
    let confirmselectedTeamLocator = element(by.css("mat-dialog-actions.mat-dialog-actions > button:nth-of-type(2) > .mat-button-wrapper")); 
    let teamLocator = element(by.xpath("//span[.='test team A']"));
    let syncSuccessConfirmLocator = element(by.xpath("//span[.='OK']"));
    let clearRouteSelectionLocator = element(by.xpath("//span[contains(.,'CLEAR SELECTION')]"));
    let adocSyncLocators = element(by.xpath("//span[contains(.,'Sync Routes')]"));
    let syncFailPopUpLocator = element(by.xpath("//p[contains(.,'Ensure mobile device is connected to Field Assistant Server network and try agai')]"));
    let unCheckSelectedRouteLocator = element(by.xpath("//mat-checkbox[@class='mat-checkbox checkbox-frame mat-accent']"));
    let loadingDialogLocator = element(by.xpath("//span[.='Your data is being synced. Please stay connected to the network.']"));
    let downloadingDialogLocator = element(by.xpath("//span[.='Downloading Teams and Work Centers.']"));
    let downloadLocator = element(by.xpath("//span[.='Downloading routes.']"));
    let secondRouteLocator = element(by.xpath("//mat-card-title[.='Yokogawa route 2']"));
    let FirstRouteLocator = element(by.xpath("//mat-card-title[.='Yokogawa route']"));
    let loadingRoutesLocator = element(by.xpath("//span[.='Loading routes']"));
    let selectDevieOnRouteCardLocator = element(by.xpath("//span[.='SELECT']"));
    let clearAllLocator = element(by.xpath("//span[.='CLEAR ALL']"));
    let cancelLoctor = element(by.xpath("//span[.='CANCEL']")) ;
    let okLocator = element(by.xpath("//a[.='OK']"));
    let checkBoxLocator1 = element(by.xpath("//mat-checkbox[@class='mat-checkbox mat-accent']//div[@class='mat-checkbox-inner-container']"));
    let checkBoxLocator2 = element.all(by.xpath("//mat-checkbox[@class='mat-checkbox mat-accent']//div[@class='mat-checkbox-inner-container']")).get(2);
    let totalDeviceCountOnRouteCardLocator = element.all(by.xpath("//strong")).get(0)
    //let historyCheckBoxLocator = element(by.xpath("//span[contains(.,'History Data')]"));
    //let historyCheckBoxLocator  = element(by.xpath("(//div[@class='mat-checkbox-inner-container'])[1]") );
    let historyCheckBoxLocator1  = element(by.xpath("//input[@id='mat-checkbox-3-input']") ); //line added by sagar
    let historyCheckBoxLocator  = element(by.xpath("//mat-checkbox[@class='mat-checkbox mat-accent']//div[@class='mat-checkbox-inner-container']")); //changed by sagar
    let routeHistorySuccessMessageLocator = element(by.xpath("//p[contains(.,'Sync Status:Route Data: Successful History Data: Successful Start procedure exec')]")) ;
    //let routeSuccessMessageLocator = element(by.xpath("//p[.='Sync Status:Route Data: Successful Start procedure execution']")) ;
    let routeSuccessMessageLocator = element(by.xpath("//h1")) ;
    var EC = protractor.ExpectedConditions;
    let menuLocator = element(by.xpath("//mat-icon[.='menu']"));

    this.getRoute = async function () {

        console.log("called Get Route");

        // await browser.wait(EC.elementToBeClickable(menuLocator), 60000);
        await browser.wait(EC.elementToBeClickable(menuLocator), 150000); //changed by sagar

        await browser.wait(EC.invisibilityOf(downloadingEquipments),360000);
        await browser.wait(2000);
        await browser.wait(EC.visibilityOf(shiftLocator), 600000);
        
        await shiftLocator.click();

        await browser.wait(EC.visibilityOf(selectedShift), 120000);
        await selectedShift.click();

        await cursorLocator.click();

        await browser.wait(EC.visibilityOf(workCenterLocater), 120000);

        await workCenterLocater.click();

        await browser.wait(EC.visibilityOf(selectedWorkCenter), 120000);

        await selectedWorkCenter.click();

        await cursorLocator.click();

        await browser.wait(EC.visibilityOf(getRoutes), 120000);

        await getRoutes.click();

        await browser.wait(EC.invisibilityOf(downloadLocator), 60000);


        await browser.wait(EC.visibilityOf(routeLocators), 60000);

        await routeLocators.click();


    }

    this.checkRoutesAtRoutePage = async function () {
        await browser.wait(EC.and(EC.visibilityOf(FirstRouteLocator), EC.visibilityOf(secondRouteLocator)), 5000);
    }

    this.checkRouteAtSyncPage = async function () {

        await browser.wait(EC.and(EC.not(EC.visibilityOf(FirstRouteLocator)), EC.visibilityOf(secondRouteLocator)), 20000);

    }

    this.checkRoutesDuringInitialGetRoutes = async function () {
        await browser.wait(EC.and(EC.visibilityOf(FirstRouteLocator), EC.visibilityOf(secondRouteLocator)), 25000);
    }

    this.unCheckRouteVerification = async function () {
        await browser.wait(EC.visibilityOf(unCheckSelectedRouteLocator), 15000);
    }

    this.syncFailMessageVerification = async function () {
        await browser.wait(EC.visibilityOf(syncFailPopUpLocator), 15000);

    }

    this.syncRoute = async function () {
        await browser.wait(EC.visibilityOf(syncLocators), 120000);

        await syncLocators.click();
        console.log("Clicked on syncLocators button ");


    }

    this.teamSelection = async function () {

        await browser.wait(EC.visibilityOf(confirmselectedTeamLocator), 120000);

        await confirmselectedTeamLocator.click();

        await browser.wait(EC.invisibilityOf(loadingDialogLocator), 120000);

        console.log("Inside Team Selection method")
    }

    this.verifyMessageAfterRouteAndHistorySyncSuccess = async function(){
        await browser.wait(EC.visibilityOf(routeHistorySuccessMessageLocator),20000);
    }

    this.verifyMessageAfterRouteSyncSuccess = async function(){
        await browser.wait(EC.visibilityOf(routeSuccessMessageLocator),60000);
    }

    this.syncSuccess = async function () {
        
        await browser.wait(EC.presenceOf(syncSuccessConfirmLocator), 200000);
        await browser.wait(EC.visibilityOf(syncSuccessConfirmLocator), 200000);
        await browser.wait(EC.invisibilityOf(loadingRoutesLocator), 200000);
        await browser.sleep(20000);
        await syncSuccessConfirmLocator.click();
        await browser.sleep(20000);


    }


    this.checkTeam = async function () {

        expect(teamLocator.isPresent()).toBeFalsy();

    }

    this.unCheckHistoryData = async function(){

       await browser.wait(EC.visibilityOf(historyCheckBoxLocator1),60000);
       historyCheckBoxLocator1.click();
       console.log("unchecked the history checkbox");
    }

    this.verifyHistoryDataCheckBox = async function(){

        await browser.sleep(15000);
        expect(historyCheckBoxLocator.isSelected()).toBe(true);
        
     }
 

    this.adocSync = async function () {
        await browser.wait(EC.visibilityOf(adocSyncLocators), 15000);
        await adocSyncLocators.click();
    }

    this.clearRoute = async function () {
        await browser.wait(EC.visibilityOf(clearRouteSelectionLocator), 15000);
        await clearRouteSelectionLocator.click();

    }

    this.clearShift = async function () {
        await browser.wait(EC.visibilityOf(removeShiftLocator), 15000);
        await removeShiftLocator.click();

        await browser.wait(EC.visibilityOf(removeSelectedShiftLocator), 15000);

        await removeSelectedShiftLocator.click();

        await cursorLocator.click();

    }

    this.clearWorkCenter = async function () {
        await browser.wait(EC.visibilityOf(removeWorkCenterLocator), 15000);
        await removeWorkCenterLocator.click();

        await browser.wait(EC.visibilityOf(removeSelectedWorkCenterLocator), 20000);

        await removeSelectedWorkCenterLocator.click();

        await cursorLocator.click();

    }

    this.clickSelectDeviceOnRoute = async function()
    {
        await browser.wait(EC.visibilityOf(selectDevieOnRouteCardLocator),15000);
        await selectDevieOnRouteCardLocator.click();

    }

    this.clearAllOnSelectDevice = async function()
    {
        await browser.wait(EC.visibilityOf(clearAllLocator),15000);
        await clearAllLocator.click();
    }

    this.selectDeviceOnDeviceSelectPopUp =   function()
    {
         browser.wait(EC.visibilityOf(checkBoxLocator1),15000);
         checkBoxLocator1.click();
    }

    this.selectDeviceOnDeviceSelectPopUp2 =   function()
    {
         browser.wait(EC.visibilityOf(checkBoxLocator2),15000);
         checkBoxLocator2.click();
    }

    this.clickOkOnDeviceSelectPopUp = async function()
    {
        await browser.wait(EC.visibilityOf(okLocator),15000);
        await okLocator.click()
    }

    this.clickCancelOnDeviceSelectPopUp = async function()
    {
        await browser.wait(EC.visibilityOf(cancelLoctor),15000);
        await cancelLoctor.click()
    }

    this.totalDeviceCount = async function()
    {
        await browser.wait(EC.visibilityOf(totalDeviceCountOnRouteCardLocator),20000);
        return await totalDeviceCountOnRouteCardLocator.getText()
    }
}

module.exports = new syncRoutePage

