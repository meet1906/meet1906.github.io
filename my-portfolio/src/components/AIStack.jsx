import { useState, useEffect } from 'react';
import FadeIn from './FadeIn';

const WORKFLOW = [
  {
    phase: 'Research',
    color: 'cyan',
    icon: '🔍',
    tools: [
      { name: 'Perplexity', desc: 'Deep research & source synthesis', icon: '🔮' },
      { name: 'Gemini', desc: 'Analysis, reasoning & ideation', icon: '✨' },
    ],
  },
  {
    phase: 'Plan',
    color: 'blue',
    icon: '📋',
    tools: [
      { name: 'Notion AI', desc: 'Docs, PRDs & project planning', icon: '📝' },
      { name: 'Claude', desc: 'Strategy, writing & analysis', icon: '🤖' },
    ],
  },
  {
    phase: 'Build',
    color: 'green',
    icon: '⚙️',
    tools: [
      { name: 'Claude Code', desc: 'Agentic coding — end to end', icon: '💻' },
    ],
  },
  {
    phase: 'Ship',
    color: 'orange',
    icon: '🚀',
    tools: [
      { name: 'GitHub', desc: 'Version control & CI/CD', icon: '🐙' },
      { name: 'Vercel', desc: 'Deploy in seconds', icon: '▲' },
    ],
  },
  {
    phase: 'Market',
    color: 'pink',
    icon: '📣',
    tools: [
      { name: 'Claude Cowork', desc: 'Content generation & copywriting', icon: '✍️' },
      { name: 'RainbowFM', desc: 'AI-powered video editing', icon: '🌈' },
      { name: 'OpenCut', desc: 'Fast video cuts & reels', icon: '🎬' },
      { name: 'Meta', desc: 'Content distribution', icon: '📱' },
    ],
  },
];

const colorMap = {
  cyan:   { border: 'border-cyan-500/40',   glow: 'shadow-cyan-500/20',   text: 'text-cyan-400',   bg: 'bg-cyan-500/10',   dot: 'bg-cyan-400',   line: 'from-cyan-500' },
  purple: { border: 'border-purple-500/40', glow: 'shadow-purple-500/20', text: 'text-purple-400', bg: 'bg-purple-500/10', dot: 'bg-purple-400', line: 'from-purple-500' },
  blue:   { border: 'border-blue-500/40',   glow: 'shadow-blue-500/20',   text: 'text-blue-400',   bg: 'bg-blue-500/10',   dot: 'bg-blue-400',   line: 'from-blue-500' },
  green:  { border: 'border-green-500/40',  glow: 'shadow-green-500/20',  text: 'text-green-400',  bg: 'bg-green-500/10',  dot: 'bg-green-400',  line: 'from-green-500' },
  orange: { border: 'border-orange-500/40', glow: 'shadow-orange-500/20', text: 'text-orange-400', bg: 'bg-orange-500/10', dot: 'bg-orange-400', line: 'from-orange-500' },
  pink:   { border: 'border-pink-500/40',   glow: 'shadow-pink-500/20',   text: 'text-pink-400',   bg: 'bg-pink-500/10',   dot: 'bg-pink-400',   line: 'from-pink-500' },
};

const TERMINAL_LINES = [
  { delay: 0,    text: '$ claude "POC: compliance dashboard for SMEs"',         type: 'cmd' },
  { delay: 900,  text: '◆ Problem: SMEs lack visibility into compliance gaps',  type: 'info' },
  { delay: 1600, text: '◆ Target user: Ops lead, non-technical, time-poor',     type: 'info' },
  { delay: 2300, text: '◆ Core flow: upload doc → auto-check → risk score',    type: 'info' },
  { delay: 3000, text: '◆ Scoping POC: 1 flow, dummy data, no auth needed',    type: 'write' },
  { delay: 3700, text: '◆ Scaffolding: landing → upload → results screen',     type: 'write' },
  { delay: 4300, text: '◆ Deploying to Vercel for stakeholder review...',       type: 'write' },
  { delay: 5000, text: '◆ Preview URL ready — sharing with team ✓',            type: 'success' },
  { delay: 5600, text: '✓ POC live in 38 mins — idea to clickable prototype',  type: 'done' },
];

function Terminal() {
  const [visible, setVisible] = useState([]);
  const [started, setStarted] = useState(false);
  const [ref, inView] = [
    // manual inview to trigger once
    (() => { const r = { current: null }; return r; })(),
    false,
  ];

  const [termRef, setTermRef] = useState(null);
  const [termInView, setTermInView] = useState(false);

  useEffect(() => {
    if (!termRef) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTermInView(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(termRef);
    return () => obs.disconnect();
  }, [termRef]);

  useEffect(() => {
    if (!termInView || started) return;
    setStarted(true);
    TERMINAL_LINES.forEach((line) => {
      setTimeout(() => {
        setVisible((v) => [...v, line]);
      }, line.delay);
    });
  }, [termInView, started]);

  const typeColor = {
    cmd:     'text-white font-bold',
    info:    'text-gray-400',
    write:   'text-blue-400',
    success: 'text-green-400',
    done:    'text-cyan-300 font-semibold',
  };

  return (
    <div
      ref={setTermRef}
      className="bg-gray-950 rounded-xl border border-gray-800 overflow-hidden shadow-2xl font-mono text-sm"
    >
      {/* Terminal chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-800">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-gray-500">claude-code — my-portfolio</span>
      </div>
      {/* Terminal body */}
      <div className="p-5 space-y-1.5 min-h-[220px]">
        {visible.map((line, i) => (
          <div key={i} className={`${typeColor[line.type]} leading-relaxed`}>
            {line.text}
            {i === visible.length - 1 && visible.length < TERMINAL_LINES.length && (
              <span className="inline-block w-2 h-4 bg-white ml-1 animate-pulse align-middle" />
            )}
          </div>
        ))}
        {visible.length === 0 && (
          <span className="inline-block w-2 h-4 bg-white animate-pulse" />
        )}
      </div>
    </div>
  );
}

export default function AIStack() {
  return (
    <section id="ai-stack" className="py-24 px-4 bg-gray-950 relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-20">
            <p className="text-sm font-semibold tracking-widest text-cyan-400 uppercase mb-3">How I build</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Building with{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6" />
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              I don't just use AI tools — I build <span className="text-white font-medium">with</span> them as a core part of the stack.
              From research to shipped code, every phase is AI-augmented.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Workflow phases */}
          <div className="space-y-4">
            {WORKFLOW.map((phase, i) => {
              const c = colorMap[phase.color];
              return (
                <FadeIn key={phase.phase} delay={i * 80} direction="left">
                  <div className={`group border ${c.border} rounded-xl p-5 bg-gray-900/60 hover:bg-gray-900 hover:shadow-lg ${c.glow} transition-all duration-300 backdrop-blur-sm`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-7 h-7 rounded-full ${c.bg} flex items-center justify-center text-sm`}>
                        {phase.icon}
                      </div>
                      <span className={`text-xs font-bold tracking-widest uppercase ${c.text}`}>{phase.phase}</span>
                      <div className={`flex-1 h-px bg-gradient-to-r ${c.line} to-transparent opacity-30`} />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {phase.tools.map((tool) => (
                        <div
                          key={tool.name}
                          className="group/tool flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800/80 border border-gray-700/50 hover:border-gray-600 transition-colors cursor-default"
                        >
                          <span className="text-base">{tool.icon}</span>
                          <div>
                            <p className="text-xs font-semibold text-gray-200">{tool.name}</p>
                            <p className="text-xs text-gray-500">{tool.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Terminal + stats */}
          <div className="space-y-6">
            <FadeIn direction="right">
              <Terminal />
            </FadeIn>

            <FadeIn direction="right" delay={200}>
              <div className="p-5 bg-gray-900 rounded-xl border border-gray-800">
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "I treat AI as an assistant on the team. I prompt with intent and context, review with applying my skills, and ship with confidence."
                </p>
                <p className="text-gray-500 text-xs mt-3">— Meet Shah, on AI development</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
