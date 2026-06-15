import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Zap, Brain, Layers, Target, Sparkles, ExternalLink, ScrollText, Database, Clock, AlertTriangle, SlidersHorizontal, RefreshCw, Mountain, Cpu, TrendingUp, Users, Lightbulb, GitBranch, GitCommit, GitMerge, GitPullRequest, Folder, FileText, RotateCcw, Plus, Minus, Hash, Factory, Shield, Timer, Repeat, Play, Bot, Settings, Link } from 'lucide-react';
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
    summary: 'What "general intelligence" really means, how scaling + reasoning gets us closer, the remaining hard problems, and interactive tools to explore the horizon.',
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
  {
    id: 'openai',
    title: 'How OpenAI Works',
    summary: 'The full stack from pre-training clusters to post-training alignment, test-time reasoning (o-series), inference serving, and the ChatGPT flywheel that funds it all.',
    href: '#/openai',
    tag: 'AI company',
  },
  {
    id: 'hermes-agent',
    title: 'How Hermes Agent Works',
    summary: 'The autonomous tool-using loop, skills as self-improving persistent procedures, sub-agent delegation, cross-session memory, profiles, and the multi-platform gateway that lets one agent live everywhere.',
    href: '#/hermes-agent',
    tag: 'AI agents',
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

function HermesAgentPage() {
  const [goal, setGoal] = useState("Research and install a skill that auto-runs git status before any terminal edit");
  const [skills, setSkills] = useState([
    { id: 'core', name: 'Core Loop', active: true },
    { id: 'git', name: 'Git Expert', active: true },
    { id: 'file', name: 'File Ops', active: true },
  ]);
  const [trace, setTrace] = useState([]);
  const [memory, setMemory] = useState({ profile: 'fe', turns: 0, lastAction: 'init' });
  const [turn, setTurn] = useState(0);

  const runTurn = () => {
    const t = turn + 1;
    const newTrace = [...trace];
    newTrace.push({ type: 'thought', content: "Turn " + t + ": Planning how to achieve \"" + goal.slice(0, 50) + "...\" with loaded skills" });
    newTrace.push({ type: 'tool', content: 'terminal: git status --porcelain' });
    newTrace.push({ type: 'result', content: 'Working tree clean. No uncommitted changes.' });
    newTrace.push({ type: 'memory', content: 'memory.write: last_git_check = clean, confidence high' });
    newTrace.push({ type: 'output', content: 'Agent: Goal achievable. No blockers. Ready for next action or clarification.' });
    setTrace(newTrace);
    setTurn(t);
    setMemory(m => ({ ...m, turns: t, lastAction: 'git-check' }));
  };

  const installSkill = () => {
    const newSkill = { id: 'delegation', name: 'Delegation', active: true };
    if (!skills.find(s => s.id === newSkill.id)) {
      setSkills(prev => [...prev, newSkill]);
      setTrace(prev => [...prev, { type: 'skill', content: 'Skill "Delegation" installed. Future turns will consider spawning leaf agents for parallel work.' }]);
    }
  };

  const spawnSubagent = () => {
    setTrace(prev => [...prev, { type: 'delegation', content: 'Delegated to leaf agent (role=leaf): "scan for similar skills in ~/.hermes". Result merged: 2 new patterns saved to memory.' }]);
    setMemory(m => ({ ...m, subagents: (m.subagents || 0) + 1 }));
  };

  const resetDemo = () => {
    setTrace([]);
    setTurn(0);
    setMemory({ profile: 'fe', turns: 0, lastAction: 'init' });
  };

  useEffect(() => {
    document.title = 'How Hermes Agent Works • Explain to me';
  }, []);

  return (
    <main className="shell hermes-page">
      <nav className="project-nav" aria-label="Project navigation">
        <a href="#/" className="nav-link">All projects</a>
        <a href="#/git" className="nav-link">Git</a>
        <a href="#/agi" className="nav-link">AGI</a>
        <a href="https://github.com/leonlzd120000/explain" className="nav-link">
          Repository <ExternalLink size={14} />
        </a>
      </nav>

      <section className="hero hermes-hero">
        <div>
          <p className="eyebrow">Self-Improving Agent</p>
          <h1>How Hermes<br />Agent Works</h1>
          <p className="lede">
            An autonomous agent that lives in your terminal and chat apps. It does not just answer — it uses tools, loads skills that persist across sessions, delegates to sub-agents, and gets better the more you use it.
          </p>
          <div className="actions">
            <a href="#loop" className="button button--primary">
              Play the live loop <Repeat size={18} />
            </a>
            <a href="#skills" className="button">
              See how skills work
            </a>
          </div>
        </div>
        <div className="hermes-visual">
          <div className="loop-diagram">
            <div className="loop-step">Prompt + Skills + Memory</div>
            <div className="arrow">→</div>
            <div className="loop-step">LLM + Tool Schemas</div>
            <div className="arrow">→</div>
            <div className="loop-step">Dispatch &amp; Execute</div>
            <div className="arrow">→</div>
            <div className="loop-step">Update Memory + Trace</div>
            <div className="loop-step" style={{background: 'var(--accent)', color: '#0a0b0f'}}>Repeat</div>
          </div>
          <div style={{fontSize: '0.75rem', color: 'var(--muted)', marginTop: 12}}>The loop that makes the agent improve itself over time.</div>
        </div>
      </section>

      <section className="section" id="loop">
        <div className="section-header">
          <Repeat size={22} />
          <h2>1. The Live Agent Loop (Signature Interactive)</h2>
        </div>
        <p>Watch the core loop in action. Edit the goal, run turns, install skills, and delegate. Every step mutates the trace and memory exactly like the real system.</p>

        <div className="loop-sim">
          <div className="goal-row">
            <input 
              value={goal} 
              onChange={(e) => setGoal(e.target.value)} 
              placeholder="Describe a goal for the agent..." 
            />
            <button className="button button--primary" onClick={runTurn}>
              <Play size={16} /> Run Turn
            </button>
            <button className="button" onClick={installSkill}>Install "Delegation" Skill</button>
            <button className="button" onClick={spawnSubagent}>Spawn Subagent</button>
            <button className="button" onClick={resetDemo}>Reset</button>
          </div>

          <div className="skills-row">
            {skills.map(s => (
              <span key={s.id} className={"skill-chip " + (s.active ? 'active' : '')}>{s.name}</span>
            ))}
          </div>

          <div className="trace">
            {trace.length === 0 && <div style={{color:'var(--muted)', fontSize:'0.9rem'}}>Trace is empty. Click "Run Turn" to start the agent thinking.</div>}
            {trace.map((step, i) => (
              <div key={i} className={"trace-step " + step.type}>
                <span className="step-label">{step.type}</span> {step.content}
              </div>
            ))}
          </div>

          <div className="memory-panel">
            <strong>Persistent Memory (cross-session)</strong>
            <pre>{JSON.stringify(memory, null, 2)}</pre>
            <div style={{fontSize:'0.75rem', color:'var(--muted)'}}>This state survives /reset and new sessions when using the memory provider.</div>
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-header">
          <Settings size={22} />
          <h2>2. Skills — The Self-Improving Layer</h2>
        </div>
        <p>When the agent (or you) solves a hard problem, it can save the procedure as a reusable skill. Skills are loaded automatically on future sessions. This is how Hermes gets better at *your* specific work over time.</p>
        <div className="cards">
          <div className="card">
            <h3>Authoring</h3>
            <p>After a successful complex task, the agent offers to save the steps as SKILL.md. You can edit and it becomes a first-class tool.</p>
          </div>
          <div className="card">
            <h3>Loading</h3>
            <p>Skills are injected into the system prompt and tool selection. The agent "remembers" how to do things it has done before.</p>
          </div>
          <div className="card">
            <h3>Curator</h3>
            <p>Background process prunes stale skills, pins important ones, and keeps a backup tar.gz so nothing is lost.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <Users size={22} />
          <h2>3. Delegation &amp; Sub-Agents</h2>
        </div>
        <p>Hermes can spawn fully independent child agents (leaf or orchestrator roles) for parallel work. The parent waits for summaries and merges results. This is how complex, long-running missions happen without blocking your chat.</p>
        <div className="cards">
          <div className="card">
            <h3>Leaf Agents</h3>
            <p>Do one focused job and return a summary. Cannot spawn further.</p>
          </div>
          <div className="card">
            <h3>Orchestrator</h3>
            <p>Can spawn its own workers. Bounded depth to prevent runaway.</p>
          </div>
          <div className="card">
            <h3>Worktree Mode</h3>
            <p>Each sub-agent can run in an isolated git worktree so parallel edits do not conflict.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <Database size={22} />
          <h2>4. Memory &amp; Profiles</h2>
        </div>
        <p>Memory is pluggable (built-in SQLite FTS, Honcho, Mem0...). Profiles give you completely isolated configs, skills, and memory for different projects or "personas".</p>
        <div className="stats">
          <div className="stat">
            <div className="stat-value">Cross-session</div>
            <div className="stat-label">User preferences, environment facts, learned workflows</div>
          </div>
          <div className="stat">
            <div className="stat-value">Profiles</div>
            <div className="stat-label">~/.hermes/profiles/&lt;name&gt;/ for full isolation</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <Link size={22} />
          <h2>5. The Gateway — One Agent, Everywhere</h2>
        </div>
        <p>The same core agent runs on Telegram, Discord, Slack, email, SMS, and as a local CLI. The gateway translates platform messages into the same tool-using loop.</p>
        <div className="cards">
          <div className="card">
            <h3>Platforms</h3>
            <p>Telegram DMs &amp; topics, Discord, Slack, WhatsApp, iMessage, email, webhooks, and more.</p>
          </div>
          <div className="card">
            <h3>Tools stay the same</h3>
            <p>Whether the message came from Telegram or your terminal, the agent has the same file, terminal, web, and skill tools.</p>
          </div>
          <div className="card">
            <h3>Cron &amp; Webhooks</h3>
            <p>Scheduled jobs and incoming HTTP events drive the same agent loop in the background.</p>
          </div>
        </div>
      </section>

      <div className="footer">
        <div>Hermes turns chat into a persistent, skill-learning, multi-platform autonomous teammate • React + Vite • GitHub Pages</div>
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
    } else if (route === '#/openai') {
      document.title = 'How OpenAI Works • Explain to me';
    } else if (route === '#/hermes-agent') {
      document.title = 'How Hermes Agent Works • Explain to me';
    }
  }, [route]);

  if (route === '#/hermes-agent') {
    return <HermesAgentPage />;
  }

  return <ProjectHub />;
}

createRoot(document.getElementById('root')).render(<App />);
