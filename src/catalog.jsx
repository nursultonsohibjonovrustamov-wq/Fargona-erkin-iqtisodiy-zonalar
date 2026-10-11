import React, { useState } from "react";
import {
  MapPin,
  Factory,
  ArrowUpRight,
  FileText,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { catalogZones, catalogProperties } from "./catalog-data";
import "./catalog.css";
const dictionaries = {
  uz: [
    "Iqtisodiy zonalar katalogi",
    "Har bir hudud. Har bir imkoniyat.",
    "Zona haqidagi ma’lumotlar va alohida yer yoki bino lotlari bir joyda.",
    "Hudud",
    "Barchasi",
    "Qo‘qon",
    "Faoliyat yo‘nalishi",
    "Maydon",
    "Narx",
    "Ma’lumoti mavjud",
    "Ma’lumot kutilmoqda",
    "Tasdiqlanmagan",
    "Batafsil ko‘rish",
    "Umumiy maydon",
    "Ijara va foydalanish shartlari",
    "Infratuzilma",
    "Ruxsat etilgan faoliyat",
    "Kelajakdagi imkoniyatlar",
    "Auksion lotlari",
    "Boshlang‘ich narx",
    "Zakalat",
    "Savdo sanasi",
    "Lot holati",
    "Rasmiy manba",
    "Tekshirilgan sana",
    "Rasmlar",
    "Tasdiqlangan obyekt rasmlari hali taqdim etilmagan.",
    "Hozircha tekshirilgan lotlar yo‘q.",
    "Zona hududi va undagi alohida lotlar bir xil obyekt emas. Har bir lotning shartlari alohida tekshiriladi.",
    "Tasdiqlangan ijara muddati, to‘lov tartibi va huquq turi kiritiladi.",
    "Elektr, gaz, suv va yo‘l imkoniyatlari obyekt bo‘yicha tekshiriladi.",
    "Faoliyat turini tanlashdan oldin rasmiy shartlar bilan tanishing.",
    "Rivojlantirish takliflari rasmiy reja sifatida ko‘rsatilmaydi.",
    "Katalogga qaytish",
    "Natijalar topilmadi",
    "Filtrlarni tozalash",
    "Bu ro‘yxat viloyatdagi barcha zonalar ro‘yxati sifatida tasdiqlanmagan.",
    "Ko‘rsatilgan narx boshlang‘ich narxdir; yakuniy savdo narxi alohida beriladi.",
    "Lot raqami",
    "Joylashuv",
    "Yer va binolar",
    "Demo · ma’lumotlar rasmiy tasdiqlashga tayyorlanmoqda",
  ],
  ru: [
    "Каталог экономических зон",
    "Каждая территория. Каждая возможность.",
    "Информация о зоне и отдельные лоты земельных участков и зданий.",
    "Территория",
    "Все",
    "Коканд",
    "Вид деятельности",
    "Площадь",
    "Цена",
    "Данные доступны",
    "Ожидаются данные",
    "Не подтверждено",
    "Подробнее",
    "Общая площадь",
    "Условия аренды и использования",
    "Инфраструктура",
    "Разрешённая деятельность",
    "Будущие возможности",
    "Аукционные лоты",
    "Начальная цена",
    "Задаток",
    "Дата торгов",
    "Статус лота",
    "Официальный источник",
    "Дата проверки",
    "Фотографии",
    "Подтверждённые фотографии объекта ещё не предоставлены.",
    "Проверенные лоты пока отсутствуют.",
    "Территория зоны и отдельные лоты — разные объекты. Условия каждого лота проверяются отдельно.",
    "Будут указаны подтверждённые срок аренды, порядок оплаты и вид права.",
    "Электричество, газ, вода и дороги проверяются для каждого объекта.",
    "Перед выбором деятельности изучите официальные условия.",
    "Предложения по развитию не являются утверждённым планом.",
    "Назад в каталог",
    "Ничего не найдено",
    "Сбросить фильтры",
    "Этот перечень не подтверждён как полный список зон области.",
    "Начальная цена и итоговая цена торгов публикуются отдельно.",
    "Номер лота",
    "Расположение",
    "Земля и здания",
    "Демо · данные готовятся к официальному подтверждению",
  ],
  en: [
    "Economic zone directory",
    "Every location. Every opportunity.",
    "Zone information and individual land or building auction lots in one place.",
    "Location",
    "All",
    "Kokand",
    "Activity",
    "Area",
    "Price",
    "Data available",
    "Awaiting data",
    "Not yet verified",
    "View details",
    "Total area",
    "Lease and use conditions",
    "Infrastructure",
    "Permitted activities",
    "Future opportunities",
    "Auction lots",
    "Starting price",
    "Deposit",
    "Auction date",
    "Lot status",
    "Official source",
    "Verification date",
    "Photographs",
    "Verified photographs of the property have not been provided.",
    "No verified lots are available yet.",
    "A zone and its individual lots are different records. Conditions must be verified for each lot.",
    "Verified lease duration, payment terms and legal rights will appear here.",
    "Electricity, gas, water and road access require property-specific checks.",
    "Review official conditions before choosing an activity.",
    "Development suggestions are not approved plans.",
    "Back to directory",
    "No results",
    "Reset filters",
    "This directory is not confirmed as a complete list of regional zones.",
    "Starting prices and final auction prices are reported separately.",
    "Lot number",
    "Location",
    "Land and buildings",
    "Demo · information is being prepared for official confirmation",
  ],
  tr: [
    "Ekonomik bölge kataloğu",
    "Her konum. Her fırsat.",
    "Bölge bilgileri ve ayrı arazi veya bina ihale lotları.",
    "Konum",
    "Tümü",
    "Kokand",
    "Faaliyet",
    "Alan",
    "Fiyat",
    "Veri mevcut",
    "Veri bekleniyor",
    "Henüz doğrulanmadı",
    "Ayrıntıları gör",
    "Toplam alan",
    "Kiralama ve kullanım koşulları",
    "Altyapı",
    "İzin verilen faaliyetler",
    "Gelecek fırsatları",
    "İhale lotları",
    "Başlangıç fiyatı",
    "Teminat",
    "İhale tarihi",
    "Lot durumu",
    "Resmî kaynak",
    "Kontrol tarihi",
    "Fotoğraflar",
    "Doğrulanmış mülk fotoğrafları henüz sağlanmadı.",
    "Henüz doğrulanmış lot yok.",
    "Bölge ve içindeki lotlar ayrı kayıtlardır. Her lotun koşulları ayrı doğrulanır.",
    "Doğrulanmış kira süresi, ödeme koşulları ve hak türü eklenecek.",
    "Elektrik, gaz, su ve yol erişimi mülk bazında kontrol edilir.",
    "Faaliyet seçmeden önce resmî koşulları inceleyin.",
    "Geliştirme önerileri onaylanmış plan değildir.",
    "Kataloğa dön",
    "Sonuç bulunamadı",
    "Filtreleri sıfırla",
    "Bu katalog bölgedeki tüm bölgelerin eksiksiz listesi olarak doğrulanmadı.",
    "Başlangıç ve nihai ihale fiyatları ayrı gösterilir.",
    "Lot numarası",
    "Konum",
    "Arazi ve binalar",
    "Demo · bilgiler resmî onay için hazırlanıyor",
  ],
  zh: [
    "经济区目录",
    "每个区域，每个机会。",
    "集中展示经济区资料及独立土地、建筑拍卖标的。",
    "地区",
    "全部",
    "浩罕",
    "经营活动",
    "面积",
    "价格",
    "资料可用",
    "等待资料",
    "尚未核实",
    "查看详情",
    "总面积",
    "租赁及使用条件",
    "基础设施",
    "允许的经营活动",
    "未来发展机会",
    "拍卖标的",
    "起拍价",
    "保证金",
    "拍卖日期",
    "标的状态",
    "官方来源",
    "核实日期",
    "照片",
    "尚未提供经过核实的物业照片。",
    "暂无经过核实的拍卖标的。",
    "经济区与其中的独立标的是不同记录。每个标的条件须单独核实。",
    "将列出经核实的租期、付款条件及权利类型。",
    "电力、燃气、供水和道路须按物业单独核实。",
    "选择经营活动前请查阅官方条件。",
    "发展建议不代表获批规划。",
    "返回目录",
    "无匹配结果",
    "重置筛选",
    "本目录尚未确认为全州经济区的完整清单。",
    "起拍价与最终成交价将分别展示。",
    "标的编号",
    "位置",
    "土地和建筑",
    "演示 · 资料正在准备官方确认",
  ],
};

const districtOverrides = {
  uz: [
    "Farg‘ona tumani iqtisodiy obyektlari",
    "Farg‘ona tumani. Har bir imkoniyat.",
    "Faqat Farg‘ona tumani. Farg‘ona shahri va boshqa tumanlar kiritilmagan.",
    "Lot toifasi",
    "Farg‘ona tumani",
    "Katalog guruhlari rasmiy zona nomlari emas: kichik sanoat va yoshlar sanoat lotlari alohida toifalarda berilgan.",
    "Lotlar E-auksion toifalari bo‘yicha guruhlangan. Bu guruhlar alohida rasmiy iqtisodiy zonalar deb ko‘rsatilmaydi.",
  ],
  ru: [
    "Экономические объекты Ферганского района",
    "Ферганский район. Каждая возможность.",
    "Только Ферганский район. Город Фергана и другие районы исключены.",
    "Категория лота",
    "Ферганский район",
    "Группы каталога не являются официальными названиями зон: малая и молодёжная промышленность показаны отдельно.",
    "Лоты сгруппированы по категориям E-auksion. Группы не являются отдельными официальными экономическими зонами.",
  ],
  en: [
    "Fergana District economic properties",
    "Fergana District. Every opportunity.",
    "Fergana District only. Fergana City and other districts are excluded.",
    "Lot category",
    "Fergana District",
    "Directory groups are not official zone names: small industrial and youth industrial lots are separate categories.",
    "Lots are grouped by E-auksion categories. These groups are not separate official economic zones.",
  ],
  tr: [
    "Fergana ilçesi ekonomik mülkleri",
    "Fergana ilçesi. Her fırsat.",
    "Yalnızca Fergana ilçesi. Fergana şehri ve diğer ilçeler hariçtir.",
    "Lot kategorisi",
    "Fergana ilçesi",
    "Katalog grupları resmî bölge adları değildir: küçük ve gençlik sanayi lotları ayrı kategorilerdir.",
    "Lotlar E-auksion kategorilerine göre gruplandırılır; gruplar ayrı resmî ekonomik bölgeler değildir.",
  ],
  zh: [
    "费尔干纳区经济物业",
    "费尔干纳区，每个机会。",
    "仅费尔干纳区，不包括费尔干纳市及其他区。",
    "标的类别",
    "费尔干纳区",
    "目录分组不是官方经济区名称：小型工业与青年工业标的分别展示。",
    "标的按E-auksion类别分组，并非独立官方经济区。",
  ],
};
for (const [lang, v] of Object.entries(districtOverrides)) {
  [0, 1, 2, 3, 5, 36, 28].forEach((key, i) => (dictionaries[lang][key] = v[i]));
}

export const catalogHeading = (lang) =>
  (dictionaries[lang] || dictionaries.uz)[0];
const proposals = {
  uz: "Muhokama uchun taklif: kichik ishlab chiqarish, qadoqlash yoki saqlash loyihalarini o‘rganish mumkin. Mosligi elektr quvvati, bino holati, logistika va ruxsat etilgan faoliyat tekshirilgandan keyin baholanadi. Bu tasdiqlangan reja emas.",
  ru: "Предложение для обсуждения: изучить небольшое производство, упаковку или хранение. Пригодность оценивается после проверки мощности, состояния зданий, логистики и разрешённой деятельности. Это не утверждённый план.",
  en: "Discussion proposal: explore small manufacturing, packaging or storage projects. Suitability depends on verified power capacity, building condition, logistics and permitted activities. This is not an approved plan.",
  tr: "Tartışma önerisi: küçük üretim, ambalaj veya depolama projelerini incelemek. Uygunluk; enerji kapasitesi, bina durumu, lojistik ve izinli faaliyetler doğrulandıktan sonra değerlendirilir. Onaylanmış plan değildir.",
  zh: "讨论建议：研究小型制造、包装或仓储项目。适用性须核实电力容量、建筑状况、物流和允许的活动后评估。这不是获批规划。",
};
const words = (lang) => dictionaries[lang] || dictionaries.uz;
function Facts({ zone, c, lang }) {
  return (
    <dl className="catalog-facts">
      {[
        [13, zone.areaHa === null ? null : `${zone.areaHa} ha`],
        [39, c[5]],
        [19, zone.initialPrice],
        [24, zone.verifiedAt],
      ].map(([label, value]) => (
        <div key={label}>
          <dt>{c[label]}</dt>
          <dd>{value ?? c[11]}</dd>
        </div>
      ))}
    </dl>
  );
}
export function Catalog({ lang, Link, ButtonLink }) {
  const c = words(lang);
  const [region, setRegion] = useState("all");
  const [area, setArea] = useState("all");
  const [price, setPrice] = useState("all");
  const [activity, setActivity] = useState("all");
  const filters = [
    [3, region, setRegion],
    [6, activity, setActivity],
    [7, area, setArea],
    [8, price, setPrice],
  ];
  const zones = catalogZones.filter(
    (z) =>
      (region === "all" || z.region === region) &&
      (area === "all" ||
        (area === "unknown"
          ? z.areaHa === null
          : area === "small"
            ? z.areaHa !== null && z.areaHa < 10
            : area === "medium"
              ? z.areaHa >= 10 && z.areaHa <= 100
              : z.areaHa > 100)) &&
      (activity === "all" || (activity === "known") === (z.activity !== null)),
  );
  return (
    <>
      <section className="catalog-hero container">
        <p className="eyebrow">{c[0]}</p>
        <h1>{c[1]}</h1>
        <p>{c[2]}</p>
        <div className="catalog-disclaimer">
          <ShieldCheck size={19} />
          {c[41]}
        </div>
      </section>
      <section className="container catalog-section">
        <div className="catalog-filters">
          {filters.map(([label, value, set]) => (
            <label key={label}>
              {label === 8
                ? lotPriceLabel[lang]
                : label === 7
                  ? totalAreaLabel[lang]
                  : c[label]}
              <select value={value} onChange={(e) => set(e.target.value)}>
                <option value="all">{c[4]}</option>
                {label === 3 ? (
                  <>
                    {catalogZones
                      .filter((z) => z.type)
                      .map((z) => (
                        <option value={z.region} key={z.id}>
                          {z.names[lang]}
                        </option>
                      ))}
                  </>
                ) : label === 7 ? (
                  <>
                    <option value="small">&lt; 10 ha</option>
                    <option value="medium">10–100 ha</option>
                    <option value="large">&gt; 100 ha</option>
                    <option value="unknown">{c[10]}</option>
                  </>
                ) : label === 8 ? (
                  <>
                    <option value="low">&lt; 100,000,000 UZS</option>
                    <option value="middle">
                      100,000,000–1,000,000,000 UZS
                    </option>
                    <option value="high">&gt; 1,000,000,000 UZS</option>
                    <option value="unknown">{c[10]}</option>
                  </>
                ) : (
                  <>
                    <option value="known">{c[9]}</option>
                    <option value="unknown">{c[10]}</option>
                  </>
                )}
              </select>
            </label>
          ))}
        </div>
        <p className="catalog-note">
          {c[36]} {filterScope[lang]}
        </p>
        <div className="catalog-grid">
          {zones.map((zone) => (
            <article
              className="catalog-card"
              data-testid="zone-card"
              key={zone.id}
            >
              <div className="catalog-card-visual">
                <Factory size={64} strokeWidth={1} />
                <span>
                  {c[25]} · {c[10]}
                </span>
              </div>
              <div className="catalog-card-body">
                <p className="eyebrow">
                  <MapPin size={15} />
                  {c[5]}
                </p>
                <h2>{zone.names[lang] || zone.names.uz}</h2>
                <Facts zone={zone} c={c} lang={lang} />
                {zone.areaNote && (
                  <p className="catalog-note">{zone.areaNote[lang]}</p>
                )}
                <p className="catalog-note">
                  {zone.properties.length
                    ? `${c[18]}: ${zone.properties.length}`
                    : c[27]}
                </p>
                {zone.sourceUrl && (
                  <p className="catalog-note">
                    <a href={zone.sourceUrl} target="_blank" rel="noreferrer">
                      {c[23]} ↗
                    </a>{" "}
                    · {c[24]}: {zone.verifiedAt}
                  </p>
                )}
                <ButtonLink to={`/zones/${zone.id}`}>{c[12]}</ButtonLink>
              </div>
            </article>
          ))}
        </div>
        <PropertyCards
          lang={lang}
          ButtonLink={ButtonLink}
          price={price}
          region={region}
        />
        {!zones.length && (
          <div className="catalog-empty">
            <h2>{c[34]}</h2>
            <button
              className="button"
              onClick={() => {
                setRegion("all");
                setArea("all");
                setPrice("all");
                setActivity("all");
              }}
            >
              {c[35]}
            </button>
          </div>
        )}
      </section>
    </>
  );
}
export function CatalogDetail({
  lang,
  Link,
  ButtonLink,
  id = "district-unused",
}) {
  const c = words(lang);
  const zone = catalogZones.find((z) => z.id === id);
  if (!zone)
    return (
      <section className="container catalog-section">
        <h1>{c[34]}</h1>
        <Link to="/zones">{c[33]}</Link>
      </section>
    );
  return (
    <>
      <section className="catalog-hero container">
        <Link className="catalog-back" to="/zones">
          ← {c[33]}
        </Link>
        <p className="eyebrow">{c[0]}</p>
        <h1>{zone.names[lang] || zone.names.uz}</h1>
        <p>{c[28]}</p>
        <div className="catalog-disclaimer">
          <ShieldCheck size={19} />
          {c[41]}
        </div>
      </section>
      <section className="container catalog-section">
        <div className="catalog-detail-top">
          <div className="catalog-photo-placeholder">
            <Building2 size={72} strokeWidth={1} />
            <h2>{c[25]}</h2>
            <p>{c[26]}</p>
          </div>

          <div className="catalog-summary">
            <h2>{c[39]}</h2>
            <Facts zone={zone} c={c} lang={lang} />
            {zone.areaNote && (
              <p className="catalog-note">{zone.areaNote[lang]}</p>
            )}
            {zone.legalSourceUrl && (
              <p>
                <a href={zone.legalSourceUrl} target="_blank" rel="noreferrer">
                  Lex.uz · PQ-454 ↗
                </a>
              </p>
            )}
            <p>
              <strong>{c[23]}: </strong>
              {zone.sourceUrl ? (
                <a href={zone.sourceUrl} target="_blank" rel="noreferrer">
                  {c[23]} ↗
                </a>
              ) : (
                c[11]
              )}
            </p>
          </div>
        </div>
        <div className="catalog-information">
          {[
            [14, 29],
            [15, 30],
            [16, 31],
            [17, 32],
          ].map(([title, description]) => (
            <article key={title}>
              <h2>{c[title]}</h2>
              <span className="catalog-status" data-testid="data-status">
                {title === 16 && zone.activityNote ? c[23] : c[11]}
              </span>
              <p>
                {title === 16 && zone.activityNote
                  ? zone.activityNote[lang]
                  : title === 17
                    ? proposals[lang] || proposals.uz
                    : c[description]}
              </p>
            </article>
          ))}
        </div>
        <section className="catalog-auctions" data-testid="auction-details">
          <p className="eyebrow">{c[40]}</p>
          <h2>{c[18]}</h2>
          <p>{c[37]}</p>
          {zone.properties.length ? (
            <PropertyCards
              lang={lang}
              ButtonLink={ButtonLink}
              zoneId={zone.id}
            />
          ) : (
            <div className="catalog-empty">
              <FileText size={36} />
              <h3>{c[27]}</h3>
              <p>
                {c[38]} · {c[19]} · {c[20]} · {c[21]} · {c[22]}
              </p>
            </div>
          )}
          <div className="catalog-official-links">
            <a href="https://e-auksion.uz/" target="_blank" rel="noreferrer">
              E-auksion <ArrowUpRight size={18} />
            </a>
            <a href="https://lex.uz/" target="_blank" rel="noreferrer">
              Lex.uz <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </section>
    </>
  );
}
const snapshotCopy = {
  uz: "E-auksion ochiq ro‘yxatidan 11.10.2026 kuni olingan ma’lumot. Joriy holat va to‘liq shartlarni rasmiy lotda qayta tekshiring. Bu boshlang‘ich narx; yillik ijara yoki yakuniy savdo narxi emas.",
  ru: "Снимок открытого списка E-auksion на 11.10.2026. Текущий статус и полные условия перепроверьте в официальном лоте. Это начальная цена, не годовая аренда и не итог торгов.",
  en: "E-auksion public listing snapshot checked on 11 October 2026. Recheck the current status and full terms on the official lot. This is a starting price, not annual rent or a final auction price.",
  tr: "11 Ekim 2026 tarihinde kontrol edilen E-auksion açık liste kaydı. Güncel durumu ve tüm koşulları resmî lotta tekrar kontrol edin. Bu başlangıç fiyatıdır; yıllık kira veya nihai satış fiyatı değildir.",
  zh: "2026年10月11日核实的E-auksion公开列表快照。请在官方标的页面重新确认当前状态及完整条件。这是起拍价，并非年租金或最终成交价。",
};
const filterScope = {
  uz: "Hudud ikkala ro‘yxatga qo‘llanadi. Maydon va faoliyat filtrlari zona kartalariga, narx filtri auksion lotlariga qo‘llanadi. Zona maydoni alohida lot maydoni emas.",
  ru: "Территория применяется к обоим спискам. Площадь и деятельность фильтруют зоны, цена — аукционные лоты. Площадь зоны не является площадью отдельного лота.",
  en: "Location applies to both lists. Area and activity filter zone cards; price filters auction lots. A zone area is not an individual plot area.",
  tr: "Konum her iki listeye uygulanır. Alan ve faaliyet bölgeleri, fiyat ihale lotlarını filtreler. Bölge alanı ayrı parsel alanı değildir.",
  zh: "地区筛选适用于两个列表。面积和活动筛选经济区，价格筛选拍卖标的。经济区面积并非单个地块面积。",
};
const auctionClock = {
  uz: "E-auksion ko‘rsatgan vaqt",
  ru: "Время, указанное E-auksion",
  en: "Time as displayed on E-auksion",
  tr: "E-auksion tarafından gösterilen saat",
  zh: "E-auksion显示的时间",
};
const lotPriceLabel = {
  uz: "Lot boshlang‘ich narxi (UZS)",
  ru: "Начальная цена лота (UZS)",
  en: "Lot starting price (UZS)",
  tr: "Lot başlangıç fiyatı (UZS)",
  zh: "标的起拍价 (UZS)",
};
const totalAreaLabel = {
  uz: "Zona hujjatidagi maydon (ha)",
  ru: "Площадь зоны по документу (га)",
  en: "Documented zone area (ha)",
  tr: "Belgelenmiş bölge alanı (ha)",
  zh: "文件记载经济区面积 (公顷)",
};
const lotImageCaption = {
  uz: "E-auksion lot tasviri; obyektning joriy holati kafolati emas.",
  ru: "Иллюстрация лота E-auksion; не гарантия текущего состояния объекта.",
  en: "E-auksion lot illustration; not a guarantee of current property condition.",
  tr: "E-auksion lot görseli; mülkün güncel durumunun garantisi değildir.",
  zh: "E-auksion标的示意图，不保证物业当前状况。",
};
const money = (value, lang) =>
  `${new Intl.NumberFormat({ uz: "uz-UZ", ru: "ru-RU", en: "en-US", tr: "tr-TR", zh: "zh-CN" }[lang] || "en-US", { maximumFractionDigits: 2 }).format(value)} UZS`;
function PropertyCards({
  lang,
  ButtonLink,
  zoneId,
  price = "all",
  region = "all",
}) {
  const c = words(lang);
  const lots = catalogProperties.filter(
    (p) =>
      (!zoneId || p.zoneId === zoneId) &&
      (region === "all" || p.zoneId === region) &&
      (price === "all" ||
        (price === "unknown"
          ? p.start_price === null
          : price === "low"
            ? p.start_price !== null && p.start_price < 100000000
            : price === "middle"
              ? p.start_price >= 100000000 && p.start_price <= 1000000000
              : p.start_price > 1000000000)),
  );
  return (
    <section className="catalog-property-section">
      <h2>{c[18]}</h2>
      <p className="catalog-note">{snapshotCopy[lang] || snapshotCopy.uz}</p>
      <div className="catalog-grid">
        {lots.map((p) => (
          <article
            className="catalog-card"
            data-testid="property-card"
            key={p.id}
          >
            <figure className="catalog-lot-image">
              <img src={`/lot-${p.id}.jpg`} alt={`E-auksion ${p.id}`} />
              <figcaption>
                {lotImageCaption[lang]}{" "}
                <a href={p.sourceUrl} target="_blank" rel="noreferrer">
                  E-auksion · {p.id} ↗
                </a>
              </figcaption>
            </figure>
            <div className="catalog-card-body">
              <p className="eyebrow">
                E-auksion · {c[38]} {p.id}
              </p>
              <h3>{p.full_address}</h3>
              <dl className="catalog-facts">
                <div>
                  <dt>{c[19]}</dt>
                  <dd>{money(p.start_price, lang)}</dd>
                </div>
                <div>
                  <dt>
                    {c[20]} ({p.zaklad_percent}%)
                  </dt>
                  <dd>{money(p.zaklad_summa, lang)}</dd>
                </div>
                <div>
                  <dt>{c[21]}</dt>
                  <dd>
                    {p.auction_date_str} · {auctionClock[lang]}
                  </dd>
                </div>
                <div>
                  <dt>{c[7]}</dt>
                  <dd>{c[11]}</dd>
                </div>
              </dl>
              <ButtonLink to={`/properties/${p.id}`}>{c[12]}</ButtonLink>
            </div>
          </article>
        ))}
      </div>
      {!lots.length && <p>{c[27]}</p>}
    </section>
  );
}
export function PropertyDetail({ lang, Link, ButtonLink, id }) {
  const c = words(lang);
  const p = catalogProperties.find((p) => p.id === String(id));
  if (!p)
    return (
      <section className="container catalog-section">
        <h1>{c[34]}</h1>
        <Link to="/zones">{c[33]}</Link>
      </section>
    );
  return (
    <>
      <section className="catalog-hero container">
        <Link to={`/zones/${p.zoneId}`} className="catalog-back">
          ← {c[33]}
        </Link>
        <p className="eyebrow">
          E-auksion · {c[38]} {p.id}
        </p>
        <h1>{p.full_address}</h1>
        <div className="catalog-disclaimer">
          <ShieldCheck size={22} />
          {snapshotCopy[lang] || snapshotCopy.uz}
        </div>
      </section>
      <section className="container catalog-section">
        <div className="catalog-summary" data-testid="auction-details">
          <dl className="catalog-facts">
            {[
              [19, money(p.start_price, lang)],
              [20, `${money(p.zaklad_summa, lang)} (${p.zaklad_percent}%)`],
              [21, `${p.auction_date_str} · {auctionClock[lang]}`],
              [7, c[11]],
              [22, c[11]],
              [24, p.checkedAt],
            ].map(([k, v]) => (
              <div key={k}>
                <dt>{c[k]}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <a
            className="button"
            href={p.sourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            {c[23]} — E-auksion <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="catalog-information">
          {[
            [14, 29],
            [15, 30],
            [16, 31],
            [17, 32],
          ].map(([title, description]) => (
            <article key={title}>
              <h2>{c[title]}</h2>
              <span className="catalog-status" data-testid="data-status">
                {c[11]}
              </span>
              <p>
                {title === 17
                  ? proposals[lang] || proposals.uz
                  : c[description]}
              </p>
            </article>
          ))}
        </div>
        <figure className="catalog-historical-photo">
          <img src={`/lot-${p.id}.jpg`} alt={`E-auksion ${p.id}`} />
          <figcaption>
            {lotImageCaption[lang]}{" "}
            <a href={p.sourceUrl} target="_blank" rel="noreferrer">
              E-auksion · {p.id} ↗
            </a>{" "}
            · {p.checkedAt}
          </figcaption>
        </figure>
      </section>
    </>
  );
}
