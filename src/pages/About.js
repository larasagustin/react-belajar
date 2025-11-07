import React from "react";

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
      {/* Judul */}
      <h2
        style={{
          color: "#dc2626",
          fontSize: "2.2rem",
          marginBottom: "25px",
          fontWeight: "bold",
        }}
      >
        Tentang Saya 📚
      </h2>

      {/* Foto Profil */}
<img
  src="/laras.jpg"
  alt="Laras Agustin"
  style={{
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    marginBottom: "20px",
  }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />

      {/* Deskripsi */}
      <p style={{ maxWidth: "650px", margin: "0 auto", lineHeight: "1.8" }}>
        Hai! Saya <b>Laras Agustin</b>, mahasiswi <b>Semester 5</b> yang sedang
        menjalani magang di{" "}
        <b>PT Grage Media Teknologi Cirebon</b>.  
        Saya memiliki semangat tinggi dalam mempelajari teknologi baru dan
        mengembangkan kemampuan di dunia <b>web development</b>.
      </p>

      <p
        style={{
          maxWidth: "650px",
          margin: "20px auto",
          lineHeight: "1.8",
          fontSize: "1rem",
        }}
      >
        Saya tinggal di <b>Gabuswetan, Blok Sumur Tengah</b>.  
        Saya menyukai dunia <b>pemrograman</b>, khususnya{" "}
        <span style={{ color: "#dc2626", fontWeight: "bold" }}>React.js</span> dan{" "}
        <span style={{ color: "#dc2626", fontWeight: "bold" }}>Laravel</span>.  
        Selain itu saya juga suka desain UI/UX dan membuat tampilan web yang menarik
        serta user-friendly.
      </p>

      {/* Skill Section */}
      <div
        style={{
          marginTop: "40px",
          background: "white",
          borderRadius: "20px",
          padding: "25px",
          maxWidth: "700px",
          marginInline: "auto",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ color: "#b91c1c", fontSize: "1.5rem", marginBottom: "15px" }}>
          💻 Keahlian Saya
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          {[
            "React.js",
            "Laravel",
            "Tailwind CSS",
            "MySQL",
            "UI/UX Design",
            "Git & GitHub",
            "REST API",
          ].map((skill, i) => (
            <span
              key={i}
              style={{
                background: "#fee2e2",
                color: "#b91c1c",
                padding: "8px 16px",
                borderRadius: "25px",
                fontWeight: "600",
                fontSize: "0.95rem",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                transition: "all 0.3s",
                cursor: "default",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Kontak */}
      <div style={{ marginTop: "40px" }}>
        <h3 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#b91c1c" }}>
          📬 Hubungi Saya
        </h3>

        {/* Tombol Email */}
        <a
          href="mailto:agstiin0128@gmail.com"
          style={{
            backgroundColor: "#ef4444",
            color: "white",
            padding: "10px 25px",
            borderRadius: "25px",
            fontWeight: "bold",
            boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
            textDecoration: "none",
            transition: "all 0.3s ease",
            cursor: "pointer",
            display: "inline-block",
            margin: "8px",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#b91c1c")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ef4444")}
        >
          ✉️ Email Saya
        </a>

        {/* Tombol Sosial Media */}
        <div style={{ marginTop: "20px" }}>
          <a
            href="https://instagram.com/0lag8_"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#dc2626",
              fontWeight: "bold",
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            📸 Instagram
          </a>
          <a
            href="https://github.com/larasagustin"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#dc2626",
              fontWeight: "bold",
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            💻 GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/larasagustin"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#dc2626",
              fontWeight: "bold",
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            💼 LinkedIn
          </a>
        </div>
      </div>

      <p style={{ marginTop: "60px", fontSize: "0.9rem", color: "#555" }}>
        © {new Date().getFullYear()} Laras Agustin — Dibuat dengan ❤️ menggunakan React.js
      </p>
    </div>
  );
}

export default About;
