import { test, expect } from "@playwright/test";

test("verify web title", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page).toHaveTitle("Contractor DB");
});
