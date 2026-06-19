import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import AIStack from "./components/AIStack";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import CommunityWork from "./components/CommunityWork";
import Interests from "./components/Interests";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDark = () => setDarkMode(!darkMode);

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDark={toggleDark} />
      <Hero />
      <FadeIn><About /></FadeIn>
      <AIStack />
      <FadeIn><Experience /></FadeIn>
      <FadeIn><Projects /></FadeIn>
      <FadeIn><Education /></FadeIn>
      <FadeIn><Achievements /></FadeIn>
      <FadeIn><CommunityWork /></FadeIn>
      <FadeIn><Interests /></FadeIn>
      <FadeIn><ContactMe /></FadeIn>
      <Footer />
    </div>
  );
}

export default App;
