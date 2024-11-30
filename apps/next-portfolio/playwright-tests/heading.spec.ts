import { expect, test } from "@playwright/test";

test("has heading", async ({ page }) => {
  await page.goto("/");

  expect(await page.locator("h1").innerText()).toContain(
    "David Murdoch's Portfolio",
  );
});
