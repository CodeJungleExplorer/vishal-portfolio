import React from "react";
import { achievementSection } from "../../portfolio";
import "./Achievements.css";

export default function Achievements() {
  return (
    <section className="achievements-section" id="achievements">
      <div className="container achievements-container">
        <p className="section-label">Highlights</p>
        <h2 className="section-title">{achievementSection.title}</h2>
        <p className="achievements-subtitle">{achievementSection.subtitle}</p>

        <div className="achievements-grid">
          {achievementSection.achievements.map((item, i) => (
            <div className="achievement-card card" key={i}>
              <div className="achievement-icon">{item.icon}</div>
              <div className="achievement-body">
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-subtitle">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
