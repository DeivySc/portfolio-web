import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <nav>
        <div className="nav-logo">
          <NavLink to="/">DS.</NavLink> {/* Initials or short brand */}
        </div>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
          <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
