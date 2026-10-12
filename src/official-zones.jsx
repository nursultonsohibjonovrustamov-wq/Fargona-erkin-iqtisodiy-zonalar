import React from "react";
import {
  Building2,
  Factory,
  ArrowUpRight,
  FileText,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { districtReport, officialZones } from "./catalog-data";
import "./official-zones.css";
const text = {
  uz: [
    "Farg‘ona tumani",
    "Sanoat hududlari va investitsiya loyihalari",
    "Taqdim etilgan hujjat asosida iqtisodiy zona filiali va yangi sanoat zonalari bilan tanishing.",
    "Buyurtmachi taqdim etgan ma’lumot · rasmiy tasdiqlash kutilmoqda",
    "Manba hujjatini yuklab olish",
    "EIZ filiali maydoni",
    "Mavjud sanoat zonalari",
    "Mavjud zonalar umumiy maydoni",
    "Yangi zonalar umumiy maydoni",
    "Hududlar bilan tanishing",
    "EIZ filiali",
    "Yangi sanoat zonasi",
    "Umumiy zona maydoni",
    "Loyiha uchun ajratilgan maydon",
    "Hujjatda berilmagan",
    "Loyiha qiymati",
    "Batafsil",
    "Loyiha maydoni butun zona maydoni emas.",
    "Mavjud sanoat zonalari — umumiy ko‘rsatkichlar",
    "Loyihalar",
    "Ishga tushgan",
    "Amalga oshirilayotgan",
    "Loyihalarga ajratilgan yer",
    "Hujjatda auksionga chiqarilgan deb ko‘rsatilgan maydon",
    "5 ta mavjud zonaning nomlari taqdim etilmagan. Ular uchun alohida nom yoki manzil yaratilmagan.",
    "Hududlar ro‘yxatiga qaytish",
    "Loyiha ma’lumotlari",
    "Investor",
    "Loyiha nomi",
    "Qurilish bosqichida",
    "Foydalanish va rivojlantirish",
    "Faoliyat turi va ishlab chiqarish imkoniyatlari loyiha talablari hamda ruxsatlar asosida aniqlashtiriladi.",
    "Kelajakdagi yo‘nalishlar — muhokama uchun",
    "Ishlab chiqarish yoki xizmat loyihasini joylashtirish, mahalliy hamkorlik va logistika yechimlari muhokama qilinishi mumkin. Bular tasdiqlangan reja yoki ruxsat etilgan faoliyat ro‘yxati emas.",
    "Ijara va narx",
    "Ijara muddati, huquq turi va narxlar hujjatda berilmagan.",
    "Rasmlar va infratuzilma",
    "Aniq hudud rasmlari va elektr, gaz, suv quvvatlari taqdim etilmagan.",
    "Auksion lotlari",
    "Bu hududga mosligi tasdiqlangan auksion loti hali bog‘lanmagan. Tuman bo‘yicha ochiq lotlar alohida katalogda.",
    "Tuman auksion katalogi",
    "Loyihani muhokama qilish",
    "Ma’lumot manbasi",
    "Hujjat sanasi va rasmiy tasdiq alohida tekshiriladi.",
    "Hudud topilmadi",
  ],
  en: [
    "Fergana District",
    "Industrial territories and investment projects",
    "Explore the economic zone branch and new industrial zones described in the supplied document.",
    "Client-supplied information · official confirmation pending",
    "Download source document",
    "FEZ branch area",
    "Existing industrial zones",
    "Total area of existing zones",
    "Total area of new zones",
    "Explore the territories",
    "FEZ branch",
    "New industrial zone",
    "Total zone area",
    "Land allocated to the project",
    "Not provided in the document",
    "Project investment",
    "View details",
    "Project land is not the total area of the zone.",
    "Existing industrial zones — aggregate figures",
    "Projects",
    "Launched",
    "In progress",
    "Land allocated to projects",
    "Area reported as offered for auction in the document",
    "The names of the five existing zones were not supplied. Separate names or addresses have not been invented.",
    "Back to territories",
    "Project information",
    "Investor",
    "Project name",
    "Under construction",
    "Use and development",
    "Activity and production opportunities require clarification against project needs and permissions.",
    "Future directions — for discussion",
    "Production or service projects, local partnerships and logistics solutions can be discussed. These are suggestions, not approved plans or a list of permitted activities.",
    "Lease and price",
    "Lease duration, legal rights and prices were not provided in the document.",
    "Photos and infrastructure",
    "Site photographs and electricity, gas and water capacities have not been supplied.",
    "Auction lots",
    "No auction lot has been confirmed as matching this territory. District-wide public lots appear in a separate directory.",
    "District auction directory",
    "Discuss a project",
    "Information source",
    "Document date and official approval require separate verification.",
    "Territory not found",
  ],
  ru: [
    "Ферганский район",
    "Промышленные территории и инвестиционные проекты",
    "Познакомьтесь с филиалом экономической зоны и новыми промышленными зонами из предоставленного документа.",
    "Сведения заказчика · официальное подтверждение ожидается",
    "Скачать исходный документ",
    "Площадь филиала СЭЗ",
    "Действующие промышленные зоны",
    "Общая площадь действующих зон",
    "Общая площадь новых зон",
    "Промышленные территории",
    "Филиал СЭЗ",
    "Новая промышленная зона",
    "Общая площадь зоны",
    "Земля, выделенная проекту",
    "В документе не указано",
    "Стоимость проекта",
    "Подробнее",
    "Площадь проекта не является общей площадью зоны.",
    "Действующие промышленные зоны — сводные показатели",
    "Проекты",
    "Запущено",
    "Реализуется",
    "Земля, выделенная проектам",
    "Площадь, указанная в документе как выставленная на аукцион",
    "Названия пяти действующих зон не предоставлены. Отдельные названия и адреса не придуманы.",
    "Назад к территориям",
    "Сведения о проекте",
    "Инвестор",
    "Название проекта",
    "На стадии строительства",
    "Использование и развитие",
    "Виды деятельности и возможности производства уточняются с учётом требований проекта и разрешений.",
    "Направления развития — для обсуждения",
    "Можно обсуждать производственные или сервисные проекты, местное партнёрство и логистику. Это предложения, а не утверждённые планы или перечень разрешённых видов деятельности.",
    "Аренда и цены",
    "Срок аренды, права и цены в документе не указаны.",
    "Фотографии и инфраструктура",
    "Фотографии территории и мощности электричества, газа и воды не предоставлены.",
    "Аукционные лоты",
    "Соответствие аукционных лотов этой территории пока не подтверждено. Открытые лоты района представлены в отдельном каталоге.",
    "Аукционный каталог района",
    "Обсудить проект",
    "Источник информации",
    "Дата документа и официальное утверждение проверяются отдельно.",
    "Территория не найдена",
  ],
  tr: [
    "Fergana İlçesi",
    "Sanayi alanları ve yatırım projeleri",
    "Sunulan belgede yer alan ekonomik bölge şubesini ve yeni sanayi bölgelerini inceleyin.",
    "Müşteri tarafından sunulan bilgiler · resmî onay bekleniyor",
    "Kaynak belgeyi indirin",
    "SEB şubesi alanı",
    "Mevcut sanayi bölgeleri",
    "Mevcut bölgelerin toplam alanı",
    "Yeni bölgelerin toplam alanı",
    "Alanları inceleyin",
    "SEB şubesi",
    "Yeni sanayi bölgesi",
    "Toplam bölge alanı",
    "Projeye tahsis edilen alan",
    "Belgede belirtilmedi",
    "Proje yatırımı",
    "Ayrıntılar",
    "Proje alanı, bölgenin toplam alanı değildir.",
    "Mevcut sanayi bölgeleri — toplu göstergeler",
    "Projeler",
    "Başlatılan",
    "Devam eden",
    "Projelere tahsis edilen arazi",
    "Belgede ihaleye sunulduğu belirtilen alan",
    "Mevcut beş bölgenin adları sunulmadı. Ayrı ad veya adres üretilmedi.",
    "Alanlara dön",
    "Proje bilgileri",
    "Yatırımcı",
    "Proje adı",
    "İnşaat aşamasında",
    "Kullanım ve geliştirme",
    "Faaliyet ve üretim fırsatları proje ihtiyaçları ve izinler doğrultusunda netleştirilmelidir.",
    "Gelecek yönelimleri — görüşme için",
    "Üretim veya hizmet projeleri, yerel ortaklıklar ve lojistik çözümleri görüşülebilir. Bunlar öneridir; onaylanmış plan veya izin verilen faaliyet listesi değildir.",
    "Kira ve fiyat",
    "Kira süresi, hukuki haklar ve fiyatlar belgede sunulmadı.",
    "Fotoğraflar ve altyapı",
    "Alan fotoğrafları ile elektrik, gaz ve su kapasiteleri sunulmadı.",
    "İhale lotları",
    "Bu alana ait olduğu doğrulanan ihale lotu henüz bağlanmadı. İlçenin açık lotları ayrı katalogdadır.",
    "İlçe ihale kataloğu",
    "Projeyi görüşün",
    "Bilgi kaynağı",
    "Belge tarihi ve resmî onay ayrıca doğrulanmalıdır.",
    "Alan bulunamadı",
  ],
  zh: [
    "费尔干纳区",
    "工业区域与投资项目",
    "了解所提供文件中的经济区分支及新工业区。",
    "客户提供资料 · 官方确认待完成",
    "下载来源文件",
    "经济区分支面积",
    "现有工业区",
    "现有工业区总面积",
    "新工业区总面积",
    "查看工业区域",
    "经济区分支",
    "新工业区",
    "经济区总面积",
    "项目划拨土地面积",
    "文件未提供",
    "项目投资额",
    "查看详情",
    "项目土地面积不等于整个工业区的面积。",
    "现有工业区 — 汇总指标",
    "项目",
    "已投产",
    "正在实施",
    "项目划拨土地",
    "文件所述已提交拍卖的面积",
    "未提供五个现有工业区的名称。未编造独立名称或地址。",
    "返回区域列表",
    "项目资料",
    "投资方",
    "项目名称",
    "施工阶段",
    "使用与发展",
    "经营及生产机会须结合项目需求与许可进一步确认。",
    "未来方向 — 供讨论",
    "可讨论生产或服务项目、本地合作及物流方案。这些仅为建议，并非已批准规划或允许经营活动清单。",
    "租赁与价格",
    "文件未提供租期、法律权利或价格。",
    "照片与基础设施",
    "尚未提供区域照片及电力、燃气、供水容量。",
    "拍卖标的",
    "尚未确认有拍卖标的对应此区域。全区公开标的在独立目录中展示。",
    "全区拍卖目录",
    "讨论项目",
    "资料来源",
    "文件日期及官方批准须另行核实。",
    "未找到区域",
  ],
};
const words = (lang) => text[lang] || text.uz;
const format = (number, lang) =>
  new Intl.NumberFormat(
    { uz: "uz-UZ", en: "en-US", ru: "ru-RU", tr: "tr-TR", zh: "zh-CN" }[lang],
    { maximumFractionDigits: 2 },
  ).format(number);
const hectares = (value, lang, c) =>
  value === null ? c[14] : `${format(value, lang)} ha`;

const reportText = {
  uz: [
    "Batafsil ko‘rsatkichlar",
    "Loyiha qiymati",
    "Maydon",
    "Yaratilgan ish o‘rinlari",
    "Rejalashtirilgan ish o‘rinlari",
    "Ishlab chiqarilgan mahsulot",
    "2026-yil yanvar–avgustda ishga tushgan",
    "Bu davr ko‘rsatkichi umumiy ishga tushgan loyihalar tarkibiga kiradi; alohida qo‘shilmaydi.",
    "Kommunikatsiyalar maydoni",
    "Foydalanishga yaroqli maydon",
    "Yangi zonalar — umumiy reja",
    "Uchta yangi zona loyihasi bo‘yicha jami rejalashtirilgan ish o‘rinlari.",
    "Tashkil etish asosi — hujjatda ko‘rsatilgan",
    "PQ-61 · 13.02.2026. Mustaqil rasmiy manba bilan tasdiqlash kutilmoqda.",
    "Hujjatda ko‘rsatilgan auksion maydoni joriy bo‘sh yer yoki tayyor lotlar ro‘yxati emas.",
  ],
  en: [
    "Detailed indicators",
    "Project investment",
    "Area",
    "Jobs created",
    "Planned jobs",
    "Production output",
    "Launched in January–August 2026",
    "This period figure is a subset of launched projects and must not be added to the aggregate.",
    "Communications area",
    "Usable area",
    "New zones — aggregate plan",
    "Total planned jobs across the three new zone projects.",
    "Establishment basis — as stated in the document",
    "PQ-61 · 13 February 2026. Independent official-source verification is pending.",
    "The auction area reported in the document is not current available land or a list of ready lots.",
  ],
  ru: [
    "Подробные показатели",
    "Стоимость проектов",
    "Площадь",
    "Созданные рабочие места",
    "Планируемые рабочие места",
    "Выпуск продукции",
    "Запущено в январе–августе 2026 года",
    "Показатель этого периода входит в общее число запущенных проектов и отдельно не прибавляется.",
    "Площадь коммуникаций",
    "Пригодная к использованию площадь",
    "Новые зоны — сводный план",
    "Всего планируемых рабочих мест по трём проектам новых зон.",
    "Основание создания — по документу",
    "ПП-61 · 13.02.2026. Независимое подтверждение официальным источником ожидается.",
    "Указанная в документе аукционная площадь не является текущей свободной землёй или перечнем готовых лотов.",
  ],
  tr: [
    "Ayrıntılı göstergeler",
    "Proje yatırımı",
    "Alan",
    "Oluşturulan istihdam",
    "Planlanan istihdam",
    "Üretim çıktısı",
    "Ocak–Ağustos 2026 döneminde başlatılan",
    "Bu dönem göstergesi başlatılan projelerin alt kümesidir; toplama ayrıca eklenmez.",
    "Altyapı tesisleri alanı",
    "Kullanılabilir alan",
    "Yeni bölgeler — toplu plan",
    "Üç yeni bölge projesinde toplam planlanan istihdam.",
    "Kuruluş dayanağı — belgede belirtilen",
    "PQ-61 · 13 Şubat 2026. Bağımsız resmî kaynak doğrulaması bekleniyor.",
    "Belgede belirtilen ihale alanı mevcut boş arazi veya hazır lot listesi değildir.",
  ],
  zh: [
    "详细指标",
    "项目投资额",
    "面积",
    "已创造就业岗位",
    "计划就业岗位",
    "生产产值",
    "2026年1月至8月投产",
    "该期间指标属于已投产项目的子集，不应另行累加。",
    "基础设施用地",
    "可使用面积",
    "新工业区 — 汇总计划",
    "三个新工业区项目合计计划就业岗位。",
    "设立依据 — 文件所述",
    "PQ-61 · 2026年2月13日。尚待独立官方来源核实。",
    "文件所述拍卖面积并非当前可用土地或可直接竞拍的标的清单。",
  ],
};
function ReportDetails({ lang, c }) {
  const r = reportText[lang] || reportText.uz;
  const e = districtReport.existingIndustrialZones;
  const money = (v) => `${format(v, lang)} UZS`;
  const groups = [
    {
      title: c[20],
      facts: [
        [c[19], e.active.projectCount],
        [r[1], money(e.active.investmentUZS)],
        [r[2], hectares(e.active.areaHa, lang, c)],
        [r[3], e.active.createdJobs],
        [r[5], money(e.active.outputUZS)],
      ],
    },
    {
      title: c[21],
      facts: [
        [c[19], e.ongoing.projectCount],
        [r[1], money(e.ongoing.investmentUZS)],
        [r[2], hectares(e.ongoing.areaHa, lang, c)],
        [r[4], e.ongoing.plannedJobs],
      ],
    },
    {
      title: r[6],
      facts: [
        [c[19], e.launchedJanuaryAugust2026.projectCount],
        [r[1], money(e.launchedJanuaryAugust2026.investmentUZS)],
        [r[3], e.launchedJanuaryAugust2026.createdJobs],
      ],
      note: r[7],
    },
  ];
  return (
    <section
      className="container official-section official-report-details"
      data-testid="official-report-details"
    >
      <h2>{r[0]}</h2>
      <div className="official-report-grid">
        {groups.map((group) => (
          <article key={group.title}>
            <h3>{group.title}</h3>
            <dl>
              {group.facts.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            {group.note && <p className="official-note">{group.note}</p>}
          </article>
        ))}
      </div>
      <div className="official-report-land">
        <article>
          <h3>{c[18]}</h3>
          <dl>
            {[
              [c[7], e.totalAreaHa],
              [r[8], e.communicationAreaHa],
              [r[9], e.usableAreaHa],
              [c[22], e.allocatedAreaHa],
              [c[23], e.reportedAuctionAreaHa],
            ].map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{hectares(value, lang, c)}</dd>
              </div>
            ))}
          </dl>
          <p className="official-note">{r[14]}</p>
        </article>
        <article>
          <h3>{r[10]}</h3>
          <dl>
            <div>
              <dt>{c[8]}</dt>
              <dd>
                {hectares(
                  districtReport.newIndustrialZones.reportedTotalAreaHa,
                  lang,
                  c,
                )}
              </dd>
            </div>
            <div>
              <dt>{r[4]}</dt>
              <dd>
                {format(districtReport.newIndustrialZones.plannedJobs, lang)}
              </dd>
            </div>
          </dl>
          <p className="official-note">{r[11]}</p>
        </article>
      </div>
    </section>
  );
}

function Source({ c }) {
  return (
    <div className="official-source">
      <div>
        <FileText size={21} />
        <span>
          {c[42]}
          <small>{c[43]}</small>
        </span>
      </div>
      <a
        className="button button-secondary"
        href={districtReport.source.url}
        download
      >
        {c[4]} <ArrowUpRight size={17} />
      </a>
    </div>
  );
}
function Status({ c }) {
  return (
    <p className="official-status" data-testid="official-data-status">
      <ShieldCheck size={17} />
      {c[3]}
    </p>
  );
}
export function OfficialOverview({ lang, Link, ButtonLink, home = false }) {
  const c = words(lang);
  const existing = districtReport.existingIndustrialZones;
  return (
    <>
      <section
        className={`official-intro ${home ? "official-intro-home" : ""}`}
      >
        <div className="container">
          <p className="eyebrow">{c[0]}</p>
          <h1>{c[1]}</h1>
          <p className="official-lead">{c[2]}</p>
          <Status c={c} />
          <div className="official-summary">
            {[
              [
                c[5],
                hectares(districtReport.freeEconomicZone.totalAreaHa, lang, c),
              ],
              [c[6], format(existing.zoneCount, lang)],
              [c[7], hectares(existing.totalAreaHa, lang, c)],
              [
                c[8],
                hectares(
                  districtReport.newIndustrialZones.reportedTotalAreaHa,
                  lang,
                  c,
                ),
              ],
            ].map(([label, value]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container official-section">
        <div className="official-section-heading">
          <p className="eyebrow">{c[0]}</p>
          <h2>{c[9]}</h2>
          <ButtonLink to="/auctions" secondary>
            {c[40]}
          </ButtonLink>
        </div>
        <div className="official-grid">
          {officialZones.map((zone) => (
            <article
              className="official-card"
              data-testid="official-zone-card"
              key={zone.id}
            >
              <div className="official-card-symbol">
                {zone.kind === "free-economic-zone-branch" ? (
                  <Building2 size={28} />
                ) : (
                  <Factory size={28} />
                )}
                <span>
                  {zone.kind === "free-economic-zone-branch" ? c[10] : c[11]}
                </span>
              </div>
              <h3>{zone.names[lang] || zone.names.uz}</h3>
              <dl>
                <div>
                  <dt>{c[12]}</dt>
                  <dd>{hectares(zone.areaHa, lang, c)}</dd>
                </div>
                <div>
                  <dt>{c[13]}</dt>
                  <dd>{hectares(zone.allocatedProjectAreaHa, lang, c)}</dd>
                </div>
                <div>
                  <dt>{c[15]}</dt>
                  <dd>{format(zone.projects[0].investmentUSD, lang)} USD</dd>
                </div>
              </dl>
              <p className="official-note">{c[17]}</p>
              <ButtonLink to={`/zones/${zone.id}`}>{c[16]}</ButtonLink>
            </article>
          ))}
        </div>
        <Source c={c} />
      </section>
      <section className="official-aggregate">
        <div className="container">
          <h2>{c[18]}</h2>
          <p className="official-note">{c[24]}</p>
          <div className="official-aggregate-grid">
            {[
              [c[19], existing.projectCount],
              [c[20], existing.active.projectCount],
              [c[21], existing.ongoing.projectCount],
              [c[22], `${format(existing.allocatedAreaHa, lang)} ha`],
              [c[23], `${format(existing.reportedAuctionAreaHa, lang)} ha`],
            ].map(([label, value]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ReportDetails lang={lang} c={c} />
    </>
  );
}
export function OfficialZoneDetail({ lang, Link, ButtonLink, id }) {
  const c = words(lang);
  const zone = officialZones.find((z) => z.id === id);
  if (!zone)
    return (
      <section className="container official-section">
        <h1>{c[44]}</h1>
        <Link to="/zones">{c[25]}</Link>
      </section>
    );
  const project = zone.projects[0];
  return (
    <>
      <section className="official-intro">
        <div className="container">
          <Link className="official-back" to="/zones">
            ← {c[25]}
          </Link>
          <p className="eyebrow">
            {zone.kind === "free-economic-zone-branch" ? c[10] : c[11]} · {c[0]}
          </p>
          <h1>{zone.names[lang] || zone.names.uz}</h1>
          <Status c={c} />
        </div>
      </section>
      <section className="container official-section">
        <div className="official-detail-grid">
          <article className="official-project">
            <h2>{c[26]}</h2>
            <dl data-testid="official-project-facts">
              <div>
                <dt>{c[12]}</dt>
                <dd>{hectares(zone.areaHa, lang, c)}</dd>
              </div>
              <div>
                <dt>{c[13]}</dt>
                <dd>{hectares(zone.allocatedProjectAreaHa, lang, c)}</dd>
              </div>
              <div>
                <dt>{c[15]}</dt>
                <dd>{format(project.investmentUSD, lang)} USD</dd>
              </div>
              {project.investor && (
                <div>
                  <dt>{c[27]}</dt>
                  <dd>{project.investor}</dd>
                </div>
              )}
              {project.name && (
                <div>
                  <dt>{c[28]}</dt>
                  <dd>{project.nameLocalized?.[lang] || project.name}</dd>
                </div>
              )}
              {project.status === "construction" && (
                <div>
                  <dt>{c[26]}</dt>
                  <dd>{c[29]}</dd>
                </div>
              )}
              {zone.establishedBy && (
                <div>
                  <dt>{(reportText[lang] || reportText.uz)[12]}</dt>
                  <dd>{(reportText[lang] || reportText.uz)[13]}</dd>
                </div>
              )}
              {zone.reportedAuctionAreaHa !== null && (
                <div>
                  <dt>{c[23]}</dt>
                  <dd>{hectares(zone.reportedAuctionAreaHa, lang, c)}</dd>
                </div>
              )}
            </dl>
            <p className="official-note">{c[17]}</p>
            {zone.reportedAuctionAreaHa !== null && (
              <p className="official-note">
                {(reportText[lang] || reportText.uz)[14]}
              </p>
            )}
          </article>
          <aside className="official-contact">
            <MapPin size={28} />
            <h2>{c[0]}</h2>
            <p>{c[30]}</p>
            <ButtonLink to="/contact">{c[41]}</ButtonLink>
          </aside>
        </div>
        <div className="official-information">
          {[
            [30, 31],
            [32, 33],
            [34, 35],
            [36, 37],
            [38, 39],
          ].map(([title, body]) => (
            <article key={title}>
              <h2>{c[title]}</h2>
              <p>{c[body]}</p>
              {title === 38 && (
                <ButtonLink to="/auctions" secondary>
                  {c[40]}
                </ButtonLink>
              )}
            </article>
          ))}
        </div>
        <Source c={c} />
      </section>
    </>
  );
}
