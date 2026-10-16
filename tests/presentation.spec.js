import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import {
  presentationZones,
  presentationPortfolio,
  presentationSource,
} from "../src/presentation-data.js";
import { languages } from "../src/i18n.js";

test("presentation areas retain source meaning, zero values and unknown commercial terms", () => {
  expect(presentationZones.map((z) => z.id)).toEqual([
    "oqbilol",
    "vodil-qizilqorgon",
    "guzar",
    "yangi-asr-industrial",
  ]);
  expect(presentationZones.map((z) => z.areaHa)).toEqual([
    351, 24.4, 11.4, 8.7,
  ]);
  expect(presentationZones.reduce((sum, z) => sum + z.areaHa, 0)).toBeCloseTo(
    395.5,
    8,
  );
  expect(presentationPortfolio.totalAreaHa).toBe(395.5);
  expect(presentationZones[0].irrigatedAreaHa).toBe(0);
  expect(presentationZones[0].soilFertilityScore).toBe(0);
  expect(presentationZones[0].outerMapReserveAreaHa).toBe(1200);
  for (const z of presentationZones) {
    expect(z.price).toBeNull();
    expect(z.pricePerHa).toBeNull();
    expect(z.leaseTerm).toBeNull();
    expect(z.matchedAuctionLotIds).toEqual([]);
  }
});

for (const { code } of languages)
  test(`${code}: four main territories and their original maps work on desktop and mobile`, async ({
    page,
  }) => {
    test.setTimeout(90000);
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`/${code}/zones`);
      await expect(page.getByTestId("presentation-zone-card")).toHaveCount(4);
      await expect(page.getByTestId("property-card")).toHaveCount(0);
      await expect(page.getByTestId("official-zone-card")).toHaveCount(0);
      for (const zone of presentationZones) {
        await page.goto(`/${code}/zones/${zone.id}`);
        await expect(page.locator("main h1")).toHaveText(zone.names[code]);
        await expect(page.getByTestId("presentation-zone-facts")).toBeVisible();
        const map = page.locator(`main img[src="${zone.mapUrl}"]`).first();
        await expect(map).toBeVisible();
        await expect
          .poll(() =>
            map.evaluate((img) => img.complete && img.naturalWidth > 0),
          )
          .toBe(true);
        expect(
          await map.evaluate((img) => getComputedStyle(img).objectFit),
        ).toBe("contain");
        await expect(
          page.locator(`main a[href="${presentationSource.url}"]`).first(),
        ).toBeVisible();
        await expect(page.getByTestId("property-card")).toHaveCount(0);
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
        ).toBe(true);
        expect(await page.locator("main").innerText()).not.toMatch(
          /undefined|\[object Object\]/,
        );
      }
    }
    expect(errors).toEqual([]);
  });

test("original map files and source presentation are real assets and downloadable", async ({
  page,
  request,
}) => {
  const doc = await request.get(presentationSource.url);
  expect(doc.status()).toBe(200);
  expect((await doc.body()).subarray(0, 2).toString()).toBe("PK");
  for (const zone of presentationZones) {
    const image = await request.get(zone.mapUrl);
    expect(image.status()).toBe(200);
    expect(image.headers()["content-type"]).toMatch(/^image\//);
    expect((await image.body()).length).toBeGreaterThan(10000);
  }
  await page.goto("/uz/zones/oqbilol");
  const download = page.waitForEvent("download");
  await page
    .locator(`main a[href="${presentationSource.url}"][download]`)
    .first()
    .click();
  expect((await download).suggestedFilename()).toMatch(/\.pptx$/);
});

test("language switch retains presentation territory identity", async ({
  page,
}) => {
  await page.goto("/uz/zones/yangi-asr-industrial");
  for (const { code, label } of languages.slice(1)) {
    await page.locator(".language-button").click();
    await page.getByRole("button", { name: label, exact: true }).click();
    await expect(page).toHaveURL(
      new RegExp(`/${code}/zones/yangi-asr-industrial$`),
    );
    await expect(page.locator("main h1")).toHaveText(
      presentationZones[3].names[code],
    );
  }
});

test("portfolio and territory meet selected accessibility checks", async ({
  page,
}) => {
  for (const path of ["/uz/zones", "/en/zones/oqbilol"]) {
    await page.goto(path);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  }
});

for (const { code } of languages)
  test(`${code}: district map from the presentation loads without overflow`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`/${code}/region`);
    const image = page.locator('img[src="/district-presentation-map.jpg"]');
    await expect(image).toBeVisible();
    await expect
      .poll(() => image.evaluate((i) => i.complete && i.naturalWidth > 0))
      .toBe(true);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  });
