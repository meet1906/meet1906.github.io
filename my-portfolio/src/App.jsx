import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import CommunityWork from "./components/CommunityWork";
import Interests from "./components/Interests";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <>
    <div className="pt-20">
      <Navbar />
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
