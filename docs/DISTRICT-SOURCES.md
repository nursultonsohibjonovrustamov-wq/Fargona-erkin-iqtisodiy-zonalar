# Farg‘ona tumani: tekshirilgan manbalar

Tekshiruv: 2026-10-11 (Asia/Tashkent). Qamrov faqat Farg‘ona TUMANI. Farg‘ona shahri, Qo‘qon, Quvasoy va boshqa tumanlar bu katalogga kirmaydi. Oldingi viloyat tadqiqoti ushbu tuman katalogi uchun qo‘llanmaydi.

## Hudud va zona

E-auksion rasmiy lug‘ati https://e-auksion.uz/api/front/dictionaries/get-areas-by-region?region=6 : Farg‘ona tumani `id=88`, SOATO `1730233`. Farg‘ona shahri `id=74`, SOATO `1730401`; ular boshqa hududlar.

https://lex.uz/docs/7278617 — PQ-454, 24.12.2024, infratuzilma dasturidagi 84-band: “Farg‘ona tumani «Yuqori Archa» MFYda tashkil etilgan yoshlar sanoat va tadbirkorlik zonasi” uchun kirish yo‘llarini qurish ko‘rsatilgan. Dasturdagi yo‘l uzunligi 2,1 km; 2023–2025 davri. Bu yo‘l qurilishi bajarilganligini yoki infratuzilma ishlayotganligini tasdiqlamaydi. Manba zonaning mavjud nomi/turi va tumanini tasdiqlaydi. Zona jami maydoni bu manbadan aniqlanmadi.

## Haqiqiy auksion katalogi

`POST https://e-auksion.uz/api/front/lots`, frontendning standart katalog payloadi: `regions_id=6`, `areas_id=88`, `confiscant_groups_id=6`, `sort_type=1`, kategoriya va sahifa ko‘rsatilgan. Kategoriya lug‘ati: https://e-auksion.uz/api/front/dictionaries/get-confiscant-categories .

- 73 — “Erkin iqtisodiy zonalari uchun”: 0 joriy katalog loti. Bu tumanda EIZ yo‘qligini isbotlamaydi.
- 72 — “Kichik sanoat zonalari uchun”: 32 lot, ikki sahifa o‘qildi.
- 69 — “Yoshlar sanoat zonalari uchun”: 34 lot, ikki sahifa o‘qildi.
- 46 — “Tadbirkorlik va shaharsozlik uchun”: 337 lot; faqat birinchi sahifa o‘qildi. Ushbu umumiy lotlar sanoat zonalari deb ko‘rsatilmaydi.

72 va 69 toifasining barcha 66 loti manzilida Farg‘ona tumani, Yukori Archa MFY ko‘rsatilgan. 66 lot — 66 alohida zona degani emas. Yoshlar zonasi nomi LexUZ bilan tasdiqlangan; KSZ lotlarini MFY bo‘yicha guruhlash mumkin, ammo alohida KSZning rasmiy nomi/hudud chegarasi tasdiqlanmadi.

Boshlang‘ich narx oylik ijara emas; sotilayotgan huquq turi lot tafsilotlarida tasdiqlanishi kerak. `term_month=60` bo‘lib to‘lash muddati, ijara muddati emas. Holat IDsi 2, to‘liq nomi olinmagan. Vaqt platforma matni; API timezone yorlig‘i bermaydi. Narxlar 11-oktabr nusxasi, avtomatik jonli yangilanish emas. Rasmiy havola shakli frontend JS bilan tasdiqlangan: `/lot-view?lot_id=<id>`.

| Toifa | Lot | Uchastka nomi | Boshlang‘ich narx, UZS | Zakalat, UZS | Savdo vaqti | Rasmiy manba |
|---|---|---|---:|---:|---|---|
| KSZ | 25940339 | KA1730233045/45-1 yer uchastkasi | 33,989,512.50 | 5,098,426.88 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940339 |
| KSZ | 26098454 | KA1730233045/46-1 yer uchastkasi | 30,762,900.00 | 4,614,435.00 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098454 |
| KSZ | 26098456 | KA1730233045/47-1 yer uchastkasi | 30,762,900.00 | 4,614,435.00 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098456 |
| KSZ | 26098458 | KA1730233045/80-1 yer uchastkasi | 32,403,937.50 | 4,860,590.63 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098458 |
| KSZ | 26098455 | KA1730233045/81-1 yer uchastkasi | 32,403,937.50 | 4,860,590.63 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098455 |
| KSZ | 26098457 | KA1730233045/60-1 yer uchastkasi | 33,989,512.50 | 5,098,426.88 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098457 |
| KSZ | 26098459 | KA1730233045/82-1 yer uchastkasi | 45,514,293.75 | 4,551,429.38 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098459 |
| KSZ | 26098461 | KA1730233045/75-1 yer uchastkasi | 32,403,937.50 | 4,860,590.63 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098461 |
| KSZ | 26098462 | KA1730233045/77-1 yer uchastkasi | 32,403,937.50 | 4,860,590.63 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098462 |
| KSZ | 26098460 | KA1730233045/78-1 yer uchastkasi | 32,403,937.50 | 4,860,590.63 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098460 |
| KSZ | 26098463 | KA1730233045/79-1 yer uchastkasi | 32,403,937.50 | 4,860,590.63 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098463 |
| KSZ | 25940332 | KA1730233045/76-1 yer uchastkasi | 32,403,937.50 | 4,860,590.63 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940332 |
| KSZ | 26098476 | KA1730233045/68-1 yer uchastkasi | 31,816,687.50 | 4,772,503.13 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098476 |
| KSZ | 26098466 | KA1730233045/69-1 yer uchastkasi | 31,816,687.50 | 4,772,503.13 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098466 |
| KSZ | 26098464 | KA1730233045/74-1 yer uchastkasi | 32,403,937.50 | 4,860,590.63 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098464 |
| KSZ | 25940333 | KA1730233045/73-1 yer uchastkasi | 31,816,687.50 | 4,772,503.13 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940333 |
| KSZ | 26098474 | KA1730233045/70-1 yer uchastkasi | 31,816,687.50 | 4,772,503.13 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098474 |
| KSZ | 26098465 | KA1730233045/72-1 yer uchastkasi | 31,816,687.50 | 4,772,503.13 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098465 |
| KSZ | 26098467 | KA1730233045/71-1 yer uchastkasi | 31,992,862.50 | 4,798,929.38 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098467 |
| KSZ | 25940334 | KA1730233045/87-1 yer uchastkasi | 34,283,137.50 | 5,142,470.63 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940334 |
| KSZ | 25940335 | KA1730233045/88-1 yer uchastkasi | 34,283,137.50 | 5,142,470.63 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940335 |
| KSZ | 25940336 | KA1730233045/89-1 yer uchastkasi | 34,283,137.50 | 5,142,470.63 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940336 |
| KSZ | 25940338 | KA1730233045/90-1 yer uchastkasi | 34,283,137.50 | 5,142,470.63 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940338 |
| KSZ | 25940341 | KA1730233045/136-1 yer uchastkasi | 19,631,250.00 | 4,907,812.50 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940341 |
| KSZ | 25940337 | KA1730233045/137-1 yer uchastkasi | 19,631,250.00 | 4,907,812.50 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940337 |
| KSZ | 25940340 | KA1730233045/138-1 yer uchastkasi | 19,631,250.00 | 4,907,812.50 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940340 |
| KSZ | 25940347 | KA1730233045/139-1 yer uchastkasi | 19,631,250.00 | 4,907,812.50 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940347 |
| KSZ | 25940343 | KA1730233045/145-1 yer uchastkasi | 18,000,000.00 | 4,500,000.00 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940343 |
| KSZ | 25940345 | KA1730233045/152-1 yer uchastkasi | 31,614,086.25 | 4,742,112.94 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940345 |
| KSZ | 26098475 | KA1730233045/156-1 yer uchastkasi | 30,762,900.00 | 4,614,435.00 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098475 |
| KSZ | 26098468 | KA1730233045/158-1 yer uchastkasi | 29,353,500.00 | 4,403,025.00 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098468 |
| KSZ | 25909071 | KA1730233045/155-1 yer uchastkasi | 30,762,900.00 | 4,614,435.00 | 15.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25909071 |
| Yoshlar zonasi | 26098429 | KA1730233045/100-1 yer uchastkasi | 34,283,137.50 | 5,142,470.63 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098429 |
| Yoshlar zonasi | 26098430 | KA1730233045/64-1 yer uchastkasi | 31,816,687.50 | 4,772,503.13 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098430 |
| Yoshlar zonasi | 26098432 | KA1730233045/65-1 yer uchastkasi | 31,816,687.50 | 4,772,503.13 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098432 |
| Yoshlar zonasi | 26098431 | KA1730233045/66-1 yer uchastkasi | 32,022,225.00 | 4,803,333.75 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098431 |
| Yoshlar zonasi | 26098436 | KA1730233045/67-1 yer uchastkasi | 31,846,050.00 | 4,776,907.50 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098436 |
| Yoshlar zonasi | 26098434 | KA1730233045/109-1 yer uchastkasi | 31,878,348.75 | 4,781,752.31 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098434 |
| Yoshlar zonasi | 26098435 | KA1730233045/110-1 yer uchastkasi | 31,878,348.75 | 4,781,752.31 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098435 |
| Yoshlar zonasi | 26098433 | KA1730233045/111-1 yer uchastkasi | 31,878,348.75 | 4,781,752.31 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098433 |
| Yoshlar zonasi | 26098453 | KA1730233045/112-1 yer uchastkasi | 31,878,348.75 | 4,781,752.31 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098453 |
| Yoshlar zonasi | 26098437 | KA1730233045/113-1 yer uchastkasi | 31,878,348.75 | 4,781,752.31 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098437 |
| Yoshlar zonasi | 26098438 | KA1730233045/114-1 yer uchastkasi | 31,878,348.75 | 4,781,752.31 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098438 |
| Yoshlar zonasi | 25940302 | KA1730233045/115-1 yer uchastkasi | 31,878,348.75 | 4,781,752.31 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940302 |
| Yoshlar zonasi | 25940303 | KA1730233045/116-1 yer uchastkasi | 31,878,348.75 | 4,781,752.31 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940303 |
| Yoshlar zonasi | 25940304 | KA1730233045/117-1 yer uchastkasi | 31,878,348.75 | 4,781,752.31 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940304 |
| Yoshlar zonasi | 25940306 | KA1730233045/118-1 yer uchastkasi | 31,878,348.75 | 4,781,752.31 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940306 |
| Yoshlar zonasi | 25940308 | KA1730233045/119-1 yer uchastkasi | 31,799,070.00 | 4,769,860.50 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940308 |
| Yoshlar zonasi | 25940309 | KA1730233045/120-1 yer uchastkasi | 31,402,676.25 | 4,710,401.44 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940309 |
| Yoshlar zonasi | 26098439 | KA1730233045/123-1 yer uchastkasi | 32,991,187.50 | 4,948,678.13 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098439 |
| Yoshlar zonasi | 26098452 | KA1730233045/121-1 yer uchastkasi | 33,901,425.00 | 5,085,213.75 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098452 |
| Yoshlar zonasi | 26098440 | KA1730233045/122-1 yer uchastkasi | 33,460,987.50 | 5,019,148.13 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098440 |
| Yoshlar zonasi | 25940310 | KA1730233045/125-1 yer uchastkasi | 32,080,950.00 | 4,812,142.50 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940310 |
| Yoshlar zonasi | 26098441 | KA1730233045/126-1 yer uchastkasi | 31,640,512.50 | 4,746,076.88 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098441 |
| Yoshlar zonasi | 26098442 | KA1730233045/127-1 yer uchastkasi | 31,200,075.00 | 4,680,011.25 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098442 |
| Yoshlar zonasi | 26098444 | KA1730233045/128-1 yer uchastkasi | 27,865,800.00 | 4,179,870.00 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098444 |
| Yoshlar zonasi | 26098443 | KA1730233045/124-1 yer uchastkasi | 32,550,750.00 | 4,882,612.50 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098443 |
| Yoshlar zonasi | 25940307 | KA1730233045/91-1 yer uchastkasi | 34,283,137.50 | 5,142,470.63 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940307 |
| Yoshlar zonasi | 25940311 | KA1730233045/92-1 yer uchastkasi | 34,283,137.50 | 5,142,470.63 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940311 |
| Yoshlar zonasi | 26098446 | KA1730233045/93-1 yer uchastkasi | 66,179,621.25 | 6,617,962.13 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098446 |
| Yoshlar zonasi | 26098445 | KA1730233045/94-1 yer uchastkasi | 29,144,700.00 | 4,371,705.00 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098445 |
| Yoshlar zonasi | 25940313 | KA1730233045/95-1 yer uchastkasi | 31,023,900.00 | 4,653,585.00 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940313 |
| Yoshlar zonasi | 25940314 | KA1730233045/96-1 yer uchastkasi | 31,023,900.00 | 4,653,585.00 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940314 |
| Yoshlar zonasi | 25940315 | KA1730233045/97-1 yer uchastkasi | 31,023,900.00 | 4,653,585.00 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940315 |
| Yoshlar zonasi | 25940312 | KA1730233045/99-1 yer uchastkasi | 34,283,137.50 | 5,142,470.63 | 19.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=25940312 |
| Yoshlar zonasi | 26098447 | KA1730233045/151-1 yer uchastkasi | 36,000,843.75 | 5,400,126.56 | 26.10.2026 10:00 | https://e-auksion.uz/lot-view?lot_id=26098447 |

## Cheklov va rasm

Lot tafsilotlari endpointi HTTP 428 “Proof of work required” qaytargan; himoya chetlab o‘tilmagan. Maydon, ijara muddati, huquq turi, faoliyat va kommunikatsiya quvvatlari shu katalogdan olinmaydi. Hozircha buyurtmachi tasdig‘i kerak.

Haqiqiy lot illyustratsiyasi (fotografiya deb tekshirmasdan belgilanmasin):
- KSZ lot25940339: https://media.e-auksion.uz/i/bac162666443bf9fb290b55e19e3b914_S.jpg
- Yoshlar lot26098429: https://media.e-auksion.uz/i/184a16896b53b70afd1625e4cdded2cd_S.jpg

Oldingi Qo‘qon 2019 foto Farg‘ona tumaniga tegishli emas va tuman obyekt fotosurati sifatida qo‘llanmaydi. Lot maydoni va zona umumiy maydoni alohida maydonlarda saqlanishi kerak; tasdiqlanmagan sonlar kiritilmaydi.
