let workProcedurePage = function () {

    let clientNameLocator = element(by.id('mat-input-0'));
    let pinLocator = element(by.id('mat-input-1'));
    let registerLocator = element(by.css('.mat-button-wrapper'));
    let invalidMessage = element(by.xpath("//p[.='Invalid PIN']")) 
    let validMessage = element(by.xpath("//p[.='This client is successfully registered.']"));
    let okLocator = element(by.xpath("//span[.='OK']"));
    let existMessage =  element(by.xpath("//p[1]"));
    let renameLocator = element(by.xpath("//span[.='RENAME']")) ;
    var EC = protractor.ExpectedConditions;

    this.registerClient = async function (name,pin) {

        await browser.wait(EC.visibilityOf(clientNameLocator), 8000);

        await clientNameLocator.click();

        await clientNameLocator.sendKeys(name);

        await browser.wait(EC.visibilityOf(pinLocator), 8000);

        await pinLocator.click();

        await pinLocator.sendKeys(pin);

        await registerLocator.click();
        
        
    }

    this.verifyValidResult = async function(){

        await browser.wait(EC.visibilityOf(validMessage),15000)
    }

    this.verifyInvalidResult = async function(){

        await browser.wait(EC.visibilityOf(invalidMessage),15000)
    }

    this.okButtonClick = async function(){

        await browser.wait(EC.visibilityOf(okLocator),15000);

        await okLocator.click();
    }

    this.verifyAlreadyExists = async function()
    {
        await browser.wait(EC.visibilityOf(existMessage),15000)
        
        await renameLocator.click();
    }

    
   
}

module.exports = new workProcedurePage();