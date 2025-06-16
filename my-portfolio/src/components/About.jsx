export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Meet Shah
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Hey, I'm Meet — a dev-turned-tech project manager who's all about building cool stuff, 
              whether it's software, products, or communities.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I run a consulting company helping EU clients make an impact, while also crafting products 
              back home in India. Alongside being a CSE graduate of PES University (ECC), I've been deeply 
              involved in tech communities and the startup ecosystem.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              When I'm not managing projects or building solutions, you'll find me traveling, anchoring events, 
              or geeking out over the next big idea.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">4.5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Features Shipped</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md col-span-2 sm:col-span-1">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Clients Served</div>
              </div>
            </div>
          </div>

          {/* Skills & Technologies */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                Skills & Expertise
              </h3>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  {[
                    'Project Management', 'Scrum/Agile', 'Product Strategy', 
                    'Team Leadership', 'Stakeholder Management'
                  ].map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {[
                    'Notion', 'Jira', 'Devops', 'Linear', 
                    'MySQL', 'Python', 'Git, Github /Version Control'
                  ].map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Fun Facts */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Fun Facts</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <span className="mr-2">🌍</span>
                  Love traveling and exploring new cultures
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🎤</span>
                  Enjoy anchoring events and public speaking
                </li>
                <li className="flex items-center">
                  <span className="mr-2">⚽</span>
                  Sports enthusiast - cricket, football, badminton
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✍️</span>
                  Writing as a creative outlet
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}