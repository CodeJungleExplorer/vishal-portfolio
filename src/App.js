import React, { useEffect, useRef } from "react";
import "./styles/global.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements/Achievements";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import useScrollAnimation from "./hooks/useScrollAnimation";

/* ─────────────────────────────────────────────────────────────
   GLOBAL BACKGROUND CANVAS
   • Planets: 1.5–4 px radius, subtle colour-tinted drift
   • Shooting stars: occasional meteor streaks
────────────────────────────────────────────────────────────── */
function GlobalCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId, w, h, planets, shooters;

    const PAL = [
      { r: 110, g: 231, b: 183 },
      { r:  56, g: 189, b: 248 },
      { r: 167, g: 139, b: 250 },
    ];

    function makePlanet() {
      const c = PAL[Math.floor(Math.random() * PAL.length)];
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2.5 + 1.5,
        dx: (Math.random() - 0.5) * 0.35,
        dy: (Math.random() - 0.5) * 0.35,
        baseA: Math.random() * 0.18 + 0.05,
        pulse: Math.random() * Math.PI * 2,
        ps: 0.006 + Math.random() * 0.005,
        col: c,
      };
    }

    function makeStar() {
      const spd = 8 + Math.random() * 6;
      const ang = (10 + Math.random() * 10) * (Math.PI / 180);
      return {
        x: Math.random() * w, y: Math.random() * h * 0.5,
        vx: Math.cos(ang) * spd, vy: Math.sin(ang) * spd,
        len: 80 + Math.random() * 60,
        a: 0, phase: "in", life: 0,
        holdAt: 8, outAt: 28 + Math.random() * 14,
      };
    }

    function init() {
      w = canvas.width  = window.innerWidth;
      h = canvas.height = window.innerHeight;
      planets  = Array.from({ length: 40 }, makePlanet);
      shooters = [];
    }

    let fc = 0;

    function draw() {
      ctx.clearRect(0, 0, w, h);
      fc++;

      /* planets */
      planets.forEach((p) => {
        p.pulse += p.ps;
        const a = p.baseA + Math.sin(p.pulse) * 0.03;

        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3.5);
        glow.addColorStop(0, `rgba(${p.col.r},${p.col.g},${p.col.b},${(a * 0.55).toFixed(3)})`);
        glow.addColorStop(1, `rgba(${p.col.r},${p.col.g},${p.col.b},0)`);
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = glow; ctx.fill();

        const core = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        core.addColorStop(0, `rgba(${p.col.r},${p.col.g},${p.col.b},${Math.min(1, a * 1.8).toFixed(3)})`);
        core.addColorStop(1, `rgba(${p.col.r},${p.col.g},${p.col.b},0)`);
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = core; ctx.fill();

        p.x += p.dx; p.y += p.dy;
        const m = p.r * 4;
        if (p.x < -m) p.x = w + m; if (p.x > w + m) p.x = -m;
        if (p.y < -m) p.y = h + m; if (p.y > h + m) p.y = -m;
      });

      /* shooting stars */
      if (fc % 210 === 0) shooters.push(makeStar());
      shooters = shooters.filter(s => s.phase !== "dead");
      shooters.forEach((s) => {
        s.life++;
        if (s.phase === "in")   { s.a = Math.min(0.9, s.life / 8);  if (s.life >= s.holdAt) s.phase = "hold"; }
        if (s.phase === "hold") { s.a = 0.9; if (s.life >= s.outAt) s.phase = "out"; }
        if (s.phase === "out")  { s.a = Math.max(0, 0.9*(1-(s.life-s.outAt)/12)); if (s.a <= 0) s.phase = "dead"; }

        const ang = Math.atan2(s.vy, s.vx);
        const tx = s.x - Math.cos(ang) * s.len;
        const ty = s.y - Math.sin(ang) * s.len;
        const g = ctx.createLinearGradient(tx, ty, s.x, s.y);
        g.addColorStop(0, `rgba(255,255,255,0)`);
        g.addColorStop(1, `rgba(255,255,255,${s.a.toFixed(2)})`);
        ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = g; ctx.lineWidth = 1.4; ctx.lineCap = "round"; ctx.stroke();
        ctx.beginPath(); ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.a.toFixed(2)})`; ctx.fill();
        s.x += s.vx; s.y += s.vy;
      });

      animId = requestAnimationFrame(draw);
    }

    init();
    animId = requestAnimationFrame(draw);
    window.addEventListener("resize", init);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", init); };
  }, []);

  return <canvas ref={ref} id="global-planet-canvas" aria-hidden="true" />;
}

export default function App() {
  // Activates scroll-triggered animations on all [data-animate] elements
  useScrollAnimation();

  return (
    <>
      <GlobalCanvas />
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}