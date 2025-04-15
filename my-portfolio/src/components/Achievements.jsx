export default function Achievements() {
    return (
      <section id="achievements" className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Achievements</h2>
  
          <div className="space-y-12">
            {/* Example Achievement 1 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Best Project Award</h3>
              <p className="text-gray-600">Tech Innovators Conference</p>
              <p className="text-sm text-gray-500">2021</p>
              <p className="mt-4 text-gray-700">
                Awarded for leading the most innovative project at the Tech Innovators Conference 2021, which was recognized for its impact on the industry.
              </p>
            </div>
  
            {/* Example Achievement 2 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Certified Scrum Master (CSM)</h3>
              <p className="text-gray-600">Scrum Alliance</p>
              <p className="text-sm text-gray-500">2020</p>
              <p className="mt-4 text-gray-700">
                Earned Scrum Master certification, leading cross-functional teams to success using Agile and Scrum methodologies.
              </p>
            </div>
  
            {/* Example Achievement 3 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Top 10 Business Leader</h3>
              <p className="text-gray-600">Business Leaders Summit</p>
              <p className="text-sm text-gray-500">2019</p>
              <p className="mt-4 text-gray-700">
                Recognized as one of the top 10 emerging business leaders in the industry for driving innovation and growth in the tech sector.
              </p>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  