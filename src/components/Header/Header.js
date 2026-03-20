import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { greeting } from "../../portfolio";
import "./Header.css";

var navLinks = [
  { label: "Skills",      href: "#skills" },
  { label: "Experience",  href: "#experience" },
  { label: "Projects",    href: "#projects" },
  { label: "Education",   href: "#education" },
  { label: "Contact",     href: "#contact" },
];

export default function Header() {
  var scrolled   = useState(false);
  var menuState  = useState(false);
  var setScrolled = scrolled[1];
  var scrolledVal = scrolled[0];
  var menuOpen    = menuState[0];
  var setMenuOpen = menuState[1];

  useEffect(function () {
    function onScroll() { setScrolled(window.scrollY > 40); }
    window.addEventListener("scroll", onScroll);
    return function () { window.removeEventListener("scroll", onScroll); };
  }, []);

  useEffect(function () {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return function () { document.body.style.overflow = ""; };
  }, [menuOpen]);

  function close()      { setMenuOpen(false); }
  function toggleMenu() { setMenuOpen(function(o) { return !o; }); }

  var headerClass    = "header" + (scrolledVal ? " scrolled" : "");
  var navClass       = "nav" + (menuOpen ? " open" : "");
  var hamburgerClass = "hamburger" + (menuOpen ? " active" : "");

  /* ── Portal content: overlay + drawer, mounted directly on body ── */
  var mobileMenu = menuOpen
    ? ReactDOM.createPortal(
        <>
          {/* Full-screen dimming overlay */}
          <div className="nav-overlay" onClick={close} />

          {/* Slide-in drawer */}
          <nav className={navClass} aria-label="Mobile navigation">
            {/* Close button inside the drawer */}
            <button className="nav-close" onClick={close} aria-label="Close menu">
              &#10005;
            </button>

            {navLinks.map(function (link) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link"
                  onClick={close}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href={greeting.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary nav-resume"
              onClick={close}
            >
              Resume &#8599;
            </a>
          </nav>
        </>,
        document.body
      )
    : null;

  return (
    <>
      <header className={headerClass}>
        <div className="header-inner container">
          <a href="#hero" className="logo" onClick={close}>
            <span className="logo-bracket">&lt;</span>
            VP
            <span className="logo-bracket">/&gt;</span>
          </a>

          {/* Desktop nav — always visible on ≥769px, hidden on mobile */}
          <nav className="nav nav-desktop" aria-label="Desktop navigation">
            {navLinks.map(function (link) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link"
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href={greeting.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary nav-resume"
            >
              Resume &#8599;
            </a>
          </nav>

          <button
            className={hamburgerClass}
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Portaled mobile menu — lives on document.body, never clipped */}
      {mobileMenu}
    </>
  );
}