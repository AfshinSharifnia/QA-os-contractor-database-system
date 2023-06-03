import { test, expect } from "@playwright/test";

test("navbar-contractor", async ({ page }) => {
  await page.goto("http://localhost:3000/contractorlist");
  await page.locator("text=About").click();
  await page.waitForTimeout(2000);
  await page.locator("text=Search").click();
  await page.waitForTimeout(2000);
  await page.locator("text=Home").click();
  await page.waitForTimeout(2000);
});
