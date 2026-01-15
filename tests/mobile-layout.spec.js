const { test, expect } = require("@playwright/test");

const pages = ["./", "how-it-works/", "book/", "privacy/"];

const getOverflowWidths = () => ({
  documentScrollWidth: document.documentElement.scrollWidth,
  documentClientWidth: document.documentElement.clientWidth,
  bodyScrollWidth: document.body.scrollWidth
});

test.describe("mobile layout", () => {
  for (const path of pages) {
    test(`no horizontal scroll on ${path}`, async ({ page }) => {
      const response = await page.goto(path);
      await page.waitForLoadState("networkidle");

      expect(response).not.toBeNull();
      expect(response.status()).toBeLessThan(400);

      const widths = await page.evaluate(getOverflowWidths);
      const maxAllowed = widths.documentClientWidth + 1;

      expect(widths.documentScrollWidth).toBeLessThanOrEqual(maxAllowed);
      expect(widths.bodyScrollWidth).toBeLessThanOrEqual(maxAllowed);
    });
  }
});
