import { test, Locator, expect } from "@playwright/test";

test("multi select dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Select option from the dropdown
  // Using visible text
  // await page.locator("#colors").selectOption(["Red", "Blue", "green"]);

  // Using value attribute
  // await page.locator("#colors").selectOption(["Red", "Blue", "green"]);

  // Using label
  // await page
  //   .locator("#colors")
  //   .selectOption([{ label: "Red" }, { label: "Blue" }, { label: "green" }]);

  // Using index
  await page
    .locator("#colors")
    .selectOption([{ index: 0 }, { index: 1 }, { index: 2 }]);

  // Check the number of options in dropdown
  const dropdownOptions: Locator = page.locator("#colors>option");
  await expect(dropdownOptions).toHaveCount(7);

  // Check option present in the dropdown
  const optionsCheck: string[] = (await dropdownOptions.allTextContents()).map(
    (text) => text.trim()
  );
  console.log(optionsCheck);
  expect(optionsCheck).toContain("Green");

  //  Printing options from dropdown
  for (const option of optionsCheck) {
    console.log(option);
  }

  await page.waitForTimeout(3000);
});
