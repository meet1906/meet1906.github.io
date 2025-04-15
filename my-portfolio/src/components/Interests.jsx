export default function Interests() {
    return (
      <section id="interests" className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Interests</h2>
  
          <div className="space-y-12">
            {/* Example Interest 1 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Technology & Innovation</h3>
              <p className="text-gray-600">Exploring new trends in AI, Blockchain, and IoT</p>
              <p className="mt-4 text-gray-700">
                Passionate about how technology is changing the world. I enjoy staying up to date with emerging tech trends, particularly in AI, blockchain, and IoT.
              </p>
            </div>
  
            {/* Example Interest 2 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Travel & Exploration</h3>
              <p className="text-gray-600">Discovering new cultures and experiences</p>
              <p className="mt-4 text-gray-700">
                I love traveling and experiencing different cultures. It broadens my perspective and fuels my creativity. Whether it’s hiking in the mountains or exploring cities, I’m always up for an adventure.
              </p>
            </div>
  
            {/* Example Interest 3 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Fitness & Wellness</h3>
              <p className="text-gray-600">Staying active and maintaining a healthy lifestyle</p>
              <p className="mt-4 text-gray-700">
                Staying fit and healthy is a priority for me. I enjoy running, yoga, and hiking, and I’m constantly exploring new ways to improve my physical and mental well-being.
              </p>
            </div>
  
            {/* Example Interest 4 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Photography</h3>
              <p className="text-gray-600">Capturing moments through the lens</p>
              <p className="mt-4 text-gray-700">
                Photography is a creative outlet for me. I love capturing the beauty of the world around me, whether it’s landscapes, portraits, or candid moments.
              </p>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  