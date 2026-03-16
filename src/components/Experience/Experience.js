import React, { useState } from "react";
import { workExperiences } from "../../portfolio";
import "./Experience.css";

export default function Experience() {
  const [active, setActive] = useState(0);
  const { experience } = workExperiences;
  const exp = experience[active];

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <p className="section-label">Career</p>
        <h2 className="section-title">Work Experience</h2>

        <div className="exp-layout">
          {/* Tab list */}
          <div className="exp-tabs">
            {experience.map((e, i) => (
              <button
                key={i}
                className={`exp-tab${active === i ? " active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="exp-tab-company">{e.company}</span>
                <span className="exp-tab-date">{e.date}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="exp-content card" key={active}>
            <div className="exp-header">
              <div>
                <h3 className="exp-role">{exp.role}</h3>
                <p className="exp-meta">
                  <span className="exp-company">{exp.company}</span>
                  <span className="exp-separator">·</span>
                  <span className="exp-date">{exp.date}</span>
                </p>
              </div>
              <span className="exp-badge">{active === 0 ? "Latest" : active === experience.length - 1 ? "Earlier" : "Previous"}</span>
            </div>

            <p className="exp-desc">{exp.desc}</p>

            {exp.descBullets && exp.descBullets.length > 0 && (
              <ul className="exp-bullets">
                {exp.descBullets.map((b, i) => (
                  <li key={i} className="exp-bullet">
                    <span className="bullet-arrow">→</span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
