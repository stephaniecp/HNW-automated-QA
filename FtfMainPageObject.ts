import {By, WebElement, until, Origin, Button} from 'selenium-webdriver'
import {BasePage} from './basePage'
const fs= require('fs') // File System 

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
    //Home
    byHomeAddressField: By = By.xpath("//input[@placeholder='ENTER YOUR ADDRESS']")
    byHomeAddressSearchCta: By = By.xpath("//input[@value='START YOUR SEARCH »']")

    // Program search results page
    bySearchResults1All: By = By.xpath("//input[@class='results']")
    bySearchResult2Type: By = By.xpath("//input[@class='result']")
    bySearchResult3TypeName: By = By.xpath("//input[@class='result-program-type']")
    bySearchResults4TypeList: By = By.xpath("//input[@class='result-program']")
    bySearchLeftCategory: By = By.xpath("//input[@class='term-name']")
    bySearchLeftCategoryCount: By = By.xpath("//input[@class='term-count']")
    bySearchLeftInvalid: By = By.xpath("//input[@class='invalid']")

// Constructor
    constructor(){
        super({url:"https://www.firstthingsfirst.org/"})
    }

// Custom Methods Below
    homeAddressField: By = By.xpath("//input[@placeholder='ENTER YOUR ADDRESS']")
    homeAddressSearchCta: By = By.xpath("//input[@value='START YOUR SEARCH »']")
    async searchWithAddressFromHome(searchAddress: string) {
        console.log ("(2.0.0) Trying to initiate search (with address)")
        // let elementHomeAddressSearchCta = await this.getElement(this.homeAddressSearchCta) 
        await this.driver.sleep(500)
        await this.clickSpecial(this.homeAddressField)
        await this.setInput(this.homeAddressField, `${searchAddress}\n`)
        await this.driver.sleep(1500)
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
    





    async getFilterCategoryInfo() {

        let arrayCategoryFilterInfos = []

        async filterCategoryInfos () {
            // Left filter menu elements
            let searchFilterCategoryName = await this.getElement(this.bySearchLeftCategory)
            let searchFilterCategoryCount = await this.getElement(this.bySearchLeftCategoryCount)
            let searchFilterInvalidState = await this.getElement(this.bySearchLeftInvalid)
            const nameMatchRegex = new RegExp("([^\(\)]+)");
            const numberMatchRegex = new RegExp("(\\d+)");
            // Right search results field elements
            let searchResultsAll = await this.getElement(this.bySearchResults1All)
            let searchResultTypeContainer = await this.getElement(this.bySearchResult2Type)
            let searchResultTypeName = await this.getElement(this.bySearchResult3TypeName)
            let searchResultTypeListItem = await this.getElement(this.bySearchResults4TypeList)

            export class CategoryFilterInfo extends BasePage {
                constructor(){
                    super({name: string, resultCount: number, ifEnabled: boolean})
                    this.name = name
                    this.resultCount = resultCount
                    this.ifEnabled = ifEnabled
                }
            }

            for ()
            this.name = nameMatchRegex.exec(searchFilterCategoryName)
            this.resultCount = numberMatchRegex.exec(searchFilterCategoryCount)
            this.ifEnabled = searchFilterInvalidState
        }
    } 

    async getResultCategory() {
    }




} // End Of Export (class: FtfMainPageObject)