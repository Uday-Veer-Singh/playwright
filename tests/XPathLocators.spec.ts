import { test, expect, Locator } from "@playwright/test";

test("XPath in PW", async ({ page }) => {
  await page.goto("https://www.fcc-fac.ca/");

  // Absolute Xpath
  const logosAbsolute: Locator = page.locator(
    "//html[1]/body[1]/div[2]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[1]/picture[1]/img[1]"
  );
  await expect(logosAbsolute).toBeVisible();

  // Relative XPath
  const logosRelative: Locator = page.locator(
    "//img[@alt='Food and Beverage']"
  );
  await expect(logosRelative).toBeVisible();

  // Contains()
  const logoLM: Locator = page.locator("//a[contains(@href, 'financing')]");
  const logoLMCount: number = await logoLM.count();
  console.log(logoLMCount);
  expect(logoLMCount).toBeGreaterThan(0);

  // textcontent()
  // console.log(await logoNoOpen.textContent()); // strict mode violation
  console.log("First logo content", await logoLM.first().textContent());
  console.log("Last logo content", await logoLM.last().textContent());
  console.log("nth logo content", await logoLM.nth(1).textContent());

  let linkLM: string[] = await logoLM.allTextContents();
  // Getting all the matched products in to an array
  console.log("all Learn more links text:", linkLM);

  for (let lLM of linkLM) {
    console.log(lLM);
  }

  // starts-with()
  const aboutLinks: Locator = page.locator(
    "//a[starts-with(@href, '/en/about')]"
  );
  // return multiple elements

  const aboutLinksCount: number = await aboutLinks.count();
  expect(aboutLinksCount).toBeGreaterThan(0);
  console.log(aboutLinksCount);

  // text()
  const findFCC: Locator = page.locator("//div[text()='Online Services']");
  await expect(findFCC).toBeVisible();

  // last()

  // dynamic elements
});
