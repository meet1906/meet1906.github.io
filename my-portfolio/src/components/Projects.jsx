import FadeIn from './FadeIn';

export default function Projects() {
  const projects = [
    {
      title: "Artifik",
      subtitle: "KGV & KAV Platform · Norway",
      period: "2021 – Present",
      description:
        "A next-gen KGV & KAV platform now used by 1,000+ organisations across the Nordics. Grew from a single-page prototype (v0) to v3.03, generating 10M+ NOK in ARR and winning major procurement competitions in Norway. Led 42 production releases across 75+ sprints, shipping 500+ features.",
      tags: ["SaaS", "Delivery", "Scrum", "Norway"],
      links: [{ label: "Website", href: "https://artifik.no" }],
      metrics: ["1,000+ orgs", "10M+ NOK ARR", "42 releases"],
      color: "blue",
      icon: "🏢",
      current: true,
    },
    {
      title: "Prevale",
      subtitle: "Accounting & Compliance SaaS · India",
      period: "May 2022 – April 2025",
      description:
        "Founded an end-to-end accounting and compliance ecosystem built to redesign compliance for Indian businesses. Bootstrapped from scratch to 4 versions, 15+ B2B clients and a 10+ person team. Directed product strategy, technical architecture, and business ops — executing a pivot that lifted client satisfaction by 200%.",
      tags: ["Entrepreneurship", "Compliance Tech", "SaaS", "Bootstrapped"],
      links: [{ label: "Website", href: "https://prevale.in" }],
      metrics: ["4 versions", "15+ B2B clients", "+200% CSAT"],
      color: "purple",
      icon: "🔒",
    },
    {
      title: "Seekhogaadi",
      subtitle: "Driving School Finder · India",
      period: "2024",
      description:
        "A discovery platform helping students across India find trusted driving schools near them. Built with Next.js and deployed on Vercel.",
      tags: ["Next.js", "Vercel", "Tailwind CSS"],
      links: [{ label: "Live", href: "https://seekhogaadi.vercel.app" }],
      metrics: ["Pan-India", "Next.js 16", "Vercel deploy"],
      color: "green",
      icon: "🚗",
    },
    {
      title: "Blockchain Document Management",
      subtitle: "Research Project · ICETI 2020, Dubai",
      period: "2020",
      description:
        "Published research on a secure, decentralised document management system using blockchain and virtual identity cards. Awarded Best Paper at ICETI 2020 and indexed in WASET, Google Scholar, and Semantic Scholar.",
      tags: ["Blockchain", "Smart Contracts", "Research"],
      links: [{ label: "Read Paper", href: "https://publications.waset.org/10011023/providing-a-secure-reliable-and-decentralized-document-management-solution-using-blockchain-by-a-virtual-identity-card" }],
      metrics: ["Best Paper Award", "WASET indexed", "Google Scholar"],
      color: "yellow",
      icon: "📄",
    },
  ];

  const colorMap = {
    blue: {
      badge: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      border: "hover:border-blue-400 dark:hover:border-blue-500",
      bar: "from-blue-500 to-cyan-500",
      metric: "text-blue-600 dark:text-blue-400",
    },
    purple: {
      badge: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      border: "hover:border-purple-400 dark:hover:border-purple-500",
      bar: "from-purple-500 to-pink-500",
      metric: "text-purple-600 dark:text-purple-400",
    },
    green: {
      badge: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      border: "hover:border-green-400 dark:hover:border-green-500",
      bar: "from-green-500 to-emerald-500",
      metric: "text-green-600 dark:text-green-400",
    },
    yellow: {
      badge: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
      border: "hover:border-yellow-400 dark:hover:border-yellow-500",
      bar: "from-yellow-500 to-orange-500",
      metric: "text-yellow-600 dark:text-yellow-400",
    },
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Products I've built, shipped, and scaled — from 0 to impact
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const c = colorMap[project.color];
            return (
              <FadeIn key={index} delay={index * 100}>
                <div
                  className={`group relative bg-white dark:bg-gray-900 rounded-xl p-6 sm:p-8 h-full hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${c.border} flex flex-col`}
                >
                  {project.current && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold rounded-full">
                      Active
                    </span>
                  )}

                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl">{project.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        {project.title}
                      </h3>
                      <p className={`text-sm font-semibold ${c.metric}`}>{project.subtitle}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{project.period}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.metrics.map((m, i) => (
                      <span key={i} className={`px-2.5 py-1 text-xs font-semibold rounded-full ${c.badge}`}>
                        {m}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.links.length > 0 && (
                    <div className="flex gap-3">
                      {project.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                        >
                          {link.label} →
                        </a>
                      ))}
                    </div>
                  )}

                  <div
                    className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b ${c.bar} rounded-l-xl transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top`}
                  />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
