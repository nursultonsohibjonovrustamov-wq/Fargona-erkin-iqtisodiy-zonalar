import React from "react";
import {
  ArrowUpRight,
  Building2,
  Factory,
  HeartPulse,
  Landmark,
  Leaf,
  MapPin,
  Phone,
  Sprout,
  Users,
} from "lucide-react";
import { districtProfileCopy } from "./district-profile-copy";
import "./district-profile.css";

const factIcons = [Users, MapPin, Building2, Building2];
const economyIcons = [Sprout, Factory, HeartPulse];
const placeIcons = [Leaf, Landmark, MapPin, Leaf, Landmark];

function ExternalLink({ href, children, className = "" }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="district-section-heading">
      <p className="eyebrow">
        <span />
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function DistrictProfile({ lang }) {
  const t = districtProfileCopy[lang] || districtProfileCopy.uz;

  return (
    <div className="district-profile">
      <section className="section district-overview">
        <div className="container">
          <div className="district-intro">
            <SectionHeading
              eyebrow={t.overviewEyebrow}
              title={t.overviewTitle}
            />
            <p>{t.overviewText}</p>
          </div>
          <div className="district-facts">
            {t.facts.map((fact, index) => {
              const Icon = factIcons[index] || Building2;
              return (
                <article className="district-fact" key={fact.label}>
                  <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                  <small>{fact.note}</small>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section district-economy">
        <div className="container">
          <SectionHeading
            eyebrow={t.economyEyebrow}
            title={t.economyTitle}
            text={t.economyIntro}
          />
          <div className="district-card-grid district-economy-grid">
            {t.economyCards.map((card, index) => {
              const Icon = economyIcons[index] || Building2;
              return (
                <article className="district-info-card" key={card.title}>
                  <span className="district-card-icon">
                    <Icon size={23} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section district-tourism">
        <div className="container">
          <SectionHeading
            eyebrow={t.tourismEyebrow}
            title={t.tourismTitle}
            text={t.tourismIntro}
          />
          <div className="district-card-grid district-place-grid">
            {t.places.map((place, index) => {
              const Icon = placeIcons[index] || MapPin;
              return (
                <article className="district-place-card" key={place.title}>
                  <div className="district-place-title">
                    <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
                    <h3>{place.title}</h3>
                  </div>
                  <p>{place.text}</p>
                </article>
              );
            })}
          </div>
          <aside className="district-project-note">
            <span className="district-note-mark" aria-hidden="true">i</span>
            <div>
              <h3>{t.projectNoteTitle}</h3>
              <p>{t.projectNote}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section district-services">
        <div className="container">
          <SectionHeading
            eyebrow={t.servicesEyebrow}
            title={t.servicesTitle}
            text={t.servicesIntro}
          />
          <div className="district-services-grid">
            {t.serviceLinks.map((link) => (
              <ExternalLink
                className="district-service-link"
                href={link.href}
                key={link.title}
              >
                <span>
                  <strong>{link.title}</strong>
                  <small>{link.text}</small>
                </span>
              </ExternalLink>
            ))}
          </div>
          <div className="district-contact-card">
            <div className="district-contact-heading">
              <p className="eyebrow">
                <span />
                {t.contactEyebrow}
              </p>
              <h3>{t.contactTitle}</h3>
              <p>{t.contactIntro}</p>
            </div>
            <div className="district-contact-details">
              <a href="tel:+998733531564">
                <Phone size={18} aria-hidden="true" />
                <span>
                  <small>{t.hotlineLabel}</small>
                  <strong>+998 73 353-15-64</strong>
                </span>
              </a>
              <a href="tel:+998732439130">
                <Phone size={18} aria-hidden="true" />
                <span>
                  <small>{t.receptionLabel}</small>
                  <strong>+998 73 243-91-30</strong>
                </span>
              </a>
              <a href="mailto:fartuman@inbox.uz">
                <span className="district-mail-icon" aria-hidden="true">@</span>
                <span>
                  <small>{t.emailLabel}</small>
                  <strong>fartuman@inbox.uz</strong>
                </span>
              </a>
              <ExternalLink
                className="district-contact-source"
                href="https://gov.uz/oz/fargonatuman"
              >
                {t.officialContactLink}
              </ExternalLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section district-sources">
        <div className="container">
          <SectionHeading
            eyebrow={t.sourcesEyebrow}
            title={t.sourcesTitle}
            text={t.sourcesIntro}
          />
          <div className="district-source-grid">
            {t.sources.map((source) => (
              <ExternalLink
                className="district-source-link"
                href={source.href}
                key={source.title}
              >
                <span>
                  <strong>{source.title}</strong>
                  <small>{source.text}</small>
                </span>
              </ExternalLink>
            ))}
          </div>
          <p className="district-sources-checked">{t.sourcesChecked}</p>
        </div>
      </section>
    </div>
  );
}
