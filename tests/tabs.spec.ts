import { test, Locator, expect, chromium } from "@playwright/test";
import { title } from "node:process";

test("handle tabs", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  const defaultPage = await context.newPage();

  await defaultPage.goto("https://testautomationpractice.blogspot.com/");

  // context.waitForEvent("page");
  // await defaultPage.locator("button:has-text('New Tab')").click(); // opens new tab/page

  const [childPage] = await Promise.all([
    context.waitForEvent("page"),
    defaultPage.locator("button:has-text('New Tab')").click(),
  ]);

  // Approach 1: switch between pages and get titles
  const allPages = context.pages(); // return an array
  console.log(allPages.length);

  await allPages[0]
    .title()
    .then((title) => console.log("title of page", title));
  await allPages[1]
    .title()
    .then((title) => console.log("title of page", title));

  // Approach 2: alternante
  console.log("title of page", await defaultPage.title());
  console.log("title of page", await childPage.title());
});
