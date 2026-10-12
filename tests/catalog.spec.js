import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { catalogZones, catalogProperties } from "../src/catalog-data.js";
import { languages, copy } from "../src/i18n.js";
const representatives = [
  catalogProperties.reduce((a, b) => (a.start_price > b.start_price ? a : b)),
  catalogProperties.reduce((a, b) => (a.start_price < b.start_price ? a : b)),
  catalogProperties.find((p) => p.category_id === 69),
];
const amountText = async (page, code, values) =>
  page.evaluate(
    ({ code, values }) =>
      values.map(
        (v) =>
          new Intl.NumberFormat(
            { uz: "uz-UZ", en: "en-US", ru: "ru-RU", tr: "tr-TR", zh: "zh-CN" }[
              code
            ],
            { maximumFractionDigits: 2 },
          ).format(v) + " UZS",
      ),
    { code, values },
  );

test("all 66 source records belong to Fergana DISTRICT and categories partition without duplicates", () => {
  expect(catalogProperties).toHaveLength(66);
  expect(new Set(catalogProperties.map((p) => p.id)).size).toBe(66);
  expect(catalogZones.map((z) => z.id)).toEqual([
    "district-small-industry",
    "district-youth-industry",
  ]);
  expect(catalogZones.map((z) => z.properties.length)).toEqual([32, 34]);
  for (const p of catalogProperties) {
    expect(p.full_address).toMatch(/Farg[`‘’']?ona tumani/i);
    expect(p.full_address).not.toMatch(
      /Farg[`‘’']?ona shahri|Quvasoy|Qo.qon|Dang.ara|Rishton/i,
    );
    expect([69, 72]).toContain(p.category_id);
    expect(p.sourceUrl).toBe(`https://e-auksion.uz/lot-view?lot_id=${p.id}`);
    expect(p.start_price).toBeGreaterThan(0);
    expect(p.zaklad_summa).toBeGreaterThan(0);
    expect(
      Math.abs(p.zaklad_summa - (p.start_price * p.zaklad_percent) / 100),
    ).toBeLessThanOrEqual(0.011);
    expect(p.areaHa).toBeNull();
    expect(catalogZones.find((z) => z.id === p.zoneId).properties).toContain(
      p.id,
    );
  }
});

for (const { code } of languages)
  test(`${code}: district categories, source amounts and separate property details`, async ({
    page,
  }) => {
    test.setTimeout(60000);
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`/${code}/auctions`);
      await expect(page.getByTestId("zone-card")).toHaveCount(2);
      await expect(page.getByTestId("property-card")).toHaveCount(66);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBeTruthy();
      for (const z of catalogZones) {
        await page
          .getByTestId("zone-card")
          .filter({
            has: page.getByRole("heading", {
              name: z.names[code],
              exact: true,
            }),
          })
          .locator(`a[href="/${code}/zones/${z.id}"]`)
          .click();
        await expect(page.locator("main h1")).toHaveText(z.names[code]);
        await expect(page.getByTestId("property-card")).toHaveCount(
          z.properties.length,
        );
        await expect(page.getByTestId("data-status").first()).toBeVisible();
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
        ).toBeTruthy();
        await page.goBack();
      }
    }
    await page.setViewportSize({ width: 390, height: 900 });
    for (const lot of representatives) {
      await page.goto(`/${code}/properties/${lot.id}`);
      await expect(page.locator("main h1")).toHaveText(lot.full_address);
      await expect(page.locator("html")).toHaveAttribute("lang", code);
      const facts = page.getByTestId("auction-details").locator("dd");
      const money = await amountText(page, code, [
        lot.start_price,
        lot.zaklad_summa,
      ]);
      await expect(facts.nth(0)).toHaveText(money[0]);
      await expect(facts.nth(1)).toHaveText(
        `${money[1]} (${lot.zaklad_percent}%)`,
      );
      await expect(facts.nth(2)).toContainText(lot.auction_date_str);
      expect(await facts.nth(2).innerText()).not.toContain("UTC+5");
      await expect(facts.nth(5)).toHaveText(lot.checkedAt);
      await expect(page.locator(".catalog-disclaimer")).toBeVisible();
      await expect(
        page
          .getByTestId("auction-details")
          .locator(`a[href="${lot.sourceUrl}"]`),
      ).toBeVisible();
      const image = page.locator(`main img[src="/lot-${lot.id}.jpg"]`);
      await expect(image).toBeVisible();
      expect(
        await image.evaluate((i) => i.complete && i.naturalWidth > 0),
      ).toBeTruthy();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBeTruthy();
    }
    expect(errors).toEqual([]);
  });

test("filters select district category and actual lot starting-price ranges", async ({
  page,
}) => {
  await page.goto("/en/auctions");
  const f = page.locator(".catalog-filters select");
  await expect(f).toHaveCount(4);
  await f.nth(0).selectOption("district-youth-industry");
  await expect(page.getByTestId("zone-card")).toHaveCount(1);
  await expect(page.getByTestId("property-card")).toHaveCount(34);
  await f.nth(0).selectOption("all");
  for (const [value, predicate] of [
    ["low", (p) => p.start_price < 1e8],
    ["middle", (p) => p.start_price >= 1e8 && p.start_price <= 1e9],
    ["high", (p) => p.start_price > 1e9],
  ]) {
    await f.nth(3).selectOption(value);
    await expect(page.getByTestId("property-card")).toHaveCount(
      catalogProperties.filter(predicate).length,
    );
  }
  await f.nth(3).selectOption("unknown");
  await expect(page.getByTestId("property-card")).toHaveCount(0);
  await f.nth(2).selectOption("small");
  await expect(page.getByTestId("zone-card")).toHaveCount(0);
  await page
    .getByRole("button", { name: "Reset filters", exact: true })
    .click();
  await expect(page.getByTestId("zone-card")).toHaveCount(2);
  await expect(page.getByTestId("property-card")).toHaveCount(66);
});

test("obsolete province zone and property URLs are unavailable", async ({
  page,
}) => {
  for (const route of [
    "/zones/kokand",
    "/zones/quvasoy",
    "/zones/furqat",
    "/properties/25804161",
    "/properties/26008379",
  ]) {
    await page.goto(`/en${route}`);
    await expect(page.locator("main h1")).toHaveText(copy.en.notFound);
    await expect(page.getByTestId("property-card")).toHaveCount(0);
  }
});

test("selected district detail survives language switching and tablet menu navigation", async ({
  page,
}) => {
  const z = catalogZones[0];
  await page.goto(`/uz/zones/${z.id}`);
  for (const { code, label } of languages.slice(1)) {
    await page.locator(".language-button").click();
    await page.getByRole("button", { name: label, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`/${code}/zones/${z.id}$`));
    await expect(page.locator("main h1")).toHaveText(z.names[code]);
  }
  await page.setViewportSize({ width: 1024, height: 900 });
  await page.goto("/ru/");
  await page.locator(".mobile-toggle").click();
  await page.locator('.navigation a[href="/ru/zones"]').click();
  await expect(page).toHaveURL(/\/ru\/zones$/);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBeTruthy();
});

test("district catalog and property pass selected automated accessibility checks", async ({
  page,
}) => {
  for (const route of [
    "/en/zones",
    `/en/properties/${representatives[0].id}`,
  ]) {
    await page.goto(route);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      results.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
    ).toEqual([]);
  }
});
