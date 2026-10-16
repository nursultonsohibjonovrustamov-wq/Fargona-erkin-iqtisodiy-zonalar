# Taqdimot portfeli tekshiruvi — 2026-10-16

Manba: buyurtmachi bergan to‘qqiz slaydli PPTX; `docs/PRESENTATION-REVIEW-2026-10-16.md` mazmun auditi. Ushbu tekshiruv yangi to‘rtta asosiy hududni qamrab oladi. Oldingi DOCXdagi Yangi asr 7,3 ga loyiha maydoni yangi taqdimotdagi 8,7 ga hudud bilan birlashtirilmaydi.

Avtomatlashtirilgan tekshiruv: `tests/presentation.spec.js`. Bajarilgan qamrov: 9 test; besh tilda 1440 va 390 piksel ko‘rinishda katalog va to‘rtta tafsilot sahifasi; original xaritalarning yuklanishi va kesilmasdan ko‘rsatilishi; PPTX asl ZIP/Office signaturasi va yuklash; til almashtirganda sahifa identifikatori; ikki sahifada WCAG A/AA tekshiruvi.

Ma’lumot talablari: 351 + 24,4 + 11,4 + 8,7 = 395,5 ga. Oqbilol sug‘oriladigan maydoni va boniteti manbada 0: yo‘q ma’lumotga almashtirilmaydi. Narx, gektar narxi, ijara muddati noma’lum. Oldingi 66 auksion loti yangi hudud kartalariga biriktirilmaydi. Oqbilol tashqi 1200 ga konturini taklif etilgan 351 ga maydon deb taqdim etish mumkin emas.

Natija: **9 test o‘tdi (17,0 soniya)**. Buyruq: `npx playwright test tests/presentation.spec.js --output=test-results-presentation --reporter=list`.

- 5 til × 2 ekran o‘lchami × (1 katalog + 4 hudud tafsiloti) = 50 sahifa/ekran tekshiruvi. Har bir katalogda aynan 4 yangi karta, eski DOCX kartalari va auksion lot kartalari yo‘qligi tekshirildi.
- 40 tafsilot holatida original xarita yuklandi, `object-fit: contain` va gorizontal ortiqcha kenglik yo‘qligi tasdiqlandi. Brauzer JavaScript xatolari qayd etilmadi.
- 4 JPEG manbasi HTTP 200, rasm Content-Type va haqiqiy hajm bilan tekshirildi. PPTX HTTP 200, `PK` signaturasi va brauzer yuklashi tekshirildi.
- Yangi Asr tafsilotida 4 ketma-ket til almashtirish hudud identifikatorini saqladi.
- O‘zbek katalogi va ingliz Oqbilol tafsilotida axe WCAG 2 A/AA va 2.1 AA tekshiruvlari: 0 buzilish.

Bu texnik tekshiruv. Tarjima ekspertizasi, huquqiy maqom, tijoriy tariflar yoki kadastr chegaralari mustaqil tasdiqlanmadi. Dastlabki integratsiya tugamasdan boshlangan urinishlar yakuniy hisobga kiritilmagan; yakuniy to‘liq tekshiruv UI/CSS tayyor bo‘lgandan keyin bajarilgan.

Yakuniy suite hudud turi va joylashuvi qo‘shilgach14testga kengaydi. Qo‘shimcha5test tuman xaritasini5tilda390pxda tekshiradi. Yakuniy14test va mustaqilHTML testi birgalikda15/15 o‘tdi (22.9s). Soliq muddatlari manbadagi oralig‘icha, eligibility kafolatisiz berilgan.
