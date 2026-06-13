import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';
import './styles.css';

function App() {
  return (
    <main className="shell">
      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">Explain</p>
          <h1>Build sharp frontend ideas into shareable pages.</h1>
          <p className="lede">
            This workspace is ready for FE bot output, automatic Git commits,
            GitHub Actions builds, and public GitHub Pages previews.
          </p>
          <div className="actions">
            <a href="#workflow" className="button button--primary">
              View workflow <ArrowRight size={18} />
            </a>
            <a href="https://github.com/leonlzd120000/explain" className="button">
              Repository
            </a>
          </div>
        </div>
        <div className="signal" aria-hidden="true">
          <div className="signal__panel">
            <Sparkles size={26} />
            <span>FE</span>
          </div>
          <div className="signal__grid">
            {Array.from({ length: 24 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="workflow">
        <article>
          <Layers size={22} />
          <h2>Generate</h2>
          <p>FE creates or updates the page inside this Vite project.</p>
        </article>
        <article>
          <Layers size={22} />
          <h2>Commit</h2>
          <p>Changes are committed with a clear frontend-focused message.</p>
        </article>
        <article>
          <Layers size={22} />
          <h2>Deploy</h2>
          <p>GitHub Actions publishes the built page to GitHub Pages.</p>
        </article>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
