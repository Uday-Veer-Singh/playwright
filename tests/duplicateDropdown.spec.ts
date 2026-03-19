import { test, Locator, expect } from "@playwright/test";
import { text } from "node:stream/consumers";

test("verfiy dropdown contains duplicate", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // const dropdownOptions: Locator = page.locator("#colors>option"); // having duplicates
  const dropdownOptions: Locator = page.locator("#animals>option"); // not having duplicates

  const dropdownOptionsText: string[] = (
    await dropdownOptions.allTextContents()
  ).map((text) => text.trim());

  const singleOptionsSet = new Set(); // set - duplicates not allowed
  const duplicateOptionsArray: string[] = []; // array - duplicates allowed

  for (const text of dropdownOptionsText) {
    if (singleOptionsSet.has(text)) {
      duplicateOptionsArray.push(text);
    } else {
      singleOptionsSet.add(text);
    }
  }

  console.log(duplicateOptionsArray);

  expect(duplicateOptionsArray.length).toBe(0);
});
