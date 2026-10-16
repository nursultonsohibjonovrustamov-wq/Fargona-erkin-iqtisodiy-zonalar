import React from "react";
import {
  ArrowUpRight,
  FileText,
  MapPin,
  ShieldCheck,
  Zap,
  Droplets,
  Flame,
  Users,
} from "lucide-react";
import {
  presentationZones as presentationSites,
  presentationPortfolio,
  presentationSource,
} from "./presentation-data";
const presentationReport = {
  ...presentationPortfolio,
  source: presentationSource,
};
import "./presentation-zones.css";
const dictionaries = {
  uz: [
    "Farg‘ona tumani",
    "Sanoat uchun to‘rtta hudud.\nInvestitsiya uchun aniq manzillar.",
    "Taqdimotda ko‘rsatilgan yer maydonlari, xaritalar va loyiha imkoniyatlari.",
    "Taqdimotdagi jami maydon",
    "Hudud",
    "Taqdimot manbasi · mustaqil tasdiqlash kutilmoqda",
    "Hududlar bilan tanishing",
    "Umumiy maydon",
    "Batafsil ko‘rish",
    "Xaritani to‘liq ochish",
    "Manba taqdimotini yuklab olish",
    "Taqdimotda ko‘rsatilgan hududlar. Joriy bo‘sh yer, huquq turi va ajratish shartlari alohida tekshiriladi.",
    "Hududlarga qaytish",
    "Hudud ko‘rsatkichlari",
    "Sug‘oriladigan yer",
    "Ko‘p yillik daraxtzorlar",
    "Boshqa yerlar",
    "Bonitet balli",
    "Taqdimotda berilmagan",
    "Kontur raqamlari",
    "Manbada ko‘rsatilgan konturlar; joriy kadastr chegarasi va yerning mavjudligini tasdiqlamaydi.",
    "Oqbilol xaritasida 1 200 ga tashqi hudud ham ko‘rsatilgan. Ushbu kartadagi 351 ga — alohida belgilangan taklif etilayotgan sanoat hududi; ikkala raqam bir xil hududni anglatmaydi.",
    "Loyiha muhokamasi",
    "Faoliyat yo‘nalishi, kommunikatsiyaga ulanish va joylashtirish talablari vakolatli tashkilot bilan loyiha asosida aniqlashtiriladi.",
    "Loyihani muhokama qilish",
    "Ijara va auksion",
    "Ushbu hudud uchun ijara muddati, narx va mos auksion loti tasdiqlanmagan. Ochiq auksionlar alohida tuman katalogida berilgan.",
    "Tuman auksion katalogi",
    "Taqdimotdagi infratuzilma ko‘rsatkichlari",
    "Elektr energiyasi",
    "Suv va oqova suv",
    "Tabiiy gaz",
    "Oylik ish haqi",
    "Bu raqamlar taqdimotdan olingan. Tariflarning amal qilish sanasi berilmagan; ular amaldagi narx yoki xizmat mavjudligi kafolati emas. Valyuta: USD.",
    "Soliq va imtiyozlar",
    "Soliq imtiyozlari rezidentlik, investitsiya hajmi, faoliyat turi va amaldagi qonunchilikka bog‘liq. Taqdimotdagi da’volar mustaqil huquqiy tekshiruvdan o‘tishi kerak; barcha soliqlar uchun umumiy 0% stavka va’da qilinmaydi.",
    "Manbalar va tekshiruv",
    "Taqdimot buyurtmachi tomonidan taqdim etilgan. Xaritalar taqdimotdagi asl tasvirlardir; mustaqil kadastr tekshiruvi emas.",
    "Hudud topilmadi",
    "Xaritadagi ma’lumot manba taqdimotiga tegishli.",
    "Ishlab chiqarish, xizmat ko‘rsatish va logistika variantlari loyiha muhokamasida baholanishi mumkin. Bu ruxsat etilgan faoliyat ro‘yxati yoki tasdiqlangan kelajak rejasi emas.",
    "Rivojlantirish imkoniyatlari",
  ],
  en: [
    "Fergana District",
    "Four industrial territories.\nClear locations for investment.",
    "Land areas, maps and project opportunities described in the supplied presentation.",
    "Total area in the presentation",
    "Territories",
    "Presentation source · independent confirmation pending",
    "Explore the territories",
    "Total area",
    "View details",
    "Open full map",
    "Download source presentation",
    "Territories described in the presentation. Current availability, legal rights and allocation terms require separate verification.",
    "Back to territories",
    "Territory facts",
    "Irrigated land",
    "Perennial plantations",
    "Other land",
    "Soil quality score",
    "Not provided in the presentation",
    "Parcel contour numbers",
    "Contours reported in the source; they do not confirm current cadastral boundaries or land availability.",
    "The Oqbilol map also shows a wider 1,200 ha area. The 351 ha on this card is the highlighted proposed industrial area; these figures describe different extents.",
    "Project discussion",
    "Activities, utility connections and location requirements must be clarified with the responsible authority for the individual project.",
    "Discuss a project",
    "Lease and auction",
    "Lease duration, price and a matching auction lot have not been confirmed for this territory. Public auctions appear in a separate district directory.",
    "District auction directory",
    "Infrastructure figures in the presentation",
    "Electricity",
    "Water and sewerage",
    "Natural gas",
    "Monthly salary",
    "These figures come from the presentation. No effective date is supplied; they do not guarantee current rates or service availability. Currency: USD.",
    "Taxes and incentives",
    "Incentives depend on residency, investment, activities and current legislation. Presentation claims require independent legal review; a blanket 0% rate for all taxes is not promised.",
    "Sources and verification",
    "The presentation was supplied by the client. Maps are original presentation images, not an independent cadastral survey.",
    "Territory not found",
    "Map information belongs to the source presentation.",
    "Manufacturing, services and logistics options can be assessed during project discussions. This is not a list of permitted activities or an approved future plan.",
    "Development possibilities",
  ],
  ru: [
    "Ферганский район",
    "Четыре промышленные территории.\nКонкретные адреса для инвестиций.",
    "Площади, карты и возможности проектов из предоставленной презентации.",
    "Общая площадь по презентации",
    "Территории",
    "Источник — презентация · независимое подтверждение ожидается",
    "Промышленные территории",
    "Общая площадь",
    "Подробнее",
    "Открыть полную карту",
    "Скачать исходную презентацию",
    "Территории из презентации. Текущая доступность, права и условия выделения проверяются отдельно.",
    "Назад к территориям",
    "Показатели территории",
    "Орошаемые земли",
    "Многолетние насаждения",
    "Прочие земли",
    "Балл бонитета",
    "В презентации не указано",
    "Номера контуров",
    "Контуры указаны в источнике; они не подтверждают действующие кадастровые границы или доступность земли.",
    "Карта Окбилола также показывает более широкую территорию 1 200 га. Указанные здесь 351 га — выделенная площадка проекта; это разные площади.",
    "Обсуждение проекта",
    "Виды деятельности, подключение коммуникаций и требования к площадке уточняются с уполномоченной организацией по конкретному проекту.",
    "Обсудить проект",
    "Аренда и аукцион",
    "Срок аренды, цена и соответствующий аукционный лот для территории не подтверждены. Открытые аукционы представлены в отдельном каталоге района.",
    "Аукционный каталог района",
    "Показатели инфраструктуры из презентации",
    "Электроэнергия",
    "Вода и канализация",
    "Природный газ",
    "Месячная зарплата",
    "Цифры взяты из презентации. Дата действия тарифов не указана; это не гарантия текущих цен или доступности услуг. Валюта: USD.",
    "Налоги и льготы",
    "Льготы зависят от резидентства, инвестиций, деятельности и действующего законодательства. Утверждения презентации требуют независимой правовой проверки; общая ставка 0% по всем налогам не обещается.",
    "Источники и проверка",
    "Презентация предоставлена заказчиком. Карты — исходные изображения из презентации, а не независимая кадастровая съёмка.",
    "Территория не найдена",
    "Сведения на карте относятся к исходной презентации.",
    "В ходе обсуждения можно оценить производство, услуги и логистику. Это не перечень разрешённой деятельности и не утверждённый план развития.",
    "Возможности развития",
  ],
  tr: [
    "Fergana İlçesi",
    "Dört sanayi alanı.\nYatırım için belirgin konumlar.",
    "Sunulan sunumdaki arazi alanları, haritalar ve proje fırsatları.",
    "Sunumda belirtilen toplam alan",
    "Alan",
    "Sunum kaynağı · bağımsız doğrulama bekleniyor",
    "Alanları inceleyin",
    "Toplam alan",
    "Ayrıntılar",
    "Haritanın tamamını açın",
    "Kaynak sunumu indirin",
    "Sunumda belirtilen alanlardır. Mevcut uygunluk, hukuki haklar ve tahsis koşulları ayrıca doğrulanmalıdır.",
    "Alanlara dön",
    "Alan bilgileri",
    "Sulu tarım arazisi",
    "Çok yıllık plantasyonlar",
    "Diğer araziler",
    "Toprak kalite puanı",
    "Sunumda belirtilmedi",
    "Parsel kontur numaraları",
    "Kaynakta belirtilen konturlar güncel kadastro sınırlarını veya arazi uygunluğunu doğrulamaz.",
    "Oqbilol haritasında daha geniş 1.200 ha alan da gösterilir. Karttaki 351 ha işaretli proje alanıdır; bu sayılar farklı kapsamları belirtir.",
    "Proje görüşmesi",
    "Faaliyetler, altyapı bağlantıları ve yer gereksinimleri yetkili kuruluşla proje bazında netleştirilmelidir.",
    "Projeyi görüşün",
    "Kira ve ihale",
    "Bu alan için kira süresi, fiyat ve eşleşen ihale lotu doğrulanmadı. Açık ihaleler ayrı ilçe kataloğundadır.",
    "İlçe ihale kataloğu",
    "Sunumdaki altyapı göstergeleri",
    "Elektrik",
    "Su ve kanalizasyon",
    "Doğal gaz",
    "Aylık ücret",
    "Bu rakamlar sunumdan alınmıştır. Geçerlilik tarihi belirtilmemiştir; güncel fiyat veya hizmet uygunluğu garantisi değildir. Para birimi: USD.",
    "Vergiler ve teşvikler",
    "Teşvikler yerleşik statüsü, yatırım, faaliyet ve güncel mevzuata bağlıdır. Sunum iddiaları bağımsız hukuk incelemesi gerektirir; tüm vergilerde genel %0 oran vaat edilmez.",
    "Kaynaklar ve doğrulama",
    "Sunum müşteri tarafından sağlanmıştır. Haritalar sunumun özgün görselleridir; bağımsız kadastro incelemesi değildir.",
    "Alan bulunamadı",
    "Harita bilgileri kaynak sunuma aittir.",
    "Üretim, hizmet ve lojistik seçenekleri proje görüşmesinde değerlendirilebilir. Bu, izin verilen faaliyet listesi veya onaylanmış gelecek planı değildir.",
    "Geliştirme olanakları",
  ],
  zh: [
    "费尔干纳区",
    "四处工业用地。\n清晰的投资选址。",
    "展示客户提供演示文稿中的土地面积、地图及项目机会。",
    "演示文稿所述总面积",
    "区域",
    "演示文稿来源 · 待独立确认",
    "查看区域",
    "总面积",
    "查看详情",
    "打开完整地图",
    "下载来源演示文稿",
    "演示文稿中的区域。当前可用性、法律权利及划拨条件须另行核实。",
    "返回区域列表",
    "区域指标",
    "灌溉土地",
    "多年生种植地",
    "其他土地",
    "土壤质量评分",
    "演示文稿未提供",
    "地块轮廓编号",
    "来源所述轮廓不代表已确认当前地籍边界或土地可用性。",
    "Oqbilol地图也显示更大范围的1,200公顷区域。本卡片的351公顷是突出标注的项目范围，两者并非同一面积。",
    "讨论项目",
    "经营活动、公共设施接入及选址要求须按具体项目向主管机构核实。",
    "讨论项目",
    "租赁及拍卖",
    "尚未确认此区域的租期、价格或对应拍卖标的。全区公开拍卖在独立目录中展示。",
    "全区拍卖目录",
    "演示文稿中的基础设施指标",
    "电力",
    "供水及排污",
    "天然气",
    "月薪",
    "数字来自演示文稿，未注明生效日期，不保证当前费率或服务可用性。币种：USD。",
    "税收及优惠",
    "优惠取决于入驻资格、投资额、经营活动及现行法律。演示文稿中的说法须经独立法律审查，不承诺所有税种一律为0%。",
    "来源及核实",
    "演示文稿由客户提供。地图为演示文稿原始图片，并非独立地籍测量。",
    "未找到区域",
    "地图资料属于来源演示文稿。",
    "可在项目讨论中评估制造、服务及物流方案。这并非允许经营活动清单或已批准的发展规划。",
    "发展机会",
  ],
};
const areaNotes = {
  uz: "Maydon ko‘rsatkichlari manbadagi holicha berilgan. Tarkibiy maydonlar yig‘indisi umumiy maydonga aynan teng kelmasligi mumkin; toifalar kesishishi va farqlar alohida tekshiriladi.",
  en: "Area figures are reproduced as stated in the source. Component areas may not equal the headline total; category overlap and differences require separate verification.",
  ru: "Площади приведены как в источнике. Сумма составляющих может не совпадать с общей площадью; пересечения категорий и расхождения проверяются отдельно.",
  tr: "Alanlar kaynakta belirtildiği gibi aktarılmıştır. Bileşenler toplam alana eşit olmayabilir; kategori örtüşmeleri ve farklar ayrıca doğrulanmalıdır.",
  zh: "面积按来源原样展示。分项面积可能不等于总面积，类别重叠及差异须另行核实。",
};
const territoryLabels = {
  uz: [
    "Maxsus sanoat zonasi",
    "Kichik sanoat zonasi",
    "Manbada ko‘rsatilgan joylashuv",
  ],
  en: [
    "Special industrial zone",
    "Small industrial zone",
    "Location reported in the source",
  ],
  ru: [
    "Специальная промышленная зона",
    "Малая промышленная зона",
    "Местоположение в источнике",
  ],
  tr: [
    "Özel sanayi bölgesi",
    "Küçük sanayi bölgesi",
    "Kaynakta belirtilen konum",
  ],
  zh: ["特殊工业区", "小型工业区", "来源所述位置"],
};
const territoryType = (site, lang) =>
  territoryLabels[lang][site.kind === "special-industrial-zone" ? 0 : 1];
const labels = (lang) => dictionaries[lang] || dictionaries.uz;
const num = (value, lang) =>
  new Intl.NumberFormat(
    { uz: "uz-UZ", en: "en-US", ru: "ru-RU", tr: "tr-TR", zh: "zh-CN" }[lang],
    { maximumFractionDigits: 2 },
  ).format(value);
const ha = (value, lang, c) =>
  value == null ? c[18] : `${num(value, lang)} ha`;
function PresentationSource({ lang, c }) {
  return (
    <div className="presentation-source">
      <div>
        <FileText size={22} />
        <span>
          <strong>{c[36]}</strong>
          <small>{c[37]}</small>
        </span>
      </div>
      <a
        className="button button-secondary"
        href={presentationReport.source.url}
        download
      >
        {c[10]}
        <ArrowUpRight size={17} />
      </a>
    </div>
  );
}
function SiteMap({ site, c, compact = false }) {
  return (
    <figure
      data-testid="presentation-source-map"
      className={`presentation-map ${compact ? "presentation-map-card" : ""}`}
    >
      <a
        href={site.mapUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`${site.names.uz}: ${c[9]}`}
      >
        <img
          src={site.mapUrl}
          alt={`${site.names.uz} — ${c[39]}`}
          loading="lazy"
        />
      </a>
      <figcaption>
        <span>{c[39]}</span>
        <a href={site.mapUrl} target="_blank" rel="noreferrer">
          {c[9]} <ArrowUpRight size={15} />
        </a>
      </figcaption>
    </figure>
  );
}
const taxLabels = {
  uz: [
    "Taqdimotdagi investitsiya oralig‘i",
    "Taqdimotdagi muddat",
    "mln USD",
    "yil",
    "Manbada foyda solig‘i bo‘yicha 15 mln USDdan yuqori investitsiyaga 10 yil alohida ko‘rsatilgan. Aniq qo‘llanish shartlari va chegaralari huquqiy tekshiriladi.",
    "Import bo‘yicha da’volar eksport mahsuloti uchun xomashyo, mahalliy analogi bo‘lmagan uskuna va belgilangan shartlarga mos qurilish materiallariga tegishli. Amaldagi talablar tekshirilishi kerak.",
  ],
  en: [
    "Investment range in the presentation",
    "Reported duration",
    "million USD",
    "years",
    "The source separately reports 10 years for profit tax on investment above USD 15 million. Eligibility and exact threshold boundaries require legal verification.",
    "Import claims concern inputs for export products, equipment without domestic equivalents and qualifying construction materials. Current requirements must be checked.",
  ],
  ru: [
    "Диапазон инвестиций в презентации",
    "Указанный срок",
    "млн USD",
    "лет",
    "Источник отдельно указывает 10 лет по налогу на прибыль при инвестициях свыше 15 млн USD. Условия применения и точные границы требуют правовой проверки.",
    "Утверждения об импорте касаются сырья для экспортной продукции, оборудования без местных аналогов и подходящих под условия строительных материалов. Действующие требования необходимо проверить.",
  ],
  tr: [
    "Sunumdaki yatırım aralığı",
    "Belirtilen süre",
    "milyon USD",
    "yıl",
    "Kaynak, 15 milyon USD üzerindeki yatırımlar için kâr vergisinde ayrıca 10 yıl belirtir. Uygunluk ve kesin eşik sınırları hukuken doğrulanmalıdır.",
    "İthalat iddiaları ihracat ürünleri için girdiler, yerli muadili bulunmayan ekipman ve koşulları sağlayan inşaat malzemeleriyle ilgilidir. Güncel şartlar kontrol edilmelidir.",
  ],
  zh: [
    "演示文稿中的投资区间",
    "文稿所述期限",
    "百万美元",
    "年",
    "来源单独注明投资超过1500万美元时利润税优惠为10年。适用资格及具体金额边界须进行法律核实。",
    "进口相关说明涉及出口产品原料、无本地同类产品的设备及符合条件的建材。须核实当前适用要求。",
  ],
};
function Utilities({ lang, c }) {
  const claims = presentationPortfolio.utilityClaims;
  const tax = taxLabels[lang] || taxLabels.uz;
  const usd = (value) => value.toFixed(2) + " USD";

  return (
    <section className="presentation-utilities">
      <div className="container">
        <p className="eyebrow">{c[36]}</p>
        <h2>{c[28]}</h2>
        <div className="presentation-utility-grid">
          {[
            [Zap, c[29], usd(claims.electricity.amount) + " / kWh"],
            [Droplets, c[30], usd(claims.waterAndSewage.amount) + " / m³"],
            [Flame, c[31], usd(claims.gas.amount) + " / m³"],
            [
              Users,
              c[32],
              `${claims.averageMonthlySalary.minimum}–${claims.averageMonthlySalary.maximum} USD`,
            ],
          ].map(([Icon, label, value]) => (
            <div key={label}>
              <Icon size={23} />
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
        <p className="presentation-note">{c[33]}</p>
        <div className="presentation-tax">
          <h3>{c[34]}</h3>
          <p>{c[35]}</p>
          <table className="presentation-tax-table">
            <thead>
              <tr>
                <th scope="col">{tax[0]}</th>
                <th scope="col">{tax[1]}</th>
              </tr>
            </thead>
            <tbody>
              {presentationPortfolio.taxClaims.investmentThresholdsUSD.map(
                (row) => (
                  <tr key={row.sourceRange}>
                    <td>
                      {num(row.minimum / 1000000, lang)}
                      {row.maximum === null
                        ? "+"
                        : "–" + num(row.maximum / 1000000, lang)}{" "}
                      {tax[2]}
                    </td>
                    <td>
                      {row.years} {tax[3]}
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
          <p>{tax[4]}</p>
          <p>{tax[5]}</p>
        </div>
      </div>
    </section>
  );
}
export function PresentationOverview({ lang, Link, ButtonLink, home = false }) {
  const c = labels(lang);
  return (
    <>
      <section
        className={`presentation-intro ${home ? "presentation-intro-home" : ""}`}
      >
        <div className="container">
          <p className="eyebrow">{c[0]}</p>
          <h1>{c[1]}</h1>
          <p className="presentation-lead">{c[2]}</p>
          <div className="presentation-status">
            <ShieldCheck size={18} />
            {c[5]}
          </div>
          <div className="presentation-totals">
            <div>
              <strong>{ha(presentationReport.totalAreaHa, lang, c)}</strong>
              <span>{c[3]}</span>
            </div>
            <div>
              <strong>{presentationSites.length}</strong>
              <span>{c[4]}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="container presentation-section">
        <div className="presentation-section-head">
          <h2>{c[6]}</h2>
          <p>{c[11]}</p>
        </div>
        <div className="presentation-grid">
          {presentationSites.map((site) => (
            <article
              className="presentation-card"
              data-testid="presentation-zone-card"
              key={site.id}
            >
              <SiteMap site={site} c={c} compact />
              <div className="presentation-card-body">
                <p className="eyebrow">
                  <MapPin size={15} />
                  {c[0]}
                </p>
                <h3>{site.names[lang] || site.names.uz}</h3>
                <p className="presentation-kind">{territoryType(site, lang)}</p>
                <div className="presentation-card-area">
                  <span>{c[7]}</span>
                  <strong>{ha(site.areaHa, lang, c)}</strong>
                </div>
                {site.id === "oqbilol" && (
                  <p className="presentation-note">{c[21]}</p>
                )}
                <ButtonLink to={`/zones/${site.id}`}>{c[8]}</ButtonLink>
              </div>
            </article>
          ))}
        </div>
        <PresentationSource lang={lang} c={c} />
      </section>
      <Utilities lang={lang} c={c} />
    </>
  );
}
export function PresentationZoneDetail({ lang, Link, ButtonLink, id }) {
  const c = labels(lang);
  const site = presentationSites.find((s) => s.id === id);
  if (!site)
    return (
      <section className="container presentation-section">
        <h1>{c[38]}</h1>
        <Link to="/zones">{c[12]}</Link>
      </section>
    );
  return (
    <>
      <section className="presentation-intro">
        <div className="container">
          <Link className="presentation-back" to="/zones">
            ← {c[12]}
          </Link>
          <p className="eyebrow">{c[0]}</p>
          <h1>{site.names[lang] || site.names.uz}</h1>
          <p className="presentation-kind">{territoryType(site, lang)}</p>
          <div className="presentation-status">
            <ShieldCheck size={18} />
            {c[5]}
          </div>
        </div>
      </section>
      <section className="container presentation-section">
        <div className="presentation-detail-grid">
          <div>
            <SiteMap site={site} c={c} />
            {site.id === "oqbilol" && (
              <p className="presentation-note presentation-map-note">{c[21]}</p>
            )}
          </div>
          <article className="presentation-facts">
            <h2>{c[13]}</h2>
            <dl data-testid="presentation-zone-facts">
              {[
                [c[7], ha(site.areaHa, lang, c)],
                [c[14], ha(site.irrigatedAreaHa, lang, c)],
                [c[15], ha(site.plantationAreaHa, lang, c)],
                [c[16], ha(site.otherAreaHa, lang, c)],
                [c[17], site.soilFertilityScore ?? c[18]],
                [territoryLabels[lang][2], site.localities.join(" · ")],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
              {site.parcelNumbers?.length > 0 && (
                <div>
                  <dt>{c[19]}</dt>
                  <dd>{site.parcelNumbers.join(", ")}</dd>
                </div>
              )}
            </dl>
            {site.areaAudit?.length > 0 && (
              <p
                className="presentation-note"
                data-testid="presentation-area-note"
              >
                {areaNotes[lang] || areaNotes.uz}
              </p>
            )}
            {site.parcelNumbers?.length > 0 && (
              <p className="presentation-note">{c[20]}</p>
            )}
            <ButtonLink to="/contact">{c[24]}</ButtonLink>
          </article>
        </div>
        <div className="presentation-information">
          {[
            [22, 23],
            [41, 40],
            [25, 26],
          ].map(([title, body]) => (
            <article key={title}>
              <h2>{c[title]}</h2>
              <p>{c[body]}</p>
              {title === 25 && (
                <ButtonLink to="/auctions" secondary>
                  {c[27]}
                </ButtonLink>
              )}
            </article>
          ))}
        </div>
        <PresentationSource lang={lang} c={c} />
      </section>
      <Utilities lang={lang} c={c} />
    </>
  );
}
