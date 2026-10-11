# Loyihaning tahlili va bajarilgan ishlar

## 2026-10-11 — yangi talab bo‘yicha yangilanish

Bosh sahifa zona/obyekt katalogiga o‘zgartirildi. 7 ta zona/hudud kartasi va 14 haqiqiy E-auksion loti mavjud, har biri alohida sahifaga ega. Rasmiy manbalarga tarmoq ruxsati ochildi; tekshiruv dalillari `RESEARCH-ZONES.md`da. Quyidagi dastlabki reja va eski 403 natijalari birinchi bosqich tarixidir; hozirgi holatni yangi tadqiqot va `CATALOG-QA.md` belgilaydi. Amaldagi maydon/ijara/lot huquqlaridan tasdiqlanmaganlari ochiq belgilanadi. Rasmiy tasdiq va ommaviy hosting nashri hali bajarilmagan.


Sana: 2026-10-11. Taqdimot: 2026-10-12 (Asia/Tashkent).

## 1. Tadqiqot

Maqsad: Farg‘ona viloyatidagi investitsiya imkoniyatlarini tushunarli ko‘rsatish va investorni loyiha muhokamasiga tayyorlash. Asosiy auditoriya: xorijiy va mahalliy investorlar, korxonalar, taqdimotni ko‘radigan rahbariyat.

Tashkilot nomi foydalanuvchi ko‘rsatmasi bilan “Farg‘ona tumani hokimligi”. Portal viloyatni qamrab oladi. Tumanning butun viloyat nomidan rasmiy ma’lumot e’lon qilish vakolati tekshirilmagan; taqdimot yorlig‘i ko‘rinadi.

### Manbalar reyestri

| Manba | Kerakli ma’lumot | Tekshiruv natijasi |
|---|---|---|
| https://fergana.uz/ | Viloyat, mas’ul tashkilotlar, zonalar va rasmiy aloqa | HTTPS proksi: 403, mazmun o‘qilmadi |
| https://invest.gov.uz/ | Investor jarayoni va rasmiy ma’lumot | HTTPS proksi: 403, mazmun o‘qilmadi |
| https://lex.uz/ | Maxsus iqtisodiy zonalar qonuni, amaldagi huquqiy hujjatlar | HTTPS proksi: 403, mazmun o‘qilmadi |
| https://www.jafza.ae/ | Investor uchun navigatsiya va zona taqdimoti namunasi | HTTPS proksi: 403; joriy sayt tahlili bajarilmadi |
| https://dmcc.ae/ | Investor yo‘li va ko‘p tilli portal namunasi | HTTPS proksi: 403; joriy sayt tahlili bajarilmadi |

JAFZA va DMCC xalqaro erkin zona portallari sifatida tadqiqotga tanlangan. Ularning joriy dizayni yoki funksiyalari tekshirilgan deb ta’riflanmaydi. Navoiy/Angren portalini tekshirish bajarilmadi. Platforma cheklovi sababli rasmiy statistik va huquqiy tekshiruv yakunlanmagan.

### Mazmun siyosati

- Tasdiqlanmagan investitsiya hajmi, maydon, korxonalar soni va ish o‘rinlari ko‘rsatilmaydi.
- Qo‘qon zonasi ishchi tanishtiruv sifatida mavjud. Nashr uchun amaldagi huquqiy maqom, direksiya va to‘liq regional ro‘yxat tasdiqlanadi.
- Sektorlar loyiha muhokamasi yo‘nalishlari; rezidentlar uchun rasmiy ruxsat etilgan faoliyatlar ro‘yxati emas.
- Joylashuv SVG sxema; kadastr, aniq geografik kontur yoki bo‘sh yerlar GIS xaritasi emas.
- Yangiliklar o‘rniga mazmuni to‘liq tayyorlangan amaliy qo‘llanmalar beriladi. O‘ylab topilgan rasmiy voqea, sana va qarorlar yo‘q.
- Huquqiy sahifada kafolatlangan imtiyozlar emas, ularni tekshirish tartibi beriladi.

## 2. Mazmun va sahifalar

Har sahifa 5 tilda ishlaydi. Asosiy URL modeli: `/uz/`, `/en/`, `/ru/`, `/tr/`, `/zh/`.

| Sahifa | Vazifasi |
|---|---|
| `/` | Taklif, hududiy imkoniyatlar, zona, sektorlar, investor yo‘li, materiallar |
| `/region` | Viloyat, logistika, hamkorlik, infratuzilmani baholash |
| `/zones` | Zona katalogi va sxema |
| `/zones/kokand` | Qo‘qon bo‘yicha tanishtiruv, tekshiriladigan talablar, aloqa yo‘li |
| `/investor` | 4 qadam, qonunchilik, yuklab olinadigan ro‘yxat, FAQ |
| `/resources` | Amaliy materiallar va rasmiy manbalar |
| `/resources/checklist` | Birinchi uchrashuv uchun ro‘yxat |
| `/resources/project-concept` | Loyiha konsepsiyasi |
| `/resources/legal-check` | Huquqiy tekshiruv yo‘riqnomasi |
| `/contact` | Loyiha kartasi: mahalliy saqlash, eksport va o‘chirish |
| `/privacy` | Ma’lumotning qayerda saqlanishi va o‘chirilishi |

Til o‘zgarganda sahifa saqlanadi. Qidiruv tanlangan tilning to‘liq matni bo‘yicha ishlaydi. Barcha navigatsiya havolalari haqiqiy URL; yangi tab va to‘g‘ridan-to‘g‘ri ochish mumkin. Xostingda SPA fallback talab etiladi.

## 3. Prototip va dizayn

Bosh sahifa ketma-ketligi: asosiy taklif → afzalliklar → viloyat → zona va sxema → sohalar → investor qadamlar → materiallar → loyiha muhokamasi.

Vazmin yashil, och krem va oltin ranglar; sarlavhalarda serif; aniq kartalar, sodda ikonalar va oq bo‘shliqlar. Mahalliy mualliflik SVG tasvirlar tashqi servisga bog‘liq emas. Tasvirlar illyustratsiya deb belgilanadi; haqiqiy Qo‘qon obyektining fotosurati sifatida berilmaydi. Rasmiy gerb yoki logotip yasalmagan.

Mobil versiyada menyu, kartalar, forma, matn va xarita moslashadi. Klaviatura fokusi, skip link, native dialog/FAQ, reduced-motion va print rejimlari mavjud.

## 4. Ishlab chiqish

React 19 + Vite 7. Backendga ehtiyoji yo‘q statik taqdimot. Katta biznes jarayoni, CRM yoki investor kabineti kiritilmagan. Kontent manbalari ajratilgan; keyingi bosqichda CMS/API ulash uchun sahifa tuzilmasi saqlanadi.

Formaning xatti-harakati:

1. Majburiy maydonlar va email tekshiriladi.
2. Foydalanuvchi rozilik bildiradi.
3. Karta faqat brauzerda saqlanadi; serverga yuborilmagani ochiq aytiladi.
4. UTF-8 fayl yuklanadi yoki saqlangan karta o‘chiriladi.

Taqdimotga shaxsiy yoki maxfiy hujjatlarni kiritish kerak emas. Testlarda sun’iy ma’lumot ishlatilgan.

## 5. Tekshiruv

Bajarilgan va bajarilmagan tekshiruvlar `VALIDATION.md`da alohida qayd etiladi. Avtomatik tarjima to‘liqligi testi tarjimaning lingvistik yoki yuridik ekspertizasi o‘rnini bosmaydi. Texnik sinovdan keyin ham rus, ingliz, turk va xitoy matnlarini tegishli mutaxassis tasdiqlaydi.

## 6. Taqdimot va rasmiy tasdiq

### Tavsiya etilgan ko‘rsatish tartibi

1. O‘zbek bosh sahifasi: portalning maqsadi va viloyat qamrovi.
2. Zona katalogi → Qo‘qon sahifasi: karta, sxema va tekshiriladigan shartlar.
3. Investor yo‘l xaritasi: jarayon, FAQ va ro‘yxatni yuklab olish.
4. Shu sahifada ingliz, rus, turk va xitoy tillariga o‘tish.
5. Portal qidiruvi orqali huquqiy qo‘llanmani topish.
6. Telefon ko‘rinishi: menyu, kartalar va forma.
7. Sun’iy loyiha kartasini saqlash, eksport qilish va o‘chirish.

Rasmiy tasdiq foydalanuvchi va mas’ul tashkilot tomonidan qilinadi; bu vazifa davomida tasdiq olingan deb da’vo qilinmaydi.

### Haqiqiy ishga o‘tish uchun aniq zarur ma’lumotlar

- Buyurtmachi tashkilot vakolati, rasmiy nom, logotip va domen.
- Viloyatdagi barcha iqtisodiy zonalarning tasdiqlangan ro‘yxati va har birining amaldagi maqomi.
- Zona direksiyasi, telefon, email, manzil va arizalar uchun rasmiy qabul kanali.
- Tasdiqlangan statistika, kommunikatsiya imkoniyatlari va loyiha bo‘yicha bo‘sh yer ma’lumotlari.
- Amaldagi huquqiy hujjatlar va imtiyozlar bo‘yicha yuridik ekspertiza.
- Besh tilning lingvistik tekshiruvi va atamalar lug‘ati.
- Foydalanish huquqi tasdiqlangan haqiqiy fotosuratlar.
- CMS tahrirchilari, yangilash mas’ullari, ariza API/email integratsiyasi.
- Ma’lumotlar operatori, maxfiylik qoidalari, saqlash muddati, himoya va spamga qarshi choralar.
- Production xosting, HTTPS, zaxira nusxalari va rasmiy qabul sinovi.

Taqdimot ishlaydigan mahsulot namunasidir. Rasmiy ma’lumotlar, backend murojaat yetkazilishi va davlat nomidan nashr qilish tasdig‘i hali mavjud emas.
