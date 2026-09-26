import FadeIn from './FadeIn';

const company = {
  title: 'Technical Project Manager & General Manager, Comono India',
  company: 'Comono India · Bengaluru, India',
  link: 'https://comono.in',
  period: 'Jan 2021 – Present',
  description:
    'Comono India is the India subsidiary of Comono AS, an Oslo-based IT consultancy that builds and delivers software products for the European market. I cultivate Nordic client relationships and lead delivery of bespoke software solutions for enterprise-scale clients, including Artifik and Inspera.',
  icon: '🏢',
  color: 'blue',
};

const projects = [
  {
    name: 'Artifik — Digital Procurement Platform (KGV & KAV)',
    period: 'Jan 2021 – Present',
    color: 'blue',
    icon: '🛒',
    current: true,
    highlights: ['1,000+ organisations', '67+ releases · 82+ sprints', '600+ features · 1,800+ fixes', '10M+ NOK ARR'],
    tags: ['Release Management', 'Scrum', 'SaaS', 'Norway'],
    bullets: [
      'Spearheaded the evolution of the next-gen KGV and KAV platform from a single-page prototype to solutions used by 1,000+ organisations.',
      'Delivered 600+ features and 1,800+ bug fixes across 67+ production releases and 82+ sprints, taking the product from v1.0 to v3.40.',
      'Led a 15-member engineering team, acting as the bridge between product, engineering and customer success.',
      'Serve as Release Manager with final production go/no-go authority, owning incident management and SLAs to keep rollouts stable.',
      'Helped scale the platform past 10M NOK ARR, supporting wins in major Norwegian public procurement competitions.',
      'Directed product planning, backlog prioritisation and sprint logistics. Built prototypes and contributed code hands-on using AI tools (Claude Code).',
    ],
  },
  {
    name: 'Inspera — Assessment Data Analytics Engine',
    period: 'Aug 2021 – Jun 2024',
    color: 'orange',
    icon: '📊',
    current: false,
    highlights: ['18+ engineers managed', 'Hotfix < 24 hrs', '< 20% spillover', 'Zero SLA violations'],
    tags: ['Data Analytics', 'Higher Education', 'Jira', 'UAT'],
    bullets: [
      'Led delivery across the full lifecycle of a custom data analytics engine used by large-scale higher-education institutions to decode student assessments.',
      'Planned and ran sprints in Jira, resolving most hotfixes within 24 hours, keeping sprint spillover below 20%, and maintaining zero SLA violations throughout the engagement.',
      'Managed a team of 18+ data engineers and led UAT by defining test scopes and test cases in Zephyr.',
    ],
  },
  {
    name: 'Prevale — Accounting & Compliance SaaS (Co-Founder)',
    period: 'May 2022 – Apr 2025',
    color: 'green',
    icon: '🔒',
    current: false,
    highlights: ['4 versions', '15+ B2B clients', '600+ founders interviewed', '+200% CSAT'],
    tags: ['Entrepreneurship', 'Compliance Tech', 'SaaS', 'Bootstrapped'],
    bullets: [
      "Co-founded, with a chartered accountant and Comono Norway's team, a SaaS platform connecting accountants, admin staff and business owners through collaborative compliance workflows. Shipped 4 versions and served 15+ B2B clients.",
      'Interviewed 600+ founders to validate the problem, repositioning the product from a Tally data-export tool into a three-sided task-management platform.',
      'Led product iterations and roadmap decisions, including a customisable workflow builder that let accountants design their own processes. Executed a pivot that raised client satisfaction scores by 200%.',
      'Built and coordinated a 10-member team (7 engineers), and led marketing and business operations.',
      'Paused operations in May 2025, when serving accountants’ and clients’ conflicting needs would have required funding beyond available resources.',
    ],
    link: { label: 'Read the story →', href: 'https://meetsuchitparinashah.medium.com/prevale-my-tale-of-failed-versions-and-great-learnings-dc060cc16a3b' },
  },
];

const colorMap = {
  blue:   { dot: 'bg-blue-500',   ring: 'ring-blue-200 dark:ring-blue-900',   tag: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',   hl: 'text-blue-600 dark:text-blue-400',  bar: 'bg-blue-500' },
  purple: { dot: 'bg-purple-500', ring: 'ring-purple-200 dark:ring-purple-900', tag: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200', hl: 'text-purple-600 dark:text-purple-400', bar: 'bg-purple-500' },
  green:  { dot: 'bg-green-500',  ring: 'ring-green-200 dark:ring-green-900',  tag: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',  hl: 'text-green-600 dark:text-green-400',  bar: 'bg-green-500' },
  orange: { dot: 'bg-orange-500', ring: 'ring-orange-200 dark:ring-orange-900', tag: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200', hl: 'text-orange-600 dark:text-orange-400', bar: 'bg-orange-500' },
  red:    { dot: 'bg-red-500',    ring: 'ring-red-200 dark:ring-red-900',    tag: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',    hl: 'text-red-600 dark:text-red-400',    bar: 'bg-red-500' },
};

export default function Experience() {
  const c = colorMap[company.color];
  return (
    <section id="experience" className="py-24 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <p className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-3">Career</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4" />
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Nearly 6 years leading delivery for Nordic SaaS products
            </p>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-green-400 opacity-30 hidden sm:block" />

          <FadeIn direction="left">
            <div className="relative flex gap-6 sm:gap-8">
              {/* Timeline dot */}
              <div className="hidden sm:flex flex-col items-center shrink-0">
                <div className={`w-12 h-12 rounded-full ${c.dot} ring-4 ${c.ring} flex items-center justify-center text-white text-lg shadow-lg z-10`}>
                  {company.icon}
                </div>
              </div>

              {/* Company card */}
              <div className="group flex-1 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-transparent relative overflow-hidden">
                {/* Subtle top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${c.bar} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="sm:hidden text-xl">{company.icon}</span>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                        {company.title}
                      </h3>
                      <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">
                        Now
                      </span>
                    </div>
                    <p className={`font-semibold ${c.hl}`}>
                      {company.company}
                      <a
                        href={company.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 inline-flex items-center gap-0.5 text-xs font-medium text-gray-400 hover:text-blue-500 transition-colors align-middle"
                        aria-label={`Visit ${company.company} website`}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        {company.link.replace('https://', '')}
                      </a>
                    </p>
                  </div>
                  <span className="text-sm text-gray-400 dark:text-gray-500 font-medium shrink-0 bg-white dark:bg-gray-700 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600">
                    {company.period}
                  </span>
                </div>

                {/* Company description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
                  {company.description}
                </p>

                {/* Nested projects */}
                <div className="space-y-5">
                  {projects.map((p, pi) => {
                    const pc = colorMap[p.color];
                    return (
                      <div
                        key={pi}
                        className={`relative bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-700 border-l-4`}
                        style={{ borderLeftColor: 'transparent' }}
                      >
                        <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl ${pc.bar}`} />

                        {/* Project header */}
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1 pl-1">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{p.icon}</span>
                            <h4 className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-100">
                              {p.name}
                            </h4>
                            {p.current && (
                              <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-[10px] font-semibold rounded-full">
                                Now
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-gray-400 dark:text-gray-500 font-medium shrink-0">
                            {p.period}
                          </span>
                        </div>

                        {/* Bullets */}
                        <ul className="mt-3 mb-4 space-y-1.5 pl-1">
                          {p.bullets.map((b, bi) => (
                            <li key={bi} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                              <span className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full ${pc.dot}`} />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-2 mb-3 pl-1">
                          {p.highlights.map((h, i) => (
                            <span key={i} className={`text-xs font-semibold px-3 py-1 rounded-full ${pc.tag}`}>
                              ✦ {h}
                            </span>
                          ))}
                        </div>

                        {/* Tags + link */}
                        <div className="flex flex-wrap items-center gap-2 pl-1">
                          {p.tags.map((tag, i) => (
                            <span key={i} className="text-xs px-2.5 py-1 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-md border border-gray-200 dark:border-gray-700 font-medium">
                              {tag}
                            </span>
                          ))}
                          {p.link && (
                            <a
                              href={p.link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`text-xs font-semibold ${pc.hl} hover:underline ml-auto`}
                            >
                              {p.link.label}
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
