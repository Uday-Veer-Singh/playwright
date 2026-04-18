import { test, expect } from "@playwright/test";

// Aproach 1
test("@sanity test1", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
});

test("@sanity @regression test2", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
});

// Aproach 2
test("test3", { tag: "@sanity" }, async ({ page }) => {
  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
});

test("test4", { tag: "@regression" }, async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.locator("text='Store'").click();
  await expect(page).toHaveTitle(
    "Google Store for Google Made Devices & Accessories"
  );
});

test("test5", { tag: ["@sanity", "@regression"] }, async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.locator("text='Store'").click();
  await expect(page.locator(".dmlTCe.bBgsRe")).toHaveText(
    "Feel-good deals for feel-good days."
  );
});

// npx playwright test tests/tags.spec.ts --headed --grep "@sanity"
// npx playwright test tests/tags.spec.ts --headed --grep "(?=.*@sanity) (?=.*@regression)"
// npx playwright test tests/tags.spec.ts --headed --grep "@sanity|@regression"
// npx playwright test tests/tags.spec.ts --grep "@sanity" --grep-invert "@regression"
