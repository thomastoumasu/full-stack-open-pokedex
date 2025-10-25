const { test, describe, expect } = require("@playwright/test");

describe("Pokedex", () => {
  test("front page can be opened", async ({ page }) => {
    await page.goto("");
    await expect(page.getByText("ivysaur")).toBeVisible();
    await expect(page.getByText("Pokémon and Pokémon character names are trademarks of Nintendo.")).toBeVisible();
  });

  test("pokemon page can be navigated to", async ({ page }) => {
    await page.goto("");
    const locator = page.getByText("ivysaur");
    await expect(locator).toBeVisible();
    await locator.click();
    await expect(page.getByText("chlorophyll")).toBeVisible();
  });
});
