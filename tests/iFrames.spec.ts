import { test, Locator, expect } from "@playwright/test";

test("frames demo", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  // Total number of Frames present on the page
  const frames = page.frames();
  console.log("Number of frames:", frames.length);

  // // Approach 1: Using page.frame()
  // const frame1 = page.frame({
  //   url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  // });

  // if (frame1) {
  //   await frame1.locator("[name='mytext1']").fill("Hi");
  //   // await frame1.fill("[name='mytext1']", "Hi");
  // } else {
  //   console.log("Frame is not available");
  // }

  // Approach 2: Using frame locator
  const inputBox = page
    .frameLocator("[src='frame_1.html']")
    .locator("[name='mytext1']");

  inputBox.fill("Hi");

  await page.waitForTimeout(5000);
});

test.only("Inner/child frames demo", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  const frame3 = page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  });

  if (frame3) {
    await frame3?.locator("[name='mytext3']").fill("hi");

    const childFrame = frame3.childFrames();
    console.log("Child frames inside the Frame3:", childFrame.length);

    const checkRadioBtn = childFrame[0].getByLabel("I am a human");
    await checkRadioBtn.check();
    await expect(checkRadioBtn).toBeChecked();
  } else {
    console.log("frame3 is not found");
  }
  await page.waitForTimeout(5000);
});
