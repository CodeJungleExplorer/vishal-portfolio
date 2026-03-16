import React from "react";
import { greeting, socialMediaLinks } from "../../portfolio";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <a href="#hero" className="footer-logo">
            <span className="logo-bracket">&lt;</span>VP<span className="logo-bracket">/&gt;</span>
          </a>
          <p className="footer-copy">
            © {year} {greeting.username}. Built with React.
          </p>
        </div>

        <div className="footer-links">
          <a href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          <a href={`mailto:${socialMediaLinks.gmail}`} className="footer-link">Email</a>
        </div>
      </div>
    </footer>
  );
}
