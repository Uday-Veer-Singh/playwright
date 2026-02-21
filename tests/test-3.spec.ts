import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc/#/");
  await page.getByRole("textbox", { name: "What needs to be done?" }).click();
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .fill("I am the Conquerer");
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .press("Enter");
  await page.getByRole("textbox", { name: "What needs to be done?" }).click();
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .fill("praise the lord");
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .press("Enter");
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .fill("I rule my mind");
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .press("Enter");
  await expect(page.getByTestId("todo-title")).toHaveCount(3);
  await page
    .getByRole("listitem")
    .filter({ hasText: "I am the Conquerer" })
    .getByLabel("Toggle Todo")
    .check();
  await page.getByRole("link", { name: "Active" }).click();
  await expect(page.getByTestId("todo-title")).toHaveCount(2);
  await page.getByRole("link", { name: "Completed" }).click();
  await expect(page.getByTestId("todo-title")).toHaveCount(1);
});
