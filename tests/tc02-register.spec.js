import { test, expect } from "@playwright/test";

test("validate registration", async ({ page }) => {
  await page.goto("about:blank");
  await page.goto("http://localhost:3000/");
  await page.getByText("Log In Or Sign Up").click();
  await page.getByRole("button", { name: "Register" }).click();
  await page.getByPlaceholder("Email...").click();
  await page.getByPlaceholder("Email...").fill("qa@qa.com");
  await page.getByPlaceholder("Email...").click();
  await page.getByPlaceholder("DisplayName...").click();
  await page.getByPlaceholder("DisplayName...").fill("user1");
  await page.getByPlaceholder("DisplayName...").press("Enter");
  await page.getByPlaceholder("Password...").click();
  await page.getByPlaceholder("Password...").fill("123456");
  await page.getByPlaceholder("Password...").press("Enter");
  await page.getByRole("button", { name: "Create User" }).click();
  await page.waitForTimeout(5000);
});
