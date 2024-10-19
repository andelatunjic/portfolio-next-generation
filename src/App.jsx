import React from "react";
import Work from "./pages/work/Work";
import Play from "./pages/play/Play";
import About from "./pages/about/About";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/play" element={<Play />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
