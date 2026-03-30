import { test, Locator, expect } from "@playwright/test";

test("dynamic table", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/dynamic-table");

  const table: Locator = page.locator("table.table tbody");
  await expect(table).toBeVisible();

  const tableRows: Locator[] = await table.locator("tr").all();
  console.log(tableRows.length);

  // For Chrome process get value of CPU load.

  let cpuLoad = "";
  for (let row of tableRows) {
    const taskName: string = await row.locator("td").nth(0).innerText();
    if (taskName === "Chrome") {
      // const cpuLoad: string = await row.locator('td:has-text("%")').innerText() // css
      cpuLoad = await row.locator("td", { hasText: "%" }).innerText();
      console.log(cpuLoad);
      break;
    }
  }

  await page.waitForTimeout(3000);

  // Compare it with value in the yellow label.

  const chromeReading: string = await page.locator("p#chrome-cpu").innerText();
  console.log(chromeReading);

  if (chromeReading.includes(cpuLoad)) {
    console.log("matches");
  } else {
    console.log("no matches");
  }

  expect(chromeReading).toContain(cpuLoad);
});
