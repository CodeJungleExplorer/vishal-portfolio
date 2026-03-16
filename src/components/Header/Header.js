import React, { useState, useEffect } from "react";
import { greeting, socialMediaLinks } from "../../portfolio";
import "./Header.css";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <div className="header-inner container">
        <a href="#hero" className="logo">
          <span className="logo-bracket">&lt;</span>
          VP
          <span className="logo-bracket">/&gt;</span>
        </a>

        <nav className={`nav${menuOpen ? " open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={greeting.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary nav-resume"
            onClick={() => setMenuOpen(false)}
          >
            Resume ↗
          </a>
        </nav>

        <button
          className={`hamburger${menuOpen ? " active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
