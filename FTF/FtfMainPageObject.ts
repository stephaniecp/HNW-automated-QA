import {By, WebElement, until, Origin, Button} from 'selenium-webdriver'
import {BasePage} from '../basePage'
import {getFilterCategoryInfosFromWebElements, getFilterCategoryCountTotal, getResultsCount} from './SearchResultsHelpers'
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
    // Attempt at fixing selectors for TC 2.0
    byHomeAddressField: By = By.xpath("//input[@lass='address pac-target-input']")
    byHomeAddressSearchCta: By = By.xpath("//input[@lass='find-services-submit']")
    // // BAK (duplicated) old selectors below
    // byHomeAddressField: By = By.xpath("//input[@placeholder='ENTER YOUR ADDRESS']")
    // byHomeAddressSearchCta: By = By.xpath("//input[@value='START YOUR SEARCH »']")

    // Program search results page
    bySearchResults1All: By = By.xpath("//div[@class='results']") // verified
    bySearchResults1Count: By = By.xpath("//span[@class='results-count']") // verified
    bySearchResult2Type: By = By.xpath("//section[@class='result']") // verified
    bySearchResult3TypeName: By = By.xpath("//div[@class='result-program-type']") // verified
    bySearchResults4TypeList: By = By.xpath("//div[@class='result-program']") // verified
    bySearchLeftAllLiCombined: By = By.xpath("//div[@class='filter-results-by-program']/ul/li")    // new 2/18/23
    bySearchLeftCategory: By = By.xpath("//input[@class='term-name']")
    bySearchLeftCategoryCount: By = By.xpath("//input[@class='term-count']")
    bySearchLeftInvalid: By = By.xpath("//li[@class='invalid']")
    

// Constructor
    constructor(){
        super({url:"https://www.firstthingsfirst.org/"})
    }

// Custom Methods Below

    // //BAK
    // homeAddressField: By = By.xpath("//input[@placeholder='ENTER YOUR ADDRESS']")
    // homeAddressSearchCta: By = By.xpath("//input[@value='START YOUR SEARCH »']")
    async searchWithAddressFromHome(searchAddress: string) {
        console.log ("(2.0.0) Trying to initiate search (with address)")

        // Can be deleted
        // let elementHomeAddressSearchCta = await this.getElement(this.homeAddressSearchCta) 

        await this.driver.sleep(500) 
        //BAK
        // await this.setInput(this.homeAddressField, `${searchAddress}\n`)

        await this.setInput(this.byHomeAddressField, `${searchAddress}\n`)
        console.log ("(2.0.1) Clicked Home address field")
        //BAK
        // await this.clickSpecial(this.homeAddressSearchCta)

        await this.clickSpecial(this.byHomeAddressSearchCta)
        console.log ("(2.0.2) Clicked search CTA")

        await this.driver.sleep(1500)
        console.log ("(2.0.3) Clicked to submit / initiate search")
    } 

    // // Commenting incomplete method out
    // async  () {
    //     await this.clickSpecial(this.byNavAboutFtf)
    //     await this.clickSpecial(this.byNavAboutFtfWhatWeDo)
    // }

    async hardCodedStayUpToDateFormFilling() {
        //await this.clickSpecial(this.WhatWedDoFormFirstName)
        //await this.clickSpecial(this.WhatWedDoFormLastName)
        //await this.clickSpecial(this.WhatWedDoFormEmail)
        await this.clickSpecial(this.WhatWedDoFormCheckNews)
        await this.clickSpecial(this.WhatWedDoFormCheckParenting)
        await this.clickSpecial(this.WhatWedDoFormCheckNotifications)
        await this.clickSpecial(this.WhatWedDoFormCheckInformtion)
    }

    async areResultsValid(){
        // Summarize info about filters
        let filterWebElements = await this.getElements(this.bySearchLeftAllLiCombined)
        let filterCategoryInfos = await getFilterCategoryInfosFromWebElements(filterWebElements)
        console.log(`Length of filterCategoryInfos is: ${filterCategoryInfos.length}`) 
        // Summarize info about results
        let searchResults1CountElement = await this.getElement(this.bySearchResults1Count)
        let searchResults1Count = await getResultsCount(searchResults1CountElement) 
        console.log (`Results count found is: ${searchResults1Count}`)
        let filterCategoryCountTotal = await getFilterCategoryCountTotal(filterCategoryInfos)
        console.log (`Results count combining all categories found is: ${filterCategoryCountTotal}`)
        if (filterCategoryCountTotal != searchResults1Count) {
            console.error ("Results count does not match filter count")
            return false
        }
        // Compare filters with results

        // Compare results with filters
        return true
    }

} // End Of Export (class: FtfMainPageObject)