const puppeteer = require("puppeteer");

describe("Google", () => {
  beforeAll(async () => {
    const context = browser.defaultBrowserContext();
    await context.overridePermissions("http://127.0.0.1:8080", ["geolocation"]);
  });

  it("Posição de Pirenópolis de incluir Goiás e Brasil", async () => {
    await page.setGeolocation({ latitude: -16, longitude: -49 });
    await page.goto("http://127.0.0.1:8080");
    await expect(page).toMatch("Pirenópolis");
    await expect(page).toMatch("Goiás");
    await expect(page).toMatch("Brasil");
  });

  it("Posição de Goiânia de incluir Goiás e Brasil", async () => {
    await page.setGeolocation({ latitude: -16.69, longitude: -49.27 });
    await page.goto("http://127.0.0.1:8080");
    await expect(page).toMatch("Goiânia");
    await expect(page).toMatch("Goiás");
    await expect(page).toMatch("Brasil");
  });
});
