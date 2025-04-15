export default function CommunityWork() {
    return (
      <section id="community-work" className="min-h-screen bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Community Work</h2>
  
          <div className="space-y-12">
            {/* Example Community Work 1 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Mentor, Youth Tech Program</h3>
              <p className="text-gray-600">Tech for Good Initiative</p>
              <p className="text-sm text-gray-500">2020 - Present</p>
              <p className="mt-4 text-gray-700">
                Volunteered as a mentor, helping high school students learn the basics of programming and guiding them through their first tech projects.
              </p>
            </div>
  
            {/* Example Community Work 2 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Organizing Community Clean-Up Drives</h3>
              <p className="text-gray-600">Green Earth Movement</p>
              <p className="text-sm text-gray-500">2019 - 2021</p>
              <p className="mt-4 text-gray-700">
                Led multiple community clean-up initiatives in local parks and neighborhoods, gathering volunteers to create a cleaner and greener environment.
              </p>
            </div>
  
            {/* Example Community Work 3 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Volunteer Teacher, Community Center</h3>
              <p className="text-gray-600">Hope Foundation</p>
              <p className="text-sm text-gray-500">2018 - 2020</p>
              <p className="mt-4 text-gray-700">
                Taught basic computer skills to underprivileged children, empowering them with digital literacy and opening doors for future opportunities.
              </p>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  