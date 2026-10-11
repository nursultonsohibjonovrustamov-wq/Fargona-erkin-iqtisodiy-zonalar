# Fergana District catalog validation

The final scope is **Farg‘ona tumani / Fergana District**. Fergana city, Kokand, Quvasoy and other districts are excluded. This replaces the earlier provincial demonstration and its validation results.

## Content checks

- 66 unique E-auksion snapshot records contain `Farg\`ona tumani` in their original addresses: 32 small industrial category records and 34 youth industrial category records.
- Two category cards organize those records. They are not represented as two legally established economic zones, and category totals do not imply that every parcel belongs to one legally defined zone.
- Initial price and deposit retain the source numeric values; deposits match the listed percentage to rounding precision. No initial price is labeled annual rent or final sale price.
- Parcel area remains unknown rather than inheriting a zone/category area. Lease rights, utilities and current availability require separate official confirmation.
- Dates are identified as platform-displayed times. An unsupported UTC offset is not added.
- Actual official lot links and source photographs are shown. Recheck current terms on the official lot before making a decision.

## Automated coverage

`tests/catalog.spec.js` checks every source record's district address, category, unique ID, starting price, deposit arithmetic and official lot link. In all five languages it opens both category detail pages at desktop/mobile widths, then checks maximum-price, minimum-price and youth-category property details on mobile, including exact formatted source prices/deposits, dates, source links and loaded images.

Other cases verify actual category and price-range filtering/reset, old provincial URLs returning a recoverable 404, language switching, the tablet menu, overflow and selected automated WCAG AA checks on the directory and a property detail.

Human translation approval, legal conditions, cadastral measurements, current availability and photograph usage permission remain review items before official publication.

## Final result

On 11 October 2026, `npx playwright test tests/catalog.spec.js` completed against the district-only catalog: **10 passed in 32.4 seconds**. No browser exceptions or document overflow occurred in the checked views. The two selected automated accessibility analyses returned zero violations. This result covers the final district revision; earlier province-suite counts are superseded.
