import { useEffect, useRef } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './styles/global.css';
import './App.css';

export default function App() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  // Custom cursor
  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 5 + 'px';
        cursorRef.current.style.top = e.clientY - 5 + 'px';
      }
      if (trailRef.current) {
        trailRef.current.style.left = e.clientX + 'px';
        trailRef.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  // Scroll fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={trailRef} className="cursor-trail" />
      <Nav />
      <Hero scrollTo={scrollTo} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <footer className="footer">
        <p>© 2025 Yamada Taro. Built with React.</p>
        <p className="footer-sub">BACKEND ENGINEER / TOKYO, JAPAN</p>
      </footer>
    </>
  );
}
