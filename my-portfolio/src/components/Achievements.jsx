export default function Achievements() {
    return (
      <section id="achievements" className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Achievements</h2>
  
          <div className="space-y-12">
            {/* Example Achievement 1 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Best Paper Award</h3>
              <p className="text-gray-600">INTERNATIONAL CONFERENCE ON ENGINEERING, TECHNOLOGY AND INNOVATION (ICETI) 2020, DUBAI, UAE</p>
              <p className="text-sm text-gray-500">2020</p>
              <p className="mt-4 text-gray-700">
                Published Providing a Secure, Reliable and Decentralized Document Management Solution Using Blockchain by a Virtual Identity Card in World Academy of Science, Engineering and Technology journal (WASET) indexed in Google Scholar, Semantic Scholar, Zenodo, OSI, Base and World CAT 
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  