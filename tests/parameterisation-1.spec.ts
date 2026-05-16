import { test, expect } from "@playwright/test";
import { clearLine } from "node:readline";

// Approach_1 - Single parameter

test("login test", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  await page.locator("#small-searchterms").fill("laptop");
  await page.locator("input[value='Search']").click();
  await expect
    .soft(page.locator("h2 a").nth(0))
    .toContainText("laptop", { ignoreCase: true });
});

// Approach_2 - Multiple paraameters

// test data
const searchItems: string[] = ["Laptop", "lafda"];

// Using for-of loop
/*
for (const item of searchItems) {
  test(`Search test ${item}`, async ({ page }) => {
    await page.goto("https:///demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").fill(item);
    await page.locator("input[value='Search']").click();
    await expect
      .soft(page.locator("h2 a").nth(0))
      .toContainText(item, { ignoreCase: true });
  });
}
*/

// Using for-each function
/*
searchItems.forEach((item) => {
  console.log(item);
  test(`Search test ${item}`, async ({ page }) => {
    await page.goto("https:///demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").fill(item);
    await page.locator("input[value='Search']").click();
    await expect
      .soft(page.locator("h2 a").nth(0))
      .toContainText(item, { ignoreCase: true });
  });
});
*/

// Describe
// test.describe("search item", async () => {
//   searchItems.forEach((item) => {
//     console.log(item);
//     test(`Search test ${item}`, async ({ page }) => {
//       await page.goto("https:///demowebshop.tricentis.com/");
//       await page.locator("#small-searchterms").fill(item);
//       await page.locator("input[value='Search']").click();
//       await expect
//         .soft(page.locator("h2 a").nth(0))
//         .toContainText(item, { ignoreCase: true });
//     });
//   });
// });
