import { test, expect } from "@playwright/test";

test.describe("[e2e: navbar]", () => {
  test("desktop, home link", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "download" }).click();

    await expect(
      page.getByRole("heading", { name: "David Murdoch", exact: true }),
    ).not.toBeInViewport();

    await page.getByRole("link", { name: "home" }).click();

    await expect(
      page.getByRole("heading", { name: "David Murdoch", exact: true }),
    ).toBeInViewport();
  });

  test("desktop, named links", async ({ page }) => {
    await page.goto("/");

    const links = [
      "experience",
      "education",
      "projects",
      "interests",
      "download",
    ];

    for (const link of links) {
      await expect(
        page.getByRole("heading", { name: link }),
      ).not.toBeInViewport();

      await page.getByRole("link", { name: link }).click();

      await expect(page.getByRole("heading", { name: link })).toBeInViewport();
    }
  });
});
