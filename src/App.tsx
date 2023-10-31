import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Discord from "./pages/Discord";
import Resources from "./pages/Resources";
import Leaderboard from "./pages/Leaderboard";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="resources" element={<Resources />} />
        <Route path="discord" element={<Discord />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
