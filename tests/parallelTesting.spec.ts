import { test } from "@playwright/test";

// test.describe.configure({ mode: "parallel" });
test.describe.configure({ mode: "serial" });

test.describe("group1", () => {
  test("Test1", async ({ page }) => {
    console.log("1");
  });
  test("Test2", async ({ page }) => {
    console.log("2");
  });
  test("Test3", async ({ page }) => {
    console.log("3");
  });
});
