let env = require('../environment/env');

let loginPage = function () {
    let username = element(by.id('mat-input-0'));
    let password = element(by.id('mat-input-1'))
    let loginButton = element(by.css('.mat-raised-button'));
    var EC = protractor.ExpectedConditions;


    this.login = async function (userNameVar, passwordVar, url) {
        
         await browser.get(url);

        await browser.wait(EC.visibilityOf(username));
         username.sendKeys(userNameVar);
       
         password.sendKeys(passwordVar);
         await browser.sleep(2000);
        await loginButton.click();
      
    };

}

module.exports = new loginPage();