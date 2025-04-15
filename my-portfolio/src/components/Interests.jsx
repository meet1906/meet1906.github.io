export default function Interests() {
    return (
      <section id="interests" className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Interests</h2>
  
          <div className="space-y-12">
            {/* Example Interest 1 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Technology & Innovation</h3>
              <p className="text-gray-600">Exploring new trends in AI and Fintech</p>
              <p className="mt-4 text-gray-700">
                Passionate about how technology is changing the world. I enjoy staying up to date with emerging tech trends, particularly in AI, fintech and compliance tech.
              </p>
            </div>
  
            {/* Travelling */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Travel & Exploration</h3>
              <p className="text-gray-600">Discovering new cultures and experiences</p>
              <p className="mt-4 text-gray-700">
                I love traveling and experiencing different cultures. It broadens my perspective and fuels my creativity. Whether it’s hiking in the mountains or exploring cities, I’m always up for an adventure.
              </p>
            </div>
  
            {/* Sports */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Sports</h3>
              <p className="text-gray-600">Staying active and competitive while I enjoy playing different sports</p>
              <p className="mt-4 text-gray-700">
                Be it cricket, football, or badminton, I enjoy staying active and competitive while I enjoy playing different sports. It keeps me mentally and physically fit.</p>
            </div>
  
            {/* Writing */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Writing</h3>
              <p className="text-gray-600">Expressing moments through my words</p>
              <p className="mt-4 text-gray-700">
                Writing is a creative outlet for me. I love expressing the beauty of the thoughts within me, whether it’s good, happy or sad moments.
              </p>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  