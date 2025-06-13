export default function CommunityWork() {
  const communityWork = [
    {
      title: "Community Manager",
      organization: "PESU Covid Initiative",
      tagline: "Let's help each other",
      period: "March 2021 - June 2021",
      description: "When the world hit pause, we hit go. During the peak of the COVID-19 crisis, I helped build and scale a student-led emergency response community at PES University — mobilizing over 500 volunteers to deliver real help on the ground. Coordinated and responded to 100+ critical SOS requests — from arranging oxygen cylinders to securing hospital beds.",
      impact: ["500+ volunteers mobilized", "100+ SOS requests handled", "Critical medical resources arranged"],
      icon: "🚑",
      color: "red"
    },
    {
      title: "Co-Head",
      organization: "inGenius 2020",
      tagline: "Innovation meets execution",
      period: "July 2020 - Nov 2020",
      description: "Led the 9th edition of inGenius, one of Bangalore's most iconic college-level hackathons. Spearheaded the first-ever virtual and global edition, adapting to the times and breaking boundaries. Pulled in 700+ registrations globally, making it the most diverse and wide-reaching edition to date.",
      impact: ["700+ global registrations", "First virtual edition", "24-hour global hackathon"],
      icon: "💻",
      color: "blue"
    },
    {
      title: "Founding Member",
      organization: "ACM PESU ECC",
      tagline: "Let's opensource",
      period: "Aug 2019 - Nov 2020",
      description: "One of the 8 founding members of the ACM Student Chapter at PESU-ECC. Co-designed the ACM Industrial Experience Program to give students real-world, industry-level exposure while still in university. What started as an experiment is now a well-oiled machine — still running strong in its 6th year.",
      impact: ["6+ years program still running", "Industry exposure for students", "Open source culture"],
      icon: "🛠️",
      color: "green"
    },
    {
      title: "Student Mentor and Founding Team Member",
      organization: "DSC PESU ECC",
      tagline: "#DEVREL",
      period: "Oct 2018 - Nov 2020",
      description: "Part of the founding team of DSC PESIT, helping lay the foundation for one of Google Developers' most impactful university programs. Mentored students in developer relations and community management, guided peers through Google Cloud Platform challenges, and co-hosted workshops and ideathons.",
      impact: ["Google Developer community", "GCP mentorship", "Developer relations"],
      icon: "🌐",
      color: "yellow"
    },
    {
      title: "Cofounder",
      organization: "Techwarts - House of Tech at PESU ECC",
      tagline: "Let's integrate",
      period: "Oct 2018 - Nov 2020",
      description: "What started with 8 passionate students became a 500+ strong developer community at PESU–ECC. Built around three core verticals: Pixel (AR/VR), Predict This! (ML/AI), and We the Programmers (Competitive Programming). Created a safe, inclusive space for students to experiment, fail, build, and thrive.",
      impact: ["500+ member community", "3 tech verticals", "Startup launchpad"],
      icon: "🏠",
      color: "purple"
    },
    {
      title: "Mentor",
      organization: "Major League Hacking",
      tagline: "Tech for Good Initiative",
      period: "May 2020 - June 2020",
      description: "Volunteered as a mentor, helping students learn the basics of programming and guiding them through hackathons organised by Major League Hacking during their Tech for Good initiative.",
      impact: ["Student mentorship", "Programming basics", "Hackathon guidance"],
      icon: "🎯",
      color: "indigo"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      red: "from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-red-200 dark:border-red-800",
      blue: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800",
      green: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800",
      yellow: "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-800",
      purple: "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border-purple-200 dark:border-purple-800",
      indigo: "from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border-indigo-200 dark:border-indigo-800"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="community-work" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Community Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building communities, fostering innovation, and creating lasting impact through collaborative initiatives
          </p>
        </div>

        <div className="space-y-8">
          {communityWork.map((work, index) => (
            <div 
              key={index}
              className={`group bg-gradient-to-r ${getColorClasses(work.color)} rounded-xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border`}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">
                  {work.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        {work.title}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">
                        {work.organization}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-2">
                        {work.tagline}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 font-medium">
                        {work.period}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    {work.description}
                  </p>

                  {/* Impact Metrics */}
                  <div className="flex flex-wrap gap-2">
                    {work.impact.map((metric, metricIndex) => (
                      <span 
                        key={metricIndex}
                        className="px-3 py-1 bg-white/70 dark:bg-gray-800/70 text-gray-800 dark:text-gray-200 text-sm rounded-full font-medium border border-gray-200 dark:border-gray-600"
                      >
                        ✨ {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Impact Summary */}
        <div className="mt-16 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
            Community Impact at a Glance
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">1000+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Students Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">8</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Communities Founded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Volunteers Mobilized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">6+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Legacy Programs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}