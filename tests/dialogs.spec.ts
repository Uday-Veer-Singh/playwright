import { test, Locator, expect } from "@playwright/test";

test("Simple dialog", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Register dialog handler
  page.on("dialog", async (dialog) => {
    console.log("Dialog type is:", dialog.type());
    expect(dialog.type()).toBe("alert");

    console.log("Dialog message is:", dialog.message());
    expect(dialog.message()).toBe("I am an alert box");

    dialog.accept();

    await page.locator("#alertBtn").click(); // Opens dialog

    await page.waitForTimeout(5000);
  });
});
