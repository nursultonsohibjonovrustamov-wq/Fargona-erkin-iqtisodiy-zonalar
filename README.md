# Farg‘ona tumani Invest

Faqat **Farg‘ona tumani** uchun besh tilli investitsiya portali. Tashkilot: **Farg‘ona tumani hokimligi**. Farg‘ona shahri, Qo‘qon, Quvasoy yoki boshqa tumanlar ushbu katalogga kirmaydi.

## Buyurtmachi hujjati asosidagi kontent — 2026-10-12

Bosh sahifa va `/zones` endi taqdim etilgan DOCX ma’lumotiga asoslangan. Alohida sahifalar: Qo‘qon EIZning Farg‘ona tumani filiali, Gulpiyon, Yangi Asr va Markaz. Uchta yangi zona uchun loyiha maydoni umumiy zona maydoni deb ko‘rsatilmaydi. Mavjud5zona hujjatda nomsiz, umumiy ko‘rsatkichlar sifatida berilgan.

Manba `/documents/fergana-district-industrial-zones.docx` orqali yuklanadi. Qabul qilingan sana2026-10-12, hujjat sanasi va tashqi rasmiy tasdiq tekshirilmagan. Arifmetik nomuvofiqliklar: `docs/ACTUAL-DATA-REVIEW.md`. Ular qat’iy KPI sifatida chiqarilmagan.

Oldingi66tuman auksion loti `/auctions`da alohida snapshot bo‘lib qoladi. Bu lotlar yangi nomlangan zonalarga mos deb avtomatik biriktirilmagan. Narx ijara haqi emas. Baza va backend hali yo‘q; murojaat kartasi localStorage/faylga saqlanadi, tashkilotga yuborilmaydi.

Kontent manbasi: `src/catalog-data.js`; sahifalar: `src/official-zones.jsx`; tekshiruvlar: `tests/official.spec.js`. Tayyorlash: `npm run build`, `python3 tools/build-portable.py`, `python3 tools/package-demo.py`.

## Bitta faylli taqdimot

`artifacts/Fargona-sayt-demo.html` — barcha kod, uslub va tasvirlarni o‘z ichiga olgan interaktiv sayt. Uni yuklab olib Chrome yoki Edge’da ochish mumkin. Alohida npm yoki Python serveri talab etilmaydi. Til, sahifa, qidiruv va loyiha kartasi funksiyalari saqlangan. Tayyorlash: `npm run build`, keyin `python3 tools/build-portable.py`.

Cloud Chromium xavfsizlik siyosati `file://` ochilishini bloklaydi. Shu sababli bitta faylning funksiyalari HTTP orqali, hash navigatsiyasi bilan tekshirildi; qo‘shimcha tarmoq resurslari so‘ralmadi. Foydalanuvchining Windows kompyuterida ochilishi bu muhitdan tekshirilmagan.

## Ishga tushirish

Talablar: Node.js 20.19+ yoki 22.12+; tayyorlangan muhitda Node.js 24.19.0, npm 11.9.0 mavjud.

```bash
cd /workspace/Fargona-erkin-iqtisodiy-zonalar
npm ci --cache /workspace/.npm-cache --no-audit --no-fund
npm run dev -- --port 5173
```

Production yig‘ilishi va mahalliy tekshiruvi:

```bash
npm run build
npm run preview -- --port 4173
```

`dist/` statik xostingga joylashtiriladi. Xosting **barcha mavjud faylga mos kelmagan sahifa so‘rovlarini `index.html`ga yo‘naltirishi** kerak: til va ichki sahifalar URL orqali ochiladi. Masalan, Nginx: `try_files $uri $uri/ /index.html;`. Production API hozircha mavjud emas. `vite preview` mahalliy tekshiruv vositasi, production server emas.

## Tayyor funksiyalar

- O‘zbek, ingliz, rus, turk va soddalashtirilgan xitoy tillari. Til almashtirish joriy sahifani saqlaydi; hujjat tili va meta tavsif ham yangilanadi.
- Bosh sahifa, tuman, sanoat lotlari katalogi va alohida lot sahifalari, investor yo‘l xaritasi, materiallar, uchta qo‘llanma, aloqa va maxfiylik sahifalari.
- Portal ichida qidiruv, mobil menyu, ochiladigan savol-javoblar va brauzer tarixi bilan navigatsiya.
- Har tilda yuklab olinadigan UTF-8 matnli qo‘llanmalar; qo‘llanmalarni chop etish yoki brauzer orqali PDF saqlash.
- Majburiy maydon va email tekshiruvi bilan loyiha kartasi; brauzerda saqlash, faylga yuklash va o‘chirish.
- Mahalliy SVG tasvirlar, tashqi shrift yoki rasm xizmatiga bog‘lanmagan dizayn, reduced-motion va print uslublari.

**Forma tashkilotga xat yoki ariza yubormaydi.** Bu holat forma oldida va natijada ochiq yozilgan. Ma’lumot serverga yuborilmaydi. Saqlangan karta umumiy qurilmada o‘chirilishi kerak.

## Tekshiruv

```bash
npm test
npx playwright test
```

Brauzer testlari muhitdagi `/usr/bin/chromium`dan foydalanadi. Boshqa muhitda `playwright.config.js`dagi executablePath moslashtiriladi yoki Playwright’ning rasmiy brauzeri o‘rnatiladi.

`npm test`: tarjima kalitlari, bo‘sh matnlar, ro‘yxat uzunliklari, qidiruv indeksi va tilga bog‘liq URLlar.

Brauzer testlari: 5 tilda 11 sahifa × 2 ekran o‘lchami, JS xatolari, gorizontal chiqib ketish, til almashish va tarix, qidiruv, forma validatsiyasi, saqlash/o‘chirish, haqiqiy fayl yuklanishi, FAQ, mobil menyu, 404 hamda asosiy sahifalarda avtomatik WCAG AA tekshiruvi.

Natijalar: `docs/VALIDATION.md`. Taqdimot rasmlari: `artifacts/home-desktop.png` va `artifacts/home-mobile.png`.

## Mazmunni o‘zgartirish

- `src/i18n.js`: besh tildagi barcha foydalanuvchi matnlari va qidiruv ma’lumotlari.
- `src/main.jsx`: sahifalar va funksiyalar.
- `src/styles.css`: dizayn va moslashuvchan ko‘rinish.
- `public/valley.svg`: Farg‘ona vodiysidan ilhomlangan mualliflik sxematik tasviri; haqiqiy obyekt fotosurati emas.

Raqamlar, yer mavjudligi, infrastruktura quvvati, soliq imtiyozlari, telefon/email va rasmiy yangiliklar o‘ylab topilmagan. Rasmiy manbalarga avvalgi cheklov olib tashlangan va manbalar tekshirildi. Joriy to‘liq tuman reyestri va buyurtmachi tasdig‘i hali olinmagan; manbali vaqtinchalik katalog ulardan ajratilgan.

## Loyihaning keyingi bosqichi

Tadqiqot holati, sayt tuzilmasi, dizayn qarorlari, taqdimot ssenariysi va rasmiy nashr uchun zarur tasdiqlar `docs/PROJECT-PLAN.md`da.
