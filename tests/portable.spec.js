import { test, expect } from "@playwright/test";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { copy } from "../src/i18n.js";
test("offline HTML is an interactive website with working pages and languages", async ({
  page,
}) => {
  const errors = [];
  const external = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("request", (r) => {
    if (
      /^https?:/.test(r.url()) &&
      !r.url().startsWith("http://127.0.0.1:4173/portable-demo.html")
    )
      external.push(r.url());
  });
  const html = await readFile(
    resolve("artifacts/Fargona-sayt-demo.html"),
    "utf8",
  );
  await page.route("**/portable-demo.html", (r) =>
    r.fulfill({ contentType: "text/html", body: html }),
  );
  await page.goto("http://127.0.0.1:4173/portable-demo.html");
  await expect(page.locator("h1")).toHaveText(
    "Sanoat uchun to‘rtta hudud.\nInvestitsiya uchun aniq manzillar.",
  );
  await expect(page.getByTestId("presentation-zone-card")).toHaveCount(4);
  await page.locator('a[href="#/uz/zones/oqbilol"]').click();
  await expect(page.locator("main h1")).toHaveText("Oqbilol");
  await expect
    .poll(() =>
      page
        .locator("main .presentation-map img")
        .evaluate(
          (i) =>
            i.complete && i.naturalWidth > 0 && i.src.startsWith("data:image/"),
        ),
    )
    .toBeTruthy();
  await page.locator('a[href="#/uz/auctions"]').click();
  await expect(page.getByTestId("property-card")).toHaveCount(66);
  await expect
    .poll(() =>
      page
        .getByTestId("property-card")
        .locator("img")
        .evaluateAll((images) =>
          images.every(
            (i) =>
              i.complete &&
              i.naturalWidth > 0 &&
              i.src.startsWith("data:image/"),
          ),
        ),
    )
    .toBeTruthy();
  await page.locator('a[href="#/uz/properties/25940339"]').click();
  await expect(page).toHaveURL(/#\/uz\/properties\/25940339$/);
  await expect(page.locator("main h1")).toContainText("Yukori Archa");
  await expect
    .poll(() =>
      page
        .locator("main img")
        .evaluateAll(
          (images) =>
            images.length > 0 &&
            images.every(
              (i) =>
                i.complete &&
                i.naturalWidth > 0 &&
                i.src.startsWith("data:image/"),
            ),
        ),
    )
    .toBeTruthy();
  await page
    .locator(".navigation")
    .getByText(copy.uz.nav[0], { exact: true })
    .click();
  await page
    .locator(".navigation")
    .getByText(copy.uz.nav[3], { exact: true })
    .click();
  await expect(page.locator("h1")).toHaveText(copy.uz.investorTitle);
  await page.locator(".language-button").click();
  await page.getByRole("button", { name: "English", exact: true }).click();
  await expect(page.locator("h1")).toHaveText(copy.en.investorTitle);
  await page.reload();
  await expect(page.locator("h1")).toHaveText(copy.en.investorTitle);
  await page
    .locator(".navigation")
    .getByText(copy.en.nav[5], { exact: true })
    .click();
  await page.locator("#name").fill("Offline visitor");
  await page.locator("#email").fill("demo@example.com");
  await page.locator("#message").fill("Demonstration project");
  await page.locator("#consent").check();
  await page.getByRole("button", { name: copy.en.submit }).click();
  await expect(page.getByRole("status")).toContainText(copy.en.formSaved);
  const wait = page.waitForEvent("download");
  await page.getByRole("button", { name: copy.en.export }).click();
  expect((await wait).suggestedFilename()).toBe("fergana-project-en.txt");
  await page.getByRole("button", { name: copy.en.clear }).click();
  await page.getByRole("button", { name: copy.en.search, exact: true }).click();
  await page.getByPlaceholder(copy.en.searchPlaceholder).fill("legal");
  await page.locator(".search-results a").first().click();
  await expect(page.locator("h1")).toHaveText(copy.en.articles[2]);
  expect(external).toEqual([]);
  expect(errors).toEqual([]);
});
