import {By, WebElement, until, Origin, Button} from 'selenium-webdriver'
import {BasePage} from './basePage'
const fs= require('fs')  //  (Built in from Node) Added for the screenshot/.txt tests per Unit 2.8 example https://github.com/MarohnHoward/qrpt9InClassExamples/blob/main/unit2.8/googleWBaseTest.test.ts

export class FtfMainPageObject extends BasePage {
// Locators Below
    byNavAboutFtf: By = By.xpath("//a[@href='javascript:;'][normalize-space()='About FTF']")
    byNavAboutFtfWhatWeDo: By = By.xpath("//li[@id='menu-item-1213']//a[normalize-space()='What We Do']")
    WhatWedDoFormFirstName: By = By.xpath("//input[@placeholder='First Name']")
    WhatWedDoFormLastName: By = By.xpath("//input[@placeholder='Last Name']")
    WhatWedDoFormEmail: By = By.xpath("//input[@placeholder='Your email address']")
    WhatWedDoFormCheckNews: By = By.xpath("//input[@id='interests-1']")
    WhatWedDoFormCheckParenting: By = By.xpath("//input[@id='interests-2']")
    WhatWedDoFormCheckNotifications: By = By.xpath("//input[@id='interests-3']")
    WhatWedDoFormCheckInformtion: By = By.xpath("//input[@id='interests-4']")
// byHomeAddressField: By = By.xpath("//input[@placeholder='ENTER YOUR ADDRESS']")
// byHomeAddressSearchCta: By = By.xpath("//input[@value='START YOUR SEARCH »']")


// Constructor
    constructor(){
        super({url:"https://www.firstthingsfirst.org/"})
//         this.address = address;
//         this.zipcode = zipcode;
    }

// Custom Methods Below
    homeAddressField: By = By.xpath("//input[@placeholder='ENTER YOUR ADDRESS']")
    homeAddressSearchCta: By = By.xpath("//input[@value='START YOUR SEARCH »']")
    async searchWithAddressFromHome(searchAddress: string) {
        console.log ("(2.0.0) Trying to initiate search (with address)")
        // let elementHomeAddressSearchCta = await this.getElement(this.homeAddressSearchCta) 
        this.driver.sleep(500)
        await this.clickSpecial(this.homeAddressField)
        await this.setInput(this.homeAddressField, `${searchAddress}\n`)
        console.log ("(2.0.3) Clicked to submit / initiate search")
    } 


    async navigateToStayUpToDateForm() {
        await this.clickSpecial(this.byNavAboutFtf)
        await this.clickSpecial(this.byNavAboutFtfWhatWeDo)
    }
    async hardCodedStayUpToDateFormFilling() {
        //await this.clickSpecial(this.WhatWedDoFormFirstName)
        //await this.clickSpecial(this.WhatWedDoFormLastName)
        //await this.clickSpecial(this.WhatWedDoFormEmail)
        await this.clickSpecial(this.WhatWedDoFormCheckNews)
        await this.clickSpecial(this.WhatWedDoFormCheckParenting)
        await this.clickSpecial(this.WhatWedDoFormCheckNotifications)
        await this.clickSpecial(this.WhatWedDoFormCheckInformtion)
    }

} // End Of Export (class: FtfMainPageObject)