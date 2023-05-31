import { test, expect } from "@playwright/test";

test("login validation", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByText("Log In Or Sign Up").click();
  await page.getByPlaceholder("Email...").click();
  await page.getByPlaceholder("Email...").fill("qa@qa.com");
  await page.getByPlaceholder("Password...").click();
  await page.getByPlaceholder("Password...").fill("123456");
  await page.getByRole("button", { name: "Login" }).click();
});
