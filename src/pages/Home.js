function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f9f9f9, #ffe4e6)',
      color: '#333',
      fontFamily: 'Poppins, sans-serif'
    }}>
      
      {/* Foto Profil */}
      <img 
        src="https://avatars.githubusercontent.com/u/123456789?v=4" 
        alt="Laras Agustin" 
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          objectFit: 'cover',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          marginBottom: '20px'
        }}
      />

      {/* Nama dan Deskripsi */}
      <h1 style={{ fontSize: '2rem', color: '#dc2626' }}>Hai! 👋 Saya Laras Agustin</h1>
      <p style={{
        maxWidth: '500px',
        textAlign: 'center',
        fontSize: '1rem',
        lineHeight: '1.6',
        marginTop: '10px'
      }}>
        Saya seorang pembelajar yang bersemangat di bidang <b>Web Development</b> — 
        terutama <span style={{ color: '#dc2626' }}>React.js</span> dan <span style={{ color: '#dc2626' }}>Laravel</span>.  
        Saya suka membuat tampilan web yang menarik dan mudah digunakan ❤️
      </p>

      {/* Tombol Aksi */}
      <div style={{ marginTop: '30px' }}>
        <a 
          href="https://github.com/larasagustin" 
          target="_blank" 
          rel="noreferrer"
          style={{
            textDecoration: 'none',
            backgroundColor: '#dc2626',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '25px',
            fontWeight: 'bold',
            boxShadow: '0 3px 6px rgba(0,0,0,0.2)',
            transition: '0.3s'
          }}
          onMouseOver={e => e.target.style.backgroundColor = '#b91c1c'}
          onMouseOut={e => e.target.style.backgroundColor = '#dc2626'}
        >
          🌐 Lihat GitHub Saya
        </a>
      </div>
    </div>
  );
}

export default Home;
