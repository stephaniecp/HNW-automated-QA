import {By, WebElement, until, Origin, Button, WebElementPromise} from 'selenium-webdriver'
import {BasePage} from '../basePage'
const fs= require('fs') // File System 

// 2-18-2023 Progress (start) ------------------------------------------------------------------------
 export class CategoryFilterInfo {
    name: String;
    resultCount: Number
    isEnabled: Boolean

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

export async function getResultCategory() {
}

// 2-18-2023 Progress (end) ------------------------------------------------------------------------