import FadeIn from './FadeIn';

const experiences = [
  {
    title: 'Project Manager / Tech Harmony Catalyst',
    company: 'Artifik AS · Remote, India',
    link: 'https://artifik.no',
    period: 'Jan 2021 – Present',
    description:
      'Spearheaded the evolution of Artifik\'s next-gen KGV & KAV platforms from a single-page prototype to comprehensive solutions used by 1,000+ organisations. Steered the product from v0 to v3.03 — growing ARR past 10M NOK and winning major procurement competitions in Norway. I own product planning and sprint logistics to ensure seamless, high-quality rollouts.',
    tags: ['Delivery Management', 'Scrum', 'SaaS', 'Norway'],
    current: true,
    icon: '🏢',
    color: 'blue',
    highlights: ['1,000+ organisations', '42 releases · 75+ sprints', '500+ features · 1500+ fixes', '10M+ NOK ARR'],
  },
  {
    title: 'Chief Executive Officer',
    company: 'Comono India · Bengaluru, India',
    link: 'https://comono.in',
    period: 'Jan 2021 – Present',
    description:
      'Lead the India division of Comono AS, a tech-forward consulting firm — driving innovation across legal, operations and finance while mentoring the team. Collaborate with enterprise products like Artifik and Inspera, cultivate client relationships, and engineer bespoke software solutions that deliver impactful outcomes across the Nordic region.',
    tags: ['Leadership', 'Consulting', 'Operations', 'Nordic Markets'],
    current: true,
    icon: '🚀',
    color: 'purple',
    highlights: ['Nordic consulting', 'Team mentoring', 'Enterprise clients'],
  },
  {
    title: 'Co-founder',
    company: 'Prevale · Bengaluru, India',
    link: 'https://prevale.in',
    period: 'May 2022 – April 2025',
    description:
      'Founded Prevale, an end-to-end accounting and compliance SaaS built to redesign compliance and accounting for Indian businesses. Bootstrapped from scratch to 4 versions, 15+ B2B clients and a 10+ person team. Directed product strategy and technical architecture, led marketing and business operations, and executed a pivot that lifted client satisfaction by 200%. Wound the venture down in 2025 due to scaling constraints.',
    tags: ['Entrepreneurship', 'Compliance Tech', 'SaaS', 'Bootstrapped'],
    current: false,
    icon: '🔒',
    color: 'green',
    highlights: ['4 versions', '15+ B2B clients', '10+ team', '+200% CSAT'],
  },
  {
    title: 'Project Delivery Manager',
    company: 'Inspera AS · Remote, India',
    link: 'https://inspera.com',
    period: 'Aug 2021 – June 2024',
    description:
      'Led the lifecycle of a custom data analytics engine used by large higher-education institutions to decode student assessments. Planned and directed sprints in JIRA — resolving most hotfixes in under 24 hours with under 20% sprint spillover. Managed a team of 18+ data engineers and led UAT with structured test scopes and cases in Zephyr.',
    tags: ['Data Analytics', 'Higher Education', 'JIRA', 'UAT'],
    current: false,
    icon: '📊',
    color: 'orange',
    highlights: ['18+ engineers managed', 'Hotfix < 24 hrs', '< 20% spillover'],
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
              My journey through tech, startups, and building impactful solutions
            </p>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-red-400 opacity-30 hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const c = colorMap[exp.color];
              return (
                <FadeIn key={index} delay={index * 80} direction="left">
                  <div className="relative flex gap-6 sm:gap-8">
                    {/* Timeline dot */}
                    <div className="hidden sm:flex flex-col items-center shrink-0">
                      <div className={`w-12 h-12 rounded-full ${c.dot} ring-4 ${c.ring} flex items-center justify-center text-white text-lg shadow-lg z-10`}>
                        {exp.icon}
                      </div>
                    </div>

                    {/* Card */}
                    <div className="group flex-1 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-transparent relative overflow-hidden">
                      {/* Subtle top accent bar */}
                      <div className={`absolute top-0 left-0 right-0 h-0.5 ${c.bar} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="sm:hidden text-xl">{exp.icon}</span>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                              {exp.title}
                            </h3>
                            {exp.current && (
                              <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">
                                Now
                              </span>
                            )}
                          </div>
                          <p className={`font-semibold ${c.hl}`}>
                            {exp.company}
                            {exp.link && (
                              <a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 inline-flex items-center gap-0.5 text-xs font-medium text-gray-400 hover:text-blue-500 transition-colors align-middle"
                                aria-label={`Visit ${exp.company} website`}
                              >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                {exp.link.replace('https://', '')}
                              </a>
                            )}
                          </p>
                        </div>
                        <span className="text-sm text-gray-400 dark:text-gray-500 font-medium shrink-0 bg-white dark:bg-gray-700 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600">
                          {exp.period}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5 text-sm sm:text-base">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.highlights.map((h, i) => (
                          <span key={i} className={`text-xs font-semibold px-3 py-1 rounded-full ${c.tag}`}>
                            ✦ {h}
                          </span>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, i) => (
                          <span key={i} className="text-xs px-2.5 py-1 bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-md border border-gray-200 dark:border-gray-600 font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
