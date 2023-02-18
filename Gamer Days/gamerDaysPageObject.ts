import {By, WebElement, until, Origin, Button} from 'selenium-webdriver'
import {BasePage} from '../basePage'
const fs= require('fs')  //  (Built in from Node) Added for the screenshot/.txt tests per Unit 2.8 example https://github.com/MarohnHoward/qrpt9InClassExamples/blob/main/unit2.8/googleWBaseTest.test.ts

export class GamerDaysPageObject extends BasePage {
    // Locators Below
    byUsStringItsAWrap: By = By.xpath("//main[@role='document']//h2[1]")
    byCTAtoViewTwitch: By = By.xpath("//span[@class='button']/parent::a")
    byTwitchUpperLeftLogo: By = By.xpath("//*[name()='polygon' and contains(@class,'ScFace-sc-')]")
    byTopLeftIntelLogo: By = By.xpath("//img[@alt='Intel logo - Return to the home page']")

    // URLs variable (experimental)
    // const url = "https://simplecore.intel.com/gamerdays/"

    // GamerDaysPageObject Class Constructor
    constructor(){
        super({url:"https://simplecore.intel.com/gamerdays/"})
    }

    // Custom Methods Below
    async tabSwitchBack() {
        let myTabs = await this.driver.getAllWindowHandles()
        await this.driver.switchTo().window(myTabs[1]);
        await this.driver.sleep(1000);
        await this.driver.close()
        await this.driver.switchTo().window(myTabs[0])
    } 

    // Search and validate results
    searchField: By = By.xpath("bySearchNavBar")
    results: By = By.css("[class='coveo-result-list-container coveo-list-layout-container']")
    async searchAndValidateResults(searchTerm: string) {
        await this.click(this.searchField)
        console.log("1.1 Clicked search field")
        return this.setInput(this.searchField, `${searchTerm}\n`) // might need naother id as seen in https://github.com/stephaniecp/steph-solo-project/blob/main/mainPageObject.ts
        console.log("Typed search query")
    }
    async getResults() {
        return this.getText(this.results)
        console.log("1.2 Pulled results")
    }


} // End of export