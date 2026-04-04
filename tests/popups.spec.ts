import { test, Locator, expect, chromium } from "@playwright/test";
import { title } from "node:process";

test("handle popups", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const defaultPage = await context.newPage();

  await defaultPage.goto("https://testautomationpractice.blogspot.com/");

  // multiple popups

  // defaultPage.waitForEvent("popup");
  // await defaultPage.locator("#PopUp").click();

  const [popupPage] = await Promise.all([
    defaultPage.waitForEvent("popup"),
    defaultPage.locator("#PopUp").click(),
  ]);

  await popupPage.waitForLoadState();

  const allPopupWindow = context.pages(); // get all the pages in the context
  console.log("Number of PopUps", allPopupWindow.length);

  for (const page of allPopupWindow) {
    console.log(page.url());
  }

  for (const page of allPopupWindow) {
    const titleOfPages = await page.title();
    console.log(titleOfPages);

    if (titleOfPages.includes("Selenium")) {
      await page.locator("//a[normalize-space()='Register now!']").click();
      await page.close();
    }
  }

  await defaultPage.waitForTimeout(5000);

  // console.log(allPopupWindow[1].url());
  // console.log(allPopupWindow[2].url());
});
