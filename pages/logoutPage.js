let logoutPage = function () {
    let logoutLocator = element(by.xpath("//a//span[text() = 'Logout']"));
    let confirmLogoutLocator = element(by.xpath("//button//span[text() = 'LOGOUT']"));

    var EC = protractor.ExpectedConditions;

    this.logout = async function () {
        await browser.wait(EC.visibilityOf(logoutLocator), 60000);
        await logoutLocator.click();
        await browser.wait(EC.visibilityOf(confirmLogoutLocator), 60000);
        await confirmLogoutLocator.click();

    }

    this.confirmLogout = async function () {
        await browser.wait(EC.visibilityOf(confirmLogoutLocator), 50000);
        await confirmLogoutLocator.click();
        await browser.sleep(5000);

    }

}

module.exports = new logoutPage();