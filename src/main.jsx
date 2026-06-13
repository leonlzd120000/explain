import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Zap, Brain, Layers, Target, Sparkles } from 'lucide-react';
import './styles.css';

function App() {
  const [selectedWord, setSelectedWord] = useState(null);
  const [prompt, setPrompt] = useState("The future of AI is");
  const [generated, setGenerated] = useState([]);

  const words = ["The", "future", "of", "AI", "is"];
  const attentionScores = [0.12, 0.08, 0.31, 0.27, 0.22];

  const handleWordClick = (index) => {
    setSelectedWord(index === selectedWord ? null : index);
  };

  const simulateGeneration = () => {
    const nextTokens = ["bright", "uncertain", "shaped", "limitless", "written"];
    const random = nextTokens[Math.floor(Math.random() * nextTokens.length)];
    
    setGenerated(prev => [...prev.slice(-4), random]);
    
    // auto clear after some
    if (generated.length > 5) {
      setTimeout(() => setGenerated([]), 1200);
    }
  };

  return (
    <main className="shell">
      {/* Hero */}
      <section className="hero">
        <div>
          <p className="eyebrow">Inside the Model</p>
          <h1>How Large<br />Language Models<br />Work</h1>
          <p className="lede">
            Next-token prediction at planetary scale. From raw text to billions of parameters, 
            here is the visual anatomy of modern AI.
          </p>
          <div className="actions">
            <a href="#architecture" className="button button--primary">
              Explore the transformer <ArrowRight size={18} />
            </a>
            <a href="#attention" className="button">
              Try attention
            </a>
          </div>
        </div>

        <div className="token-visual">
          <div className="neural-bg" />
          <div className="token-stream">
            {["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"].map((t, i) => (
              <div key={i} className={`token ${i % 3 === 0 ? 'active' : ''}`}>{t}</div>
            ))}
          </div>
          <div style={{ position: 'absolute', bottom: 32, left: 40, right: 40, fontSize: '0.75rem', color: '#8a877e' }}>
            Tokens flow left → right. Each becomes a high-dimensional vector.
          </div>
        </div>
      </section>

      {/* Tokens */}
      <section className="section" id="tokens">
        <div className="section-header">
          <Zap size={22} />
          <h2>1. Tokenization</h2>
        </div>
        <p>Text is split into subword tokens using Byte-Pair Encoding. The model never sees characters or whole words — only ~50k learned tokens.</p>
        
        <div className="cards">
          <div className="card">
            <h3>Byte-Pair Encoding</h3>
            <p>Common pairs of bytes are merged iteratively. “unhappiness” → [“un”, “happiness”] or finer tokens.</p>
          </div>
          <div className="card">
            <h3>Embedding Table</h3>
            <p>Each token ID maps to a 4096–8192 dimensional vector. These vectors carry semantic meaning learned during training.</p>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section" id="architecture">
        <div className="section-header">
          <Layers size={22} />
          <h2>2. Transformer Decoder</h2>
        </div>
        <p>Modern LLMs are decoder-only stacks. Each layer performs self-attention followed by a feed-forward network.</p>

        <div className="transformer">
          <div className="diagram">
            <div className="layer">
              <div className="layer-label">INPUT</div>
              <div className="layer-title">Token Embeddings</div>
            </div>

            <div className="attention">
              <div style={{ textAlign: 'center', zIndex: 1 }}>
                <div style={{ fontSize: '0.75rem', color: '#8a877e', marginBottom: 4 }}>MULTI-HEAD</div>
                <div style={{ fontWeight: 700 }}>Self-Attention</div>
              </div>
              <div className="arrow" style={{ position: 'absolute', left: '18%', width: '64px' }} />
              <div className="arrow" style={{ position: 'absolute', right: '18%', width: '64px', transform: 'rotate(180deg)' }} />
            </div>

            <div className="layer">
              <div className="layer-label">OUTPUT</div>
              <div className="layer-title">Next Token Logits</div>
            </div>
          </div>
          <div style={{ marginTop: 24, fontSize: '0.85rem', color: '#8a877e', textAlign: 'center' }}>
            32–128 identical layers • Residual connections • LayerNorm • ~ trillions of FLOPs per forward pass
          </div>
        </div>
      </section>

      {/* Attention Demo */}
      <section className="section" id="attention">
        <div className="section-header">
          <Target size={22} />
          <h2>3. Attention Mechanism</h2>
        </div>
        <p>Attention lets every token “look at” every other token. The model learns which relationships matter most for prediction.</p>

        <div className="attention-demo">
          <div style={{ marginBottom: 12, fontSize: '0.875rem', color: '#8a877e' }}>Click any word to see its attention distribution</div>
          
          <div className="prompt">
            {words.map((word, index) => (
              <div 
                key={index} 
                className={`word ${selectedWord === index ? 'selected' : ''}`}
                onClick={() => handleWordClick(index)}
              >
                {word}
              </div>
            ))}
          </div>

          <div style={{ fontSize: '0.75rem', color: '#8a877e', marginBottom: 8 }}>Attention weights from selected token</div>
          <div className="heatmap">
            {attentionScores.map((score, i) => (
              <div 
                key={i} 
                className={`heat ${score > 0.25 ? 'high' : ''}`}
                data-score={(score * 100).toFixed(0) + '%'}
                style={{ opacity: selectedWord === null ? 0.6 : (selectedWord === i ? 1 : 0.35 + score * 0.9) }}
              />
            ))}
          </div>
          <div style={{ marginTop: 12, fontSize: '0.75rem', color: 'var(--muted)' }}>
            Higher opacity = stronger attention. “of” and “AI” receive the most weight here.
          </div>
        </div>
      </section>

      {/* Generation Simulator */}
      <section className="section">
        <div className="section-header">
          <Sparkles size={22} />
          <h2>4. Next-Token Prediction</h2>
        </div>
        <p>At inference the model outputs a probability distribution over the vocabulary. We sample the next token and repeat.</p>

        <div className="generator">
          <div className="input-row">
            <input 
              value={prompt} 
              onChange={(e) => setPrompt(e.target.value)} 
              placeholder="Enter prompt..." 
            />
            <button className="button button--primary" onClick={simulateGeneration}>
              Sample next token
            </button>
          </div>

          <div className="tokens-output">
            {prompt.split(' ').map((t, i) => (
              <div key={i} className="token" style={{ background: 'rgba(79,156,255,0.1)', borderColor: 'rgba(79,156,255,0.3)', color: '#4f9cff' }}>{t}</div>
            ))}
            {generated.map((token, i) => (
              <div key={i} className="gen-token">{token}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Scale Stats */}
      <section className="section">
        <div className="section-header">
          <Brain size={22} />
          <h2>5. Why Scale Wins</h2>
        </div>
        
        <div className="stats">
          <div className="stat">
            <div className="stat-value">405B</div>
            <div className="stat-label">Parameters in Llama 3.1</div>
          </div>
          <div className="stat">
            <div className="stat-value">15T</div>
            <div className="stat-label">Tokens used in training</div>
          </div>
          <div className="stat">
            <div className="stat-value">128K</div>
            <div className="stat-label">Context length (tokens)</div>
          </div>
          <div className="stat">
            <div className="stat-value">~0.3s</div>
            <div className="stat-label">Time to first token (typical)</div>
          </div>
        </div>
      </section>

      <div className="footer">
        <div>Built for clarity • React + Vite • GitHub Pages</div>
        <div>leonlzd120000/explain</div>
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);