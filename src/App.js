import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectPage from "./Pages/PorjectPage";
import SkillPage from "./Pages/SkillPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route exact path="/about" element={<AboutPage />} />

        <Route exact path="/project" element={<ProjectPage />} />

        <Route exact path="/skill" element={<SkillPage />} />

        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
