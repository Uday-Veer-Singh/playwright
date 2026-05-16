// import { test, expect } from "@playwright/test";
// import fs from "fs";
// import { parse } from "csv-parse/sync";

// // Define type
// type loginData = {
//   email: string;
//   password: string;
//   validity: string;
// };
// //  Reading data from csv file

// const csvPath = "test-data/data.csv";

// const fileContent = fs.readFileSync(csvPath, "utf-8");

// const records: loginData[] = parse(fileContent, {
//   columns: true,
//   skip_empty_lines: true,
//   bom: true,
// });

// // Test
// test.describe("Login data driven test", async () => {
//   for (const content of records) {
//     // console.log(email, password, validity);

//     test(`login for ${content.email} and ${content.password}`, async ({
//       page,
//     }) => {
//       await page.goto("https://demowebshop.tricentis.com/login");

//       // Fill login form
//       await page.locator("#Email").fill(content.email);
//       await page.locator("#Password").fill(content.password);
//       await page.locator("input[value='Log in']").click();

//       if (content.validity.toLowerCase() === "valid") {
//         // Check logout link is visible - means login is successful
//         const logoutLink = page.locator('a[href="/logout"]');
//         await expect(logoutLink).toBeVisible({ timeout: 5000 });
//       } else {
//         // Check error message is visible - means login is unsuccessful
//         const errorMessage = page.locator(".validation-summary-errors");
//         await expect(errorMessage).toBeVisible({ timeout: 5000 });

//         // Check user is still on the login page
//         await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
//       }
//     });
//   }
// });
