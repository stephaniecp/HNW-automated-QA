import {expect, jest, test} from '@jest/globals'
import { SearchSource } from 'jest'
import { Actions } from 'selenium-webdriver'
import {FtfMainPageObject} from './ftfMainPageObject'
const ftfMainPageObject = new FtfMainPageObject()

beforeAll(async () => {
  await ftfMainPageObject.navigate()
//   await ftfMainPageObject.showMouseMovement()
  await ftfMainPageObject.driver.manage().window().maximize()
})

describe("1- Basic reality check", () => {
    test("1.0 - Can load the home page", async() => {
        await ftfMainPageObject.navigate()
        console.log ("(1) Loaded home page")
    }) 
})

// describe("2- Can search based on address", () => {
//     test("2.0 - ___", async() => {
//         await ftfMainPageObject.searchWithAddressFromHome("104 S WC Riles Dr, Flagstaff, AZ 86001")
//     }) 
// })

describe("3- ___", () => {
    test("3.0 - Navigate to a fill form to stay up to date (email signup)", async() => {
        console.log ("(3) Start")
        await ftfMainPageObject.navigateToStayUpToDateForm()
        await ftfMainPageObject.hardCodedStayUpToDateFormFilling()
        console.log ("(3) Done")
    }) 
})

// describe("2- ___", () => {
//     test("2.0 - ___", async() => {
//         console.log ("(2) ___")
//     }) 
// })

afterAll(async () => {
    await ftfMainPageObject.driver.quit()
    console.log("AFTER ALL - Browser quit")
});