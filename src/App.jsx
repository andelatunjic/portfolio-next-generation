import React from "react";
import Work from "./pages/work/Work";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./footer/Footer";
import AnimationLayout from "./components/animationLayout/AnimationLayout";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route element={<AnimationLayout />}>
            <Route path="/" element={<Work />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
