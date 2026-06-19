import FadeIn from './FadeIn';

const skillGroups = [
  { title: 'Delivery & Product', icon: '📋', items: ['Agile / Scrum', 'Product Strategy', 'Product Requirements', 'Lifecycle Management', 'QA', 'UAT'] },
  { title: 'AI', icon: '🤖', items: ['Claude (Cowork & Code)', 'Notion AI', 'Gemini (Apps Script · AI Studio)'] },
  { title: 'Tools & Tech', icon: '🛠️', items: ['Jira', 'Notion', 'Figma (Make)', 'Power BI', 'Git & Version Control', 'MySQL'] },
  { title: 'Soft Skills', icon: '💬', items: ['Communication', 'Cross-Functional Leadership', 'Stakeholder Management', 'Analytical Thinking', 'Product Pitch'] },
  { title: 'Languages', icon: '🌐', items: ['English', 'Hindi', 'Gujarati'] },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-20">
            <p className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-3">Who I am</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Meet Shah
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
          </div>
        </FadeIn>

        {/* Bio */}
        <div className="max-w-3xl mx-auto space-y-6 mb-20 text-center">
          <FadeIn>
            <p className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-100 leading-snug">
              Dev turned tech project manager — and a{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                tech harmony catalyst.
              </span>
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I founded <span className="font-semibold text-gray-800 dark:text-gray-200">Comono India</span> — a consulting company partnering with Nordic startups and scaleups like Artifik and Inspera. I own delivery end to end: planning, sprints, releases, and getting things across the line.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              CSE grad from <span className="font-semibold text-gray-800 dark:text-gray-200">PES University</span>. I've driven products from prototype to full-fledged companies, built internal tools for data analysis and managed the data team for global clients, alongside cofounding <span className="font-semibold text-gray-800 dark:text-gray-200">Prevale</span>, a compliance-tech startup. I build with modern tooling — including AI — but the constant is reliable, on-time delivery, while making sure it stays fun working together as a team :)
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Outside of work, I'm usually on a flight chasing a new place, holding a mic as an event anchor, on the field for a game of cricket or football, or putting thoughts to paper. Powered, of course, by an unreasonable amount of coffee.
            </p>
          </FadeIn>

          {/* Fun facts strip */}
          <FadeIn delay={400}>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              {['📍 Bengaluru, India', '🎤 Event Anchor', '⚽ Sports Nut', '✍️ Writer', '☕ Coffee First'].map((fact) => (
                <span
                  key={fact}
                  className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm border border-gray-200 dark:border-gray-600"
                >
                  {fact}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Skills */}
        <FadeIn>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
              Skills & Toolkit
            </h3>
            <div className="space-y-6">
              {skillGroups.map((group, gi) => (
                <FadeIn key={group.title} delay={gi * 80}>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-5">
                    <div className="flex items-center gap-2 sm:w-44 shrink-0">
                      <span className="text-lg">{group.icon}</span>
                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{group.title}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-600 dark:text-gray-400 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
