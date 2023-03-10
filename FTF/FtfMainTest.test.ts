import {expect, jest, test} from '@jest/globals'
import { SearchSource } from 'jest'
import { Actions } from 'selenium-webdriver'
import {FtfMainPageObject} from './ftfMainPageObject'
const ftfMainPageObject = new FtfMainPageObject()
// Test single test by using describe/only / or skip with describe.skip

beforeAll(async () => {
  await ftfMainPageObject.navigate()
  await ftfMainPageObject.showMouseMovement()
  await ftfMainPageObject.driver.manage().window().maximize()
})

describe("1- Basic reality check", () => {
    test("1.0 - Can load the home page", async() => {
        await ftfMainPageObject.navigate()
        console.log ("(1) Loaded home page")
    }) 
})

describe("2- Can search based on address", () => {
    test("2.0 - ___", async() => {
        await ftfMainPageObject.searchWithAddressFromHome('104 S WC Riles Dr, Flagstaff, AZ 86001')
    }) 
})

// describe("3- Fill form to stay up to date (no submiting) - Clicks / Form entry", () => {
//     test("3.0 - Navigate to a fill form to stay up to date (email signup)", async() => {
//         console.log ("(3) Start")
//         await ftfMainPageObject.navigateToStayUpToDateForm()
//         await ftfMainPageObject.hardCodedStayUpToDateFormFilling()
//         console.log ("(3) Done")
//     }) 
// })

describe.only("4- High level check that search results are valid", () => {
    test("4.0 - Verify filters", async() => {
        await ftfMainPageObject.navigate()
        await ftfMainPageObject.searchWithAddressFromHome('104 S WC Riles Dr, Flagstaff, AZ 86001')
        await ftfMainPageObject.areResultsValid()
    }) 
    test("4.0 - Verify results", async() => {
        expect(await ftfMainPageObject.areResultsValid()).toBe(true)
    }) 
})


// afterAll(async () => {
//     await ftfMainPageObject.gentleBrowserClose();
//     console.log("AFTER ALL - Browser quit")
// });




// describe("X- ___", () => {
//     test("X.0 - ___", async() => {
//         console.log ("(X) ___")
//     }) 
// })