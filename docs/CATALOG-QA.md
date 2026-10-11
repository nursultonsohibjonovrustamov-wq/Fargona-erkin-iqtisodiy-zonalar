# Catalog validation

The catalog must distinguish economic zones from individual land/building objects and auction lots. A zone area is not an available parcel area. A listed starting price is not a final sale price or rental rate.

## Required review

- Open catalog and zone/object details in Uzbek, Russian, English, Turkish and Chinese at desktop and mobile widths.
- Change filters and verify actual results change; verify an empty result and reset.
- Check data status and source links beside available facts. Unknown area, rental terms, utilities or auction prices must remain explicitly unknown.
- Auction records require a direct official lot URL and a separately labeled starting price, deposit, date and status before publishing any amount. Expired records must not appear available.
- Suggested future uses must remain suggestions; permitted activity requires confirmation.
- Illustrative images must not imply they depict a specific parcel. Published photos require provenance and usage permission.
- Zone/detail links, language switching and browser back must preserve the selected entity.

Automated results will be recorded after the new catalog is integrated. They do not establish legal validity, land availability, current prices or translation approval.

## Browser coverage

`tests/catalog.spec.js` exercises seven independently addressed territory/zone records at 1440px and 390px in all five languages (70 detail/viewport combinations). Fourteen official auction snapshot records are independently opened in all five languages (70 detail/language combinations). Amount assertions compare the original numeric starting price and deposit with the browser's locale formatting; they do not reuse the application formatting function. This also handles Chromium/Node differences in Uzbek locale support.

The suite checks actual area/starting-price filter results and reset, language switching, historical-area explanations and source links, unknown zone-level prices, direct official lot links, image loading, source dates and absence of an unsupported UTC offset. Automated WCAG AA checks cover the English directory and one zone detail.

The seven catalog cards are not seven independent free economic zones: they include the Kokand FEZ, its Quvasoy territory, and separately labeled small industrial zones. Historical allocated areas are not current available parcel areas. The fourteen auction records are an E-auksion snapshot, not a commitment that the land remains available or that final auction/rental conditions are unchanged.

## Final result

On 11 October 2026, `npx playwright test tests/catalog.spec.js` completed against the final seven-zone/fourteen-lot catalog: **13 passed in 2.3 minutes**. No browser exceptions or horizontal overflow were observed in the zone checks. Both automated accessibility analyses returned zero violations for the selected pages. All fourteen lot images loaded on all five language detail checks.

This result is limited to the tested demo workflow. Full human translation review, current auction availability, cadastral measurements, legal rights, parcel-level utilities, lease terms and photo licensing remain review items before official publication.

Two additional targeted cases passed: the largest-price lot `26008379` has no document overflow at 390px and 1024px in English/Russian, and the Russian tablet header menu opens and navigates to the catalog at 1024px with its longer label. Together with the preceding complete run, **15 catalog cases passed**. The initial tablet-test selector was corrected from a nonexistent class to the existing `.mobile-toggle`; no application change was required.
