import { test, Locator, expect } from "@playwright/test";

test("verify dropdown is sorted", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // const dropdownOptions: Locator = page.locator("#animals>option"); // sorted
  const dropdownOptions: Locator = page.locator("#colors>option"); //unsorted
  const dropdownOptionsText: string[] = (
    await dropdownOptions.allTextContents()
  ).map((text) => text.trim());

  const orignalOptionsList: string[] = dropdownOptionsText;
  const sortedOptionsList: string[] = dropdownOptionsText.sort();
  console.log("orignal list", orignalOptionsList);
  console.log("sorted list", sortedOptionsList);
  /*
  orignal list [
  'Blue',   'Green',
  'Green',  'Red',
  'Red',    'White',
  'Yellow'
]
sorted list [                              
  'Blue',   'Green',
  'Green',  'Red',
  'Red',    'White',
  'Yellow'
]
   */

  const orignalOptionsList1: string[] = [...dropdownOptionsText];
  const sortedOptionsList1: string[] = [...dropdownOptionsText].sort();
  console.log("orignal list", orignalOptionsList1);
  console.log("sorted list", sortedOptionsList1);

  expect(orignalOptionsList1).toEqual(sortedOptionsList1);

  await page.waitForTimeout(3000);
});
