import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";
import AboutPage from "./pages/AboutPage/AboutPage";
import Projects from "./pages/ProjectsPage/ProjectPage";
import PageNotFound from "./pages/NotFound/PageNotFound";
import Skill from "./pages/Skills/Skill";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
    
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
