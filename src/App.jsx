import { useState, useEffect } from 'react';
import {
  Moon, Sun, Download, Mail, Github, Linkedin, ExternalLink,
  Code, Database, Cloud, Box, Activity, Terminal, Cpu, Ship,
  Award, BookOpen, Briefcase, Zap, ChevronRight, Gamepad2,
  Trophy, Crosshair, Target, Sword, Mountain, Disc, Instagram, Camera
} from 'lucide-react';
import './index.css';
import resumePdf from './assets/Ashwath_Ram_Resume.pdf';
import NetworkBg from './NetworkBg';

function App() {
  const [theme, setTheme] = useState('devops');
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'personal' ? 'devops' : 'personal'));
  };

  const skills = [
    { name: 'AWS', icon: <Cloud size={20} /> },
    { name: 'Jenkins', icon: <Activity size={20} /> },
    { name: 'Docker', icon: <Box size={20} /> },
    { name: 'Terraform', icon: <Zap size={20} /> },
    { name: 'Linux', icon: <Terminal size={20} /> },
    { name: 'Python', icon: <Code size={20} /> },
    { name: 'MySQL', icon: <Database size={20} /> },
    { name: 'GCP (Basics)', icon: <Cloud size={20} /> },
    { name: 'Azure (Basics)', icon: <Cloud size={20} /> },
    { name: 'AI', icon: <Cpu size={20} /> },
    { name: 'Grafana', icon: <Activity size={20} /> },
    { name: 'Git', icon: <Github size={20} /> },
    { name: 'Kubernetes', icon: <Ship size={20} /> }
  ];

  const personalInterests = {
    gaming: [
      { name: 'Valorant', rank: 'Diamond 1', icon: <Crosshair size={24} />, desc: 'Tactical precision and team coordination.' },
      { name: 'RDR2', rank: 'Story Explorer', icon: <Mountain size={24} />, desc: 'A breathtaking masterpiece of storytelling.' },
      { name: 'God of War', rank: 'Axe Master', icon: <Sword size={24} />, desc: 'Epic battles and powerful emotions.' },
      { name: 'Ghost of Tsushima', rank: 'Legendary Samurai', icon: <Sword size={24} />, desc: 'The way of the ghost in a beautiful world.' },
      { name: 'Ghost of Yōtei', rank: 'Wandering Ronin', icon: <Sword size={24} />, desc: 'A new legend begins.' },
      { name: 'GoW Ragnarok', rank: 'Path to Valhalla', icon: <Sword size={24} />, desc: 'The conclusion of a legendary saga.' },
      { name: 'God of War III', rank: 'Spartan Rage', icon: <Sword size={24} />, desc: 'The ultimate revenge of Kratos.' },
      { name: 'GTA 5', rank: 'Los Santos Kingpin', icon: <Target size={24} />, desc: 'Heists, cars, and endless chaos.' },
      { name: 'BGMI', rank: '1x Conqueror', icon: <Target size={24} />, desc: 'Surviving till the end for the chicken dinner.' },
    ],
    sports: [
      { name: 'Chess', rank: 'Strategic Thinker', icon: <Trophy size={24} /> },
      { name: 'Tennis', rank: 'Volley Player', desc: 'Push to finish', icon: <Disc size={24} /> },
    ],
    foodie: [
      { name: 'Chicken Biryani', icon: '🍗', type: 'The King of Meals' },
      { name: 'Chicken Fried Rice', icon: '🍚', type: 'Comfort in Every Bite' },
      { name: 'Samosa', icon: '🥟', type: 'The Perfect Snack' },
      { name: 'Rose Milk', icon: '🥛', type: 'Refreshing Sweetness' },
      { name: 'Tea', icon: '☕', type: 'Spiced & Strong' },
      { name: 'Coffee', icon: '☕', type: 'Morning Fuel' },
      { name: 'Chicken 65', icon: '🔥', type: 'Spicy & Crispy' },
      { name: 'Grill Chicken', icon: '🍖', type: 'Smoky Goodness' },
    ],
    ambitions: [
      { name: 'Indian Army', icon: <Award size={24} />, desc: 'SERVE WITH HONOR' },
      { name: 'Gaming Cafe', icon: <Gamepad2 size={24} />, desc: 'Vision to build a hub for local esports.' },
    ]
  };

  const projects = [
    {
      title: 'AI Resume & ATS Analyzer',
      date: 'Nov 2025 - Present',
      image: '/project1.png',
      tags: ['Python', 'Streamlit', 'NLP', 'Docker'],
      points: [
        'AI-powered resume analysis web application',
        'Analyzes ATS compatibility and skill gaps',
        'Containerized for scalable deployment'
      ],
      link: null
    },
    {
      title: 'Sathyabama AI Chatbot',
      date: 'Jul 2025 - Aug 2025',
      image: '/project2.png',
      tags: ['Python', 'Flask', 'Google Gemini'],
      points: [
        'AI university assistant for student queries',
        'Real-time responses via Gemini API',
        'Interactive and responsive interface'
      ],
      link: 'https://sathyabama-chatbott.onrender.com'
    },
    {
      title: 'Gaming Accessories E-shop',
      date: 'Jan 2024 - May 2024',
      image: '/project3.png',
      tags: ['React', 'CSS3', 'JavaScript'],
      points: [
        'Responsive eCommerce with dynamic filtering',
        'Component-based UI architecture',
        'Modern, dark-themed gaming aesthetic'
      ],
      link: null
    }
  ];

  return (
    <>
      {theme === 'devops' && <NetworkBg />}
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <header>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: 'none', padding: 0 }}>
          <div className="brand">
            <div className="brand-dot"></div>
            {theme === 'devops' ? 'ASHWATH RAM' : 'ASHZ ⚡ ZEUS'}
          </div>

          <div className="theme-switch-container">
            <span className={`theme-label ${theme === 'devops' ? 'active' : ''}`}>DevOps</span>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
              <div className="toggle-knob">
                {theme === 'devops' ? <Terminal size={12} /> : <BookOpen size={12} />}
              </div>
            </button>
            <span className={`theme-label ${theme === 'personal' ? 'active' : ''}`}>Personal</span>
          </div>
        </div>
      </header>

      <div className="container">
        <main>
          {/* Hero Section */}
          <section className="hero fade-in">
            <div className="hero-content">
              {theme === 'devops' ? (
                <>
                  <div className="hero-badge">
                    <Zap size={14} /> Available for DevOps Roles
                  </div>
                  <h1>
                    I architect <span className="gradient-text">resilient</span> cloud systems
                  </h1>
                  <p>
                    Focused on AWS cloud solutions and automation through Jenkins pipelines.
                    Building reliable CI/CD flows and managing containerized applications with a
                    foundational understanding of GCP and Azure.
                  </p>
                </>
              ) : (
                <>
                  <div className="hero-badge">
                    <BookOpen size={14} /> Personal Blog & Hobbies
                  </div>
                  <h1>
                    Beyond the <span className="gradient-text">code</span>, I explore
                  </h1>
                  <p>
                    Passionate gamer, sports enthusiast, and life explorer.
                    This is where I document my personal journey, gaming milestones,
                    and the things that keep me inspired outside of tech.
                  </p>
                </>
              )}

              <div className="btn-group">
                {theme === 'devops' && (
                  <a href={resumePdf} download="Ashwath_Ram_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <Download size={20} /> Download Resume
                  </a>
                )}
                <a href={theme === 'devops' ? "mailto:ashwathaz@zohomail.in" : "https://instagram.com/ig._ashz"} target={theme === 'devops' ? undefined : "_blank"} rel="noopener noreferrer" className="btn btn-secondary">
                  {theme === 'devops' ? <Mail size={20} /> : <Instagram size={20} />}
                  {theme === 'devops' ? "Get in Touch" : "Follow @ig._ashz"}
                </a>
              </div>

              <div className="hero-stats">
                {theme === 'devops' ? (
                  <>
                    <div className="stat-item">
                      <h3>3</h3>
                      <p>Cloud Platforms</p>
                    </div>
                    <div className="stat-item">
                      <h3>4</h3>
                      <p>Active Projects</p>
                    </div>
                    <div className="stat-item">
                      <h3>Active</h3>
                      <p>CI/CD Pipelines</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="stat-item">
                      <h3>D1</h3>
                      <p>Valo Rank</p>
                    </div>
                    <div className="stat-item">
                      <h3>1x</h3>
                      <p>BGMI Conqueror</p>
                    </div>
                    <div className="stat-item">
                      <h3>∞</h3>
                      <p>Adventures</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="hero-visual">
              <div className="image-wrapper">
                <div className="image-bg"></div>
                <img
                  src={theme === 'devops' ? "/profile.jpg" : "/personal.jpg"}
                  alt="Ashwath Ram"
                  className="hero-image"
                  key={theme} // Trigger animation on theme change
                />
              </div>
            </div>
          </section>

          {theme === 'devops' ? (
            <>
              {/* DevOps Mode Sections */}
              <section className="reveal visible">
                <div className="section-header">
                  <span className="section-label">Experience</span>
                  <h2 className="section-title">Professional Journey</h2>
                </div>
                <div className="grid">
                  <div className="card">
                    <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <span className="timeline-tag">Dec 2024 - Present</span>
                      <h3>ARCHON Platform 3 Solutions</h3>
                      <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>DevOps Intern</h4>
                      <ul style={{ listStyle: 'none' }}>
                        <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'start', color: 'var(--text-muted)' }}>
                          <ChevronRight size={18} style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
                          <span>Mastering Docker, Terraform, and CI/CD automation.</span>
                        </li>
                        <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'start', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                          <ChevronRight size={18} style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
                          <span>Implementing Linux operations and advanced monitoring with Grafana.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="reveal visible">
                <div className="grid grid-cols-2">
                  <div className="card">
                    <div className="section-header" style={{ marginBottom: '2rem' }}>
                      <Award size={24} style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
                      <h2 className="section-title" style={{ fontSize: '1.5rem' }}>Education</h2>
                    </div>
                    <div className="timeline-item" style={{ marginBottom: '2rem' }}>
                      <div className="timeline-dot"></div>
                      <span className="timeline-tag">2024 - Present</span>
                      <h3>Masters in Computer Applications</h3>
                      <p style={{ color: 'var(--text-muted)' }}>Sathyabama University | CGPA: 6.50</p>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <span className="timeline-tag">2020 - 2024</span>
                      <h3>B.Sc Computer Science</h3>
                      <p style={{ color: 'var(--text-muted)' }}>Vels University | CGPA: 7.52</p>
                    </div>
                  </div>

                  <div className="card">
                    <div className="section-header" style={{ marginBottom: '2rem' }}>
                      <Activity size={24} style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
                      <h2 className="section-title" style={{ fontSize: '1.5rem' }}>Architecture Philosophy</h2>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                      "Infrastructure as Code is not just a practice, it's a mindset.
                      Efficiency is born from automation, and reliability is built on layers of validation."
                    </p>
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                      <div className="skill-card" style={{ padding: '0.75rem 1.25rem' }}>
                        <Cloud size={18} /> Cloud Native
                      </div>
                      <div className="skill-card" style={{ padding: '0.75rem 1.25rem' }}>
                        <Activity size={18} /> CI/CD
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="reveal visible" id="projects">
                <div className="section-header">
                  <span className="section-label">Portfolio</span>
                  <h2 className="section-title">Technical Projects</h2>
                </div>
                <div className="carousel-container" style={{ position: 'relative', width: '100%', height: '700px', display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '1500px' }}>
                  {projects.map((project, idx) => {
                    let position = 'hidden';
                    if (idx === activeProject) position = 'active';
                    else if (idx === (activeProject === 0 ? projects.length - 1 : activeProject - 1)) position = 'prev';
                    else if (idx === (activeProject === projects.length - 1 ? 0 : activeProject + 1)) position = 'next';

                    return (
                      <div
                        className={`card carousel-slide ${position}`}
                        key={idx}
                        onClick={() => setActiveProject(idx)}
                        style={{ display: 'flex', flexDirection: 'column' }}
                      >
                        {/* Image handle with error fallback */}
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project-image"
                          onError={(e) => e.target.style.display = 'none'}
                        />
                        <div className="project-tags">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="tag">{tag}</span>
                          ))}
                        </div>
                        <h3 style={{ marginBottom: '1rem' }}>{project.title}</h3>
                        <ul style={{ listStyle: 'none', flex: 1 }}>
                          {project.points.map((pt, i) => (
                            <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                              <ChevronRight size={14} style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '2px' }} />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ marginTop: '1.5rem', padding: '0.75rem', width: '100%', justifyContent: 'center' }}>
                            <ExternalLink size={16} /> View Project
                          </a>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              <section className="reveal visible">
                <div className="section-header" style={{ textAlign: 'center' }}>
                  <span className="section-label">Stack</span>
                  <h2 className="section-title">Core Technologies</h2>
                </div>
                <div className="skills-wall">
                  {skills.map((skill, idx) => (
                    <div key={idx} className="skill-card">
                      {skill.icon}
                      {skill.name}
                    </div>
                  ))}
                </div>
              </section>
            </>
          ) : (
            <>
              {/* Personal Mode Sections */}
              <section className="reveal visible" id="gaming">
                <div className="section-header" style={{ textAlign: 'center' }}>
                  <span className="section-label">Gamer Life</span>
                  <h2 className="section-title">Gaming Milestones</h2>
                  <p style={{ marginTop: '1rem' }}>Leveling up one game at a time.</p>
                </div>
                <div className="gaming-grid">
                  {personalInterests.gaming.map((game, idx) => (
                    <div key={idx} className="game-card">
                      <div style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>{game.icon}</div>
                      <span className="game-title">{game.name}</span>
                      <span className="game-rank">{game.rank}</span>
                      <p className="game-desc">{game.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="reveal visible" id="foodie">
                <div className="section-header" style={{ textAlign: 'center' }}>
                  <span className="section-label">Taste Buds</span>
                  <h2 className="section-title">The Foodie Corner</h2>
                  <p style={{ marginTop: '1rem' }}>What keeps me fueled and happy.</p>
                </div>
                <div className="food-grid">
                  {personalInterests.foodie.map((food, idx) => (
                    <div key={idx} className="food-card">
                      <div className="food-icon">{food.icon}</div>
                      <div className="food-info">
                        <h4>{food.name}</h4>
                        <p>{food.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="reveal visible" id="ambitions">
                <div className="section-header" style={{ textAlign: 'center' }}>
                  <span className="section-label">Future Focus</span>
                  <h2 className="section-title">Interests & Ambitions</h2>
                </div>
                <div className="grid grid-cols-2">
                  {personalInterests.ambitions.map((goal, idx) => (
                    <div key={idx} className="card" style={{ textAlign: 'center' }}>
                      <div style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                        {goal.icon}
                      </div>
                      <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{goal.name}</h3>
                      <p>{goal.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="reveal visible" id="sports">
                <div className="section-header" style={{ textAlign: 'center' }}>
                  <span className="section-label">Active Lifestyle</span>
                  <h2 className="section-title">Sports & Recreation</h2>
                </div>
                <div className="grid grid-cols-2">
                  {personalInterests.sports.map((sport, idx) => (
                    <div key={idx} className="card" style={{ textAlign: 'center' }}>
                      <div style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                        {sport.icon}
                      </div>
                      <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{sport.name}</h3>
                      <p style={{ fontWeight: 'bold' }}>{sport.rank}</p>
                      {sport.desc && <p style={{ marginTop: '0.5rem', opacity: 0.8, fontStyle: 'italic' }}>"{sport.desc}"</p>}
                    </div>
                  ))}
                </div>
              </section>
              <section className="reveal visible" id="gallery">
                <div className="section-header" style={{ textAlign: 'center' }}>
                  <span className="section-label">Moments</span>
                  <h2 className="section-title">Life Captured</h2>
                  <p style={{ marginTop: '1rem' }}>
                    A glimpse into my adventures. Follow me on <a href="https://instagram.com/ig._ashz" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 'bold' }}>@ig._ashz <Instagram size={14} style={{ display: 'inline', verticalAlign: 'middle', marginTop: '-2px' }} /></a>
                  </p>
                </div>

                <div className="grid grid-cols-3" style={{ marginBottom: '3rem' }}>
                  <div className="card">
                    <Camera size={24} style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
                    <h3 style={{ marginBottom: '0.5rem' }}>Exploration</h3>
                    <p style={{ color: 'var(--text-muted)' }}>Discovering new places, trekking through mountains, and taking in the fresh air.</p>
                  </div>
                  <div className="card">
                    <Mountain size={24} style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
                    <h3 style={{ marginBottom: '0.5rem' }}>Nature</h3>
                    <p style={{ color: 'var(--text-muted)' }}>Finding peace in the beauty of landscapes and capturing moments in time.</p>
                  </div>
                  <div className="card">
                    <Sun size={24} style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
                    <h3 style={{ marginBottom: '0.5rem' }}>Lifestyle</h3>
                    <p style={{ color: 'var(--text-muted)' }}>From everyday routines to extraordinary experiences, documented and shared.</p>
                  </div>
                </div>

                <div className="grid grid-cols-3" style={{ gap: '1.5rem' }}>
                  <div style={{ borderRadius: '12px', overflow: 'hidden', height: '350px' }}>
                    <img src="/ashz1.jpg" alt="Gallery 1" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} className="hover-zoom" />
                  </div>
                  <div style={{ borderRadius: '12px', overflow: 'hidden', height: '350px' }}>
                    <img src="/ashz2.jpg" alt="Gallery 2" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} className="hover-zoom" />
                  </div>
                  <div style={{ borderRadius: '12px', overflow: 'hidden', height: '350px' }}>
                    <img src="/ashz3.jpg" alt="Gallery 3" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} className="hover-zoom" />
                  </div>
                </div>
              </section>
            </>
          )}
        </main>

        <footer>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/ashz3003/" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={28} />
            </a>
            <a href="https://github.com/Ashwathaz" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={28} />
            </a>
            <a href="mailto:ashwathaz@zohomail.in" className="social-link">
              <Mail size={28} />
            </a>
          </div>
          <p style={{ opacity: 0.6, fontSize: '1rem' }}>
            © {new Date().getFullYear()} Ashwath Ram. {theme === 'devops' ? "Engineered with Passion." : "Living with Purpose."}
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;


