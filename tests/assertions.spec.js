import { test, page, expect, errors } from "@playwright/test";

test("Assertions os", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  //   await page.pause();

  // await expect.soft(page.getByText("Log In Or Sign Up")).toHaveText("Log In Or Signed Up");

  if (await page.$("text=Log In Or Sign Up")) {
    await page.locator("text=Log In Or Sign Up").click();
  } else {
    console.error("Error: Text is not as expected!!");
  }
  // await expect(page.getByText("Log In Or Sign Up")).toBeVisible();
  // await expect.soft(page.getByText("Log In Or Sign Up")).toBeHidden();
});
