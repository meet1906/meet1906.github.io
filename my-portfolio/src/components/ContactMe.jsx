export default function ContactMe() {
    return (
      <section id="contact" className="min-h-screen bg-gray-200 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
          
          {/* Contact form */}
          <form className="space-y-6" action="mailto:meetsuchitparinashah@gmail.com" method="POST">
            <div className="flex space-x-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-4 bg-white rounded-lg shadow-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-4 bg-white rounded-lg shadow-md"
              />
            </div>
  
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-4 bg-white rounded-lg shadow-md"
            ></textarea>
  
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
  
          {/* Social media links */}
          <div className="mt-12 space-x-6">
            <a href="https://www.linkedin.com/in/meetshah99/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              LinkedIn
            </a>
            <a href="https://github.com/meet1906" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900">
              GitHub
            </a>
            <a href="https://instagram.com/meet1906" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              Instagram
            </a>
          </div>
        </div>
      </section>
    );
  }
  