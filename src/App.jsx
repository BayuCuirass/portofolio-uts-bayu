import { motion } from 'framer-motion';
import { Layout, Database, Gamepad2, MonitorPlay, User, Globe, Terminal, Send, Download, ChevronRight } from 'lucide-react';
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
                
                {/* INI BAGIAN FOTOMU YANG SUDAH AMAN */}
                <div className="about-image-content">
                  <div className="photo-box">
                    <img src="/bayu.png" alt="Ichwan Bayu" className="my-photo" />
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

        {/* PORTFOLIO SECTION DENGAN FOTO ESTETIK */}
        <section id="portfolio" className="portfolio-section">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn}>
              <div className="section-header-center">
                <h2>Portfolio Showcase</h2>
                <p>Beberapa proyek dan eksperimen yang menjadi bagian dari proses belajar saya.</p>
              </div>

              <div className="portfolio-grid-video">
                {/* Project 1: Marketplace Mobil */}
                <div className="video-card">
                  <div className="card-image-box">
                    <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Marketplace Mobil" className="project-img" />
                  </div>
                  <div className="card-text">
                    <h3>Marketplace Mobil</h3>
                    <p>Proyek pengembangan platform jual beli kendaraan otomotif menggunakan framework PHP dan database relasional.</p>
                  </div>
                  <div className="card-buttons">
                    <a href="#" className="btn-card-secondary w-full">Details <ChevronRight size={14}/></a>
                  </div>
                </div>

                {/* Project 2: Kuliner Es Pisang Ijo (FOTO ASLI) */}
                <div className="video-card">
                  <div className="card-image-box">
                    <img src="data:image/jpeg;base64,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" alt="Es Pisang Ijo Aryani" className="project-img" />
                  </div>
                  <div className="card-text">
                    <h3>Es Pisang Ijo Aryani</h3>
                    <p>Eksplorasi pembuatan website komersial dan profil bisnis untuk mendukung digitalisasi UMKM lokal.</p>
                  </div>
                  <div className="card-buttons">
                    <a href="#" className="btn-card-secondary w-full">Details <ChevronRight size={14}/></a>
                  </div>
                </div>

                {/* Project 3: Roblox Studio (LOGO RESMI ROBLOX) */}
                <div className="video-card">
                  <div className="card-image-box">
                    <img 
                      src="https://creations.panzoid.com/creation-thumbnails/691332.jpg" 
                      alt="Roblox Mechanics" 
                      className="project-img" 
                      style={{ objectFit: 'contain', padding: '0px', backgroundColor: '#000000' }} 
                    />
                  </div>
                  <div className="card-text">
                    <h3>Roblox Mechanics</h3>
                    <p>Pengembangan script kustom untuk membangun sistem spawn dan checkpoint interaktif di dalam game.</p>
                  </div>
                  <div className="card-buttons">
                    <a href="#" className="btn-card-secondary w-full">Details <ChevronRight size={14}/></a>
                  </div>
                </div>

                {/* Project 4: Video Editing/YouTube */}
                <div className="video-card">
                  <div className="card-image-box">
                    <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="BayLog YouTube" className="project-img" />
                  </div>
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