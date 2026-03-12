import { test, expect } from "@playwright/test";

// Syntax
/*
test(
  ("title",
  () => {
    // step1
    // step2
    // step3
  });
*/

// Fixture - global variable, eg. page, browser etc

test("Verify page URL", async ({ page }) => {
  await page.goto("https://playwright.dev/docs/intro#installing-playwright");
  let url: string = await page.url();
  console.log("Title:", url);
  await expect(page).toHaveURL(
    "https://playwright.dev/docs/intro#installing-playwright"
  );
});
