import { test, expect, chromium } from "@playwright/test";

/*
Browser --> context ---> page

Browser = chrome, firefox, webkit

Context = we can have multiple context for multiple user for the same browser.

          provide a way to operate independent browser sessions
  
Page = new tab, window, pop up (all comes under page)

*/

test("Browser coontext demo", async () => {
  {
    const borwser = await chromium.launch();
    const context = await borwser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    console.log("No. of pages created: ", context.pages().length);

    await page1.goto("https://google.com");
    await expect(page1).toHaveTitle("Google");
    await page2.goto("https://amazon.com");
    await expect(page2).toHaveTitle("Amazon.com. Spend less. Smile more.");

    await page1.waitForTimeout(5000);
    await page2.waitForTimeout(5000);
  }
});
