import { Link } from "react-scroll";

export default function Navbar({ darkMode, toggleDark }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/20 dark:bg-gray-900/70 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <ul className="flex items-center space-x-6 py-4 text-sm sm:text-base font-medium text-white">
          <li className="cursor-pointer hover:text-yellow-300 transition duration-300">
            <Link to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-300 transition duration-300">
            <Link to="experience" smooth={true} duration={500}>Experience</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-300 transition duration-300">
            <Link to="education" smooth={true} duration={500}>Education</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-300 transition duration-300">
            <Link to="achievements" smooth={true} duration={500}>Achievements</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-300 transition duration-300">
            <Link to="community" smooth={true} duration={500}>Community Work</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-300 transition duration-300">
            <Link to="interests" smooth={true} duration={500}>Interests</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-300 transition duration-300">
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDark}
          className="ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition-colors text-sm sm:text-base"
        >
          {darkMode ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
