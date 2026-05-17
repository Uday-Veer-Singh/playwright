import { test, expect } from "@playwright/test";
import fs from "fs";
import * as XLSX from "xlsx";

// Load exel file
// file --> workbook --> worksheet --> data
const exelPath = "test-data/data.xlsx";

const workbook = XLSX.readFile(exelPath);

const sheetName = workbook.SheetNames[0];

const worksheet = workbook.Sheets[sheetName];

//  Reading data from exel file

const loginData: any = XLSX.utils.sheet_to_json(worksheet);

// Test
test.describe("Login data driven test", async () => {
  for (const { email, password, validity } of loginData) {
    // console.log(email, password, validity);

    test(`login for ${email} and ${password}`, async ({ page }) => {
      await page.goto("https://demowebshop.tricentis.com/login");

      // Fill login form
      await page.locator("#Email").fill(email);
      await page.locator("#Password").fill(password);
      await page.locator("input[value='Log in']").click();

      if (validity.toLowerCase() === "valid") {
        // Check logout link is visible - means login is successful
        const logoutLink = page.locator('a[href="/logout"]');
        await expect(logoutLink).toBeVisible({ timeout: 5000 });
      } else {
        // Check error message is visible - means login is unsuccessful
        const errorMessage = page.locator(".validation-summary-errors");
        await expect(errorMessage).toBeVisible({ timeout: 5000 });

        // Check user is still on the login page
        await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
      }
    });
  }
});
