/*
Locator: Indentifies the element on the page.

DOM - Document Object Model
DOM - is an API Interface  provided by browser.

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

*/

import { test, expect, Locator } from "@playwright/test";

test("Verify PW built-in locators", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // getByAltText() - Identifies images, based on alt attribute
  // Use this locator when your element supports alt text such as img and
  // area element.

  const browserLogo: Locator = page.getByAltText(
    "Browsers (Chromium, Firefox, WebKit)"
  );
  await expect(browserLogo).toBeVisible();

  // getByText() - Find the element by  the text it contains.  You can
  // match by a substring, exact string or regular expressions.
  // Locate by visible text.
  // Use this LOCATOR to find no interactive elements like div, span, p etc.
  // For Interactive elemets like button, a, input, etc use role locator.

  /*
  const broowserText: Locator = page.getByText(
    "Chosen by companies and open source projects"
  );
  await expect(broowserText).toBeVisible();
  */

  await expect(
    page.getByText("Chosen by companies and open source projects")
  ).toBeVisible(); // Full string / text

  await expect(page.getByText("Chosen by companies ")).toBeVisible(); // Substring

  await expect(page.getByText(" and open source projects")).toBeVisible(); // Substring

  await expect(
    page.getByText(/Chosen\s+by\s+companies\s+and\sopen\s+source/i)
  ).toBeVisible(); // Regular Expression

  // getByRole() - Locating by ROLE (role is not an attribute)
  // Role locator includes buttons, checkboxes, headings, lists, links, tables,
  // and many more and follow W3C specifications fpr ARIA role.
  // Preferred for interactive elements

  await page.getByRole("link", { name: "Codegen." }).click();
  await expect(
    page.getByRole("heading", { name: "Test generator" })
  ).toBeVisible();

  // getByLabel() - Locate form control by label's text
  // Ideal fro form fields with visible labels

  await page.getByLabel("Search (Ctrl+K)").click();

  // getByPlaceholder() - finds the element with a given placeholder text
  // best fro inputs without a label but having a placeholder

  await page.getByPlaceholder("Search docs").fill("locator");

  // getByTitle() - locate an element by it's title attribute (rare)

  // getByTestId() - locate an element based on it's data-testId attribute
  // when to use - text or role-based locators are unstable or not suitable.
  /// It is customisable
});
