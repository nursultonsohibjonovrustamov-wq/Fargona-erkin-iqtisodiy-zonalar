# Yangi asosiy portfolio — 2026-10-16

6 Node va 46 noyob brauzer testi: jami 52 test o‘tdi. Asosiy regressiya32, yangi taqdimot14 (shu jumladan5tilda tuman xaritasi). MustaqilHTML yakuniy to‘rtta hudud, xaritalar va auksionga o‘tish bilan qayta o‘tdi. Build muvaffaqiyatli. Tanlangan sahifalar accessibility tekshiruvlarida0buzilish. Desktop/mobil ko‘rinish vizual tekshirildi.

Asosiy katalog yangi4hudud va395.5ha jami bilan yangilandi. OriginalPPTX va4xarita yuklanishi,0qiymatlar saqlanishi, noma’lum narx/ijara, barcha5til, manbalarni ajratish va eski arxiv sahifalari tekshirildi. Tafsilot: PRESENTATION-QA.md. Soliq/tarif da’volari tasdiqlangan huquqiy shart deb ko‘rsatilmaydi. Ikkinchi kattaPPTX transfer cheklovi sabab o‘qilmadi. Quyida oldingi natijalar tarix sifatida saqlanadi.

---

# Hujjat asosidagi ma’lumotlar — 2026-10-12

6 Node va32brauzer testi o‘tdi: jami38. Yangi8test hujjatdagi loyiha maydonlari umumiy zona maydoniga aylantirilmasligi, lotlarga soxta bog‘lanmasligi,4zona sahifasining5tilda desktop/mobil ko‘rinishi, aslDOCX yuklanishi, alohida66lotkatalogi va accessibilityni tekshiradi. Hujjat source-first; rasmiy tasdiq va hujjat sanasi noma’lum. Aniq narx, ijara va zona fotosuratlari berilmagan joylar ochiq belgilangan. Build va mustaqilHTML tekshiruvi muvaffaqiyatli.

Asl hujjat o‘zgartirilmagan va DOCX sifatida taqdim etilgan. Uchta nomuvofiqlik ACTUAL-DATA-REVIEW.md da qayd etilgan. Ko‘rinish desktop/mobil tasvirlari orqali ham tekshirildi. Quyida oldingi bosqich natijalari.

---

# Rasmiy uslubdagi dizayn yangilanishi — 2026-10-11

Sayt to‘q ko‘k, oq va cheklangan oltin aksentlar bilan qayta ishlangan. Hokimlik nomi asosiy brend; bosh sahifa yangi ikki ustunli axborot paneli, aniq katalog/qo‘llanma tugmalari va manbali lotlar soni bilan tuzilgan. Kategoriya kartalaridagi katta rasm kutish bloklari qisqartirilgan. Barcha sahifalar, formalar va footer bir xil uslubga moslangan.

24 ta brauzer testi tekshirildi. Dastlab ikki accessibility tekshiruvida kichik yozuv kontrasti 4.38:1 chiqdi; rang tuzatildi va ikkala test qayta o‘tdi. Qolgan22test muvaffaqiyatli, yakuniy mustaqilHTML ham qayta tekshirildi. Telefon va desktop tasvirlari vizual ko‘rildi; bo‘lim sarlavhasining chetga chiqishi tuzatildi. Bu dizayn buyurtmachi tomonidan tasdiqlangan degani emas.

---

# Farg‘ona tumani: yakuniy tekshiruv — 2026-10-11

Joriy tuman versiyasida jami 30 ta noyob test o‘tdi: 6 Node, 13 asosiy brauzer, 10 tuman katalogi va 1 mustaqil HTML testi. Birinchi sinovda yangilangan matnlar qidiruvda umumiy sahifani qo‘llanmadan oldin ko‘rsatgani aniqlandi. Sarlavhaga mos natijalar birinchi chiqadigan qilib tuzatildi; ikkala ta’sirlangan test qayta o‘tdi. Parallel runnerlarning umumiy test-results papkasiga yozishi trace fayli kolliziyasini ham keltirdi; qayta sinovda yo‘q.

66 lotning har biri Farg‘ona tumani manzili bilan tekshirildi, 32 kichik sanoat va 34 yoshlar sanoat toifasiga ajratildi. Beshta tilda tuman/category sahifalari, mobil ko‘rinish, narxlar, zakalat, suratlar, filtrlar, eski boshqa-hudud URLlarining 404 javobi tekshirildi. Mustaqil HTMLdagi barcha66lot suratlari ichiga joylangan holda yuklandi. Production build muvaffaqiyatli.

Quyida saqlangan eski viloyat natijalari joriy saytga tatbiq etilmaydi.

---

> HUDUDIY TUZATISH: avvalgi viloyat qamrovi foydalanuvchi talabiga mos kelmagan. Joriy sayt faqat Farg‘ona tumani uchun. Quyidagi viloyat ma’lumotlari va test sonlari tarixiy; joriy ma’lumotlar DISTRICT-SOURCES.md va CATALOG-QA.md da.

# Katalog yangilanishi — 2026-10-11

Yakuniy natija: 35 ta test muvaffaqiyatli: 6 ta Node testi, 13 ta asosiy brauzer testi, 15 ta katalog testi va 1 ta mustaqil HTML testi. Katalog sinovlari 7 ta zona/hudud sahifasini 5 tilda desktop va mobil ekranlarda, 14 ta lot sahifasini 5 tilda tekshirdi. Eng katta narxli lot va ruscha menyu 390/1024 px ekranlarda ham tekshirildi. Katalog accessibility tekshiruvlarida 0 avtomatik buzilish qayd etildi.

Lex.uz, President.uz va E-auksion manbalari ushbu bosqichda Internet orqali tekshirildi. Avvalgi bosqichdagi 403 cheklovi haqidagi yozuvlar tarixiy. E-auksion lot tafsilotlari endpointi 428 himoya javobini qaytardi; himoya chetlab o'tilmadi. Ochilgan katalog API ma’lumotlaridan 14 ta boshlang‘ich narx, zakalat, manzil, auksion vaqti va surat olindi. Ijara muddati va lot maydoni tasdiqlanmagan. Manbalar: RESEARCH-ZONES.md.

Mustaqil HTMLda 14 ta lot surati ichiga joylangan va yuklanishi, lot sahifasiga o‘tish, til, qidiruv va forma funksiyalari tekshirildi. Bulut brauzeridagi file:// siyosati sabab HTML HTTP orqali sinovdan o‘tkazildi. Production build muvaffaqiyatli. Netlify autentifikatsiyasi 401 javob berdi; ommaviy domen ochilmadi.

Quyidagi yozuvlar oldingi bosqich tekshiruvlarini saqlaydi.

---

# Tekshiruv natijalari

2026-10-11. Tayyorlangan muhit: Node.js 24.19.0, npm 11.9.0, Python 3.12.14, tizim Chromium brauzeri. Yakuniy toolchain: Vite 7.3.7, React 19.2.0.

## O‘tgan tekshiruvlar

| Tekshiruv | Natija |
|---|---|
| `npm ci --cache /workspace/.npm-cache --no-audit --no-fund` | Lockfile asosida takroriy o‘rnatish muvaffaqiyatli |
| `npm run build` | Production yig‘ilishi muvaffaqiyatli |
| `npm audit --cache /workspace/.npm-cache` | 0 ta ma’lum zaiflik qayd etildi |
| `npm test` | 6 test o‘tdi; 0 xato, 0 tashlab ketilgan |
| `PORTAL_TEST_BASE_URL=http://127.0.0.1:4173 npx playwright test` | Yig‘ilgan production versiyada 13 test o‘tdi; 0 xato, 0 tashlab ketilgan |
| Dev server HTTP tekshiruvi | 200; rivojlantirish entry fayli bor |
| Production asosiy va ichki URLlar | 200: `/`, `/uz/`, `/en/investor`, `/zh/zones/kokand` |
| Production favicon | 200 va `image/svg+xml` |
| Mavjud bo‘lmagan asset | To‘g‘ri 404; HTML bilan noto‘g‘ri almashtirilmaydi |

Brauzer tekshiruvi 5 til × 11 sahifa × 2 ekran o‘lchamini (1440 va 390 px) qamrab oldi: 110 sahifa/ekran kombinatsiyasi. Barcha sahifalarda sarlavha ochildi, to‘g‘ri hujjat tili mavjud, JavaScript xatosi va gorizontal chiqib ketish aniqlanmadi.

Funksional tekshiruvlar:

- Joriy sahifani saqlagan holda til almashtirish va brauzerda ortga qaytish.
- Qidiruvdan qo‘llanmaga o‘tish, natijasiz qidiruv va Escape orqali yopish.
- Bo‘sh/invalid forma xatolari, to‘g‘ri karta saqlash, qayta ochganda saqlangan ma’lumot.
- Eksport faylining haqiqiy ism, loyiha matni va tanlangan sektorni o‘z ichiga olishi.
- Saqlangan kartani o‘chirish va rozilikning avtomatik qayta tiklanmasligi.
- Brauzer localStorage ishlamasa tushunarli xabar va faylga eksport qilish imkoniyati.
- 375 px mobil menyu, navigatsiya, sektor tanlash va FAQ ochilishi.
- Qo‘llanma faylining yuklanishi.
- Noma’lum sahifada 404 mazmuni va bosh sahifaga qaytish.
- Uzbek bosh sahifa, ingliz aloqa, rus investor, xitoy materiallar va turk zona sahifasida avtomatik WCAG 2 A/AA va 2.1 AA tekshiruvlari: 0 aniqlangan buzilish.
- Desktop va telefon taqdimot rasmlari yaratildi va vizual ko‘rib chiqildi.

Avtomatik WCAG tekshiruvi to‘liq inson tomonidan accessibility auditi degani emas. Safari/Firefox, iOS/Android haqiqiy qurilmalari va professional tarjimon tekshiruvi bajarilmagan.

## Topilgan va tuzatilgan muammolar

1. Dastlab npm keshi foydalanuvchining yozib bo‘lmaydigan home katalogiga murojaat qildi. Yozish mumkin bo‘lgan `/workspace/.npm-cache` qo‘llandi.
2. Yordamchi matnlarda kontrast pastligi topildi. Ranglar to‘qroq qilindi; qayta tekshiruvdan o‘tdi.
3. Dastlabki Vite versiyasida dependency auditi ma’lum dev server zaifliklarini topdi. Vite 7.3.7ga yangilandi, eski server to‘xtatildi, qayta o‘rnatish/yig‘ish va yakuniy brauzer sinovi o‘tdi. Yakuniy audit: 0.

## Tekshirilmagan tashqi talablar

- Rasmiy manba HTTPS so‘rovlari proksi tomonidan 403 bilan bloklandi. Manba mazmuni, amaldagi zona ro‘yxati, huquqiy maqom va statistika tekshirilgani da’vo qilinmaydi.
- JAFZA va DMCC joriy saytlarining qiyosiy tahlili tarmoq cheklovi sabab yakunlanmadi.
- Tarmoq domenlari, `install_script` va `start_skill` konfiguratsiya loyihasiga muvaffaqiyatli saqlandi. Bu faol muhit sozlamasi yoki nashr qilingan snapshot degani emas. Sozlamalarni ko‘rib saqlash va muhitni Publish qilish foydalanuvchi tomonidan bajariladi; yangi taskdan tiklanish tekshirilmagan.
- Public domen/xosting, haqiqiy email/API, rasmiy telefon, rasmiy logo, tarjima va tashkilot tasdig‘i mavjud emas.

Saytning texnik taqdimot versiyasi tekshirildi. Rasmiy davlat portali sifatida ishga tushirish holati hali tasdiqlanmagan.

## Bitta HTML orqali ko‘rsatish (qo‘shimcha tekshiruv)

`artifacts/Fargona-sayt-demo.html` yaratildi. Uning hamma JavaScript, CSS va tasvirlari ichiga joylangan. Qo‘shimcha Playwright testi sahifalar, til almashtirish, yangilashdan keyin sahifani saqlash, forma, faylga eksport va qidiruvni tekshirdi: 1 test o‘tdi, 0 JavaScript xato, 0 qo‘shimcha tashqi resurs so‘rovi.

Cloud Chromium `file://` navigatsiyasini `ERR_BLOCKED_BY_ADMINISTRATOR` bilan blokladi. Siyosat chetlab o‘tilmadi; bitta HTML HTTP orqali xizmat ko‘rsatilgan holda aynan hash navigatsiyasi bilan tekshirildi. Haqiqiy foydalanuvchi qurilmasida faylni ikki marta bosib ochish tekshirilmagan. Asosiy sayt kodlari saqlangan; muhit tiklanganidan keyin to‘xtagan demo serveri qayta ishga tushirildi va HTTP 200 olindi. Ommaviy domen nashr qilinmagan.
