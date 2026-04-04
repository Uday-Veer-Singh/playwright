import { test, Locator, expect, chromium } from "@playwright/test";
import { title } from "node:process";

test("handle authenticated popups", async () => {
  // https://the-internet.herokuapp.com/basic_auth
  // https://usernamae:password@the-internet.herokuapp.com/basic_auth

  /*
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const defaultPage = await context.newPage();

  // Appraoch 1: directly pass login details in the url
  await defaultPage.goto(
    "https://admin:admin@the-internet.herokuapp.com/basic_auth"
  );

  await defaultPage.waitForLoadState(); // wait for the page to load

  await expect(defaultPage.locator("text=Congratulations")).toBeVisible();
  */

  // Approach 2: pass the login details in the browser context

  const browser = await chromium.launch();
  const context = await browser.newContext({
    httpCredentials: { username: "admin", password: "admin" },
  });
  const defaultPage = await context.newPage();

  await defaultPage.goto("https://the-internet.herokuapp.com/basic_auth");
  await defaultPage.waitForLoadState();
  await expect(defaultPage.locator("text=Congratulations")).toBeVisible();
  await defaultPage.waitForTimeout(3000);
});
