import './App.css';
import React from 'react';

function App() {
  // Force dark mode
  React.useEffect(() => {
    document.body.className = 'dark-theme';
  }, []);

  return (
  <div className="portfolio-container">
      <header className="portfolio-header new-navbar">
        <div className="navbar-left">
          <span className="navbar-title">Ramaa Rakshitha</span>
        </div>
        <nav className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="navbar-right">
          <a href="/Ramaa_Rakshitha_CV.pdf" className="download-cv-btn" download>Download CV</a>
        </div>
      </header>
      <main>
        <section id="home" className="hero-section">
          <h2 className="hero-intro">Hello World! I'm Rakshitha. Here's something about me</h2>
        </section>
        <section id="about" className="portfolio-section fade-in">
          <h2>About</h2>
          <p>Hello World 👋</p>
          <p>
            I'm pursuing BTech(H)🎓 at RV University in Computer Science with a strong passion for Artificial Intelligence, Machine Learning and great interest in web technologies.
            I love building intuitive and efficient projects, solving problems and continuously learning new technologies💡
          </p>
          <p>
            Currently, I’m learning Machine Learning and exploring back-end while honing my skills in HTML, CSS, JavaScript,Python (libraries and frameworks),C , C++ and SQL. I enjoy working on projects that enhance user experience and drive innovation.
          </p>
          <p>
            Seeking opportunities to contribute to challenging projects and grow professionally. Always open to collaboration and learning opportunities. Excited to connect with fellow developers, mentors and industry professionals🚀 Actively seeking for impactful internships.
          </p>
        </section>
        <section id="experience" className="portfolio-section fade-in">
          <h2>Experience</h2>
          <div className="experience-list">
            <div className="experience-card">
              <h3>BroadrangeAI</h3>
              <p>Feb 2025 - August 2025</p>
              <p>Led the team as a Scrum Master. Built a RAG-based GenAI translator during the internship. Key skills gained: LLMs, Vector stores, Speech to Text, Streamlit, Team Management.</p>
            </div>
          </div>
        </section>
        <section id="projects" className="portfolio-section fade-in">
          <h2>Projects</h2>
          <div className="project-list">
            <a href="https://github.com/Rakshithaa5/Gym-Management" target="_blank" rel="noopener noreferrer" className="project-card animated-card" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="project-title">Gym Management Platform</div>
              <div className="project-desc">Developed a full-stack system for managing gym memberships, schedules, and payments.</div>
              <div className="project-tech">Tech: Python Flask, MySQL, HTML, CSS, JavaScript, Bootstrap</div>
            </a>
            <a href="https://github.com/Rakshithaa5/Airline-Check-in-Management" target="_blank" rel="noopener noreferrer" className="project-card animated-card" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="project-title">Airline Management System</div>
              <div className="project-desc">Created a database-driven application for airline operations and customer management.</div>
              <div className="project-tech">Tech: HTML, CSS, JavaScript, C (core - Data Structures)</div>
            </a>
            <a href="https://github.com/RakshithaR5/BroadrangeAI" target="_blank" rel="noopener noreferrer" className="project-card animated-card" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="project-title">Genai Translator</div>
              <div className="project-desc">Built an end-to-end translator which is a multimodal system supporting over 200 languages. Developed a chatbot powered by Mistral-7B and FAISS for vector stores, and implemented reinforcement learning for better app performance.</div>
              <div className="project-tech" style={{color:'#4f8cff'}}>Tech: Streamlit, FAISS, Mistral-7B, LLMs, Huggingface</div>
            </a>
          </div>
        </section>
        <section id="skills" className="portfolio-section fade-in">
          <h2>Skills</h2>
          <div className="skills-card-list">
            {[
              { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
              { name: 'C (Programming Language)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
              { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
              { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
              { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
              { name: 'Cascading Style Sheets (CSS)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
              { name: 'Bootstrap (Framework)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
              { name: 'Pandas', logo: 'https://avatars.githubusercontent.com/u/21206976?s=200&v=4' },
              { name: 'Streamlit', logo: 'https://streamlit.io/images/brand/streamlit-logo-secondary-colormark-darktext.svg' },
              { name: 'FAISS', logo: '' },
              { name: 'Generative AI', logo: '' },
              { name: 'Large Language Models (LLM)', logo: '' },
              { name: 'Vector Stores', logo: '' },
              { name: 'Reinforcement Learning', logo: '' },
              { name: 'Mistral-7B', logo: 'https://avatars.githubusercontent.com/u/16943930?s=200&v=4' },
              { name: 'Huggingface', logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' }
            ].map(skill => (
              <div className="skill-card animated-skill" key={skill.name}>
                {skill.logo ? (
                  <img src={skill.logo} alt={skill.name} className="skill-logo" />
                ) : (
                  <span className="skill-logo grey-circle" />
                )}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className="portfolio-section fade-in">
          <h2>Contact me here!</h2>
          <p style={{textAlign: 'center', marginBottom: '1.2rem', color: '#a770ef', fontSize: '1.08rem'}}>Please fill in the details, I'll reach you out for sure!</p>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1.5rem'}}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdm1K7I3eJWs85NEp_5W2ckAzHJ44rkS2o7OrgWCaC7ybQWhw/viewform?usp=sharing&ouid=116934456890947871326" target="_blank" rel="noopener noreferrer" className="google-form-btn">
              Contact me here!
            </a>
          </div>
        </section>
      </main>
      <footer className="portfolio-footer">
        <p>&copy; 2025 Ramaa Rakshitha. All rights reserved.</p>
      </footer>
      <style>
        {`
          @keyframes skillFade {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
}

export default App;
