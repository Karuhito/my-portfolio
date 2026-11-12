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
  /**
   * 指定した id のセクションへスクロールする（動きを減らす設定のときは即時移動）
   * @param {string} id
   * @returns {void}
   */
  const scrollTo = (id) => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <>
      <Nav scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <footer className="footer"><div className="container">© 2026 Enomoto Kazuto</div></footer>
    </>
  );
}
