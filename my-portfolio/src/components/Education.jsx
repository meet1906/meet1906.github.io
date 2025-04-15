export default function Education() {
    return (
      <section id="education" className="min-h-screen bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Education</h2>
  
          <div className="space-y-12">
            {/* Example Education 1 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Bachelor of Technology (B.Tech)</h3>
              <p className="text-gray-600">XYZ University</p>
              <p className="text-sm text-gray-500">2016 - 2020</p>
              <p className="mt-4 text-gray-700">
                Specialized in Computer Science. Achieved top 10% of the class and led multiple tech initiatives during the program.
              </p>
            </div>
  
            {/* Example Education 2 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Master of Business Administration (MBA)</h3>
              <p className="text-gray-600">ABC Business School</p>
              <p className="text-sm text-gray-500">2020 - 2022</p>
              <p className="mt-4 text-gray-700">
                Focused on leadership and strategic management. Graduated with honors and contributed to various entrepreneurial workshops.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  