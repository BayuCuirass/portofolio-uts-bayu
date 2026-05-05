import { motion } from 'framer-motion';
import { ExternalLink, Layout, Database, Gamepad2, MonitorPlay, User, Globe, Terminal, Send, Download, ChevronRight } from 'lucide-react';
import './App.css';

function App() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const splashContainer = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const splashItem = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      {/* 🎬 SPLASH SCREEN */}
      <motion.div 
        className="splash-screen"
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: '-100vh', opacity: 0 }}
        transition={{ duration: 0.8, delay: 3.2, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.div className="splash-content" variants={splashContainer} initial="hidden" animate="visible">
          <div className="splash-icons">
            <motion.div variants={splashItem} className="icon-circle"><Terminal size={24} /></motion.div>
            <motion.div variants={splashItem} className="icon-circle"><User size={24} /></motion.div>
            <motion.div variants={splashItem} className="icon-circle"><Globe size={24} /></motion.div>
          </div>
          <motion.h1 variants={splashItem} className="splash-title">
            Welcome To My<br /><span>Portfolio Website</span>
          </motion.h1>
          <motion.div variants={splashItem} className="splash-footer">
            <Globe size={16} /> portofolio-bayu.vercel.app
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 💻 KONTEN WEB UTAMA */}
      <div className="main-wrapper">
        
        <nav className="navbar">
          <div className="nav-container">
            <div className="logo">Bayu<span>.</span></div>
            <div className="nav-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </nav>

        {/* HERO SECTION */}
        <section id="home" className="hero-section">
          <div className="container">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="hero-grid">
              
              <div className="hero-text-area">
                <div className="badge"><Terminal size={14} /> Ready to Innovate</div>
                <h1 className="hero-title">
                  Web Dev <span>&</span><br />Tech Enthusiast
                </h1>
                <p className="hero-subtitle">Information Systems Student</p>
                <p className="hero-desc">
                  Membangun antarmuka web yang interaktif, bereksperimen dengan logika pemrograman, dan terus belajar menciptakan solusi digital yang fungsional.
                </p>
                
                <div className="tech-pills">
                  <span>Laravel</span><span>React</span><span>Python</span><span>MySQL</span><span>Lua</span>
                </div>

                <div className="hero-buttons">
                  <a href="#portfolio" className="btn-primary"><Layout size={18} /> Projects</a>
                  <a href="#contact" className="btn-secondary"><Send size={18} /> Contact</a>
                </div>
              </div>

              <div className="hero-graphic-area">
                <div className="graphic-box">
                  <Layout size={80} className="graphic-icon glow-icon" />
                  <Database size={50} className="graphic-icon float-icon-1" />
                  <Gamepad2 size={50} className="graphic-icon float-icon-2" />
                </div>
              </div>

            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="about-section">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}>
              <div className="section-header-center">
                <h2>About Me</h2>
                <p> Transforming ideas into digital experiences </p>
              </div>
              
              <div className="about-content-grid">
                <div className="about-text-content">
                  <h3>Hello, I'm<br /><span>Ichwan Bayu Listya Putra</span></h3>
                  <p>
                    Saya adalah seorang mahasiswa <strong>Sistem Informasi</strong> yang sangat antusias mengeksplorasi dunia pengembangan web. Saat ini, fokus saya adalah terus belajar dan mengasah skill fundamental menggunakan teknologi seperti <strong>Laravel, React, dan Python</strong>.
                  </p>
                  <p>
                    Bagi saya, *coding* adalah tentang memecahkan masalah. Di luar mengerjakan tugas kuliah, saya aktif menyalurkan kreativitas dengan mengembangkan *script* mekanik menggunakan <strong>Lua di Roblox Studio</strong>, serta memproduksi konten video digital.
                  </p>
                  <div className="about-actions">
                    <a href="#" className="btn-primary"><Download size={18} /> Download CV</a>
                    <a href="#portfolio" className="btn-outline">View Projects <ChevronRight size={18} /></a>
                  </div>
                </div>
                
                <div className="about-image-content">
                  <div className="silhouette-box">
                    <User size={100} className="silhouette-icon" />
                  </div>
                </div>
              </div>

              <div className="stats-row">
                <div className="stat-card">
                  <div className="stat-icon-wrapper"><Layout size={24} /></div>
                  <div className="stat-info">
                    <h4>Web Dev</h4>
                    <p>Laravel & React</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon-wrapper"><Gamepad2 size={24} /></div>
                  <div className="stat-info">
                    <h4>Game Script</h4>
                    <p>Lua (Roblox)</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon-wrapper"><MonitorPlay size={24} /></div>
                  <div className="stat-info">
                    <h4>Creative</h4>
                    <p>Video Editing</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section id="portfolio" className="portfolio-section">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn}>
              <div className="section-header-center">
                <h2>Portfolio Showcase</h2>
                <p>Beberapa proyek dan eksperimen yang menjadi bagian dari proses belajar saya.</p>
              </div>

              <div className="portfolio-grid-video">
                <div className="video-card">
                  <div className="card-image-box"><Database size={40} className="accent-color" /></div>
                  <div className="card-text">
                    <h3>Marketplace Mobil</h3>
                    <p>Proyek pengembangan platform jual beli kendaraan otomotif menggunakan framework PHP dan database relasional.</p>
                  </div>
                  <div className="card-buttons">
                    <a href="#" className="btn-card-secondary w-full">Details <ChevronRight size={14}/></a>
                  </div>
                </div>

                <div className="video-card">
                  <div className="card-image-box"><Layout size={40} className="accent-color" /></div>
                  <div className="card-text">
                    <h3>Es Pisang Ijo Aryani</h3>
                    <p>Eksplorasi pembuatan website komersial dan profil bisnis untuk mendukung digitalisasi UMKM lokal.</p>
                  </div>
                  <div className="card-buttons">
                    <a href="#" className="btn-card-secondary w-full">Details <ChevronRight size={14}/></a>
                  </div>
                </div>

                <div className="video-card">
                  <div className="card-image-box"><Gamepad2 size={40} className="accent-color" /></div>
                  <div className="card-text">
                    <h3>Roblox Mechanics</h3>
                    <p>Pengembangan script kustom untuk membangun sistem spawn dan checkpoint interaktif di dalam game.</p>
                  </div>
                  <div className="card-buttons">
                    <a href="#" className="btn-card-secondary w-full">Details <ChevronRight size={14}/></a>
                  </div>
                </div>

                <div className="video-card">
                  <div className="card-image-box"><MonitorPlay size={40} className="accent-color" /></div>
                  <div className="card-text">
                    <h3>BayLog YouTube</h3>
                    <p>Produksi, manajemen konten, dan penerapan teknik video editing mandiri untuk platform YouTube.</p>
                  </div>
                  <div className="card-buttons">
                    <a href="#" className="btn-card-secondary w-full">Details <ChevronRight size={14}/></a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="contact-section">
          <div className="container">
             <div className="section-header-center">
                <h2>Contact Me</h2>
                <p>Got a question? Send me a message, and I'll get back to you soon.</p>
              </div>
              <div className="contact-box">
                <div className="contact-info">
                  <h3>Get in Touch</h3>
                  <p>Have something to discuss? Let's talk.</p>
                  <div className="social-row">
                    <a href="#" className="social-btn"><Globe size={20}/></a>
                    <a href="mailto:ichwanbayulp@gmail.com" className="social-btn"><Send size={20}/></a>
                  </div>
                </div>
                <div className="contact-form-dummy">
                  <input type="text" placeholder="Name *" />
                  <textarea placeholder="Write your message here..." rows="4"></textarea>
                  <button className="btn-primary w-full"><Send size={18}/> Send Message</button>
                </div>
              </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default App;