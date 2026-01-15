const { defineConfig } = require("@playwright/test");

const port = Number(process.env.PLAYWRIGHT_PORT || 3000);
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const normalizedBasePath =
  rawBasePath === "/" ? "" : rawBasePath.replace(/\/$/, "");
const baseURL = `http://127.0.0.1:${port}${normalizedBasePath}`;

module.exports = defineConfig({
  testDir: "tests",
  timeout: 30000,
  retries: process.env.CI ? 1 : 0,
  use: {
    baseURL,
    trace: "retain-on-failure"
  },
  webServer: {
    command: "node scripts/serve-out.js",
    port,
    reuseExistingServer: !process.env.CI
  },
  projects: [
    {
      name: "chromium-mobile",
      use: {
        browserName: "chromium",
        viewport: { width: 390, height: 844 },
        isMobile: true,
        hasTouch: true,
        deviceScaleFactor: 2
      }
    }
  ]
});
