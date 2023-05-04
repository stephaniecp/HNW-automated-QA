import {By, WebElement, until, Origin, Button} from 'selenium-webdriver'
import {BasePage} from '../basePage'
import {getFilterCategoryInfosFromWebElements, getFilterCategoryCountTotal, getResultsCount} from './SearchResultsHelpers'
const fs= require('fs') // File System 

export class FtfMainPageObject extends BasePage {
// Locators Below
    // "What we do" form
    byNavAboutFtf: By = By.xpath("//a[@href='javascript:;'][normalize-space()='About FTF']")
    byNavAboutFtfWhatWeDo: By = By.xpath("//li[@id='menu-item-1213']//a[normalize-space()='What We Do']")
    byWhatWeDoFormFirstName: By = By.xpath("//input[@placeholder='First Name']")
    byWhatWeDoFormLastName: By = By.xpath("//input[@placeholder='Last Name']")
    byWhatWeDoFormEmail: By = By.xpath("//input[@placeholder='Your email address']")
    byWhatWeDoFormCheckNews: By = By.xpath("//input[@id='interests-1']")
    byWhatWeDoFormCheckParenting: By = By.xpath("//input[@id='interests-2']")
    byWha2tWeDoFormCheckNotifications: By = By.xpath("//input[@id='interests-3']")
    byWhatWeDoFormCheckInformtion: By = By.xpath("//input[@id='interests-4']")
    // Home
    byHomeAddressField: By = By.xpath("//input[@class='address pac-target-input']") // Verified 4/29
    byHomeAddressSearchCta: By = By.xpath("//input[@value='START YOUR SEARCH »']") // Obsolete? 
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
    // Test 2.0
    async searchWithAddressFromHome(searchAddress: string) {
        console.log ("(2.0.0) Trying to initiate search (with address)")
        // let elementHomeAddressSearchCta = await this.getElement(this.homeAddressSearchCta) 
        const addressFieldElement = await this.getElement(this.byHomeAddressField)
        console.log (`(2.1.1) ${await this.isElementInViewportJs(addressFieldElement)}`)
        await this.scrollIntoViewJs(addressFieldElement)
        console.log (`(2.2.1) ${await this.isElementInViewportJs(addressFieldElement)}`)

        await this.driver.sleep(500)
        console.log ("(2.2.2) ")
        await this.moveToElementAndWiggle(await this.getElement(this.byHomeAddressField))
        console.log ("(2.2.3) ")
        await this.clickSpecial(this.byHomeAddressField)
        console.log ("(2.2.4) ")
        await this.setInput(this.byHomeAddressField, `${searchAddress}\n`)
        console.log ("(2.2.5) Clicked to submit / initiate search")
    }

    // Test 3.0
    async navigateToStayUpToDateForm() {
        await this.clickSpecial(this.byNavAboutFtf)
        console.log ("(3.0.0) Clicked Nav > About FTF")
        await this.clickSpecial(this.byNavAboutFtfWhatWeDo)
        console.log ("(3.0.1) Clicked `What We Do`")
    }
    async hardCodedStayUpToDateFormFilling(testingFormFirstName: string, testingFormLastName: string, testingFormEmail: string) {
        await this.moveToElementAndWiggle(await this.getElement(this.byWhatWeDoFormFirstName))
        console.log ("(3.1.0) Wiggle to find element")
        await this.setInput(this.byWhatWeDoFormFirstName, `${testingFormFirstName}`)
        console.log ("(3.1.0) First name")
        await this.setInput(this.byWhatWeDoFormLastName, `${testingFormLastName}`)
        console.log ("(3.1.1) Last name")
        await this.setInput(this.byWhatWeDoFormEmail, `${testingFormEmail}`)
        console.log ("(3.1.2) Email")
        await this.clickSpecial(this.byWhatWeDoFormCheckNews)
        console.log ("(3.1.3) Checkbox 1")
        await this.clickSpecial(this.byWhatWeDoFormCheckParenting)
        console.log ("(3.1.4) Checkbox 2")
        await this.clickSpecial(this.byWha2tWeDoFormCheckNotifications)
        console.log ("(3.1.5) Checkbox 3")
        await this.clickSpecial(this.byWhatWeDoFormCheckInformtion)
        console.log ("(3.1.6) Checkbox 4")
    }

    // Test 4.0
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