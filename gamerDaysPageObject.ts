import {By, WebElement, until, Origin, Button} from 'selenium-webdriver'
import {BasePage} from './basePage'
const fs= require('fs')  //  (Built in from Node) Added for the screenshot/.txt tests per Unit 2.8 example https://github.com/MarohnHoward/qrpt9InClassExamples/blob/main/unit2.8/googleWBaseTest.test.ts

export class GamerDaysPageObject extends BasePage {
    // Locators Below
    byUsStringItsAWrap: By = By.xpath("//main[@role='document']//h2[1]")
    byCTAtoViewTwitch: By = By.xpath("//span[@class='button']")

    // URLs variable (experimental)
    // const url = "https://simplecore.intel.com/gamerdays/"

    // GamerDaysPageObject Class Constructor
    constructor(){
        super({url:"https://simplecore.intel.com/gamerdays/"})
    }

    // Custom Methods Below
    // async myMethod() {
    //     return await (this.)
    // }


} // End of export