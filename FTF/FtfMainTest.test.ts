import {expect, jest, test} from '@jest/globals'
import { SearchSource } from 'jest'
import { Actions } from 'selenium-webdriver'
import {FtfMainPageObject} from './FtfMainPageObject'
const ftfMainPageObject = new FtfMainPageObject()
// Test single test by using describe/only / or skip with describe.skip
// Run test file in console: npx jest Ftf

beforeAll(async () => {
  await ftfMainPageObject.navigate()
//   await ftfMainPageObject.showMouseMovement()
  await ftfMainPageObject.driver.manage().window().maximize()
})

describe.skip("1- Basic reality check", () => {
    test("1.0 - Can load the home page", async() => {
        await ftfMainPageObject.navigate()
        console.log ("(1) Loaded home page")
    }) 
}) // Verfied and passing - 4/28/23

describe.only("2- Can search based on address", () => {
    test("2.0 - ___", async() => {
        await ftfMainPageObject.searchWithAddressFromHome('104 S WC Riles Dr, Flagstaff, AZ 86001')
    }) 
}) // Failing 4/28/23

// // Commenting becuse imcomplete method leads to test file failing
// describe.("3- Fill form to stay up to date (no submiting) - Clicks / Form entry", () => {
//     test("3.0 - Navigate to a fill form to stay up to date (email signup)", async() => {
//         console.log ("(3) Start")
//         await ftfMainPageObject.navigateToStayUpToDateForm()
//         await ftfMainPageObject.hardCodedStayUpToDateFormFilling()
//         console.log ("(3) Done")
//     }) 
// }) // Failing 4/28/23

describe.skip("4- High level check that search results are va lid", () => {
    test("4.0 - Verify filters", async() => {
        await ftfMainPageObject.navigate()
        await ftfMainPageObject.searchWithAddressFromHome('104 S WC Riles Dr, Flagstaff, AZ 86001')
        await ftfMainPageObject.areResultsValid()
    }) 
    test("4.0 - Verify results", async() => {
        expect(await ftfMainPageObject.areResultsValid()).toBe(true)
    }) 
}) // Incomplete/Failing 4/28/23


afterAll(async () => {
    await ftfMainPageObject.gentleBrowserClose();
    console.log("AFTER ALL - Browser quit")
});

// describe("X- ___", () => {
//     test("X.0 - ___", async() => {
//         console.log ("(X) ___")
//     }) 
// })