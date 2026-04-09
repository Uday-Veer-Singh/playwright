import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.getByRole("link", { name: "Dynamic Content" }).click();
  await page.getByRole("link", { name: "click here" }).click();
  await page.waitForTimeout(5000);
  await page.goto("https://the-internet.herokuapp.com/");
  await page.getByRole("link", { name: "Add/Remove Elements" }).click();
  await page.getByRole("button", { name: "Add Element" }).click();
  await page.waitForTimeout(5000);
  await expect(page.getByRole("button", { name: "Delete" })).toBeVisible();
  await page.getByRole("button", { name: "Delete" }).click();
});
