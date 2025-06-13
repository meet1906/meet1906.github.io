import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import CommunityWork from "./components/CommunityWork";
import Interests from "./components/Interests";
import ContactMe from "./components/ContactMe";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDark = () => setDarkMode(!darkMode);

  return (
    <>
      <div className="pt-20 bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-300">
        <Navbar darkMode={darkMode} toggleDark={toggleDark} />
        <About />
        <Experience />
        <Education />
        <Achievements />
        <CommunityWork />
        <Interests />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
