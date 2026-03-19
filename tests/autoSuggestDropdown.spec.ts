import { test, Locator, expect } from "@playwright/test";

test("auto suggest dropdown", async ({ page }) => {
  await page.goto("https://playwright.dev/dotnet/docs/intro");

  const searchButton: Locator = page.locator(
    "span[class$='DocSearch-Button-Placeholder']"
  );
  await searchButton.click();

  const searchInput: Locator = page.locator(".DocSearch-Input");
  await searchInput.fill("playwright");

  // Get all the suggested options -> ctrl+shft+p on DOM -> emulate focused page

  const options: Locator = page.locator("#docsearch-list>li");
  await expect(options.first()).toBeVisible();

  const count = await options.count();
  console.log("Results:", count);

  // printing all the suuggested options
  // for (let i = 0; i < count; i++) {
  //   console.log(await options.nth(i).innerText());
  // }

  // Select or click on a specific option
  for (let i = 0; i < count; i++) {
    let text = await options.nth(i).innerText();
    if (text === "PlaywrightAssertions") {
      options.nth(i).click();
      break;
    }
  }

  await page.waitForTimeout(3000);
});
