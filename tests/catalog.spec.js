import {test, expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import {catalogZones, catalogProperties} from '../src/catalog-data.js';
import {languages} from '../src/i18n.js';

for (const {code} of languages) {
  test(`${code}: zone directory and all separate zone pages work on mobile and desktop`, async ({page}) => {
    test.setTimeout(60000);
    const errors=[];
    page.on('pageerror', error=>errors.push(error.message));
    for (const width of [1440,390]) {
      await page.setViewportSize({width,height:900});
      await page.goto(`/${code}/zones`);
      await expect(page.getByTestId('zone-card')).toHaveCount(catalogZones.length);
      for (const zone of catalogZones) {
        const card=page.getByTestId('zone-card').filter({has:page.getByRole('heading',{name:zone.names[code],exact:true})});
        await expect(card).toBeVisible();
        await card.locator(`a[href="/${code}/zones/${zone.id}"]`).click();
        await expect(page).toHaveURL(new RegExp(`/${code}/zones/${zone.id}$`));
        await expect(page.locator('main h1')).toHaveText(zone.names[code]);
        await expect(page.getByTestId('data-status').first()).toBeVisible();
        await expect(page.getByTestId('auction-details')).toBeVisible();
        await expect(page.locator('html')).toHaveAttribute('lang',code);
        if(zone.areaHa!==null) {
          await expect(page.getByText(zone.areaNote[code],{exact:true})).toBeVisible();
          await expect(page.locator(`main a[href="${zone.sourceUrl}"]`)).toBeVisible();
        }
        expect(await page.locator('main').innerText()).not.toMatch(/undefined|NaN/);
        expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();
        await page.goBack();
        await expect(page.getByTestId('zone-card')).toHaveCount(catalogZones.length);
      }
    }
    expect(errors).toEqual([]);
  });
}

test('filters change actual zone results and reset an empty result',async ({page})=>{
  await page.goto('/en/zones');
  const filters=page.locator('.catalog-filters select');
  await expect(filters).toHaveCount(4);
  const price=filters.nth(3);
  await price.selectOption('high');
  await expect(page.getByTestId('property-card')).toHaveCount(catalogProperties.filter(p=>p.start_price>1e9).length);
  await price.selectOption('middle');
  await expect(page.getByTestId('property-card')).toHaveCount(catalogProperties.filter(p=>p.start_price>=1e8 && p.start_price<=1e9).length);
  await expect(page.getByTestId('zone-card')).toHaveCount(catalogZones.length);
  await price.selectOption('unknown');
  await expect(page.getByTestId('property-card')).toHaveCount(0);
  await filters.nth(2).selectOption('medium');
  await expect(page.getByTestId('zone-card')).toHaveCount(0);
  await page.getByRole('button',{name:'Reset filters',exact:true}).click();
  await expect(page.getByTestId('zone-card')).toHaveCount(catalogZones.length);
  await expect(page.getByTestId('property-card')).toHaveCount(catalogProperties.length);
  await expect(price).toHaveValue('all');
  await filters.nth(2).selectOption('small');
  await expect(page.getByTestId('zone-card')).toHaveCount(catalogZones.filter(z=>z.areaHa!==null && z.areaHa<10).length);
  await filters.nth(2).selectOption('large');
  await expect(page.getByTestId('zone-card')).toHaveCount(catalogZones.filter(z=>z.areaHa>100).length);
});

test('unknown auction facts stay unknown and zone and lot records are distinguished',async ({page})=>{
  for(const zone of catalogZones) {
    await page.goto(`/en/zones/${zone.id}`);
    await expect(page.getByText('A zone and its individual lots are different records. Conditions must be verified for each lot.')).toBeVisible();
    if(zone.initialPrice===null) {
      const price=page.locator('.catalog-summary .catalog-facts > div').filter({has:page.locator('dt',{hasText:'Starting price'})});
      await expect(price.locator('dd')).toHaveText('Not yet verified');
    }
    const auctions=page.getByTestId('auction-details');
    if(!zone.properties.length) {
      await expect(auctions.getByRole('heading',{name:'No verified lots are available yet.'})).toBeVisible();
      expect(await auctions.innerText()).not.toMatch(/\d[\d\s,.]*\s*(UZS|USD|so.m|сум|\$)/i);
    }
    await expect(auctions.locator('a[href="https://e-auksion.uz/"]')).toBeVisible();
  }
});

test('language switch retains selected zone and directory meets automated accessibility checks',async ({page})=>{
  const zone=catalogZones[0];
  await page.goto(`/uz/zones/${zone.id}`);
  for(const {code,label} of languages.slice(1)) {
    await page.locator('.language-button').click();
    await page.getByRole('button',{name:label,exact:true}).click();
    await expect(page).toHaveURL(new RegExp(`/${code}/zones/${zone.id}$`));
    await expect(page.locator('main h1')).toHaveText(zone.names[code]);
  }
  for(const route of ['/en/zones',`/en/zones/${zone.id}`]) {
    await page.goto(route);
    const results=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
    expect(results.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)}))).toEqual([]);
  }
});

for(const {code} of languages) test(`${code}: real auction lots preserve exact source amounts and snapshot status`,async ({page})=>{
  test.setTimeout(60000);
  await page.goto(`/${code}/zones`);
  await expect(page.getByTestId('property-card')).toHaveCount(catalogProperties.length);
  for(const lot of catalogProperties) {
    const card=page.getByTestId('property-card').filter({has:page.locator(`a[href="/${code}/properties/${lot.id}"]`)});
    await card.locator(`a[href="/${code}/properties/${lot.id}"]`).click();
    await expect(page).toHaveURL(new RegExp(`/${code}/properties/${lot.id}$`));
    await expect(page.locator('main h1')).toHaveText(lot.full_address);
    const facts=page.getByTestId('auction-details').locator('dd');
    const amounts=await page.evaluate(({code,start,deposit})=>{const locale={uz:'uz-UZ',ru:'ru-RU',en:'en-US',tr:'tr-TR',zh:'zh-CN'}[code];return [start,deposit].map(value=>new Intl.NumberFormat(locale,{maximumFractionDigits:2}).format(value)+' UZS')},{code,start:lot.start_price,deposit:lot.zaklad_summa});
    await expect(facts.nth(0)).toHaveText(amounts[0]);
    await expect(facts.nth(1)).toHaveText(`${amounts[1]} (${lot.zaklad_percent}%)`);
    await expect(facts.nth(2)).toContainText(lot.auction_date_str);
    expect(await facts.nth(2).innerText()).not.toContain('UTC+5');
    await expect(facts.nth(5)).toHaveText(lot.checkedAt);
    await expect(page.locator('.catalog-disclaimer')).toBeVisible();
    await expect(page.getByTestId('auction-details').locator(`a[href="${lot.sourceUrl}"]`)).toBeVisible();
    const img=page.locator(`main img[src="/lot-${lot.id}.jpg"]`);
    await expect(img).toBeVisible();
    expect(await img.evaluate(el=>el.complete&&el.naturalWidth>0)).toBeTruthy();
    await page.goBack();
  }
});

test('largest lot amounts fit mobile and tablet details in English and Russian',async ({page})=>{
  for(const code of ['en','ru']) for(const width of [390,1024]) {
    await page.setViewportSize({width,height:900});
    await page.goto(`/${code}/properties/26008379`);
    await expect(page.getByTestId('auction-details')).toBeVisible();
    await expect(page.getByTestId('auction-details').locator('dd').nth(0)).toBeVisible();
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();
  }
});

test('tablet header menu navigates with the longer catalog label',async ({page})=>{
  await page.setViewportSize({width:1024,height:900});
  await page.goto('/ru/');
  const menu=page.locator('.mobile-toggle');
  await expect(menu).toBeVisible();
  await menu.click();
  await page.locator('.navigation a[href="/ru/zones"]').click();
  await expect(page).toHaveURL(/\/ru\/zones$/);
  await expect(page.getByTestId('zone-card')).toHaveCount(catalogZones.length);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();
});
