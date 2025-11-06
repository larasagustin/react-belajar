function About() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "60px",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fff1f2, #ffe4e6)",
        fontFamily: "Poppins, sans-serif",
        color: "#333",
        padding: "40px 20px",
      }}
    >
      <h2 style={{ color: "#dc2626", fontSize: "2rem", marginBottom: "20px" }}>
        Tentang Saya 📚
      </h2>

      {/* Foto */}
      <img
        src="https://avatars.githubusercontent.com/u/123456789?v=4"
        alt="Laras Agustin"
        style={{
          width: "130px",
          height: "130px",
          borderRadius: "50%",
          objectFit: "cover",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          marginBottom: "20px",
        }}
      />

      <p style={{ maxWidth: "600px", margin: "0 auto", lineHeight: "1.8" }}>
        Hai! Saya <b>Laras Agustin</b>, mahasiswi <b>Semester 5</b> yang sedang
        menjalani magang di <b>PT Grage Media Teknologi Cirebon</b>.
      </p>

      <p style={{ maxWidth: "600px", margin: "15px auto", lineHeight: "1.8" }}>
        Saya tinggal di <b>Gabuswetan, Blok Sumur Tengah</b>.  
        Saya menyukai dunia <b>pemrograman</b>, khususnya 
        <span style={{ color: "#dc2626" }}> React.js </span> dan 
        <span style={{ color: "#dc2626" }}> Laravel</span>.  
        Selain itu saya juga suka desain dan membuat tampilan web yang menarik.
      </p>

      <p style={{ fontWeight: "bold", marginTop: "25px" }}>
        📸 Instagram:{" "}
        <a
          href="https://instagram.com/0lag8_"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#dc2626", textDecoration: "none" }}
        >
          @0lag8_
        </a>
      </p>
    </div>
  );
}

export default About;
