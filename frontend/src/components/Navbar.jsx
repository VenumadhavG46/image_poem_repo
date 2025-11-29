import { Link } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>ImagePoem ✨</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/generate">Generate</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/poses">Poses</Link>
      </div>
    </nav>
  );
}
