import { test, expect, Locator } from "@playwright/test";

test("Single select drop down", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // select option from dropdown

  // await page.locator("#country").selectOption("Canada"); // Visible Text
  // await page.locator("#country").selectOption({ label: "Canada" });
  // // Label
  // await page.locator("#country").selectOption({ value: "canada" });
  // // Value Attribute
  await page.locator("#country").selectOption({ index: 1 }); // Index of element

  // Check number of options in the dropdown
  const dropdownOptions: Locator = page.locator("#country>option");
  await expect(dropdownOptions).toHaveCount(10);

  // Check option present in the dropdown
  const checkOption: string[] = (await dropdownOptions.allTextContents()).map(
    (text) => text.trim().toLowerCase()
  );
  console.log(checkOption);

  expect(checkOption).toContain("canada");

  // Prinitng options from the dropdown
  for (const option of checkOption) {
    console.log(option);
  }

  await page.waitForTimeout(3000);
});
