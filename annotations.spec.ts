/*
Types od Annotations:-
only
skip
fail
fixme
slow
*/

import { test, expect } from "@playwright/test";

/*
Only

test.only("test1", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
});

*/

/*
Skip

test.skip("test2", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
});

// Skip the test based on some condition
test("test3", async ({page, browserName})=>{
  test.skip(browserName === "firefox", "This test is not supported on firefox")
})
*/

/*
Fail

test.fail("test4", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
});
*/

/*
Fixme

test("test5", async ({ page }) => {
  await page.goto("https://www.google.com/");
  // not completed yet
});
*/

/*
// Slow

test("test6", async ({ page }) => {
  test.slow() //triple the time out 
  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
});
*/
