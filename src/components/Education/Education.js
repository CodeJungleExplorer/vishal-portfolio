import React from "react";
import { educationInfo } from "../../portfolio";
import "./Education.css";

const CapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
    <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/>
    <path d="M6 12v5c3.33 1.67 8.67 1.67 12 0v-5"/>
  </svg>
);

export default function Education() {
  return (
    <section className="education-section" id="education">
      <div className="container">
        <p className="section-label">Background</p>
        <h2 className="section-title">Education</h2>

        <div className="edu-list">
          {educationInfo.schools.map((school, i) => (
            <div className="edu-card card" key={i}>
              <div className="edu-icon">
                <CapIcon />
              </div>
              <div className="edu-body">
                <div className="edu-top">
                  <h3 className="edu-school">{school.schoolName}</h3>
                  <span className="edu-duration">{school.duration}</span>
                </div>
                <p className="edu-degree">{school.subHeader}</p>
                <p className="edu-desc">{school.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
