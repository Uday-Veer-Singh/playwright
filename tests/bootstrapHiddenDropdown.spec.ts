import { test, Locator, expect } from "@playwright/test";
import { count } from "node:console";

test("bootstrap hidden dropdown", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // Login
  await page.locator("input[placeholder='Username']").fill("Admin");
  await page.locator("input[placeholder='Password']").fill("admin123");
  await page.locator("button[type='submit']").click();

  await page.getByText("PIM").click();

  await page.locator("form i").nth(2).click();
  await page.waitForTimeout(3000);

  const dropdownOptions: Locator = page.locator("div[role='listbox'] span");
  const dropdownOptionsCount: number = await dropdownOptions.count();
  console.log(dropdownOptionsCount);

  for (let i = 0; i < dropdownOptionsCount; i++) {
    console.log(await dropdownOptions.nth(i).innerText());
  }
});
