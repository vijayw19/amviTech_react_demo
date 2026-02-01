import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <div className="logo">A</div>
          <div>
            <div className="brand-name">AmviTech</div>
            <div className="brand-tag">
              Platform & DevOps Engineering
            </div>
          </div>
        </div>

        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/what-we-do">What We Do</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
