import { readFile } from "node:fs/promises";
import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { copy, languages, articleSlugs } from "../src/i18n.js";
const routes = [
  "/",
  "/region",
  "/zones",
  "/zones/district-youth-industry",
  "/investor",
  "/resources",
  ...articleSlugs.map((x) => "/resources/" + x),
  "/contact",
  "/privacy",
];
for (const { code } of languages)
  test(`${code}: all pages render at desktop and mobile widths`, async ({
    page,
  }) => {
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 900 });
      for (const route of routes) {
        await page.goto(`/${code}${route}`);
        await expect(page.locator("main h1")).toBeVisible();
        await expect(page.locator("html")).toHaveAttribute("lang", code);
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth,
          ),
        ).toBeTruthy();
        expect(await page.locator("main").innerText()).not.toContain(
          "undefined",
        );
      }
    }
    expect(errors).toEqual([]);
  });
test("language switching preserves current page and history", async ({
  page,
}) => {
  await page.goto("/uz/investor");
  for (const { code, label } of languages.slice(1)) {
    await page.locator(".language-button").click();
    await page.getByRole("button", { name: label, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`/${code}/investor$`));
    await expect(page.locator("h1")).toHaveText(copy[code].investorTitle);
  }
  await page.goBack();
  await expect(page).toHaveURL(/\/tr\/investor$/);
});
test("search finds articles, handles empty results and keyboard closing", async ({
  page,
}) => {
  await page.goto("/en/");
  await page.getByRole("button", { name: "Search", exact: true }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.getByPlaceholder(copy.en.searchPlaceholder).fill("legal");
  await page.locator(".search-results a").first().click();
  await expect(page).toHaveURL(/legal-check$/);
  await page.getByRole("button", { name: "Search", exact: true }).click();
  await page
    .getByPlaceholder(copy.en.searchPlaceholder)
    .fill("zzzznonexistent");
  await expect(page.getByText(copy.en.noResults)).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
});
test("form validates, persists, exports real data and deletes the saved project", async ({
  page,
}) => {
  await page.goto("/en/contact?sector=2");
  await expect(page.locator("#sector")).toHaveValue("2");
  await page.getByRole("button", { name: copy.en.submit }).click();
  await expect(page.getByRole("alert")).toHaveText(copy.en.required);
  await page.locator("#name").fill("Test Investor");
  await page.locator("#email").fill("invalid");
  await page.locator("#message").fill("Manufacturing project");
  await page.locator("#consent").check();
  await page.getByRole("button", { name: copy.en.submit }).click();
  await expect(page.getByRole("alert")).toHaveText(copy.en.invalidEmail);
  await page.locator("#email").fill("investor@example.com");
  await page.getByRole("button", { name: copy.en.submit }).click();
  await expect(page.getByRole("status")).toContainText(copy.en.formSaved);
  const download = page.waitForEvent("download");
  await page.getByRole("button", { name: copy.en.export }).click();
  const exported = await download;
  expect(exported.suggestedFilename()).toBe("fergana-project-en.txt");
  const content = await readFile(await exported.path(), "utf8");
  expect(content).toContain("Test Investor");
  expect(content).toContain("Manufacturing project");
  expect(content).toContain("Electrical products");
  await page.reload();
  await expect(page.locator("#name")).toHaveValue("Test Investor");
  await expect(page.locator("#consent")).not.toBeChecked();
  await page.getByRole("button", { name: copy.en.clear }).click();
  await expect(page.locator("#name")).toBeEmpty();
  expect(
    await page.evaluate(() => localStorage.getItem("fergana-project")),
  ).toBeNull();
});
test("mobile menu, sector links, FAQ and checklist downloads work", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/uz/");
  await page.getByRole("button", { name: copy.uz.menu, exact: true }).click();
  await page
    .locator(".navigation")
    .getByText(copy.uz.nav[3], { exact: true })
    .click();
  await expect(page).toHaveURL(/\/uz\/investor$/);
  await expect(page.locator(".navigation")).not.toBeVisible();
  await page.getByText(copy.uz.faqs[0], { exact: true }).click();
  await expect(
    page.getByText(copy.uz.faqAnswers[0], { exact: true }),
  ).toBeVisible();
  const download = page.waitForEvent("download");
  await page.getByRole("button", { name: copy.uz.checklist }).click();
  expect((await download).suggestedFilename()).toBe("fergana-checklist-uz.txt");
  await page.goto("/uz/");
  await page.locator(".sector-card").nth(1).click();
  await expect(page.locator("#sector")).toHaveValue("1");
});
test("unknown routes show a recoverable 404", async ({ page }) => {
  await page.goto("/en/missing-page");
  await expect(page.locator("h1")).toHaveText(copy.en.notFound);
  await page.locator("main").getByRole("link", { name: copy.en.home }).click();
  await expect(page).toHaveURL(/\/en\/$/);
});
test("key pages meet automated WCAG AA checks", async ({ page }) => {
  for (const route of [
    "/uz/",
    "/en/contact",
    "/ru/investor",
    "/zh/resources",
    "/tr/zones/district-youth-industry",
  ]) {
    await page.goto(route);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      results.violations.map((x) => ({
        id: x.id,
        description: x.description,
        nodes: x.nodes.map((n) => n.target),
      })),
    ).toEqual([]);
  }
});
test("capture presentation views", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/uz/");
  await page.screenshot({ path: "artifacts/home-desktop.png", fullPage: true });
  await page.screenshot({ path: "artifacts/demo-desktop.png" });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/uz/");
  await page.screenshot({ path: "artifacts/home-mobile.png", fullPage: true });
  await page.screenshot({ path: "artifacts/demo-mobile.png" });
});

test("form offers export when browser storage is unavailable", async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, "localStorage", {
      get() {
        throw new DOMException("Storage disabled", "SecurityError");
      },
    });
  });
  await page.goto("/en/contact");
  await page.locator("#name").fill("Offline Investor");
  await page.locator("#email").fill("offline@example.com");
  await page.locator("#message").fill("A project without browser storage");
  await page.locator("#consent").check();
  await page.getByRole("button", { name: copy.en.submit }).click();
  await expect(page.getByRole("status")).toContainText(copy.en.storageError);
  const wait = page.waitForEvent("download");
  await page.getByRole("button", { name: copy.en.export }).click();
  const file = await wait;
  expect(await readFile(await file.path(), "utf8")).toContain(
    "Offline Investor",
  );
});
