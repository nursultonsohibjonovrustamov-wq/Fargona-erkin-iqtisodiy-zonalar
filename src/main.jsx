import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
} from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Globe2,
  MapPin,
  Search,
  Menu,
  X,
  ChevronDown,
  Check,
  Building2,
  Factory,
  Route,
  FileText,
  Download,
  ShieldCheck,
  Leaf,
  Layers3,
  Zap,
  Wheat,
  Shirt,
  ExternalLink,
  Mail,
  Trash2,
  Printer,
  Compass,
  CheckCircle2,
} from "lucide-react";
import {
  languages,
  copy,
  paths,
  articleSlugs,
  parseLocation,
  localPath,
  searchEntries,
} from "./i18n";
import "./styles.css";
import { Catalog, CatalogDetail, PropertyDetail } from "./catalog";
import {
  catalogSearchEntries,
  getCatalogPageTitle,
  officialZones,
} from "./catalog-data";
import { OfficialOverview, OfficialZoneDetail } from "./official-zones";
import {
  PresentationOverview,
  PresentationZoneDetail,
} from "./presentation-zones";
import { presentationZones } from "./presentation-data";
const archiveNotice = {
  uz: "Bu ma’lumot 2026-10-12 kuni taqdim etilgan oldingi hujjatdan. Yangilangan asosiy hududlar katalogini ochish →",
  en: "This record comes from the earlier document received on 12 October 2026. Open the updated main territory directory →",
  ru: "Запись из предыдущего документа, полученного 12 октября 2026 года. Открыть обновлённый основной каталог территорий →",
  tr: "Bu kayıt 12 Ekim 2026 tarihinde sunulan önceki belgedendir. Güncel ana alan kataloğunu açın →",
  zh: "本记录来自2026年10月12日收到的较早文件。查看更新后的主要区域目录 →",
};
function ArchiveNotice({ lang, Link }) {
  return (
    <div className="container" style={{ paddingTop: 24 }}>
      <Notice>
        <Link to="/zones">{archiveNotice[lang]}</Link>
      </Notice>
    </div>
  );
}
const Ctx = createContext(null);
const usePortal = () => useContext(Ctx);
const sources = [
  { key: "regionGov", href: "https://fergana.uz/" },
  { key: "ministry", href: "https://invest.gov.uz/" },
  { key: "legislation", href: "https://lex.uz/" },
];
const sectorIcons = [Shirt, Wheat, Zap, Layers3];
const emptyForm = {
  name: "",
  company: "",
  email: "",
  country: "",
  sector: "",
  message: "",
  consent: false,
};
const storage = {
  get(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  },
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch {
      return false;
    }
  },
};
function saveFile(name, content) {
  const url = URL.createObjectURL(
    new Blob(["\ufeff" + content], { type: "text/plain;charset=utf-8" }),
  );
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function Link({ to = "/", children, className = "", onClick, ...props }) {
  const { lang, navigate } = usePortal();
  return (
    <a
      href={localPath(lang, to)}
      className={className}
      {...props}
      onClick={(e) => {
        onClick?.(e);
        if (
          !e.defaultPrevented &&
          !e.ctrlKey &&
          !e.metaKey &&
          !e.shiftKey &&
          e.button === 0
        ) {
          e.preventDefault();
          navigate(to);
        }
      }}
    >
      {children}
    </a>
  );
}
function ButtonLink({
  to,
  children,
  secondary = false,
  light = false,
  className = "",
}) {
  return (
    <Link
      to={to}
      className={`button ${secondary ? "button-secondary" : ""} ${light ? "button-light" : ""} ${className}`}
    >
      {children}
      <ArrowUpRight size={18} />
    </Link>
  );
}
function SectionHeading({ eyebrow, title, text, action }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span />
          {eyebrow}
        </p>
        <h2>{title}</h2>
        {text && <p className="section-lead">{text}</p>}
      </div>
      {action}
    </div>
  );
}
function Brand({ footer = false }) {
  const { t } = usePortal();
  return (
    <Link className={`brand ${footer ? "brand-footer" : ""}`} to="/">
      <span className="brand-symbol" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span>
        <strong>{t.authority}</strong>
        <small>{t.brand}</small>
      </span>
    </Link>
  );
}
function Header() {
  const { t, lang, route, changeLang } = usePortal();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const langRef = useRef();
  useEffect(() => {
    setOpen(false);
    setLangOpen(false);
  }, [route, lang]);
  useEffect(() => {
    const close = (e) => {
      if (!langRef.current?.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>
            <Globe2 size={12} />
            {t.territory}
          </span>
          <span className="edition">
            <i />
            {t.demoBadge}
          </span>
        </div>
      </div>
      <header>
        <div className="container header-inner">
          <Brand />
          <nav
            className={open ? "navigation mobile-open" : "navigation"}
            aria-label={t.menu}
          >
            {paths.map((p, i) => (
              <Link
                key={p}
                to={p}
                aria-current={
                  route === p || (p !== "/" && route.startsWith(p))
                    ? "page"
                    : undefined
                }
              >
                {t.nav[i]}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <button
              className="icon-button"
              aria-label={t.search}
              onClick={() => setSearchOpen(true)}
            >
              <Search size={19} />
            </button>
            <div ref={langRef} className="language-picker">
              <button
                className="language-button"
                aria-label={languages.find((l) => l.code === lang).label}
                aria-expanded={langOpen}
                aria-controls="language-menu"
                onClick={() => setLangOpen(!langOpen)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setLangOpen(false);
                }}
              >
                <Globe2 size={16} />
                {languages.find((l) => l.code === lang).short}
                <ChevronDown size={13} />
              </button>
              {langOpen && (
                <div id="language-menu" className="language-menu">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      lang={l.code}
                      onClick={() => {
                        changeLang(l.code);
                        setLangOpen(false);
                      }}
                    >
                      {l.label}
                      {lang === l.code && <Check size={15} />}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              className="icon-button mobile-toggle"
              aria-label={open ? t.close : t.menu}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </>
  );
}
function SearchModal({ onClose }) {
  const { t, lang, route } = usePortal();
  const [query, setQuery] = useState("");
  const dialogRef = useRef();
  useEffect(() => {
    const d = dialogRef.current;
    d.showModal();
    return () => d.close();
  }, []);
  const normalize = (s) =>
    s
      .toLocaleLowerCase()
      .normalize("NFKD")
      .replace(/[‘’'`ʼ]/g, "");
  const entries = [
    ...searchEntries(lang),
    ...presentationZones.map((z) => ({
      route: `/zones/${z.id}`,
      title: z.names[lang],
      description: z.names[lang],
    })),
    ...catalogSearchEntries(lang),
  ]
    .filter((x) =>
      normalize(x.title + " " + x.description).includes(
        normalize(query.trim()),
      ),
    )
    .sort(
      (a, b) =>
        Number(normalize(b.title).includes(normalize(query.trim()))) -
        Number(normalize(a.title).includes(normalize(query.trim()))),
    );
  return (
    <dialog
      ref={dialogRef}
      className="search-dialog"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
      aria-labelledby="search-title"
    >
      <div className="search-dialog-inner">
        <div className="dialog-head">
          <h2 id="search-title">{t.searchTitle}</h2>
          <button
            className="icon-button"
            onClick={onClose}
            aria-label={t.close}
          >
            <X />
          </button>
        </div>
        <div className="search-field">
          <Search size={20} />
          <input
            autoFocus
            aria-label={t.search}
            placeholder={t.searchPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <p className="eyebrow search-label">{t.results}</p>
        <div className="search-results">
          {entries.length ? (
            entries.map((x) => (
              <Link key={x.route} to={x.route} onClick={onClose}>
                <span>
                  <strong>{x.title}</strong>
                  <small>{x.description}</small>
                </span>
                <ArrowUpRight size={19} />
              </Link>
            ))
          ) : (
            <p>{t.noResults}</p>
          )}
        </div>
      </div>
    </dialog>
  );
}
function MapIllustration() {
  const { t } = usePortal();
  return (
    <div
      className="map-wrapper"
      style={{ padding: "48px 32px", textAlign: "center" }}
    >
      <a href="/district-presentation-map.jpg" target="_blank" rel="noreferrer">
        <img
          src="/district-presentation-map.jpg"
          alt={t.mapLabel}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            marginBottom: 24,
          }}
        />
      </a>
      <h3>{t.scopeValue}</h3>
      <p>{t.authority}</p>
      <p className="map-note">{t.mapNote}</p>
    </div>
  );
}
function ZoneCard() {
  const { t } = usePortal();
  return (
    <Link to="/zones/kokand" className="zone-card">
      <div className="zone-art">
        <img src="/valley.svg" alt="" loading="lazy" />
        <span className="zone-tag">
          <MapPin size={13} />
          {t.scopeValue}
        </span>
        <span className="round-arrow">
          <ArrowUpRight size={23} />
        </span>
      </div>
      <div className="zone-card-content">
        <span className="eyebrow">{t.fez}</span>
        <h3>{t.kokand}</h3>
        <p>{t.zoneDescription}</p>
        <span className="text-link">
          {t.zoneCardAction}
          <ArrowRight size={17} />
        </span>
      </div>
    </Link>
  );
}
function Sectors() {
  const { t } = usePortal();
  return (
    <div className="sector-grid">
      {t.sectors.map((name, i) => {
        const Icon = sectorIcons[i];
        return (
          <Link className="sector-card" key={name} to={`/contact?sector=${i}`}>
            <span className="sector-number">0{i + 1}</span>
            <Icon size={36} strokeWidth={1.1} />
            <h3>{name}</h3>
            <p>{t.sectorTexts[i]}</p>
            <ArrowUpRight className="sector-arrow" size={20} />
          </Link>
        );
      })}
    </div>
  );
}
function Steps() {
  const { t } = usePortal();
  return (
    <ol className="steps">
      {t.steps.map((s, i) => (
        <li key={s}>
          <span className="step-index">0{i + 1}</span>
          <h3>{s}</h3>
          <p>{t.stepTexts[i]}</p>
        </li>
      ))}
    </ol>
  );
}
function ResourceCards() {
  const { t } = usePortal();
  return (
    <div className="resource-grid">
      {t.articles.map((title, i) => (
        <Link
          to={`/resources/${articleSlugs[i]}`}
          className="resource-card"
          key={title}
        >
          <div className={`resource-art resource-art-${i}`}>
            <span className="resource-art-icon">
              {i === 0 ? (
                <FileText size={49} strokeWidth={1} />
              ) : i === 1 ? (
                <Building2 size={49} strokeWidth={1} />
              ) : (
                <ShieldCheck size={49} strokeWidth={1} />
              )}
            </span>
            <span className="resource-art-index">0{i + 1}</span>
          </div>
          <div className="resource-content">
            <span className="eyebrow">{t.articleTag}</span>
            <h3>{title}</h3>
            <p>{t.articleTexts[i]}</p>
            <span className="text-link">
              {t.articleRead}
              <ArrowUpRight size={17} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
function BottomCTA() {
  const { t } = usePortal();
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">
            <span />
            {t.territory}
          </p>
          <h2>{t.bottomTitle}</h2>
          <p>{t.bottomText}</p>
        </div>
        <ButtonLink to="/contact" light>
          {t.contactCta}
        </ButtonLink>
        <div className="cta-orbit" aria-hidden="true" />
      </div>
    </section>
  );
}
function Home() {
  const { t } = usePortal();
  return (
    <>
      <section className="hero">
        <div className="hero-art" aria-hidden="true">
          <img src="/valley.svg" fetchPriority="high" alt="" />
        </div>
        <div className="hero-shade" />
        <div className="container hero-content">
          <p className="eyebrow">
            <span />
            {t.heroEyebrow}
          </p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-description">{t.heroText}</p>
          <div className="hero-buttons">
            <ButtonLink to="/zones" light>
              {t.explore}
            </ButtonLink>
            <Link className="hero-secondary" to="/investor">
              {t.guideCta}
              <ArrowUpRight size={18} />
            </Link>
          </div>
          <a className="hero-scroll" href="#possibilities">
            <span>
              <ArrowDown size={17} />
            </span>
            {t.scroll}
          </a>
        </div>
        <span className="hero-caption">{t.heroCaption}</span>
        <div className="hero-index" aria-hidden="true">
          01 <span>/ 03</span>
        </div>
      </section>
      <div className="container pillars">
        {t.pillars.map((p, i) => {
          const Icon = [Compass, Factory, Route][i];
          return (
            <div className="pillar" key={p}>
              <Icon size={28} strokeWidth={1.25} />
              <div>
                <strong>{p}</strong>
                <p>{t.pillarText[i]}</p>
              </div>
            </div>
          );
        })}
      </div>
      <section id="possibilities" className="section container about-section">
        <div className="about-art">
          <div className="about-image">
            <img src="/valley.svg" alt="" loading="lazy" />
          </div>
          <span className="about-stamp">
            <Leaf size={24} />
            <span>
              {t.scopeValue}
              <small>{t.territory.split("·").pop().trim()}</small>
            </span>
          </span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">
            <span />
            {t.aboutEyebrow}
          </p>
          <h2>{t.aboutTitle}</h2>
          <p className="section-lead">{t.aboutText}</p>
          <ul className="check-list">
            {t.aboutPoints.map((p) => (
              <li key={p}>
                <Check size={17} />
                {p}
              </li>
            ))}
          </ul>
          <Link to="/region" className="text-link">
            {t.readMore}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <section className="section zone-section">
        <div className="container">
          <SectionHeading
            eyebrow={t.zoneEyebrow}
            title={t.zoneTitle}
            text={t.zoneIntro}
            action={
              <Link className="text-link" to="/zones">
                {t.allZones}
                <ArrowUpRight size={18} />
              </Link>
            }
          />
          <div className="zone-layout">
            <ZoneCard />
            <MapIllustration />
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          eyebrow={t.sectorEyebrow}
          title={t.sectorTitle}
          text={t.sectorIntro}
        />
        <Sectors />
      </section>
      <section className="section investor-section">
        <div className="container">
          <SectionHeading
            eyebrow={t.investorEyebrow}
            title={t.investorTitle}
            text={t.investorIntro}
            action={
              <ButtonLink to="/investor" secondary>
                {t.guideCta}
              </ButtonLink>
            }
          />
          <Steps />
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          eyebrow={t.resourcesEyebrow}
          title={t.resourcesTitle}
          action={
            <Link to="/resources" className="text-link">
              {t.allResources}
              <ArrowUpRight size={18} />
            </Link>
          }
        />
        <ResourceCards />
      </section>
      <BottomCTA />
    </>
  );
}
function PageHero({ eyebrow, title, lead }) {
  const { t } = usePortal();
  return (
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumbs">
          <Link to="/">{t.home}</Link>
          <span>/</span>
          <span>{eyebrow}</span>
        </div>
        <p className="eyebrow">
          <span />
          {eyebrow}
        </p>
        <h1>{title}</h1>
        {lead && <p>{lead}</p>}
      </div>
      <div className="page-hero-pattern" aria-hidden="true" />
    </section>
  );
}
function Region() {
  const { t } = usePortal();
  return (
    <>
      <PageHero eyebrow={t.nav[1]} title={t.regionTitle} lead={t.regionLead} />
      <section className="section container region-overview">
        <div>
          <p className="eyebrow">{t.aboutEyebrow}</p>
          <h2>{t.aboutTitle}</h2>
          <p className="section-lead">{t.aboutText}</p>
          <ul className="check-list">
            {t.aboutPoints.map((x) => (
              <li key={x}>
                <Check size={17} />
                {x}
              </li>
            ))}
          </ul>
        </div>
        <MapIllustration />
      </section>
      <section className="container region-cards">
        {t.regionCards.map((x, i) => {
          const Icon = [Route, Building2, Zap][i];
          return (
            <article key={x}>
              <Icon size={32} strokeWidth={1.3} />
              <h3>{x}</h3>
              <p>{t.regionCardTexts[i]}</p>
            </article>
          );
        })}
      </section>
      <div className="container">
        <Notice>{t.regionNote}</Notice>
      </div>
      <section className="section container">
        <SectionHeading
          eyebrow={t.sectorEyebrow}
          title={t.sectorTitle}
          text={t.sectorIntro}
        />
        <Sectors />
      </section>
      <BottomCTA />
    </>
  );
}
function Notice({ children }) {
  return (
    <div className="notice">
      <ShieldCheck size={22} />
      <p>{children}</p>
    </div>
  );
}
function Zones() {
  const { t } = usePortal();
  return (
    <>
      <PageHero eyebrow={t.nav[2]} title={t.zoneTitle} lead={t.zoneIntro} />
      <section className="section container">
        <div className="zone-layout">
          <ZoneCard />
          <MapIllustration />
        </div>
        <Notice>{t.noInvented}</Notice>
      </section>
      <BottomCTA />
    </>
  );
}
function ZoneDetail() {
  const { t } = usePortal();
  return (
    <>
      <PageHero
        eyebrow={t.fez}
        title={t.zonesPageTitle}
        lead={t.zoneDetailLead}
      />
      <section className="section container detail-layout">
        <div className="detail-main">
          <div className="detail-image">
            <img src="/valley.svg" alt="" />
            <span>{t.heroCaption}</span>
          </div>
          <h2>{t.overview}</h2>
          <p>{t.zoneDetailText}</p>
          <h3>{t.verifyTitle}</h3>
          <ul className="check-list">
            {t.verification.map((x) => (
              <li key={x}>
                <Check size={17} />
                {x}
              </li>
            ))}
          </ul>
          <Notice>{t.noInvented}</Notice>
        </div>
        <aside className="detail-sidebar">
          <span className="eyebrow">{t.fez}</span>
          <h2>{t.kokand}</h2>
          <p className="location">
            <MapPin size={19} />
            {t.zoneLocation}
          </p>
          <ButtonLink to="/contact">{t.contactCta}</ButtonLink>
          <ButtonLink to="/investor" secondary>
            {t.guideCta}
          </ButtonLink>
          <a
            className="text-link"
            href="https://www.google.com/maps/search/?api=1&query=Kokand+Uzbekistan"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.mapOpen}
            <ExternalLink size={16} />
          </a>
        </aside>
      </section>
      <section className="container section">
        <SectionHeading eyebrow={t.preparation} title={t.investorTitle} />
        <Steps />
      </section>
      <BottomCTA />
    </>
  );
}
function downloadGuide(t, lang, i = 0) {
  saveFile(
    `fergana-${articleSlugs[i]}-${lang}.txt`,
    [
      t.brand,
      t.authority,
      "",
      t.articles[i],
      ...t.articleBodies[i].map((x, j) => `${j + 1}. ${x}`),
      "",
      t.demoNote,
      "",
      t.footerSources,
      ...sources.map((s) => `${t[s.key]}: ${s.href}`),
    ].join("\n"),
  );
}
function Investor() {
  const { t, lang } = usePortal();
  return (
    <>
      <PageHero
        eyebrow={t.nav[3]}
        title={t.investorTitle}
        lead={t.investorIntro}
      />
      <section className="section container">
        <Steps />
        <div className="investor-actions">
          <button className="button" onClick={() => downloadGuide(t, lang)}>
            {t.checklist}
            <Download size={18} />
          </button>
          <ButtonLink to="/contact" secondary>
            {t.contactCta}
          </ButtonLink>
        </div>
      </section>
      <section className="legal-section">
        <div className="container legal-inner">
          <div className="legal-icon">
            <ShieldCheck size={62} strokeWidth={1} />
          </div>
          <div>
            <p className="eyebrow">{t.legislation}</p>
            <h2>{t.legalTitle}</h2>
            <p>{t.legalText}</p>
            <a
              className="text-link"
              href="https://lex.uz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LexUZ
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
      <section className="section container faq-section">
        <SectionHeading eyebrow={t.investorEyebrow} title={t.faqTitle} />
        <div className="faq-list">
          {t.faqs.map((q, i) => (
            <details key={q}>
              <summary>
                {q}
                <ChevronDown size={20} />
              </summary>
              <p>{t.faqAnswers[i]}</p>
            </details>
          ))}
        </div>
      </section>
      <BottomCTA />
    </>
  );
}
function Sources() {
  const { t } = usePortal();
  return (
    <div className="source-section">
      <h2>{t.sourceStatus}</h2>
      <p>{t.sourceText}</p>
      <div className="source-links">
        {sources.map((s) => (
          <a
            key={s.key}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <strong>{t[s.key]}</strong>
              <small>
                {new URL(s.href).hostname} · {t.sourceExternal}
              </small>
            </span>
            <ExternalLink size={20} />
          </a>
        ))}
      </div>
    </div>
  );
}
function Resources() {
  const { t } = usePortal();
  return (
    <>
      <PageHero
        eyebrow={t.nav[4]}
        title={t.resourcesTitle}
        lead={t.resourcesIntro}
      />
      <section className="section container">
        <ResourceCards />
        <Sources />
      </section>
      <BottomCTA />
    </>
  );
}
function Article({ index }) {
  const { t, lang } = usePortal();
  return (
    <>
      <PageHero
        eyebrow={t.articleTag}
        title={t.articles[index]}
        lead={t.articleTexts[index]}
      />
      <section className="section container article-layout">
        <article className="article-body">
          <ol>
            {t.articleBodies[index].map((x, i) => (
              <li key={x}>
                <span>0{i + 1}</span>
                <p>{x}</p>
              </li>
            ))}
          </ol>
          <Notice>{t.demoNote}</Notice>
          <div className="article-actions">
            <button
              className="button"
              onClick={() => downloadGuide(t, lang, index)}
            >
              {t.download}
              <Download size={18} />
            </button>
            <button
              className="button button-secondary"
              onClick={() => window.print()}
            >
              {t.print}
              <Printer size={18} />
            </button>
          </div>
        </article>
        <aside className="article-sidebar">
          <h3>{t.resourcesEyebrow}</h3>
          {t.articles.map((a, i) => (
            <Link
              key={a}
              to={`/resources/${articleSlugs[i]}`}
              aria-current={i === index ? "page" : undefined}
            >
              {a}
              <ArrowUpRight size={17} />
            </Link>
          ))}
          <Link to="/contact" className="text-link">
            {t.contactCta}
            <ArrowUpRight size={17} />
          </Link>
        </aside>
      </section>
      <BottomCTA />
    </>
  );
}
function Contact() {
  const { t, lang } = usePortal();
  const [form, setForm] = useState(() => {
    let saved;
    try {
      saved = JSON.parse(storage.get("fergana-project"));
    } catch {}
    const qs = new URLSearchParams(window.location.search).get("sector");
    return {
      ...emptyForm,
      ...saved,
      sector: qs !== null && /^[0-3]$/.test(qs) ? qs : saved?.sector || "",
      consent: false,
    };
  });
  const [status, setStatus] = useState("");
  const [saved, setSaved] = useState(!!storage.get("fergana-project"));
  const [error, setError] = useState("");
  const field = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
    setStatus("");
    setError("");
  };
  const submit = (e) => {
    e.preventDefault();
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim() ||
      !form.consent
    ) {
      setError("required");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("invalidEmail");
      return;
    }
    const ok = storage.set(
      "fergana-project",
      JSON.stringify({ ...form, consent: false }),
    );
    setSaved(ok);
    setStatus(ok ? "formSaved" : "storageError");
  };
  const exportForm = () => {
    saveFile(
      `fergana-project-${lang}.txt`,
      [
        t.formTitle,
        t.authority,
        "",
        ...["name", "company", "email", "country", "sector", "message"].map(
          (k) =>
            `${t[k]}: ${k === "sector" ? (form[k] !== "" && /^\d$/.test(form[k]) ? t.sectors[Number(form[k])] : t.other) : form[k]}`,
        ),
        "",
        t.contactLead,
      ].join("\n"),
    );
  };
  const clear = () => {
    if (storage.remove("fergana-project")) {
      setForm({ ...emptyForm });
      setSaved(false);
      setError("");
      setStatus("cleared");
    } else setStatus("storageError");
  };
  return (
    <>
      <PageHero
        eyebrow={t.nav[5]}
        title={t.contactTitle}
        lead={t.contactLead}
      />
      <section className="section container contact-layout">
        <aside className="contact-info">
          <span className="eyebrow">{t.contactOwner}</span>
          <h2>{t.authority}</h2>
          <dl>
            <dt>{t.contactScope}</dt>
            <dd>
              <MapPin size={18} />
              {t.scopeValue}
            </dd>
          </dl>
          <div className="contact-channel">
            <Mail size={25} />
            <h3>{t.channelTitle}</h3>
            <p>{t.channelText}</p>
          </div>
          <Link to="/privacy" className="text-link">
            {t.privacy}
            <ArrowUpRight size={17} />
          </Link>
        </aside>
        <form className="project-form" onSubmit={submit} noValidate>
          <div className="form-header">
            <h2>{t.formTitle}</h2>
            <span>
              <ShieldCheck size={14} />
              {t.savedLabel}
            </span>
          </div>
          <div className="form-grid">
            {["name", "company", "email", "country"].map((key) => (
              <label key={key} htmlFor={key}>
                {t[key]}
                {["name", "email"].includes(key) && (
                  <span aria-hidden="true"> *</span>
                )}
                <input
                  id={key}
                  name={key}
                  type={key === "email" ? "email" : "text"}
                  autoComplete={
                    {
                      name: "name",
                      company: "organization",
                      email: "email",
                      country: "country-name",
                    }[key]
                  }
                  value={form[key]}
                  onChange={(e) => field(key, e.target.value)}
                  required={["name", "email"].includes(key)}
                  maxLength={160}
                />
              </label>
            ))}
            <label className="form-wide" htmlFor="sector">
              {t.sector}
              <select
                id="sector"
                name="sector"
                value={form.sector}
                onChange={(e) => field("sector", e.target.value)}
              >
                <option value="">{t.choose}</option>
                {t.sectors.map((s, i) => (
                  <option key={s} value={String(i)}>
                    {s}
                  </option>
                ))}
                <option value="other">{t.other}</option>
              </select>
            </label>
            <label className="form-wide" htmlFor="message">
              {t.message}
              <span aria-hidden="true"> *</span>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={(e) => field("message", e.target.value)}
                placeholder={t.messageHint}
                maxLength={5000}
                required
              />
            </label>
          </div>
          <label className="consent" htmlFor="consent">
            <input
              id="consent"
              type="checkbox"
              checked={form.consent}
              onChange={(e) => field("consent", e.target.checked)}
              required
            />
            <span>
              {t.consent} <Link to="/privacy">{t.privacy}</Link>
            </span>
          </label>
          {error && (
            <p className="form-error" role="alert">
              {t[error]}
            </p>
          )}
          {status && (
            <p className="form-status" role="status">
              <CheckCircle2 size={19} />
              {t[status]}
            </p>
          )}
          <div className="form-actions">
            <button className="button" type="submit">
              {t.submit}
              <ArrowRight size={18} />
            </button>
            {(saved || status === "storageError") && (
              <button
                className="button button-secondary"
                type="button"
                onClick={exportForm}
              >
                {t.export}
                <Download size={18} />
              </button>
            )}
          </div>
          {saved && (
            <button type="button" className="clear-button" onClick={clear}>
              <Trash2 size={15} />
              {t.clear}
            </button>
          )}
        </form>
      </section>
    </>
  );
}
function Privacy() {
  const { t } = usePortal();
  return (
    <>
      <PageHero eyebrow={t.privacy} title={t.privacyTitle} />
      <section className="section container privacy-content">
        {t.privacyTexts.map((x, i) => (
          <div key={x}>
            <span>0{i + 1}</span>
            <p>{x}</p>
          </div>
        ))}
      </section>
    </>
  );
}
function NotFound() {
  const { t } = usePortal();
  return (
    <section className="container not-found">
      <span>404</span>
      <h1>{t.notFound}</h1>
      <p>{t.notFoundText}</p>
      <ButtonLink to="/">{t.home}</ButtonLink>
    </section>
  );
}
function Footer() {
  const { t } = usePortal();
  return (
    <footer>
      <div className="container footer-main">
        <div className="footer-brand-column">
          <Brand footer />
          <p>{t.footerText}</p>
          <span className="footer-edition">
            <i />
            {t.demoBadge}
          </span>
        </div>
        <div>
          <h3>{t.footerNav}</h3>
          {paths.slice(1).map((p, i) => (
            <Link key={p} to={p}>
              {t.nav[i + 1]}
            </Link>
          ))}
        </div>
        <div>
          <h3>{t.footerSources}</h3>
          {sources.map((s) => (
            <a
              href={s.href}
              key={s.key}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t[s.key]}
              <ArrowUpRight size={13} />
            </a>
          ))}
        </div>
        <div className="footer-note">
          <Globe2 size={28} strokeWidth={1.1} />
          <p>{t.demoNote}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {t.copyright}
        </span>
        <Link to="/privacy">
          {t.privacy}
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </footer>
  );
}
function App() {
  const initial = parseLocation(window.location.pathname);
  const [location, setLocation] = useState(() => {
    if (window.location.pathname === "/") {
      const preferred = storage.get("fergana-language");
      if (languages.some((l) => l.code === preferred)) initial.lang = preferred;
      window.history.replaceState({}, "", localPath(initial.lang, "/"));
    }
    return initial;
  });
  const { lang, route } = location;
  const t = copy[lang];
  const changeLang = (code) => {
    storage.set("fergana-language", code);
    window.history.pushState(
      {},
      "",
      localPath(code, route) + window.location.search,
    );
    setLocation({ lang: code, route });
  };
  const navigate = (to) => {
    const [pathname, query] = to.split("?");
    window.history.pushState(
      {},
      "",
      localPath(lang, pathname) + (query ? "?" + query : ""),
    );
    setLocation({ lang, route: pathname });
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  useEffect(() => {
    const handle = () => {
      setLocation(parseLocation(window.location.pathname));
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("popstate", handle);
    return () => window.removeEventListener("popstate", handle);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    const i = paths.indexOf(route);
    const ai = articleSlugs.indexOf(route.split("/").pop());
    document.title = `${i >= 0 ? t.nav[i] : ai >= 0 ? t.articles[ai] : (route === "/auctions" ? "E-auksion" : route === "/archive/document-20261012" ? t.nav[4] + " · 2026-10-12" : undefined) || presentationZones.find((z) => route === `/zones/${z.id}`)?.names[lang] || officialZones.find((z) => route === `/zones/${z.id}`)?.names[lang] || getCatalogPageTitle(lang, route) || (route === "/privacy" ? t.privacy : t.notFound)} — ${t.brand}`;
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        i >= 0 ? searchEntries(lang)[i].description : t.footerText,
      );
  }, [lang, route, t]);
  const aIndex = articleSlugs.indexOf(route.split("/").pop());
  let page =
    route === "/" ? (
      <>
        <PresentationOverview
          lang={lang}
          Link={Link}
          ButtonLink={ButtonLink}
          home
        />
        <section className="section container">
          <SectionHeading
            eyebrow={t.sectorEyebrow}
            title={t.sectorTitle}
            text={t.sectorIntro}
          />
          <Sectors />
        </section>
        <BottomCTA />
      </>
    ) : route === "/region" ? (
      <Region />
    ) : route === "/zones" ? (
      <>
        <PresentationOverview lang={lang} Link={Link} ButtonLink={ButtonLink} />
        <BottomCTA />
      </>
    ) : route === "/auctions" ? (
      <Catalog t={t} lang={lang} Link={Link} ButtonLink={ButtonLink} />
    ) : route === "/archive/document-20261012" ? (
      <>
        <ArchiveNotice lang={lang} Link={Link} />
        <OfficialOverview lang={lang} Link={Link} ButtonLink={ButtonLink} />
      </>
    ) : presentationZones.some((z) => route === `/zones/${z.id}`) ? (
      <PresentationZoneDetail
        lang={lang}
        Link={Link}
        ButtonLink={ButtonLink}
        id={route.split("/").pop()}
      />
    ) : officialZones.some((z) => route === `/zones/${z.id}`) ? (
      <>
        <ArchiveNotice lang={lang} Link={Link} />
        <OfficialZoneDetail
          lang={lang}
          Link={Link}
          ButtonLink={ButtonLink}
          id={route.split("/").pop()}
        />
      </>
    ) : route.startsWith("/zones/") && getCatalogPageTitle(lang, route) ? (
      <CatalogDetail
        t={t}
        lang={lang}
        Link={Link}
        ButtonLink={ButtonLink}
        id={route.split("/").pop()}
      />
    ) : route.startsWith("/properties/") && getCatalogPageTitle(lang, route) ? (
      <PropertyDetail
        t={t}
        lang={lang}
        Link={Link}
        ButtonLink={ButtonLink}
        id={route.split("/").pop()}
      />
    ) : route === "/investor" ? (
      <Investor />
    ) : route === "/resources" ? (
      <Resources />
    ) : route.startsWith("/resources/") && aIndex >= 0 ? (
      <Article index={aIndex} />
    ) : route === "/contact" ? (
      <Contact />
    ) : route === "/privacy" ? (
      <Privacy />
    ) : (
      <NotFound />
    );
  return (
    <Ctx.Provider value={{ t, lang, route, navigate, changeLang }}>
      <Header />
      <main id="main" tabIndex={-1} key={route}>
        {page}
      </main>
      <Footer />
    </Ctx.Provider>
  );
}
createRoot(document.getElementById("root")).render(<App />);
