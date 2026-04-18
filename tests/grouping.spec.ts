import { test, Locator, expect, Page } from "@playwright/test";

test.describe("group1", async () => {
  test("test1", async () => {
    console.log("test 1");
  });
  test("test2", async () => {
    console.log("test 2");
  });
});

test.describe("group2", async () => {
  test("test1", async () => {
    console.log("test 3");
  });
  test("test2", async () => {
    console.log("test 4");
  });
});

//  npx playwright test tests/grouping.spec.ts --grep group1
