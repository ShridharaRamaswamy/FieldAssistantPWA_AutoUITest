let workProcedurePage = function () {
    let openWorkItemLocator = element(by.xpath("//span[.='OPEN']"));
    let workProcedurMenuSelectLocator = element(by.xpath(" //mat-icon[.='more_vert']"));
    let markDoneAtWorkProcedureLocator = element(by.css("div.mat-menu-content > button:nth-of-type(1)"));
    let confirmMarkDoneLocator = element(by.xpath("//button[@class='mat-focus-indicator mat-button mat-button-base ng-star-inserted cdk-focused cdk-program-focused']"));
    let snackBarLocator = element(by.xpath("//lib-snackbar[@class='ng-star-inserted']/div"))
    let workProcedureLogLocator = element(by.xpath("//mat-icon[@class='mat-icon notranslate mat-accent material-icons']"));
    let memoLocator = element(by.css("textarea[formControlName=memo]"));
    //let logTemplateLocator = element(by.css("[alt='Fill Log Template']"));
    let logTemplateLocator = element(by.xpath("//div[@class='log-memo-field']/img"));
    
    let emergencyLocator = element(by.xpath("//span[.='emergency']"));
    let discardLocator = element(by.xpath("//button[.='Discard']"));
    let confirmDicardLocator = element(by.css("button[cdkfocusinitial] > .mat-button-wrapper"));
    let menuCloseLocator = element(by.xpath("//button[.='Close']"));
    let abnormalLocator = element(by.xpath("//img[@src='assets/images/abnormal_outline.svg']"));
    let importantLocator = element(by.xpath("//img[@src='assets/images/important_outline.svg']"));
    let maintenanceLocator = element(by.xpath("//img[@src='assets/images/maintenance_required_outline.svg']"));
    let abnormalFilledLocator = element(by.xpath("//img[@src='assets/images/abnormal_filled.svg']"));
    let importantFilledLocator = element(by.xpath("//img[@src='assets/images/important_filled.svg']"));
    let maintenanceFilledLocator = element(by.xpath("//img[@src='assets/images/maintenance_required_filled.svg']"));
    //let saveLogLocator = element(by.css(".mat-raised-button"));
    let saveLogLocator = element(by.xpath("//button//span[text() = ' SAVE ']"));
    
    let textWorkItemLocator = element(by.css("input[type='text']"));
    let textDropDownLocator = element(by.css("form.task-form-group > div:nth-of-type(5) span:nth-of-type(1) > span:nth-of-type(1)"));
    let openLogHistoryLocator = element(by.xpath("//span[contains(.,'history LOG HISTORY')]"));
    let workResultLocator = element(by.css("[alt='Work Result']"));
    //let trendLocatorInWorkItem = element(by.css("form.task-form-group > div:nth-of-type(3) button:nth-of-type(2) .mat-icon"));
    let trendLocatorInWorkItem = element(by.xpath("(//button[@class='mat-focus-indicator mat-button mat-button-base ng-star-inserted'])[1]"));

    
    let textDropDownSelectLocator = element(by.xpath("//span[.='text 02']"));
    let numericWorkIteLocator = element(by.css("input[type='number']"));
    let cursorLocator = element(by.xpath("//div[@class='cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing']"));
    let binaryDropDownLocator = element(by.css("form.task-form-group > div:nth-of-type(2) span:nth-of-type(1) > span:nth-of-type(1)"));
    let openEquipmentTypeLocator = element(by.xpath("//mat-panel-title[.=' Equipment Details ']"));
    let openEquipmentSpecificDataLocator = element(by.xpath("//mat-panel-title[.=' Equipment Type Specific Information ']"));
    let openEquipmentThresholLocator = element(by.xpath("//mat-panel-title[.=' Equipment Thresholds ']"));
    
    //mat-panel-title[@class='mat-expansion-panel-header-title ng-tns-c101-39']
    let infoLocator = element(by.xpath("//mat-icon[@class='mat-icon notranslate material-icons mat-icon-no-color ng-star-inserted']"));
    let historyLocator = element(by.xpath("(//div[@class='taskLog-history-details ng-star-inserted'])[1]"));
    let noHistoryLocator = element(by.xpath("//p[.='No History']"));
    let equipmentTypeLocator = element(by.xpath("//p[@class='data']"));
    let equipmentGroupLocator = element(by.xpath("//p[.='Test Equipment Group 01']"));
    let workUnitLocater = element(by.xpath("//p[.='Yokogawa work unit']"));
    let criticalLevelLocator = element(by.xpath("//p[.='Medium']"));
    let valueUnitLocator = element(by.xpath("//p[.='%']"));
    let binaryDropDownSelectLocator = element(by.xpath("//span[.='ON']"));
    let binaryCheckLocator = element(by.css(".mat-checkbox-inner-container"));
    let numericDropDownLocator = element(by.css("form.task-form-group > div:nth-of-type(3) span:nth-of-type(1) > span:nth-of-type(1)"));
    let numericDropDownSelectorLocator = element(by.xpath("//span[.='4']"));
    let closeLocator = element(by.xpath("//span[.='CLOSE']"))
    let savePopUpLocator = element(by.xpath("//span[.='SAVE']"));
    let discardLogLocator = element(by.xpath("//span[.='DISCARD']"));
    let equipmentSpecificData1Locator = element(by.xpath("//p[.='No']"));
    let equipmentSpecificData2Locator = element(by.xpath("//p[.='OKOK']"));
    let thresholdValue = element(by.xpath("//p[.='100']"));
    let logCloseLocator = element(by.xpath("//span[contains(.,'CLOSE')]"));
    let noChartLocator = element(by.xpath("//p[.='No values available for chart.']")); 
    let trendChartLocator = element(by.xpath("//div[@class='chart ng-star-inserted']/canvas[@class='chartjs-render-monitor']"));   
    let noLogHistoryLocator = element(by.xpath("//p[.='Historical logs not available for selected equipment.']"));
    let logHistoryLocator = element(by.xpath("//div[@class='log-history-data']"));
    let uploadLocator = element(by.xpath("//mat-icon[.='cloud_upload']")) ;
    let uploadMessageLocator = element(by.xpath("//span[.='Uploading Logs']")) ; 


    var EC = protractor.ExpectedConditions;

    this.openWorkProcedureLog = async function () {

        await browser.wait(EC.visibilityOf(workProcedureLogLocator), 5000);

        await workProcedureLogLocator.click();

    }

    this.verifyWorkProcedureLog = async function () {
        await browser.wait(EC.visibilityOf(memoLocator), 5000);
        let memo = await memoLocator.getText();
        console.log("memo" + memo);
        await browser.wait(EC.visibilityOf(abnormalFilledLocator), 5000);
        await browser.wait(EC.visibilityOf(importantFilledLocator), 5000);
        await browser.wait(EC.visibilityOf(maintenanceFilledLocator), 5000);

    }

    this.openLogHistory = async function () {
        await browser.wait(EC.visibilityOf(openLogHistoryLocator), 10000);
        await openLogHistoryLocator.click();

        await browser.wait(EC.or(EC.visibilityOf(logHistoryLocator), EC.visibilityOf(noLogHistoryLocator)), 10000);
    }

    this.selectLogTemplate = async function () {
        await browser.wait(EC.visibilityOf(logTemplateLocator), 5000);
        await logTemplateLocator.click();
        await browser.wait(EC.visibilityOf(emergencyLocator), 5000);
        await emergencyLocator.click();

    }

    this.closeLog = async function () {
        await browser.wait(EC.visibilityOf(logCloseLocator), 15000);
        logCloseLocator.click();

    }

    this.saveLogPopUp = async function () {
        await browser.wait(EC.visibilityOf(savePopUpLocator), 10000);
        savePopUpLocator.click();
    }

    this.discardPopUp = async function () {
        await browser.wait(EC.visibilityOf(discardLogLocator), 10000);
        discardLogLocator.click();
    }

    this.addWorkProcedureLog = async function (msg) {
        await browser.wait(EC.visibilityOf(memoLocator), 5000);

        await memoLocator.sendKeys(msg);

        await browser.wait(EC.visibilityOf(abnormalLocator), 5000);

        await abnormalLocator.click();

        await browser.wait(EC.visibilityOf(importantLocator), 5000);

        await importantLocator.click();

        await browser.wait(EC.visibilityOf(maintenanceLocator), 5000);

        await maintenanceLocator.click();


    }

    this.saveLog = async function () {
        await browser.wait(EC.visibilityOf(saveLogLocator), 5000);

        await saveLogLocator.click();

    }

    this.getMessge = async function () {
        await browser.wait(EC.visibilityOf(snackBarLocator), 5000);

        return snackBarLocator.getText();
    }

    this.info = async function () {
        await browser.wait(EC.visibilityOf(infoLocator), 50000);
        await infoLocator.click();
    }
    this.equipmentDetail = async function () {
        await browser.wait(EC.visibilityOf(openEquipmentTypeLocator), 50000);
        await openEquipmentTypeLocator.click();
        await browser.wait(EC.visibilityOf(equipmentTypeLocator), 50000);
        console.log(await equipmentTypeLocator.getText());
        await browser.wait(EC.visibilityOf(equipmentGroupLocator), 50000);
        console.log(await equipmentGroupLocator.getText());
        await browser.wait(EC.visibilityOf(workUnitLocater), 50000);
        await browser.wait(EC.visibilityOf(criticalLevelLocator), 50000);
        await browser.wait(EC.visibilityOf(valueUnitLocator), 50000)
    }

    this.equipmentSpecificData = async function () {
        await browser.wait(EC.visibilityOf(openEquipmentSpecificDataLocator), 50000);
        await openEquipmentSpecificDataLocator.click();
        await browser.wait(EC.visibilityOf(equipmentSpecificData1Locator), 50000);
        await browser.wait(EC.visibilityOf(equipmentSpecificData2Locator), 50000)
    }

    this.thresholdData = async function () {
        this.equipmentSpecificData();
        await browser.wait(EC.elementToBeClickable(openEquipmentTypeLocator),50000)
        await browser.wait(EC.visibilityOf(openEquipmentThresholLocator), 50000);
        openEquipmentThresholLocator.click();
        await browser.wait(EC.visibilityOf(thresholdValue), 10000)
    }

    this.selectMenuAtWorkProcedureLevel = async function () {
        await browser.wait(EC.visibilityOf(workProcedurMenuSelectLocator), 10000);
        await workProcedurMenuSelectLocator.click();
    }

    this.openWorkItem = async function () {
        await browser.wait(EC.visibilityOf(openWorkItemLocator), 20000);
        await openWorkItemLocator.click();

    }

    this.openTrendFromWorkItem = async function () {
        await browser.wait(EC.visibilityOf(trendLocatorInWorkItem), 10000);
        await trendLocatorInWorkItem.click();

        await browser.wait(EC.or(EC.visibilityOf(trendChartLocator), EC.visibilityOf(noChartLocator)), 10000);
    }

    this.executeWorkItem = async function (msg, num) {
        await browser.wait(EC.visibilityOf(textWorkItemLocator), 5000);
        await textWorkItemLocator.sendKeys(msg);

        await browser.wait(EC.visibilityOf(numericWorkIteLocator), 10000);

        await numericWorkIteLocator.sendKeys(num);

        await browser.wait(EC.visibilityOf(binaryCheckLocator), 5000);

        await binaryCheckLocator.click();
        await browser.wait(EC.visibilityOf(textDropDownLocator), 10000);

        await textDropDownLocator.click();
        await browser.wait(EC.visibilityOf(textDropDownSelectLocator), 5000);

        await textDropDownSelectLocator.click();

        await browser.wait(EC.visibilityOf(numericDropDownLocator), 5000);

        await numericDropDownLocator.click();

        await numericDropDownSelectorLocator.click();

        await browser.wait(EC.visibilityOf(binaryDropDownLocator), 5000);

        await binaryDropDownLocator.click();

        await browser.wait(EC.visibilityOf(binaryDropDownSelectLocator), 5000);

        await binaryDropDownSelectLocator.click();


    }

    this.executeNumericAndTextWorkItem = async function (msg, num) {
        await browser.wait(EC.visibilityOf(textWorkItemLocator), 5000);
        await textWorkItemLocator.sendKeys(msg);

        await browser.wait(EC.visibilityOf(numericWorkIteLocator), 10000);

        await numericWorkIteLocator.sendKeys(num);
    }

    this.verifyNumericAndTextWorkItem = async function () {
        await browser.wait(EC.visibilityOf(textWorkItemLocator), 20000);
        await browser.wait(EC.visibilityOf(numericWorkIteLocator), 5000);

    }

    this.closeWorkItem = async function () {
        await browser.wait(EC.visibilityOf(closeLocator), 10000);
        await closeLocator.click();
    }

    this.closeWorkItemMenu = async function () {
        await browser.wait(EC.visibilityOf(menuCloseLocator), 10000);
        await menuCloseLocator.click();
    }

    this.markDoneAtWorkProcedure = async function () {
        await browser.wait(EC.visibilityOf(markDoneAtWorkProcedureLocator), 20000);
        await markDoneAtWorkProcedureLocator.click();

        await browser.wait(EC.visibilityOf(confirmMarkDoneLocator), 20000);
        await confirmMarkDoneLocator.click();

    }

    this.discardAtWorkProcedureLevel = async function () {
        await browser.wait(EC.visibilityOf(discardLocator), 20000);
        await discardLocator.click();

        await browser.wait(EC.visibilityOf(confirmDicardLocator), 20000);

        await confirmDicardLocator.click();

    }

    this.workResult = async function () {
        await browser.wait(EC.visibilityOf(workResultLocator), 10000);
        await workResultLocator.click();

        await browser.wait(EC.or(EC.visibilityOf(noHistoryLocator), EC.visibilityOf(historyLocator)), 20000)

    }
    this.uploadLog = async function(){
        await browser.wait(EC.visibilityOf(uploadLocator),10000);
        await uploadLocator.click();
       
    }

    this.invisibilityOfLoadMessage = async function(){

        await browser.wait(EC.invisibilityOf(uploadMessageLocator),40000) ;
    }
   
}

module.exports = new workProcedurePage();