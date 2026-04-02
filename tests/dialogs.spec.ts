import { test, Locator, expect } from "@playwright/test";

test("Simple dialog", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Register dialog handler
  page.on("dialog", async (dialog) => {
    console.log("Dialog type is:", dialog.type());
    expect(dialog.type()).toBe("alert");

    console.log("Dialog message is:", dialog.message());
    expect(dialog.message()).toBe("I am an alert box!");

    dialog.accept();
  });

  await page.locator("#alertBtn").click(); // Opens simple dialog
});

test("confirmation dialog", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Register dialog handler
  page.on("dialog", async (dialog) => {
    console.log("Dialog type is:", dialog.type());
    expect(dialog.type()).toBe("confirm");

    console.log("Dialog message is:", dialog.message());
    expect(dialog.message()).toBe("Press a button!");

    dialog.accept(); // close dialog by accepting

    // dialog.dismiss(); // close dialog by desiminssing
  });

  await page.locator("#confirmBtn").click(); // Opens confirm dialog

  const validateText: string = await page.locator("#demo").innerText();
  console.log("Output text is:", validateText);
  await expect(page.locator("#demo")).toHaveText("You pressed OK!");

  // const validateText: string = await page.locator("#demo").innerText();
  // console.log("Output text is:", validateText);
  // await expect(page.locator("#demo")).toHaveText("You pressed Cancel!");

  await page.waitForTimeout(5000);
});

test.only("prompt  dialog", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Register dialog handler
  page.on("dialog", async (dialog) => {
    console.log("Dialog type is:", dialog.type());
    expect(dialog.type()).toBe("prompt");

    console.log("Dialog message is:", dialog.message());
    expect(dialog.message()).toBe("Please enter your name:");

    expect(dialog.defaultValue()).toContain("Harry Potter");

    dialog.accept("Jerry"); // close dialog by accepting

    // dialog.dismiss(); // close dialog by desiminssing
  });

  await page.locator("#promptBtn").click(); // Opens prompt dialog

  const validateText: string = await page.locator("#demo").innerText();
  console.log("Output text is:", validateText);
  await expect(page.locator("#demo")).toHaveText(
    "Hello Jerry! How are you today?"
  );

  // const validateText: string = await page.locator("#demo").innerText();
  // console.log("Output text is:", validateText);
  // await expect(page.locator("#demo")).toHaveText("You pressed Cancel!");

  await page.waitForTimeout(5000);
});
