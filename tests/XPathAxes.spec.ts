import { test, expect, Locator } from "@playwright/test";
import { exec } from "node:child_process";

test("XPathAxes", async ({ page }) => {
  await page.goto("https://www.w3schools.com/html/html_tables.asp");

  // self axis
  const selfAxis: Locator = page.locator("//td[text()='Germany']/self::td");
  await expect(selfAxis).toHaveText("Germany");

  // parent axis
  const parentAxis: Locator = page.locator("//td[text()='Germany']/parent::tr");
  await expect(parentAxis).toContainText("Maria");
  // console.log(await parentAxis.textContent());

  // child axis
  const childAxes: Locator = page.locator(
    "//table[@id='customers']//tr[2]/child::td"
  );
  await expect(childAxes).toHaveCount(3);
  // await expect(childAxes).toContainText("Mexico");

  // ancestors axis
  const ancestorAxis: Locator = page.locator(
    "//td[text()='Germany']/ancestor::table"
  );
  expect(ancestorAxis).toHaveAttribute("id", "customers");

  // descendants axis
  const descendantAxis: Locator = page.locator(
    "//table[@id='customers']/descendant::td"
  );
  await expect(descendantAxis).toHaveCount(18);

  // following axis
  const followingAxis: Locator = page.locator(
    "//td[normalize-space()='Germany']/following::td[1]"
  );
  await expect(followingAxis).toHaveText("Centro comercial Moctezuma");

  // following-sibling axis
  const followingSibling: Locator = page.locator(
    "//td[normalize-space()='Germany']/following-sibling::td"
  );
  await expect(followingSibling).toHaveCount(0);

  const followingSibling1: Locator = page.locator(
    "//td[normalize-space()='Maria Anders']/following-sibling::td"
  );
  await expect(followingSibling1).toHaveCount(1);

  // preceding axis
  const preceding: Locator = page.locator(
    "//td[text()='Germany']/preceding-sibling::td[1]"
  );
  await expect(preceding).toHaveText("Maria Anders");

  // preceding-siblings axis
  const precedingSibling: Locator = page.locator(
    "//td[text()='Germany']/preceding-sibling::td"
  );
  await expect(precedingSibling).toHaveCount(2);
  await expect(precedingSibling.nth(0)).toHaveText("Alfreds Futterkiste");
  await expect(precedingSibling.nth(1)).toHaveText("Maria Anders");
});
