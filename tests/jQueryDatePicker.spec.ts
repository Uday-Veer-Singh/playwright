import { test, Locator, expect, Page } from "@playwright/test";

const checkDatePicker = async (
  targetDate: string,
  targetMonth: string,
  targetYear: string,
  page: Page,
  isfuture: boolean
) => {
  while (true) {
    const currentYear = await page.locator(".ui-datepicker-year").textContent();
    const currentMonth = await page
      .locator(".ui-datepicker-month")
      .textContent();

    if (currentYear === targetYear && currentMonth === targetMonth) {
      break; // Desired month and year are displayed
    }

    if (isfuture) {
      // Future
      await page.locator(".ui-datepicker-next").click();
    } else {
      // Past
      await page.locator(".ui-datepicker-prev").click();
    }
  }

  const allDates = await page.locator(".ui-datepicker-calendar td").all();

  for (let date of allDates) {
    const dateText = await date.innerText();

    if (dateText === targetDate) {
      await date.click();
      break;
    }
  }
};

test("jQuery date picker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Approach 1: Using the date picker input field directly and using fill method to set the date
  const dateInput: Locator = page.locator("#datepicker");
  await expect(dateInput).toBeVisible();
  // await dateInput.fill("01/01/2080");

  // Approach 2: Interacting with the date picker UI to select the date.
  await dateInput.click(); // Open the date picker

  // Select target date
  const targetYear = "2020";
  const targetMonth = "January";
  const targetDate = "01";

  checkDatePicker(targetDate, targetMonth, targetYear, page, false);

  // const expectedDate = `${targetMonth} ${targetDate}, ${targetYear}`;
  const expectedDate = "01/01/2020";

  // await expect(dateInput).toHaveValue(expectedDate);

  await page.waitForTimeout(3000);
});
