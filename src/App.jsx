import { useState, useEffect } from 'react';
import {
  Moon, Sun, Download, Mail, Github, Linkedin, ExternalLink,
  Code, Database, Cloud, Box, Activity, Terminal, Cpu, Ship,
  Award, BookOpen, Briefcase, Zap, ChevronRight
} from 'lucide-react';
import './index.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const skills = [
    { name: 'Python', icon: <Code size={20} /> },
    { name: 'MySQL', icon: <Database size={20} /> },
    { name: 'GCP', icon: <Cloud size={20} /> },
    { name: 'AWS', icon: <Cloud size={20} /> },
    { name: 'Azure', icon: <Cloud size={20} /> },
    { name: 'Docker', icon: <Box size={20} /> },
    { name: 'Terraform', icon: <Zap size={20} /> },
    { name: 'Git', icon: <Github size={20} /> },
    { name: 'AI', icon: <Cpu size={20} /> },
    { name: 'Jenkins', icon: <Activity size={20} /> },
    { name: 'Grafana', icon: <Activity size={20} /> },
    { name: 'Linux', icon: <Terminal size={20} /> },
    { name: 'Kubernetes', icon: <Ship size={20} /> }
  ];

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
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="container">
        <header>
          <div className="brand">
            <div className="brand-dot"></div>
            ASHWATH RAM
          </div>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </header>

        <main>
          {/* Hero Section */}
          <section className="hero reveal">
            <div className="hero-content">
              <div className="hero-badge">
                <Zap size={14} /> Open for new opportunities
              </div>
              <h1>
                I build <span className="gradient-text">scalable</span> &
                reliable cloud infrastructure
              </h1>
              <p>
                DevOps & Cloud Engineer specializing in automation, containerization,
                and CI/CD pipelines. I architect resilient systems that scale with
                your ambitions.
              </p>

              <div className="btn-group">
                <a href="/Ashwath_Ram_Resume.pdf" download className="btn btn-primary">
                  <Download size={20} /> Download Resume
                </a>
                <a href="mailto:ashwathaz@zohomail.in" className="btn btn-secondary">
                  <Mail size={20} /> Let's Talk
                </a>
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <h3>5+</h3>
                  <p>Platforms</p>
                </div>
                <div className="stat-item">
                  <h3>12+</h3>
                  <p>Projects</p>
                </div>
                <div className="stat-item">
                  <h3>∞</h3>
                  <p>Curiosity</p>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="image-wrapper">
                <div className="image-bg"></div>
                <img src="/profile.jpg" alt="Ashwath Ram" className="hero-image" />
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="reveal" style={{ animationDelay: '0.2s' }}>
            <div className="section-header">
              <span className="section-label">Trajectory</span>
              <h2 className="section-title">Work Experience</h2>
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

          {/* Education & Info Section */}
          <section className="reveal" style={{ animationDelay: '0.3s' }}>
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
                  <h2 className="section-title" style={{ fontSize: '1.5rem' }}>Core Philosophy</h2>
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
                    <Activity size={18} /> Automation
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="reveal" style={{ animationDelay: '0.4s' }}>
            <div className="section-header">
              <span className="section-label">Showcase</span>
              <h2 className="section-title">Selected Projects</h2>
            </div>
            <div className="grid grid-cols-3">
              {projects.map((project, idx) => (
                <div className="card" key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
                  <img src={project.image} alt={project.title} className="project-image" />
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
                      <ExternalLink size={16} /> View Demo
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="reveal" style={{ animationDelay: '0.5s' }}>
            <div className="section-header" style={{ textAlign: 'center' }}>
              <span className="section-label">Toolkit</span>
              <h2 className="section-title">Expertise & Technologies</h2>
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
        </main>

        <footer>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/ashz3003/" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Ashwathaz" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={24} />
            </a>
            <a href="mailto:ashwathaz@zohomail.in" className="social-link">
              <Mail size={24} />
            </a>
          </div>
          <p style={{ opacity: 0.6 }}>
            © {new Date().getFullYear()} Ashwath Ram. Designed for the future.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
