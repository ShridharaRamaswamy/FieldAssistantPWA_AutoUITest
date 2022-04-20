
describe("PWA delete Register Client test cases", () => {

    it("Delete registered client", async () => {
     var EC = protractor.ExpectedConditions;
     searchbox = element(by.xpath('//th[text()="Name"]//input'));
     deleteicon = element(by.xpath('(//div[@class="action-formatter"]//i[@class="material-icons"])[3]'))
     deleteicon2 = element(by.xpath('//div[@class="modal-footer"]//button[@id="delete"]'))
     deleteicon3 = element(by.xpath('(//div[@class="action-formatter"]//i[@class="material-icons"])[6]'))
     browser.waitForAngularEnabled(false)
     browser.get("http://10.157.19.179/CybermanServer/Account/Login?returnUrl=%2FCybermanServer%2FComposer%2FClient%2FIndex")
     browser.manage().window().setSize(1400,800)
     await element(by.id('Username')).sendKeys('Administrator')
     await element(by.id('Password')).sendKeys('Administrator')
     await element(by.xpath('//input[@type="submit"]')).click()
     await browser.wait(EC.visibilityOf(searchbox))
     await searchbox.sendKeys('Auto')
     await browser.sleep(5000)
     await browser.wait(EC.visibilityOf(deleteicon3))
     await deleteicon3.click()
     await browser.wait(EC.visibilityOf(deleteicon2))
     await deleteicon2.click()
     await browser.sleep(5000)
     await browser.wait(EC.visibilityOf(deleteicon))
     await deleteicon.click()
     await browser.wait(EC.visibilityOf(deleteicon2))
     await deleteicon2.click()
    })
 })