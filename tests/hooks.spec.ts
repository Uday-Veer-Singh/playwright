import { test, Locator, expect, Page } from "@playwright/test";

/*
open app -- berforeAll()

login -- beforeEach()
  find products
logout -- afterEach()

login -- beforeEach()
  add product's to cart
logout -- afterEach()

close app -- afterAll()
*/

let page: Page;

test.beforeAll("Open App", async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("https://demoblaze.com/");
});

test.beforeEach("Login", async () => {
  await page.locator("#login2").click();
  await page.locator("loginusername").fill("pavanol");
  await page.locator("loginpassword").fill("test@123");
  await page.locator("button[onclick='login()']").click();
  await page.waitForTimeout(2000);
});

test.afterEach("Logout", async () => {
  await page.locator("#logout2").click();
});

test.afterAll("Close App", async () => {
  await page.close();
});
