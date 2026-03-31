import { type ReactNode } from "react";
import { FileDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { useLanguage } from "./context/LanguageContext";
import { LINKS, type BulletItem } from "./i18n/translations";

function BulletBlock({ item }: { item: BulletItem }) {
  const headline = item.org
    ? `${item.org} — ${item.title}`
    : item.title;
  return (
    <article className="border-l-2 border-clay/60 pl-4 py-1">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-semibold text-deep leading-snug">{headline}</h3>
        {item.period ? (
          <span className="shrink-0 text-sm text-ink/55 tabular-nums">
            {item.period}
          </span>
        ) : null}
      </div>
      <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm text-ink/85 leading-relaxed">
        {item.lines.map((line: string, i: number) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    </article>
  );
}

export default function App() {
  const { locale, setLocale, t } = useLanguage();

  const nav = [
    { href: "#about", label: t.nav.about },
    { href: "#education", label: t.nav.education },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#research", label: t.nav.research },
    { href: "#skills", label: t.nav.skills },
    { href: "#extras", label: t.nav.extras },
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-mist/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a
            href="#top"
            className="font-semibold tracking-tight text-deep hover:text-clay transition-colors"
          >
            {t.nav.brand}
          </a>
          <nav
            className="order-3 flex w-full flex-wrap justify-center gap-x-3 gap-y-1 text-sm sm:order-none sm:w-auto sm:justify-end"
            aria-label="Section"
          >
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-ink/70 hover:text-deep underline-offset-4 hover:underline"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <div
              className="flex rounded-full border border-ink/15 bg-white/80 p-0.5 shadow-sm"
              role="group"
              aria-label="Language"
            >
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  locale === "en"
                    ? "bg-deep text-white"
                    : "text-ink/70 hover:bg-ink/5"
                }`}
              >
                {t.nav.langEn}
              </button>
              <button
                type="button"
                onClick={() => setLocale("zh-TW")}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  locale === "zh-TW"
                    ? "bg-deep text-white"
                    : "text-ink/70 hover:bg-ink/5"
                }`}
              >
                {t.nav.langZh}
              </button>
            </div>
            <a
              href={LINKS.linkedinProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/15 bg-white p-2 text-ink/80 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-colors"
              aria-label={t.social.linkedin}
              title={t.social.linkedin}
            >
              <Linkedin className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href={LINKS.linkedinPosts}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex rounded-full border border-ink/15 bg-white px-2.5 py-1.5 text-xs font-medium text-ink/80 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-colors"
              title={t.social.linkedinPosts}
            >
              {t.social.linkedinPosts}
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/15 bg-white p-2 text-ink/80 hover:bg-deep hover:text-white hover:border-deep transition-colors"
              aria-label={t.social.github}
              title={t.social.github}
            >
              <Github className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </div>
        <div className="border-t border-ink/5 bg-white/50 px-4 py-2 sm:hidden">
          <a
            href={LINKS.linkedinPosts}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-sm font-medium text-[#0A66C2] hover:underline"
          >
            {t.social.linkedinPosts}
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-3xl px-4 pb-20 pt-10 sm:px-6">
        <section className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
          <div className="mx-auto shrink-0 sm:mx-0">
            <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-lg ring-1 ring-ink/5">
              <img
                src="/owen-photo.jpg"
                alt={t.hero.photoAlt}
                width={220}
                height={275}
                className="h-auto w-[200px] object-cover sm:w-[220px]"
              />
            </div>
          </div>
          <div className="min-w-0 flex-1 text-center sm:text-left">
            <p className="text-sm font-medium uppercase tracking-widest text-clay">
              Portfolio
            </p>
            <h1 className="mt-1 font-bold text-3xl text-deep tracking-tight sm:text-4xl">
              {t.hero.name}
            </h1>
            <p className="mt-2 text-lg text-ink/80">{t.hero.role}</p>
            <p className="mt-4 text-ink/85 leading-relaxed">{t.hero.tagline}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
              <a
                href={LINKS.email}
                className="inline-flex items-center gap-2 text-sm font-medium text-deep hover:text-clay"
              >
                <Mail className="h-4 w-4 shrink-0" />
                {t.contact.email}
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-ink/75">
                <Phone className="h-4 w-4 shrink-0" />
                <span className="sr-only">{t.contact.phoneLabel}</span>
                {t.contact.phone}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-3 sm:justify-start">
              <a
                href={LINKS.linkedinProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-4 py-2 text-sm font-medium text-white hover:bg-[#095195]"
              >
                <Linkedin className="h-4 w-4" />
                {t.social.linkedin}
              </a>
              <a
                href={LINKS.linkedinPosts}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#0A66C2]/40 bg-white px-4 py-2 text-sm font-medium text-[#0A66C2] hover:bg-[#0A66C2]/5"
              >
                {t.social.linkedinPosts}
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-deep px-4 py-2 text-sm font-medium text-white hover:bg-ink"
              >
                <Github className="h-4 w-4" />
                {t.social.github}
              </a>
              <a
                href={LINKS.cvPdf}
                download
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white px-4 py-2 text-sm font-medium text-deep hover:bg-mist"
              >
                <FileDown className="h-4 w-4" />
                {t.hero.downloadCv}
              </a>
            </div>
          </div>
        </section>

        <Section id="about" title={t.about.heading}>
          <p className="text-ink/85 leading-relaxed">{t.about.body}</p>
        </Section>

        <Section id="education" title={t.education.heading}>
          <div className="space-y-6">
            {t.education.items.map((item) => (
              <BulletBlock key={item.title} item={item} />
            ))}
          </div>
        </Section>

        <Section id="experience" title={t.experience.heading}>
          <div className="space-y-6">
            {t.experience.items.map((item) => (
              <BulletBlock key={`${item.org ?? ""}-${item.title}`} item={item} />
            ))}
          </div>
        </Section>

        <Section id="projects" title={t.projects.heading}>
          <div className="space-y-6">
            {t.projects.items.map((item) => (
              <BulletBlock key={item.title} item={item} />
            ))}
          </div>
        </Section>

        <Section id="research" title={t.research.heading}>
          <div className="space-y-6">
            {t.research.items.map((item) => (
              <BulletBlock key={item.title} item={item} />
            ))}
          </div>
        </Section>

        <Section id="skills" title={t.skills.heading}>
          <div className="space-y-4">
            {t.skills.rows.map((row) => (
              <div key={row.label}>
                <h3 className="text-sm font-semibold text-clay">{row.label}</h3>
                <p className="mt-1 text-ink/85 leading-relaxed">{row.value}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="extras" title={t.extras.heading}>
          <div className="space-y-6">
            {t.extras.items.map((item) => (
              <BulletBlock key={item.title} item={item} />
            ))}
          </div>
        </Section>
      </main>

      <footer className="border-t border-ink/10 bg-white/60 py-6 text-center text-sm text-ink/55">
        © {new Date().getFullYear()} {t.hero.name}
      </footer>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mt-14 scroll-mt-24">
      <h2 className="mb-6 border-b border-ink/10 pb-2 font-bold text-xl text-deep tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}
