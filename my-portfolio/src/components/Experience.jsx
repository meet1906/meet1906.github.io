export default function Experience() {
    return (
      <section id="experience" className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Experience</h2>
          
          <div className="space-y-12">
            {/* Example Experience 1 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Project Manager</h3>
              <p className="text-gray-600">My PSJ Foundation</p>
              <p className="text-sm text-gray-500">2020 - Present</p>
              <p className="mt-4 text-gray-700">
                Lead the development and growth of My PSJ Foundation, a platform designed to match NGOs and donors, 
                enhancing community impact through seamless resource distribution and transparency.
              </p>
            </div>
  
            {/* Example Experience 2 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Business Developer</h3>
              <p className="text-gray-600">Tech Innovators Ltd.</p>
              <p className="text-sm text-gray-500">2018 - 2020</p>
              <p className="mt-4 text-gray-700">
                Responsible for identifying new business opportunities and forging strong partnerships that led to a 30% increase in annual revenue.
              </p>
            </div>
  
            {/* Additional Experience from LinkedIn */}
            {/* Example Experience 3 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Role Title</h3>
              <p className="text-gray-600">Company Name</p>
              <p className="text-sm text-gray-500">Start Date - End Date</p>
              <p className="mt-4 text-gray-700">
                Description of the role and responsibilities, including any impactful achievements or initiatives.
              </p>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  