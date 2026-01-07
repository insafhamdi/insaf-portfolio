
import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Cpu, 
  Globe, 
  Award, 
  ArrowRight,
  MapPin,
  ExternalLink,
  Code2,
  Quote,
  ShieldCheck,
  Zap,
  Camera,
  BookOpen,
  Database,
  Layers,
  Settings,
  BarChart3,
  FileSearch,
  Bot
} from 'lucide-react';
import Navbar from './components/Navbar';
import AIChat from './components/AIChat';
import { EXPERIENCES, SKILLS, RECOMMENDATIONS, MILESTONES } from './constants';

const App: React.FC = () => {
  // Mapping categories to icons for a more dynamic feel
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Backend & APIs": return <Terminal size={18} className="text-brand-400" />;
      case "Databases": return <Database size={18} className="text-brand-400" />;
      case "AI & ML": return <Bot size={18} className="text-brand-400" />;
      case "DevOps": return <Settings size={18} className="text-brand-400" />;
      case "Document Processing": return <FileSearch size={18} className="text-brand-400" />;
      case "Agentic Frameworks": return <Layers size={18} className="text-brand-400" />;
      case "Automation & Workflows": return <Zap size={18} className="text-brand-400" />;
      case "Data & Analytics": return <BarChart3 size={18} className="text-brand-400" />;
      default: return <Code2 size={18} className="text-brand-400" />;
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-500/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="blob top-[-100px] left-[-100px] opacity-40 animate-pulse"></div>
        <div className="blob bottom-[-100px] right-[-100px] opacity-30 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-[10px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-ping"></span>
                  Currently @ Coficert
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-wider">
                  <BookOpen size={12} />
                  Open to PhD Opportunities
                </div>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-tight">
                  Data Science <br />
                  <span className="gradient-text">& AI Engineering.</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                  I'm <span className="text-white font-medium">Insaf Hamdi</span>, a Data Science Engineer specializing in <span className="text-brand-400 font-semibold">FinTech automation</span> and <span className="text-brand-400 font-semibold">NLP Research</span>.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-white text-slate-950 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-200 transition-all transform hover:-translate-y-1 shadow-xl shadow-white/5"
                >
                  Contact Me <ArrowRight size={20} />
                </a>
                <div className="flex items-center gap-3">
                  {[
                    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/insaf-hamdi-806351251/" },
                    { icon: <Github size={20} />, href: "https://github.com/insafhamdi" },
                    { icon: <Mail size={20} />, href: "mailto:insaf.hamdi@essai.ucar.tn" }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href}
                      target="_blank"
                      className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800/50 border border-white/5 text-slate-400 hover:text-white hover:border-white/20 hover:bg-slate-800 transition-all transform hover:-translate-y-1"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="relative z-10 w-full aspect-square glass rounded-[3rem] p-12 flex flex-col justify-center items-center gap-8 float-animation">
                <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-brand-500 to-indigo-500 flex items-center justify-center text-6xl font-display font-bold text-white shadow-2xl shadow-brand-500/20">
                  IH
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-white">18/20 Thesis Honor</div>
                  <div className="text-slate-400 text-sm uppercase tracking-widest font-bold">Rare Academic Mention • Tunisia</div>
                </div>
                <div className="grid grid-cols-3 gap-4 w-full text-center">
                  <div className="p-4 glass rounded-2xl">
                    <div className="text-xl font-bold text-brand-400">IEEE</div>
                    <div className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Presenter</div>
                  </div>
                  <div className="p-4 glass rounded-2xl">
                    <div className="text-xl font-bold text-brand-400">A2SV</div>
                    <div className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Honors Amb.</div>
                  </div>
                  <div className="p-4 glass rounded-2xl">
                    <div className="text-xl font-bold text-brand-400">PhD</div>
                    <div className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Candidate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative bg-slate-900/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-white mb-16">The Career Loop</h2>
          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="group glass p-8 rounded-3xl border-white/5 hover:border-brand-500/20 transition-all">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/4">
                    <div className="text-2xl font-bold text-white mb-1 group-hover:text-brand-400 transition-colors">{exp.role}</div>
                    <div className="text-brand-400 font-semibold mb-4">{exp.company}</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-500 text-sm"><Terminal size={14} /> {exp.period}</div>
                      <div className="flex items-center gap-2 text-slate-500 text-sm"><MapPin size={14} /> {exp.location}</div>
                    </div>
                  </div>
                  <div className="lg:w-3/4 space-y-6">
                    <ul className="space-y-3">
                      {exp.description.map((item, j) => (
                        <li key={j} className="text-slate-400 flex gap-3 text-lg leading-relaxed">
                          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, k) => (
                        <span key={k} className="px-3 py-1 rounded-full bg-slate-800/50 text-slate-300 text-[10px] font-bold uppercase tracking-wider border border-white/5">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Section - Redesigned for Cohesion */}
      <section id="skills" className="py-32 relative overflow-hidden bg-slate-900/40">
        <div className="blob top-[20%] right-[-10%] opacity-20 w-[600px] h-[600px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-20 space-y-4">
            <h2 className="text-xs font-bold text-brand-400 uppercase tracking-[0.4em]">Core Stack</h2>
            <h3 className="text-4xl font-display font-bold text-white">Tools, Frameworks & Infrastructure</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILLS.map((cat, i) => (
              <div key={i} className="glass p-8 rounded-3xl border-white/5 hover:border-brand-500/30 transition-all group">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{cat.category}</h4>
                </div>
                <ul className="space-y-4">
                  {cat.items.map((skill, j) => (
                    <li key={j} className="text-white text-lg font-medium tracking-tight flex items-center gap-2 hover:text-brand-400 transition-colors cursor-default">
                      <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 italic text-sm tracking-wide text-center md:text-left">
              ...and many more. This is just a curated selection—I adapt quickly to new tools and frameworks as projects demand.
            </p>
            <div className="flex gap-4">
               <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
               <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse delay-75"></span>
               <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-150"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="glass p-12 rounded-[3rem] border-brand-500/20 relative overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="text-brand-400 font-bold uppercase tracking-widest flex items-center gap-2">
                  <Award size={18} /> Global Presence
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                  Athens 2025: <br /> <span className="text-brand-400 underline decoration-brand-500/30 underline-offset-8">IEEE ICTAI</span>.
                </h2>
                <p className="text-xl text-slate-400 leading-relaxed">
                  Presented "An Automatic Scoring Method for Responses to the Hayling Test". A fusion of neuropsychology and deep NLP, achieving a 21% acceptance rate.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="https://hal.science/hal-05355459" target="_blank" className="px-6 py-3 bg-brand-500 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-brand-600 transition-all">
                    Paper link <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <div className="bg-slate-900 aspect-[4/3] rounded-2xl p-8 border border-white/10 shadow-2xl flex flex-col justify-center text-center space-y-4">
                <div className="text-6xl font-display font-black text-white">18/20</div>
                <div className="text-brand-400 font-bold tracking-widest uppercase">Thesis Distinction</div>
                <div className="text-slate-500 text-sm">"Rare mention given in Tunisia"</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Gallery */}
      <section id="milestones" className="py-24 bg-slate-900/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-display font-bold text-white flex items-center justify-center gap-3">
              <Camera className="text-brand-400" /> Milestones in Frames
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto tracking-wide">Capturing moments of growth and celebration.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MILESTONES.map((item, i) => (
              <div key={i} className="group relative aspect-[3/4] rounded-3xl overflow-hidden glass border-white/5 cursor-pointer">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="inline-block px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-400 text-[10px] font-bold uppercase tracking-widest">
                    {item.tag}
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Peer Voice */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-white mb-12 flex items-center gap-3">
            <Quote className="text-brand-500" /> Mentor Voice
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RECOMMENDATIONS.map((rec, i) => (
              <div key={i} className="glass p-10 rounded-3xl border-white/5 flex flex-col justify-between">
                <p className="text-slate-300 text-lg leading-relaxed italic mb-8">"{rec.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-xl font-bold text-brand-400">{rec.author.charAt(0)}</div>
                  <div>
                    <div className="text-white font-bold">{rec.author}</div>
                    <div className="text-slate-500 text-sm">{rec.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass p-16 rounded-[4rem] border-brand-500/20 text-center space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest">
              Research & PhD Opportunities
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white tracking-tight">Let's build the future.</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Open to <span className="text-white font-semibold">PhD opportunities</span>, research collaborations, or engineering insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:insaf.hamdi@essai.ucar.tn" className="px-12 py-5 bg-brand-500 text-white rounded-2xl font-bold text-xl hover:bg-brand-600 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-brand-500/20">
                <Mail size={24} /> Say Hello
              </a>
              <a href="https://www.linkedin.com/in/insaf-hamdi-806351251/" target="_blank" className="px-12 py-5 glass text-white rounded-2xl font-bold text-xl border-white/10 hover:bg-slate-800 transition-all flex items-center justify-center gap-3">
                <Linkedin size={24} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 text-center text-slate-600 text-xs tracking-widest uppercase font-semibold">
          © {new Date().getFullYear()} Insaf Hamdi. Engineered for Excellence & Research.
        </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default App;
