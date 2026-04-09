import { test, Locator, expect } from "@playwright/test";

test("auto waiting and timeouts", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dynamic_controls");

  // Assertions - auto wait wroks for 5 seconds
  await expect(page).toHaveURL(
    "https://the-internet.herokuapp.com/dynamic_controls"
  );
  await expect(page.locator(".example h4:nth-child(1)")).toBeVisible();

  // Actions - auto wait works for 30 seconds
  await page.locator("input[type='checkbox']").check();
  await page.waitForTimeout(3000);
  await page.locator("button[onclick='swapCheckbox()']").click();
  await page.waitForTimeout(3000);

  // Using "force" option to bypass auto waiting
  await page.locator("input[type='checkbox']").check({ force: true });
});
