export default function Experience() {
  const experiences = [
    {
      title: "CEO",
      company: "Comono India Pvt Ltd",
      period: "Jan 2021 - Present",
      description: "Built from scratch, Comono is my playground for driving tech-forward consulting for clients across the Nordic region. I've led everything from strategic vision to legal hustle — partnering with incredible startups like Artifik and scaleups like Inspera. We're not just building software — we're shaping products that create lasting impact in Europe's most innovative markets.",
      tags: ["Leadership", "Strategy", "Consulting", "Nordic Markets"],
      current: true
    },
    {
      title: "Technical Project Manager",
      company: "Artifik AS",
      period: "Jan 2021 - Present",
      description: "What started as a web dev internship turned into a full-blown journey through the trenches of product building. At Artifik, a next-gen KGV & KAV platform based in Norway, I've been part of the story since day one. Artifik has grown from a single-page prototype to a game-changing solution now used by 1,000+ organizations, generating 1M+ NOK in ARR. Led 42 production releases, 55 sprints, and shipped 500+ features.",
      tags: ["Project Management", "Scrum", "Product Development", "Norway"],
      current: true
    },
    {
      title: "Cofounder",
      company: "Prevale Compliance Tech Pvt Ltd",
      period: "Sep 2021 - April 2025",
      description: "4 versions. 15 clients. Countless lessons. Prevale was my crash course in everything — tech, business, finance, legal, marketing, HR. Built 4 major versions, shipping over 500 features, 1000+ tasks, and supporting 15 active clients. Led product strategy, tech architecture, and business ops end-to-end. Documented the entire journey in a no-holds-barred Medium post.",
      tags: ["Entrepreneurship", "Full-Stack", "Compliance Tech", "Product Strategy"]
    },
    {
      title: "Project Delivery Manager",
      company: "Inspera AS",
      period: "August 2021 - May 2024",
      description: "As part of comono ecosystem, Inspera trusted me with one of their most critical tools: a custom Data Analytics engine that's now used by their biggest client and internally across teams. Built a data discovery tool to help analyze data for higher education universities understand assessments and students better as consultant.",
      tags: ["Data Analytics", "Higher Education", "Consulting", "Jira"]
    },
    {
      title: "Tech Project Management Intern",
      company: "Life Mein Marks Project - Global Discovery Schools",
      period: "Jan 2020 - April 2021",
      description: "Led the tech charge for the Life Mein Marks (LMM) initiative — helping children overcome traumatic memories and unlock their true potential. Helped architect user workflows for mobile app and web platform. Applied AI/ML algorithms like Linear & Logistic Regression and Random Forest using Tableau, IBM SPSS, and Azure ML Studio.",
      tags: ["EdTech", "AI/ML", "Mental Health", "Product Owner"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey through tech, startups, and building impactful solutions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
            >
              {exp.current && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold rounded-full">
                  Current
                </div>
              )}
              
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {exp.period}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover effect indicator */}
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-l-xl transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}