import { test, expect, Locator } from "@playwright/test";

test("verify css locators", async ({ page }) => {
  await page.goto("https://www.w3schools.com/");

  // tag with class
  const classTag: Locator = page.locator("input.ga-fp");
  await classTag.fill("plawright");
  //or
  await page.locator("input.ga-fp").fill("playwright");

  await expect(page.locator("input.ga-fp")).toBeVisible();

  // await page.waitForTimeout(5000);

  // tag with Id
  await page.locator("button#learntocode_searchbtn").click();

  // tag with attribute and value
  await page
    .locator("input[placeholder='Search our tutorials, e.g. HTML']")
    .fill("playwriight");

  // tag with class and attribute
  await page
    .locator("input.ga-fp[aria-label='Search our tutorials']")
    .fill("playwright");

  // absolute css locator
  await expect(
    page.locator(
      "html>body>div>div>div>div>div>div>div>h1[class='learntocodeh1']"
    )
  ).toBeVisible();

  // relative css locator
  await expect(page.locator("h1.learntocodeh1")).toBeVisible();
  // ^, starts with, h1^.learntocodeh1
  // $, ends with, h1$.codeh1
  // *, conatins, h1*.arntoco
});
