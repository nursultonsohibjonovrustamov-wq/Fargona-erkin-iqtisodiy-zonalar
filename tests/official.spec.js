import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import {
  officialZones,
  districtReport,
  catalogProperties,
} from "../src/catalog-data.js";
import { languages } from "../src/i18n.js";

test("supplied project footprints are not falsely promoted to total zone areas or matched parcels", () => {
  expect(officialZones).toHaveLength(4);
  expect(officialZones[0].areaHa).toBe(57.82);
  expect(officialZones.slice(1).map((z) => z.areaHa)).toEqual([
    null,
    null,
    null,
  ]);
  expect(officialZones.slice(1).map((z) => z.allocatedProjectAreaHa)).toEqual([
    4.5, 7.3, 2.45,
  ]);
  expect(officialZones.map((z) => z.matchedAuctionLotIds)).toEqual([
    [],
    [],
    [],
    [],
  ]);
  expect(catalogProperties).toHaveLength(66);
  expect(districtReport.existingIndustrialZones.namesProvided).toBe(false);
  expect(districtReport.source.documentDate).toBeNull();
  expect(districtReport.discrepancies).toHaveLength(3);
});
for (const { code } of languages)
  test(`${code}: supplied district territories render and retain their identity`, async ({
    page,
  }) => {
    test.setTimeout(60000);
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`/${code}/zones`);
      await expect(page.getByTestId("official-zone-card")).toHaveCount(4);
      await expect(page.getByTestId("property-card")).toHaveCount(0);
      for (const zone of officialZones) {
        await page.goto(`/${code}/zones/${zone.id}`);
        await expect(page.locator("main h1")).toHaveText(zone.names[code]);
        await expect(page.getByTestId("official-project-facts")).toBeVisible();
        await expect(
          page.locator(
            'a[href="/documents/fergana-district-industrial-zones.docx"]',
          ),
        ).toBeVisible();
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
        ).toBe(true);
        expect(await page.locator("main").innerText()).not.toContain(
          "undefined",
        );
        await expect(page.getByTestId("property-card")).toHaveCount(0);
      }
    }
    expect(errors).toEqual([]);
  });
test("source document download and catalogue links work", async ({
  page,
  request,
}) => {
  const r = await request.get(
    "/documents/fergana-district-industrial-zones.docx",
  );
  expect(r.status()).toBe(200);
  const bytes = await r.body();
  expect(bytes.subarray(0, 2).toString()).toBe("PK");
  await page.goto("/uz/");
  const d = page.waitForEvent("download");
  await page
    .locator('a[href="/documents/fergana-district-industrial-zones.docx"]')
    .click();
  expect((await d).suggestedFilename()).toBe(
    "fergana-district-industrial-zones.docx",
  );
  await page.locator('a[href="/uz/auctions"]').click();
  await expect(page.getByTestId("property-card")).toHaveCount(66);
});
test("document overview and a named zone pass selected accessibility checks", async ({
  page,
}) => {
  for (const path of ["/uz/", "/en/zones/gulpiyon"]) {
    await page.goto(path);
    const r = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      r.violations.map((v) => ({
        id: v.id,
        targets: v.nodes.map((n) => n.target),
      })),
    ).toEqual([]);
  }
});
