export default function Achievements() {
  const achievements = [
    {
      title: "Best Paper Award",
      organization: "INTERNATIONAL CONFERENCE ON ENGINEERING, TECHNOLOGY AND INNOVATION (ICETI) 2020",
      location: "DUBAI, UAE",
      year: "2020",
      description: "Published 'Providing a Secure, Reliable and Decentralized Document Management Solution Using Blockchain by a Virtual Identity Card' in World Academy of Science, Engineering and Technology journal (WASET) indexed in Google Scholar, Semantic Scholar, Zenodo, OSI, Base and World CAT",
      icon: "🏆",
      category: "Research"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognition and milestones in my academic and professional journey
          </p>
        </div>

        <div className="grid gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-blue-200 dark:border-gray-600"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                        {achievement.organization}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {achievement.location} • {achievement.year}
                      </p>
                    </div>
                    
                    <div className="mt-4 sm:mt-0">
                      <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-semibold rounded-full">
                        {achievement.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Recognition Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8">
            Other Notable Recognition
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">500+ Features</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Successfully shipped across multiple projects</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl mb-3">🌍</div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">1000+ Organizations</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Using products I helped build</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl mb-3">💡</div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Community Leader</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Founded multiple tech communities</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl mb-3">📈</div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">1M+ NOK ARR</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Generated for client products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}