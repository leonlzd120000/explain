import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Zap, Brain, Layers, Target, Sparkles, ExternalLink, ScrollText, Database, Clock, AlertTriangle, SlidersHorizontal, RefreshCw, Mountain, Cpu, TrendingUp, Users, Lightbulb, GitBranch, GitCommit, GitMerge, GitPullRequest, Folder, FileText, RotateCcw, Plus, Minus, Hash } from 'lucide-react';
import './styles.css';

const generatedProjects = [
  {
    id: 'large-language-models',
    title: 'How Large Language Models Work',
    summary: 'An interactive explainer for tokenization, transformer layers, attention, and next-token prediction.',
    href: '#/large-language-models',
    tag: 'AI fundamentals',
  },
  {
    id: 'llm-context',
    title: 'How Context Works in LLMs',
    summary: 'The context window as working memory, KV cache efficiency, attention dilution, and techniques to go beyond the limit.',
    href: '#/llm-context',
    tag: 'LLM internals',
  },
  {
    id: 'agi',
    title: 'The Road to AGI',
    summary: 'What \"general intelligence\" really means, how scaling + reasoning gets us closer, the remaining hard problems, and interactive tools to explore the horizon.',
    href: '#/agi',
    tag: 'Frontier AI',
  },
  {
    id: 'git',
    title: 'How Git Works',
    summary: 'The directed acyclic graph of commits, the staging area, branches, merges, and the .git directory as a content-addressable filesystem. Live simulators + hash-object demo.',
    href: '#/git',
    tag: 'Version control',
  },
];

function ProjectHub() {
  return (
    <main className="shell">
      <section className="hub-hero">
        <p className="eyebrow">Explain to me</p>
        <h1>Generated explainers stay preserved and linked.</h1>
        <p className="lede">
          Each new page is added as a separate project instead of replacing previous work.
          Use this index to open every generated explanation.
        </p>
      </section>

      <section className="project-library" aria-labelledby="project-library-title">
        <div className="section-header">
          <Layers size={22} />
          <h2 id="project-library-title">Generated projects</h2>
        </div>
        <div className="project-grid">
          {generatedProjects.map((project) => (
            <a className="project-card" href={project.href} key={project.id}>
              <span className="project-tag">{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <span className="project-link">
                Open project <ExternalLink size={16} />
              </span>
            </a>
          ))}
        </div>
      </section>

      <div className="footer">
        <div>Project index • React + Vite • GitHub Pages</div>
        <div>leonlzd120000/explain</div>
      </div>
    </main>
  );
}

function LlmPage() {
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
      <nav className="project-nav" aria-label="Project navigation">
        <a href="#/" className="nav-link">All projects</a>
        <a href="https://github.com/leonlzd120000/explain" className="nav-link">
          Repository <ExternalLink size={14} />
        </a>
      </nav>

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

function ContextPage() {
  // Context Window Simulator
  const [windowSize, setWindowSize] = useState(32);
  const [fullContext, setFullContext] = useState("The quick brown fox jumps over the lazy dog. Then it runs through the forest and meets a wise owl who tells stories about ancient trees and hidden streams. The fox listens carefully, remembering every detail for its journey ahead.");
  const [selectedPos, setSelectedPos] = useState(null);
  
  const tokens = fullContext.trim().split(/\s+/).slice(0, 60); // cap for demo
  const visibleTokens = tokens.slice(Math.max(0, tokens.length - windowSize));
  const totalTokens = tokens.length;
  
  // KV Cache demo
  const [kvStep, setKvStep] = useState(0);
  const [generatedTokens, setGeneratedTokens] = useState([]);
  const promptTokens = ["User:", "Explain", "context", "in", "LLMs", "to", "me"];
  const sampleNext = ["Context", "is", "the", "model's", "working", "memory", "window", "that", "limits", "what", "it", "can", "attend", "to", "simultaneously"];
  
  const handleGenerate = () => {
    if (kvStep === 0) {
      setKvStep(1);
    } else {
      const next = sampleNext[Math.min(kvStep - 1, sampleNext.length - 1)];
      setGeneratedTokens(prev => [...prev, next]);
      setKvStep(prev => prev + 1);
    }
  };
  const resetKV = () => {
    setKvStep(0);
    setGeneratedTokens([]);
  };
  
  // Truncation / RAG sim
  const [userText, setUserText] = useState("In a distant galaxy, a young explorer named Elara discovered an ancient artifact that could rewrite the laws of physics. She shared this with her crew aboard the starship Voyager, but the message got garbled over the long distance. The crew had to piece together fragments from previous transmissions while also recalling their training from years ago. The decision they made would determine the fate of their mission and perhaps the entire federation.");
  const approxTokens = (text) => Math.ceil(text.split(/\s+/).length * 1.33);
  const currentTokenCount = approxTokens(userText);
  const maxDemoWindow = 48;
  const isOver = currentTokenCount > maxDemoWindow;
  const truncated = isOver ? userText.split(/\s+/).slice(0, maxDemoWindow).join(' ') + ' ... [truncated]' : userText;
  const [strategy, setStrategy] = useState('truncate');
  const effectiveText = strategy === 'truncate' ? truncated : userText.split(/\s+/).slice(-maxDemoWindow).join(' ') + ' ... [kept recent]';
  
  const handleStrategy = (s) => setStrategy(s);
  
  // Attention demo
  const [focusToken, setFocusToken] = useState(12);
  const contextPositions = Array.from({length: 20}, (_, i) => `T${i+1}`);
  const getAttention = (pos) => {
    const dist = Math.abs(pos - focusToken);
    let att = Math.max(0.05, 0.9 - dist * 0.08);
    if (dist > 5 && dist < 12) att *= 0.6; // lost in middle
    return att;
  };
  
  // Set document title
  useEffect(() => {
    document.title = 'How Context Works in LLMs • Explain to me';
  }, []);

  return (
    <main className="shell context-page">
      <nav className="project-nav" aria-label="Project navigation">
        <a href="#/" className="nav-link">All projects</a>
        <a href="#/large-language-models" className="nav-link">LLM Basics</a>
        <a href="https://github.com/leonlzd120000/explain" className="nav-link">
          Repository <ExternalLink size={14} />
        </a>
      </nav>

      {/* Hero */}
      <section className="hero context-hero">
        <div>
          <p className="eyebrow">Working Memory</p>
          <h1>How Context<br />Works in LLMs</h1>
          <p className="lede">
            The context window is the model's entire field of view. Everything outside it is invisible — no matter how important.
            Here is exactly how that limit is enforced and worked around.
          </p>
          <div className="actions">
            <a href="#window" className="button button--primary">
              Explore the window <ScrollText size={18} />
            </a>
            <a href="#kv" className="button">
              See the KV cache
            </a>
          </div>
        </div>
        <div className="context-visual">
          <div className="tape">
            {tokens.slice(0,12).map((t,i) => <div key={i} className="tape-token">{t}</div>)}
            <div className="tape-window" style={{ width: `${Math.min(70, (windowSize / totalTokens) * 100)}%` }} />
          </div>
          <div className="visual-label">The sliding window over history. Only tokens inside are visible to attention.</div>
        </div>
      </section>

      {/* 1. The Window */}
      <section className="section" id="window">
        <div className="section-header">
          <SlidersHorizontal size={22} />
          <h2>1. The Context Window</h2>
        </div>
        <p>Every forward pass, the model receives a fixed-length sequence of tokens (the context). Tokens beyond the limit are dropped before the model even sees them. Modern models range from 4k to over 1M tokens.</p>
        
        <div className="window-sim">
          <div className="controls">
            <label>Window size: <strong>{windowSize}</strong> tokens (demo scale)</label>
            <input 
              type="range" 
              min="4" 
              max="64" 
              value={windowSize} 
              onChange={(e) => setWindowSize(parseInt(e.target.value))}
            />
            <div className="token-count">Full history: {totalTokens} tokens • Visible to model: {visibleTokens.length}</div>
          </div>
          
          <div className="context-tape">
            {tokens.map((token, idx) => {
              const isVisible = idx >= tokens.length - windowSize;
              return (
                <div 
                  key={idx} 
                  className={`tape-token ${isVisible ? 'in-window' : 'out-of-window'}`}
                  onClick={() => setSelectedPos(idx)}
                >
                  {token}
                  {selectedPos === idx && <span className="sel-dot" />}
                </div>
              );
            })}
          </div>
          <div className="legend">
            <span className="leg in">Inside window (attended)</span>
            <span className="leg out">Dropped (invisible)</span>
          </div>
          <button className="button" onClick={() => { 
            setFullContext(fullContext + " The story continues with new details about the hidden valley and its secrets."); 
            setSelectedPos(null); 
          }}>
            Append more text (grow history)
          </button>
        </div>
      </section>

      {/* 2. KV Cache */}
      <section className="section" id="kv">
        <div className="section-header">
          <Database size={22} />
          <h2>2. KV Cache: The Efficiency Trick</h2>
        </div>
        <p>Attention is O(n²). Recomputing keys and values for every previous token on every new generation step would be catastrophically slow. The KV cache stores the K and V projections from previous tokens so the model only computes the new token's Q/K/V.</p>
        
        <div className="kv-demo">
          <div className="kv-header">
            <div>Step: <strong>{kvStep === 0 ? 'Ready to prefill' : kvStep}</strong></div>
            <div className="kv-actions">
              <button className="button button--primary" onClick={handleGenerate}>
                {kvStep === 0 ? 'Prefill context (compute all KV)' : 'Generate next token'}
              </button>
              <button className="button" onClick={resetKV}><RefreshCw size={14} /> Reset</button>
            </div>
          </div>
          
          <div className="token-timeline">
            {promptTokens.map((tok, i) => (
              <div key={`p${i}`} className={`tkn ${kvStep > 0 ? 'cached' : ''}`}>
                {tok}
                {kvStep > 0 && <div className="cache-badge">KV cached</div>}
              </div>
            ))}
            {generatedTokens.map((tok, i) => (
              <div key={`g${i}`} className="tkn gen">
                {tok}
                <div className="cache-badge">just computed</div>
              </div>
            ))}
          </div>
          
          <div className="cost-bar">
            <div>Compute cost this step:</div>
            <div className="bar">
              <div className="fill" style={{width: kvStep === 0 ? '100%' : '12%'}} />
            </div>
            <div className="note">{kvStep === 0 ? 'Full prefill: all tokens' : 'Only new token + attend to cache (massive saving)'}</div>
          </div>
        </div>
      </section>

      {/* 3. Attention Dilution */}
      <section className="section">
        <div className="section-header">
          <Target size={22} />
          <h2>3. Attention Dilution &amp; "Lost in the Middle"</h2>
        </div>
        <p>Even inside the window, not all tokens are equal. Attention tends to focus on the beginning and the very end. Information in the middle of a long context is often ignored — a well-documented failure mode.</p>
        
        <div className="attention-sim">
          <div style={{marginBottom: '12px', fontSize:'0.875rem', color:'var(--muted)'}}>Click a position to set the "query" (usually the latest token). Watch attention weights.</div>
          <div className="pos-tokens">
            {contextPositions.map((t, i) => (
              <div 
                key={i} 
                className={`pos-token ${i === focusToken ? 'focus' : ''}`}
                onClick={() => setFocusToken(i)}
                style={{ opacity: 0.6 + getAttention(i) * 0.4 }}
              >
                {t}
              </div>
            ))}
          </div>
          <div className="att-bars">
            {contextPositions.map((_, i) => {
              const a = getAttention(i);
              return <div key={i} className="att-bar" style={{height: `${a * 80 + 12}px`, background: i===focusToken ? 'var(--accent)' : '#4f9cff'}} title={`${(a*100).toFixed(0)}%`} />
            })}
          </div>
          <p style={{fontSize:'0.8rem', color:'var(--muted)', marginTop:8}}>Notice the dip in the middle positions even when the window is "full".</p>
        </div>
      </section>

      {/* 4. When the Window Fills */}
      <section className="section">
        <div className="section-header">
          <AlertTriangle size={22} />
          <h2>4. When the Window Fills Up</h2>
        </div>
        <p>Paste or edit text below. The demo window is artificially small (48 tokens) to make the effect obvious. In reality you hit the wall at 128k+ but the same problem appears at scale.</p>
        
        <div className="overflow-demo">
          <textarea 
            value={userText} 
            onChange={e => setUserText(e.target.value)}
            rows={5}
            className="context-input"
          />
          <div className="count-row">
            <span>Approx tokens: <strong className={isOver ? 'over' : ''}>{currentTokenCount}</strong> / {maxDemoWindow} demo limit</span>
            {isOver && <span className="over-label">OVER LIMIT</span>}
          </div>
          
          <div className="strategies">
            <button onClick={() => handleStrategy('truncate')} className={`strat-btn ${strategy==='truncate' ? 'active' : ''}`}>Truncate oldest (common default)</button>
            <button onClick={() => handleStrategy('recent')} className={`strat-btn ${strategy==='recent' ? 'active' : ''}`}>Keep only recent (recency bias)</button>
          </div>
          
          <div className="result-context">
            <div className="label">What the model actually sees:</div>
            <div className="result-text">{effectiveText}</div>
          </div>
        </div>
      </section>

      {/* 5. Escaping */}
      <section className="section">
        <div className="section-header">
          <Brain size={22} />
          <h2>5. Escaping the Window</h2>
        </div>
        <div className="escape-grid">
          <div className="escape-card">
            <h4>RAG (Retrieval)</h4>
            <p>Don't put everything in context. Retrieve only the relevant chunks from a vector database at query time and stuff just those into the window.</p>
          </div>
          <div className="escape-card">
            <h4>Memory / Agents</h4>
            <p>External memory stores (vector DBs, graphs, summaries written to files) that the model can read/write via tools. The LLM only holds a tiny active scratchpad.</p>
          </div>
          <div className="escape-card">
            <h4>Context Compression</h4>
            <p>Models or separate summarizers that compress previous turns into fewer tokens while preserving key facts. Used in long chat sessions.</p>
          </div>
          <div className="escape-card">
            <h4>Long-Context Training</h4>
            <p>Techniques like YaRN, NTK-aware scaling, Ring Attention, and continued pretraining on longer sequences push the native window to millions of tokens.</p>
          </div>
        </div>
      </section>

      {/* Real numbers */}
      <section className="section">
        <div className="section-header">
          <Clock size={22} />
          <h2>Context Lengths in the Wild (2025)</h2>
        </div>
        <div className="stats context-stats">
          <div className="stat"><div className="stat-value">128K</div><div className="stat-label">GPT-4o / Claude 3.5</div></div>
          <div className="stat"><div className="stat-value">200K</div><div className="stat-label">Claude 3 Opus</div></div>
          <div className="stat"><div className="stat-value">1M+</div><div className="stat-label">Gemini 1.5 / Llama 3.1 405B variants</div></div>
          <div className="stat"><div className="stat-value">10M</div><div className="stat-label">Experimental (research)</div></div>
        </div>
        <p style={{fontSize:'0.8rem', marginTop:'16px', color:'var(--muted)'}}>Larger windows are impressive but quadratic cost and "lost in middle" mean engineering workarounds are still essential.</p>
      </section>

      <div className="footer">
        <div>Context is the hidden constraint behind every LLM interaction • React + Vite • GitHub Pages</div>
        <div>leonlzd120000/explain</div>
      </div>
    </main>
  );
}

function AgiPage() {
  // Scaling simulator
  const [compute, setCompute] = useState(60);
  const [data, setData] = useState(55);
  const [algo, setAlgo] = useState(45);

  const emergence = Math.round(
    (compute * 0.4 + data * 0.35 + algo * 0.25) / 1.5
  );
  const isEmergent = emergence > 75;

  // Capability ladder
  const domains = [
    { name: 'Math & Reasoning', current: 85, agi: 98 },
    { name: 'Coding', current: 78, agi: 95 },
    { name: 'Science Discovery', current: 62, agi: 92 },
    { name: 'Creative Work', current: 70, agi: 88 },
    { name: 'Long-horizon Planning', current: 35, agi: 96 },
    { name: 'Social & Emotional', current: 48, agi: 85 },
  ];

  const [year, setYear] = useState(2025);
  const progress = Math.min(100, Math.max(0, (year - 2020) * 8 + (emergence - 50) / 2));

  // Agent failure demo
  const [agentType, setAgentType] = useState('narrow');
  const task = "Plan a crewed mission to Mars including life support, launch windows, and contingencies.";
  const agentOutputs = {
    narrow: "I can look up current rocket specs and Mars distance. For the full plan you will need a human team.",
    cot: "Step 1: Distance is 225M km average. Step 2: Use Starship-class vehicle. Step 3: ... [stops at high-level, cannot simulate 2-year mission dynamics or unknown failure modes]",
    agi: "Full end-to-end plan generated with 47 contingency branches, real-time simulation of closed-loop life support, economic model for 15-year program, and self-updating risk register. Ready to execute or iterate."
  };

  // Definition spectrum
  const [breadth, setBreadth] = useState(70);
  const [depth, setDepth] = useState(55);
  const agiScore = Math.round((breadth + depth) / 2);

  useEffect(() => {
    document.title = 'The Road to AGI • Explain to me';
  }, []);

  return (
    <main className="shell agi-page">
      <nav className="project-nav" aria-label="Project navigation">
        <a href="#/" className="nav-link">All projects</a>
        <a href="#/llm-context" className="nav-link">Context</a>
        <a href="#/large-language-models" className="nav-link">LLM Basics</a>
        <a href="https://github.com/leonlzd120000/explain" className="nav-link">
          Repository <ExternalLink size={14} />
        </a>
      </nav>

      {/* Hero */}
      <section className="hero agi-hero">
        <div>
          <p className="eyebrow">The Horizon</p>
          <h1>The Road to<br />Artificial General<br />Intelligence</h1>
          <p className="lede">
            AGI is not just "better AI". It is the point where a single system can match or exceed the full range of human intellectual capability across almost any domain, and keep improving itself.
          </p>
          <div className="actions">
            <a href="#simulator" className="button button--primary">
              Explore the emergence simulator <TrendingUp size={18} />
            </a>
            <a href="#gaps" className="button">
              See the remaining gaps
            </a>
          </div>
        </div>
        <div className="horizon-visual">
          <div className="ladder">
            {domains.slice(0, 3).map((d, i) => (
              <div key={i} className="ladder-rung">
                <div className="label">{d.name}</div>
                <div className="bar"><div className="fill" style={{ width: `${d.current}%` }} /></div>
              </div>
            ))}
            <div className="agi-line" style={{ left: `${progress}%` }}>
              <Mountain size={18} /> AGI horizon
            </div>
          </div>
          <div className="visual-label">Current frontier systems vs. the generalist threshold (drag year to project)</div>
        </div>
      </section>

      {/* Simulator */}
      <section className="section" id="simulator">
        <div className="section-header">
          <TrendingUp size={22} />
          <h2>1. The Emergence Simulator</h2>
        </div>
        <p>Most progress comes from scaling three ingredients. Move the sliders. Watch how "general" capability can suddenly jump when the combination crosses a threshold.</p>

        <div className="simulator">
          <div className="sliders">
            <div>
              <label>Compute (FLOPs &amp; chips) <strong>{compute}</strong></label>
              <input type="range" min="20" max="100" value={compute} onChange={e => setCompute(+e.target.value)} />
            </div>
            <div>
              <label>Data (tokens &amp; quality) <strong>{data}</strong></label>
              <input type="range" min="20" max="100" value={data} onChange={e => setData(+e.target.value)} />
            </div>
            <div>
              <label>Algorithmic novelty <strong>{algo}</strong></label>
              <input type="range" min="20" max="100" value={algo} onChange={e => setAlgo(+e.target.value)} />
            </div>
          </div>
          <div className="emergence">
            <div className="score">{emergence}</div>
            <div className="label">Emergence score</div>
            <div className={`status ${isEmergent ? 'emergent' : ''}`}>
              {isEmergent ? 'Emergent generalist behavior likely' : 'Still mostly narrow / brittle'}
            </div>
          </div>
        </div>
      </section>

      {/* Capability Ladder */}
      <section className="section">
        <div className="section-header">
          <Mountain size={22} />
          <h2>2. The Capability Ladder</h2>
        </div>
        <p>AGI is not one number. It is crossing the threshold across many domains at once. Adjust the "year" slider to see projected progress.</p>

        <div className="ladder-controls">
          <label>Projected year: <strong>{year}</strong></label>
          <input type="range" min="2020" max="2035" value={year} onChange={e => setYear(+e.target.value)} />
        </div>
        <div className="domain-grid">
          {domains.map((d, i) => {
            const currentHeight = Math.min(100, d.current + (year - 2025) * 2.5);
            return (
              <div key={i} className="domain">
                <div className="name">{d.name}</div>
                <div className="bars">
                  <div className="bar current" style={{ width: `${Math.min(100, currentHeight)}%` }}>
                    <span>Now</span>
                  </div>
                  <div className="bar agi" style={{ width: `${d.agi}%` }}>
                    <span>AGI</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Agent Gaps */}
      <section className="section" id="gaps">
        <div className="section-header">
          <Cpu size={22} />
          <h2>3. Where Current Systems Still Fail</h2>
        </div>
        <p>Even the best models today are powerful tools or impressive reasoners on short horizons. True generality requires reliable long-term agency, robust world models, and open-ended self-improvement.</p>

        <div className="agent-demo">
          <div className="task">{task}</div>
          <div className="types">
            {['narrow', 'cot', 'agi'].map(t => (
              <button key={t} className={`type-btn ${agentType === t ? 'active' : ''}`} onClick={() => setAgentType(t)}>
                {t === 'narrow' ? 'Narrow Tool Use' : t === 'cot' ? 'Chain-of-Thought' : 'Hypothetical AGI'}
              </button>
            ))}
          </div>
          <div className="output">{agentOutputs[agentType]}</div>
        </div>
      </section>

      {/* Definition Spectrum */}
      <section className="section">
        <div className="section-header">
          <Lightbulb size={22} />
          <h2>4. The AGI Definition Spectrum</h2>
        </div>
        <p>People argue about the definition because AGI lives on two axes: breadth (how many domains) and depth (how expert-level in each). Drag to place "today's frontier" and see the score.</p>

        <div className="spectrum">
          <div>
            <label>Breadth (domains) {breadth}</label>
            <input type="range" min="30" max="100" value={breadth} onChange={e => setBreadth(+e.target.value)} />
          </div>
          <div>
            <label>Depth (expertise) {depth}</label>
            <input type="range" min="30" max="100" value={depth} onChange={e => setDepth(+e.target.value)} />
          </div>
          <div className="agi-score">
            AGI proximity score: <strong>{agiScore}</strong>/100
            {agiScore > 85 && <span className="note"> — in the ballpark of many working definitions</span>}
          </div>
        </div>
      </section>

      {/* What changes */}
      <section className="section">
        <div className="section-header">
          <Users size={22} />
          <h2>5. What Actually Changes at AGI</h2>
        </div>
        <div className="changes-grid">
          <div className="change-card">
            <h4>Before (Current AI)</h4>
            <ul>
              <li>Powerful but narrow specialists</li>
              <li>Requires heavy human scaffolding</li>
              <li>Plateaus without new data/compute</li>
            </ul>
          </div>
          <div className="change-card">
            <h4>At AGI</h4>
            <ul>
              <li>One system can do research, engineering, strategy</li>
              <li>Can run long autonomous projects</li>
              <li>Can improve its own algorithms</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="footer">
        <div>AGI is the next phase transition in intelligence, not just another model release • React + Vite • GitHub Pages</div>
        <div>leonlzd120000/explain</div>
      </div>
    </main>
  );
}

function GitPage() {
  // Live commit graph + HEAD
  const [commits, setCommits] = useState([
    { id: 'a1b2c3', msg: 'Initial commit', parents: [], ts: '2025-01-01' },
    { id: 'd4e5f6', msg: 'Add README', parents: ['a1b2c3'], ts: '2025-01-02' },
    { id: 'g7h8i9', msg: 'Fix bug in parser', parents: ['d4e5f6'], ts: '2025-01-03' },
  ]);
  const [head, setHead] = useState('g7h8i9');
  const [branches, setBranches] = useState({ main: 'g7h8i9' });
  const [currentBranch, setCurrentBranch] = useState('main');

  // Staging area simulator
  const [workingDir, setWorkingDir] = useState({
    'README.md': '# Project\n\nHello world',
    'src/app.js': 'console.log("hello")',
    'package.json': '{ "name": "demo" }'
  });
  const [staged, setStaged] = useState({});
  const [commitMsg, setCommitMsg] = useState('Update files');

  // For merge / conflict demo
  const [showConflict, setShowConflict] = useState(false);
  const [conflictResolution, setConflictResolution] = useState(null);

  // Reflog (time travel)
  const [reflog, setReflog] = useState([
    { action: 'commit', id: 'g7h8i9', msg: 'Fix bug in parser' },
    { action: 'commit', id: 'd4e5f6', msg: 'Add README' },
    { action: 'commit', id: 'a1b2c3', msg: 'Initial commit' },
  ]);

  const currentHeadCommit = commits.find(c => c.id === head) || commits[commits.length-1];
  const graph = [...commits].reverse(); // newest at top for visual

  const editFile = (filename) => {
    const current = workingDir[filename] || '';
    const newContent = current + '\n// edit at ' + new Date().toLocaleTimeString();
    setWorkingDir(prev => ({ ...prev, [filename]: newContent }));
  };

  const stageFile = (filename) => {
    const content = workingDir[filename];
    setStaged(prev => ({ ...prev, [filename]: content }));
  };

  const unstageFile = (filename) => {
    setStaged(prev => {
      const copy = { ...prev };
      delete copy[filename];
      return copy;
    });
  };

  const doCommit = () => {
    if (Object.keys(staged).length === 0) return;
    const newId = Math.random().toString(16).slice(2, 8);
    const newCommit = {
      id: newId,
      msg: commitMsg || 'Update files',
      parents: [head],
      ts: new Date().toISOString().split('T')[0]
    };
    setCommits(prev => [...prev, newCommit]);
    setHead(newId);
    setBranches(prev => ({ ...prev, [currentBranch]: newId }));
    setReflog(prev => [{ action: 'commit', id: newId, msg: newCommit.msg }, ...prev]);
    setStaged({});
    setCommitMsg('Update files');
  };

  const createBranch = (name) => {
    if (branches[name]) return;
    setBranches(prev => ({ ...prev, [name]: head }));
  };

  const checkout = (branchName) => {
    const target = branches[branchName];
    if (!target) return;
    setCurrentBranch(branchName);
    setHead(target);
  };

  const simulateMerge = () => {
    // Simple conflict demo: create a feature branch with conflicting edit on same file
    const featureHead = head;
    const conflictFile = 'src/app.js';
    
    // Simulate feature branch change
    const featureContent = (workingDir[conflictFile] || '') + '\n// feature: add feature X';
    
    // Current (main) also edited
    const mainContent = (workingDir[conflictFile] || '') + '\n// main: add logging';
    
    setShowConflict(true);
    setWorkingDir(prev => ({ ...prev, [conflictFile]: mainContent })); // pretend main has change
    setStaged(prev => ({ ...prev, [conflictFile]: mainContent }));
    
    // On merge click it will show resolver
  };

  const resolveConflict = (choice) => {
    const conflictFile = 'src/app.js';
    let resolvedContent = '';
    if (choice === 'ours') resolvedContent = workingDir[conflictFile] || '';
    else resolvedContent = (workingDir[conflictFile] || '') + '\n// resolved with theirs';
    
    setWorkingDir(prev => ({ ...prev, [conflictFile]: resolvedContent }));
    setStaged(prev => ({ ...prev, [conflictFile]: resolvedContent }));
    setShowConflict(false);
    setConflictResolution(choice);
    
    // Auto-commit the merge
    const newId = Math.random().toString(16).slice(2, 8);
    const newCommit = { id: newId, msg: `Merge branch 'feature'`, parents: [head, 'feature-sim'], ts: new Date().toISOString().split('T')[0] };
    setCommits(prev => [...prev, newCommit]);
    setHead(newId);
    setReflog(prev => [{ action: 'merge', id: newId, msg: 'Merge branch feature' }, ...prev]);
  };

  const resetToReflog = (entryId) => {
    setHead(entryId);
    setReflog(prev => [{ action: 'reset --hard', id: entryId, msg: 'Hard reset to ' + entryId }, ...prev]);
  };

  const gitCatFile = (commitId) => {
    const c = commits.find(c => c.id === commitId);
    if (!c) return 'object not found';
    return `commit ${commitId}\nAuthor: Demo User\nDate: ${c.ts}\n\n    ${c.msg}\n\nparents: ${c.parents.join(', ') || 'none'}`;
  };

  // Live content-addressable hash demo — the heart of how .git actually stores everything
  const [blobContent, setBlobContent] = useState('print("hello from git internals")');
  const [storedBlobs, setStoredBlobs] = useState([
    { hash: 'e69de29bb2d1d6434b8b29ae775ad8c2e48c5391', type: 'blob', content: 'hello world example' }
  ]);

  const computeGitHash = (content) => {
    // Educational simulation of Git's content-addressable core.
    // Real git: SHA-1( "blob " + len + "\0" + content ). Here we guarantee: identical content → identical "address".
    const header = `blob ${content.length}\0`;
    const full = header + content;
    let h = 2166136261;
    for (let i = 0; i < full.length; i++) {
      h ^= full.charCodeAt(i);
      h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
    }
    const hex = (h >>> 0).toString(16).padStart(8, '0');
    return (hex + hex + hex + hex + hex).slice(0, 40); // 40-char fake SHA-1 look
  };

  const storeBlob = () => {
    const h = computeGitHash(blobContent);
    const exists = storedBlobs.some(o => o.hash === h);
    if (!exists) {
      setStoredBlobs(prev => [...prev, { hash: h, type: 'blob', content: blobContent }]);
    }
  };

  const inspectObject = (obj) => {
    if (obj.type === 'commit') {
      alert(gitCatFile(obj.hash));
    } else {
      alert(`blob ${obj.hash}\n\n${obj.content}`);
    }
  };

  useEffect(() => {
    document.title = 'How Git Works • Explain to me';
  }, []);

  return (
    <main className="shell git-page">
      <nav className="project-nav" aria-label="Project navigation">
        <a href="#/" className="nav-link">All projects</a>
        <a href="#/agi" className="nav-link">AGI</a>
        <a href="https://github.com/leonlzd120000/explain" className="nav-link">
          Repository <ExternalLink size={14} />
        </a>
      </nav>

      {/* Hero */}
      <section className="hero git-hero">
        <div>
          <p className="eyebrow">Distributed Version Control</p>
          <h1>How Git<br />Works</h1>
          <p className="lede">
            Git is a content-addressable filesystem with a DAG of commits, an index (staging area), and lightweight branches. Everything is a hash. History is immutable. The .git directory is the entire repository.
          </p>
          <div className="actions">
            <a href="#graph" className="button button--primary">
              Play with the commit graph <GitBranch size={18} />
            </a>
            <a href="#staging" className="button">
              Stage &amp; commit
            </a>
          </div>
        </div>
        <div className="git-visual">
          <div className="mini-graph">
            {graph.slice(0, 4).map((c, i) => (
              <div key={i} className={`mini-commit ${c.id === head ? 'head' : ''}`}>
                {c.id.slice(0,6)} <span className="mini-msg">{c.msg}</span>
              </div>
            ))}
          </div>
          <div className="visual-label">A tiny slice of the commit DAG. HEAD points at the tip of the current branch.</div>
        </div>
      </section>

      {/* 1. Commit Graph */}
      <section className="section" id="graph">
        <div className="section-header">
          <GitCommit size={22} />
          <h2>1. The Commit Graph (DAG)</h2>
        </div>
        <p>Commits are snapshots. Each commit points to its parent(s). The graph is append-only. HEAD is just a pointer.</p>

        <div className="commit-graph">
          {graph.map((c, idx) => (
            <div key={c.id} className={`commit-node ${c.id === head ? 'is-head' : ''}`}>
              <div className="commit-id">{c.id}</div>
              <div className="commit-msg">{c.msg}</div>
              <div className="commit-meta">{c.ts} • parents: {c.parents.length ? c.parents.join(', ') : 'root'}</div>
              {c.id === head && <div className="head-badge">HEAD</div>}
            </div>
          ))}
          <button className="button button--primary" onClick={() => {
            const newId = Math.random().toString(16).slice(2, 8);
            const newC = { id: newId, msg: 'New commit from graph', parents: [head], ts: new Date().toISOString().split('T')[0] };
            setCommits(prev => [...prev, newC]);
            setHead(newId);
            setBranches(prev => ({ ...prev, [currentBranch]: newId }));
            setReflog(prev => [{ action: 'commit', id: newId, msg: newC.msg }, ...prev]);
          }}>
            <Plus size={16} /> New commit on current HEAD
          </button>
        </div>
      </section>

      {/* 2. Staging Area */}
      <section className="section" id="staging">
        <div className="section-header">
          <Folder size={22} />
          <h2>2. The Staging Area (Index)</h2>
        </div>
        <p>The index is the "proposed next commit". Working directory changes are not recorded until you `git add` them.</p>

        <div className="staging-area">
          <div className="pane">
            <h4>Working Directory</h4>
            {Object.keys(workingDir).map(f => (
              <div key={f} className="file-row">
                <span><FileText size={14} /> {f}</span>
                <button onClick={() => editFile(f)} className="small-btn">Edit</button>
                <button onClick={() => stageFile(f)} className="small-btn primary">Stage</button>
              </div>
            ))}
          </div>
          <div className="pane">
            <h4>Staging Area (Index)</h4>
            {Object.keys(staged).length === 0 && <div className="empty">Nothing staged yet</div>}
            {Object.keys(staged).map(f => (
              <div key={f} className="file-row staged">
                <span>{f}</span>
                <button onClick={() => unstageFile(f)} className="small-btn">Unstage</button>
              </div>
            ))}
            <div className="commit-box">
              <input value={commitMsg} onChange={e => setCommitMsg(e.target.value)} placeholder="Commit message" />
              <button className="button button--primary" onClick={doCommit} disabled={Object.keys(staged).length === 0}>
                <GitCommit size={16} /> Commit
              </button>
            </div>
          </div>
          <div className="pane">
            <h4>History (current branch)</h4>
            <div className="history-list">
              {commits.slice().reverse().slice(0, 5).map(c => (
                <div key={c.id} className="hist-item">{c.id.slice(0,6)} — {c.msg}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Branches & Merge */}
      <section className="section">
        <div className="section-header">
          <GitBranch size={22} />
          <h2>3. Branches &amp; Merge (with conflict)</h2>
        </div>
        <p>Branches are just movable pointers to commits. Merge creates a merge commit with two parents.</p>

        <div className="branch-sim">
          <div className="branch-list">
            <strong>Branches:</strong>
            {Object.keys(branches).map(b => (
              <button key={b} className={`branch-btn ${b === currentBranch ? 'active' : ''}`} onClick={() => checkout(b)}>
                {b} {b === currentBranch ? '(current)' : ''}
              </button>
            ))}
            <button className="small-btn" onClick={() => createBranch('feature')}>+ Create "feature"</button>
          </div>
          <div className="merge-area">
            <button className="button" onClick={simulateMerge}>
              <GitMerge size={16} /> Simulate merge (will create conflict on src/app.js)
            </button>
            {showConflict && (
              <div className="conflict-resolver">
                <div className="conflict-header">Merge conflict in src/app.js</div>
                <div className="conflict-actions">
                  <button onClick={() => resolveConflict('ours')}>Accept "ours" (main)</button>
                  <button onClick={() => resolveConflict('theirs')}>Accept "theirs" (feature)</button>
                </div>
              </div>
            )}
            {conflictResolution && <div className="resolved">Conflict resolved with {conflictResolution}. Merge commit created.</div>}
          </div>
        </div>
      </section>

      {/* 4. Reflog & Time Travel */}
      <section className="section">
        <div className="section-header">
          <RotateCcw size={22} />
          <h2>4. Reflog — Time Travel</h2>
        </div>
        <p>Git keeps a log of every movement of HEAD. Even "lost" commits can be recovered.</p>

        <div className="reflog">
          {reflog.map((entry, i) => (
            <div key={i} className="reflog-entry">
              <span>{entry.action} → {entry.id.slice(0,6)}</span>
              <span className="msg">{entry.msg}</span>
              <button className="small-btn" onClick={() => resetToReflog(entry.id)}>git reset --hard {entry.id.slice(0,6)}</button>
            </div>
          ))}
        </div>
      </section>

      {/* 5. .git Internals */}
      <section className="section">
        <div className="section-header">
          <Folder size={22} />
          <h2>5. Inside .git (Content-Addressable Store)</h2>
        </div>
        <p>Objects are stored by SHA-1 hash. Blobs (file contents), Trees (directory listings), Commits. Nothing is named by filename — everything is content-addressed.</p>

        <div className="internals">
          <div className="object-list">
            <h4>Recent objects</h4>
            {commits.slice(-4).map(c => (
              <div key={c.id} className="obj" onClick={() => alert(gitCatFile(c.id))}>
                commit {c.id} — click to cat-file
              </div>
            ))}
          </div>
          <div className="note">In real Git: <code>git cat-file -p &lt;hash&gt;</code> shows the object. Everything is immutable and deduplicated by hash.</div>

          {/* NEW: Live hash-object demo — signature interactive that makes the "content-addressable" idea click */}
          <div className="hash-demo">
            <h4>Live hash-object (the real magic)</h4>
            <p className="small">Edit the text below. The "address" (hash) is derived only from the bytes. Identical content always produces the identical hash — this is why Git can store any file once and never duplicate it again.</p>
            <textarea 
              value={blobContent} 
              onChange={e => setBlobContent(e.target.value)} 
              className="hash-input"
              rows={3}
              placeholder="Any file content..."
            />
            <div className="hash-row">
              <button className="button button--primary" onClick={storeBlob}>
                <Hash size={16} /> git hash-object -w
              </button>
              <div className="computed-hash">
                computed address: <code>{computeGitHash(blobContent).slice(0, 12)}…</code>
              </div>
            </div>
            <div className="stored-list">
              <strong>Objects currently "in .git/objects" (blobs + commits):</strong>
              {storedBlobs.map((o, i) => (
                <div key={'b'+i} className="obj" onClick={() => inspectObject(o)}>
                  {o.type} {o.hash.slice(0,12)} — click to cat-file
                </div>
              ))}
              {commits.slice(-2).map(c => (
                <div key={c.id} className="obj" onClick={() => alert(gitCatFile(c.id))}>
                  commit {c.id} — click
                </div>
              ))}
            </div>
            <div className="note" style={{marginTop: 8, fontSize: '0.75rem'}}>Try typing the exact same content twice — the hash stays identical and it won't duplicate in the list. Change one character → brand new address.</div>
          </div>
        </div>
      </section>

      <div className="footer">
        <div>Git turns your filesystem into an append-only, content-addressed, distributed database • React + Vite • GitHub Pages</div>
        <div>leonlzd120000/explain</div>
      </div>
    </main>
  );
}

function App() {
  // Robust hash routing (handles GitHub Pages subpath, query strings, and direct #/git loads)
  const getCurrentHash = () => (window.location.hash || '#/').split('?')[0] || '#/';
  const [route, setRoute] = useState(getCurrentHash());

  useEffect(() => {
    const handleHashChange = () => setRoute(getCurrentHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update title for hub
  useEffect(() => {
    if (route === '#/') {
      document.title = 'Explain to me | Generated Explainers';
    } else if (route === '#/large-language-models') {
      document.title = 'How Large Language Models Work • Explain to me';
    } else if (route === '#/llm-context') {
      document.title = 'How Context Works in LLMs • Explain to me';
    } else if (route === '#/agi') {
      document.title = 'The Road to AGI • Explain to me';
    } else if (route === '#/git') {
      document.title = 'How Git Works • Explain to me';
    }
  }, [route]);

  if (route === '#/large-language-models') {
    return <LlmPage />;
  }
  if (route === '#/llm-context') {
    return <ContextPage />;
  }
  if (route === '#/agi') {
    return <AgiPage />;
  }
  if (route === '#/git') {
    return <GitPage />;
  }

  return <ProjectHub />;
}

createRoot(document.getElementById('root')).render(<App />);