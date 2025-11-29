import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Generator from "./pages/Generator";
import Gallery from "./pages/Gallery";
import Poses from "./pages/Poses";
import ChatbotButton from "./components/ChatbotButton";
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<Generator />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/poses" element={<Poses />} />
      </Routes>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} ImagePoem. All Rights Reserved.</p>
      </footer>

      <ChatbotButton />
    </Router>
  );
}

export default App;
