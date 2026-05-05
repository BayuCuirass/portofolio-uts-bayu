import './App.css'

function App() {
  return (
    <div className="portfolio-container">
      {/* Header Section */}
      <header className="header">
        <h1>Ichwan Bayu Listya Putra</h1>
        <p className="subtitle">Mahasiswa Sistem Informasi | Web Developer</p>
        <p className="location">📍 Wonokarto, Wonogiri</p>
      </header>

      {/* About Section */}
      <section className="section">
        <h2>Tentang Saya</h2>
        <p>
          Halo! Saya adalah mahasiswa jurusan Sistem Informasi yang bersemangat dalam pengembangan web dan teknologi. 
          Saya terbiasa memecahkan masalah komputasi dan terus belajar teknologi baru untuk membangun aplikasi yang bermanfaat.
        </p>
      </section>

      {/* Skills Section */}
      <section className="section">
        <h2>Keahlian & Tools</h2>
        <div className="skills-grid">
          <span className="skill-badge">React JS</span>
          <span className="skill-badge">Laravel</span>
          <span className="skill-badge">Python</span>
          <span className="skill-badge">MySQL</span>
          <span className="skill-badge">Roblox Studio (Lua)</span>
          <span className="skill-badge">Video Editing (CapCut)</span>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <h2>Portofolio & Proyek</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>🚗 marketplace-mobil</h3>
            <p>Platform jual beli kendaraan otomotif berbasis web yang dibangun menggunakan framework Laravel dan MySQL.</p>
          </div>
          <div className="project-card">
            <h3>🍧 Es Pisang Ijo Aryani</h3>
            <p>Website komersial untuk mendukung digitalisasi dan penjualan bisnis kuliner lokal.</p>
          </div>
          <div className="project-card">
            <h3>🎮 Roblox Studio Scripts</h3>
            <p>Pengembangan script kustom untuk mekanik game (seperti sistem spawn dan checkpoint) di ekosistem Roblox.</p>
          </div>
          <div className="project-card">
            <h3>📹 BayLog (YouTube Channel)</h3>
            <p>Kreator konten video yang berfokus pada dokumentasi dan hiburan, dikelola dengan proses editing mandiri.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Ichwan Bayu Listya Putra. Dibuat untuk pemenuhan tugas UTS.</p>
      </footer>
    </div>
  )
}

export default App