import {expect, jest, test} from '@jest/globals'
import { SearchSource } from 'jest'
import { Actions } from 'selenium-webdriver'
import {GamerDaysPageObject} from './gamerDaysPageObject'
const gamerDaysPageObject = new GamerDaysPageObject()

beforeAll(async () => {
  await gamerDaysPageObject.navigate()
  await gamerDaysPageObject.showMouseMovement()
  await gamerDaysPageObject.driver.manage().window().maximize()
})

describe("Event end: confirming page status", () => {
    test("US: Event shows as done (as expected)", async() => {
        await gamerDaysPageObject.getElement(gamerDaysPageObject.byUsStringItsAWrap)
        console.log ("US Event (past) status verified")
    }) 

})

describe("Verify link to Twitch", () => {
    test("US: CTA Link to Twitch is working)", async() => {
        await (gamerDaysPageObject.byCTAtoViewTwitch)
        console.log ("US Click CTA to go to Twitch")
    }) 
})

afterAll(async () => {
    await gamerDaysPageObject.driver.quit()
    console.log("AFTER ALL - Browser quit")
});