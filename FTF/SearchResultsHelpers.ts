import {By, WebElement, until, Origin, Button, WebElementPromise} from 'selenium-webdriver'
import {BasePage} from '../basePage'
const fs= require('fs') // File System 

// 2-18-2023 Progress (start) ------------------------------------------------------------------------
// Filters  --------------------
export class CategoryFilterInfo {
    name: string;
    resultCount: number
    isEnabled: boolean

    constructor(name: string, resultCount: number, isEnabled: boolean){
        this.name = name
        this.resultCount = resultCount
        this.isEnabled = isEnabled
    }
}

export async function getFilterCategoryInfosFromWebElements(filterWebElements: WebElement[]): Promise<CategoryFilterInfo[]> {
    let filterCategoryInfos: CategoryFilterInfo[] = []
    for (let i = 0; i < filterWebElements.length; i++) {
        console.log(`Started processing filter category info$ ${i}`) 
        let filterWebElement = filterWebElements[i]
        let name = await filterWebElement.findElement(By.className('term-name')).getText()
        let isEnabled = !(await filterWebElement.getAttribute("class")).includes("invalid")
        let resultCount = 0
        if(isEnabled === true) {
            let resultCountString  = await filterWebElement.findElement(By.className('term-count')).getText()
            const numberMatchRegex = new RegExp("(\\d+)");
            let regExResultArray = numberMatchRegex.exec(resultCountString)
            if(regExResultArray !== null) {
                resultCount = parseInt(regExResultArray[1])
            }
        }

        console.log(`Created 3 variables:${name}, ${resultCount}, ${isEnabled},`)
        let categoryFilterInfo = new CategoryFilterInfo(name, resultCount, !isEnabled) // ParseInt could be replaced with "number" type
        filterCategoryInfos.push(categoryFilterInfo)
        console.log("Finished processing filter category info")

    }
    return filterCategoryInfos
} 

export async function getFilterCategoryCountTotal(filterCategoryInfos: CategoryFilterInfo[]): Promise<number> {
    let total = 0
    for (let i = 0; i < filterCategoryInfos.length; i++) {
        total += filterCategoryInfos[i].resultCount
    }
    return total
}

// Results --------------------
export async function getResultsCount(searchResults1All: WebElement): Promise<number> {
    let searchResults1AllText = await searchResults1All.getText()
    const numberMatchRegex = new RegExp("(\\d+)");
    let regExResultArray = numberMatchRegex.exec(searchResults1AllText)
    if(regExResultArray !== null) {
        return parseInt(regExResultArray[1])
    }
    return 0
}

export class CategoryResultsInfo {
    name: string;
    resultCount: number

    constructor(name: string, resultCount: number){
        this.name = name
        this.resultCount = resultCount
    }
}

export async function getResultCategoryInfosFromWebElements(resultsWebElements: WebElement[]): Promise<CategoryResultsInfo[]> {
    let resultCategoryInfos: CategoryResultsInfo[] = []
    for (let i = 0; i < resultsWebElements.length; i++) {
        console.log(`Started processing results category info$ ${i}`) 
        let resultsWebElement = resultsWebElements[i]
        let name = await resultsWebElement.findElement(By.className('________')).getText()
        let isEnabled = !(await resultsWebElement.getAttribute("class")).includes("invalid") // REPEAT
        let resultCount = 0
        if(isEnabled === true) {
            let resultCountString  = await resultsWebElement.findElement(By.className('term-count')).getText()
            const numberMatchRegex = new RegExp("(\\d+)");
            let regExResultArray = numberMatchRegex.exec(resultCountString)
            if(regExResultArray !== null) {
                resultCount = parseInt(regExResultArray[1])
            }
        }

        console.log(`Created 3 variables:${name}, ${resultCount}, ${isEnabled},`)
        let categoryFilterInfo = new CategoryFilterInfo(name, resultCount, !isEnabled) // ParseInt could be replaced with "number" type
        resultCategoryInfos.push(categoryFilterInfo)
        console.log("Finished processing filter category info")

    }
    return resultCategoryInfos
}

// 2-18-2023 Progress (end) ------------------------------------------------------------------------