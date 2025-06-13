export default function Interests() {
  const interests = [
    {
      title: "Technology & Innovation",
      subtitle: "Exploring new trends in AI and Fintech",
      description: "Passionate about how technology is changing the world. I enjoy staying up to date with emerging tech trends, particularly in AI, fintech and compliance tech.",
      icon: "🚀",
      color: "blue"
    },
    {
      title: "Travel & Exploration",
      subtitle: "Discovering new cultures and experiences",
      description: "I love traveling and experiencing different cultures. It broadens my perspective and fuels my creativity. Whether it's hiking in the mountains or exploring cities, I'm always up for an adventure.",
      icon: "🌍",
      color: "green"
    },
    {
      title: "Sports",
      subtitle: "Staying active and competitive",
      description: "Be it cricket, football, or badminton, I enjoy staying active and competitive while playing different sports. It keeps me mentally and physically fit.",
      icon: "⚽",
      color: "orange"
    },
    {
      title: "Writing",
      subtitle: "Expressing moments through words",
      description: "Writing is a creative outlet for me. I love expressing the beauty of the thoughts within me, whether it's good, happy or sad moments.",
      icon: "✍️",
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30",
      green: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 hover:from-green-100 hover:to-emerald-100 dark:hover:from-green-900/30 dark:hover:to-emerald-900/30",
      orange: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 hover:from-orange-100 hover:to-red-100 dark:hover:from-orange-900/30 dark:hover:to-red-900/30",
      purple: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="interests" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Interests
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Beyond work, here's what drives my curiosity and keeps me inspired
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {interests.map((interest, index) => (
            <div 
              key={index}
              className={`group bg-gradient-to-br ${getColorClasses(interest.color)} rounded-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer border border-gray-200 dark:border-gray-700`}
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">
                  {interest.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {interest.title}
                  </h3>
                  <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-semibold mb-3">
                    {interest.subtitle}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </div>

              {/* Hover effect indicator */}
              <div className="mt-6 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Fun Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8">
            Quick Facts About Me
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="text-2xl mb-2">🎤</div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Event Anchor</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="text-2xl mb-2">🏔️</div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Mountain Hiker</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="text-2xl mb-2">📚</div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Avid Reader</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="text-2xl mb-2">☕</div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Coffee Enthusiast</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}