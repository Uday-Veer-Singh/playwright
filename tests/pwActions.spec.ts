import { expect, Locator, test } from "@playwright/test";

// textbox, text input, input box
test("text box in playwright", async ({ page }) => {
  await page.goto("https://www.w3schools.com/");

  await expect(page.locator("#search2")).toBeVisible();

  await expect(page.locator("#search2")).toBeEnabled();

  await page.locator("#search2").fill("playwright");

  const enterdValue: string = await page.locator("#search2").inputValue();
  expect(enterdValue).toBe("playwright");
});

test("radio buttons in playwright", async ({ page }) => {
  await page.goto("https://designsystem.digital.gov/components/radio-buttons/");

  const radioButtonChecked: Locator = page.locator("#historical-truth");

  await expect(radioButtonChecked).toBeVisible();
  await expect(radioButtonChecked).toBeEnabled();
  expect(await radioButtonChecked.isChecked()).toBe(true);
});

test("radio button uncheck", async ({ page }) => {
  await page.goto("https://designsystem.digital.gov/components/radio-buttons/");

  const radioButtonUnchecked: Locator = page.locator("#historical-douglass-2");

  await expect(radioButtonUnchecked).toBeVisible();
  await expect(radioButtonUnchecked).toBeEnabled();

  expect(await radioButtonUnchecked.isChecked()).toBe(false);
  // await radioButtonUnchecked.check();
});

// test("checkbox in playwright", async ({ page }) => {
//   await page.goto("https://designsystem.digital.gov/components/checkbox/");

//   const checkedCheckbox: Locator = page.getByLabel(
//     "@for='check-historical-douglass-2']"
//   );
//   await checkedCheckbox.check();
//   await expect(checkedCheckbox).toBeChecked();
// });

test.only("checkbox in playwright", async ({ page }) => {
  await page.goto("https://designsystem.digital.gov/components/checkbox/");

  // Capture all the checkboxes
  const checkAllBoxes: string[] = [
    "for='Sojourner Truth'",
    "for='check-historical-douglass-2'",
    "for='Booker T. Washington'",
    "for='George Washington Carver'",
  ];
  const checkboxes: Locator[] = checkAllBoxes.map((index) =>
    page.getByLabel(index)
  );
  expect(checkboxes.length).toBe(4);

  // Select or unselect all the checkboxes
  // for (let checkbox of checkboxes) {
  //   await checkbox.check();
  // }
});
