import { FaMapLocationDot } from 'react-icons/fa6'
import './Navbar.css'


export default function Navbar() {
  return (
    <nav className="navbar">
      
      <h1 className="navbar-logo">
        <FaMapLocationDot className="navbar-logo-icon" />
        <span>
            Trip<span className="brand-highlight">Mate</span>
        </span>
        
    </h1>

      <ul className="navbar-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}