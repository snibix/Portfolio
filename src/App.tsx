import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import HeaderSection from "./components/HeaderSection";
import HeroGithub from "./components/HeroGithub";
import ProjectDetail from "./components/ProjectDetails";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./components/Skills";
import Training from "./components/Training";

function App() {
  return (
    <Router basename="/Portfolio">
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <HeaderSection />
              <Skills />
              <Training />
              <Projects />
              <Experience />
              <HeroGithub />
              <Contact />
            </main>
          }
        />
        <Route path="/projet/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
