export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "PES University ECC",
      period: "2017 - 2021",
      description: "Specialized in Computer Science. Achieved degree with distinction in my major and led multiple tech initiatives during the program.",
      activities: [
        "INGENIUS 2020", "ACM PESU-ECC", "DSC PESIT", "TECHWARTS", 
        "MATHEMATICS CLUB", "MAAYA 2019", "INGENIUS 2019", "ICACI 2018"
      ],
      coursework: [
        "Data Structures", "Design And Analysis of Algorithm", "Object Oriented Programming",
        "Database Management System", "Data Warehousing", "Data Mining", "Machine Learning",
        "Artificial Intelligence", "Soft And Evolutionary Computing", "Web Technology And Its Applications",
        "Cloud Computing And Its Applications", "Software Engineering", "Computer Networks", "Operating Systems"
      ],
      icon: "🎓"
    },
    {
      degree: "Secondary and Higher Secondary School",
      institution: "Lancers Army School",
      period: "2002 - 2017",
      description: "89% in higher secondary school exams and 9.6 GPA in secondary school exams. Attended various extracurricular activities and clubs.",
      activities: [
        "House Vice Captain - Hope House",
        "Best Energetic and Enthusiastic Student - Batch 2017",
        "Science Olympiad silver medalist",
        "Notable Speaker - Young Orators"
      ],
      coursework: [],
      icon: "🏫"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey and the foundation that shaped my career
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-4xl">{edu.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-4">
                    {edu.period}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>

              {edu.activities.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Activities & Societies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.activities.map((activity, actIndex) => (
                      <span 
                        key={actIndex}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full font-medium"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {edu.coursework.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Key Coursework
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <span 
                        key={courseIndex}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-lg font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}