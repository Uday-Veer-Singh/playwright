import { test, Locator, expect } from "@playwright/test";

test("read data from all the table pages", async ({ page }) => {
  await page.goto("https://datatables.net/");

  let hasMorePages = true;

  while (hasMorePages) {
    const rows: Locator[] = await page
      .locator("#example_wrapper tbody tr")
      .all();
    for (let row of rows) {
      console.log(await row.innerText());
    }

    await page.waitForTimeout(3000);

    const nextButton = page.locator(".next");
    const isDisabled = await nextButton.getAttribute("class");

    if (isDisabled?.includes("disabled")) {
      hasMorePages = false;
    } else {
      await nextButton.click();
    }
  }
});

test("filter the rowa and check the rows count on each page", async ({
  page,
}) => {
  await page.goto("https://datatables.net/");

  const dropdown: Locator = page.locator("#dt-length-0");
  await dropdown.selectOption("50");

  // approach 1
  const rows: Locator[] = await page.locator("#example_wrapper tbody tr").all();
  expect(rows.length).toBe(50);

  // approach 2
  const rows1 = page.locator("#example_wrapper tbody tr");
  await expect(rows1).toHaveCount(50);
});

test.only("search for specific data in a tabel", async ({ page }) => {
  await page.goto("https://datatables.net/");

  const searchBox: Locator = page.locator("#dt-search-0");
  await searchBox.fill("Software Engineer");

  await page.waitForTimeout(3000);
  const rows: Locator[] = await page.locator("#example_wrapper tbody tr").all();

  if (rows.length > 1) {
    let matchFound = false;

    for (let row of rows) {
      const rowtext = await row.innerText();
      if (rowtext.includes("Software Engineer")) {
        matchFound = true;
        break;
      }
    }
    expect(matchFound).toBeTruthy();
  }
});
