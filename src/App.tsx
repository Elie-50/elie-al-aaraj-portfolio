import './App.css'

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutProjects from "./pages/AboutProjects";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-projects" element={<AboutProjects />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
