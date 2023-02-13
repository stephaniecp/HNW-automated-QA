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

// // Custom Methods Below
//     homeAddressField: By = By.xpath("//input[@placeholder='ENTER YOUR ADDRESS']")
//     homeAddressSearchCta: By = By.xpath("//input[@value='START YOUR SEARCH »']")
//     async searchWithAddressFromHome(searchTerm: string) {
//         console.log ("(2.0.0) Trying to initiate search (with address)")

//         // Scoll page to reveal sections that's otherwise hidden
//         const element = await this.driver.findElement(this.homeAddressField) // SCP
//         console.log ("(2.0.0a) Defined element variable to scroll to")
//         await this.driver.executeScript("arguments[0].scrollIntoView();", element); // SCP
//         console.log ("(2.0.0b) Instruct to scoll to it")

//         let elementHomeAddressField = await this.getElement(this.homeAddressField)
//         await this.driver.actions().move({origin: elementHomeAddressField, x: 5, y: 5, duration: 50}).click().perform();
//         // await this.click(this.homeAddressField)
//         console.log ("(2.0.1) Click text field to enter address")
//         await this.setInput(this.homeAddressField, searchTerm)
//         console.log ("(2.0.2) Entered an address")

//         let elementHomeAddressSearchCta = await this.getElement(this.homeAddressSearchCta) // SCP new
//         this.driver.sleep(1500) // SCP

//         // await this.driver.actions().move({origin: elementHomeAddressSearchCta, x: 5, y: 5, duration: 50}).click().perform(); // SCP
//         console.log ("(2.0.3) Clicked to submit / initiate search")
//     } 

    async navigateToStayUpToDateForm() {
        await this.click(this.byNavAboutFtf)
        await this.click(this.byNavAboutFtfWhatWeDo)
    }
    async hardCodedStayUpToDateFormFilling() {
        await this.click(this.WhatWedDoFormFirstName)
        await this.setInput(this.WhatWedDoFormFirstName, "John")
        await this.click(this.WhatWedDoFormLastName)
        await this.setInput(this.WhatWedDoFormLastName, "Doe")
        await this.click(this.WhatWedDoFormEmail)
        await this.setInput(this.WhatWedDoFormEmail, "johndoe@johndoe.com")
        await this.click(this.WhatWedDoFormCheckNews)
        await this.click(this.WhatWedDoFormCheckParenting)
        await this.click(this.WhatWedDoFormCheckNotifications)
        await this.click(this.WhatWedDoFormCheckInformtion)
    }

} // End Of Export (class: FtfMainPageObject)