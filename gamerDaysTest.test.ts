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

// describe("Verify link to Twitch + return to original", () => {
//     test("US: CTA Link to Twitch is working)", async() => {
//         await gamerDaysPageObject.driver.sleep(500);
        
//         // console.log ("Before Logo click")
//         // await gamerDaysPageObject.click(gamerDaysPageObject.byTopLeftIntelLogo)
//         // console.log ("After Logo click")

//         await gamerDaysPageObject.tabSwitchBack()

//         await gamerDaysPageObject.clickSpecial(gamerDaysPageObject.byCTAtoViewTwitch)
//         console.log ("US: Click CTA to go to Twitch")
//         await gamerDaysPageObject.driver.sleep(3000);
//         await gamerDaysPageObject.getElement(gamerDaysPageObject.byTwitchUpperLeftLogo)
//         console.log ("US: Has located the Twitch logo visible on the upper left when page loads successfully")
//         await gamerDaysPageObject.driver.navigate().back()
//     }) 
// })

describe ("Basic search", () => {
    // TEST: Do a search
    test("Can do a search and find relevant content and save the search logs", async() => {
        await gamerDaysPageObject.searchAndValidateResults('Games')
        let textResults = await gamerDaysPageObject.getResults()
        expect(textResults).toContain('Games')
        console.log("1.3 Compared results with search query")
    })
})

afterAll(async () => {
    await gamerDaysPageObject.driver.quit()
    console.log("AFTER ALL - Browser quit")
});

