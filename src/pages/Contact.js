import { useState, useEffect } from "react";

function Contact() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "60px",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffe4e6, #fff1f2, #fde2e4)",
        fontFamily: "Poppins, sans-serif",
        color: "#333",
        padding: "40px 20px",
        opacity: fadeIn ? 1 : 0,
        transition: "opacity 1.2s ease-in-out",
      }}
    >
      {/* Judul */}
      <h2 style={{ color: "#dc2626", fontSize: "2.4rem", marginBottom: "15px" }}>
        Hubungi Saya 📩
      </h2>

      <p
        style={{
          maxWidth: "650px",
          margin: "0 auto",
          lineHeight: "1.8",
          fontSize: "1.1rem",
        }}
      >
        Terima kasih sudah mampir di halaman saya!  
        Kalau kamu ingin berkenalan, berdiskusi, atau sekadar ngobrol santai,  
        jangan ragu untuk menghubungi saya melalui kontak di bawah ini 💌
      </p>

      {/* Box Kontak */}
      <div
        style={{
          marginTop: "50px",
          backgroundColor: "white",
          borderRadius: "18px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          display: "inline-block",
          padding: "35px 55px",
          textAlign: "left",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)";
        }}
      >
        <p>📍 <b>Alamat:</b> Gabuswetan, Blok Sumur Tengah</p>
        <p>🎓 <b>Status:</b> Mahasiswi Semester 5, Magang di PT Grage Media Teknologi Cirebon</p>

        <p>
          ✉️ <b>Email:</b>{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=agstiin0128@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#dc2626", textDecoration: "none", fontWeight: "500" }}
          >
            agstiin0128@gmail.com
          </a>
        </p>

        <p>
          📸 <b>Instagram:</b>{" "}
          <a
            href="https://instagram.com/0lag8_"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#dc2626", textDecoration: "none", fontWeight: "500" }}
          >
            @0lag8_
          </a>
        </p>

        <p>
          💻 <b>GitHub:</b>{" "}
          <a
            href="https://github.com/larasagustin"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#dc2626", textDecoration: "none", fontWeight: "500" }}
          >
            github.com/larasagustin
          </a>
        </p>

        <p>
          💬 <b>WhatsApp:</b>{" "}
          <a
            href="https://wa.me/6289522066211"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#dc2626", textDecoration: "none", fontWeight: "500" }}
          >
            0895-2206-6211
          </a>
        </p>

        <p>
          🧠 <b>LinkedIn:</b>{" "}
          <a
            href="https://linkedin.com/in/larasagustin"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#dc2626", textDecoration: "none", fontWeight: "500" }}
          >
            linkedin.com/in/larasagustin
          </a>
        </p>
      </div>

      {/* Tombol Aksi */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginTop: "45px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="mailto:agstiin0128@gmail.com"
          style={{
            backgroundColor: "#dc2626",
            color: "white",
            padding: "12px 28px",
            borderRadius: "25px",
            fontWeight: "bold",
            textDecoration: "none",
            transition: "all 0.3s ease",
            boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#b91c1c")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#dc2626")}
        >
          ✉️ Kirim Email
        </a>

        <a
          href="https://github.com/larasagustin"
          target="_blank"
          rel="noreferrer"
          style={{
            backgroundColor: "#1e3a8a",
            color: "white",
            padding: "12px 28px",
            borderRadius: "25px",
            fontWeight: "bold",
            textDecoration: "none",
            transition: "all 0.3s ease",
            boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#172554")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1e3a8a")}
        >
          🌐 GitHub
        </a>

        <a
          href="https://instagram.com/0lag8_"
          target="_blank"
          rel="noreferrer"
          style={{
            backgroundColor: "#e11d48",
            color: "white",
            padding: "12px 28px",
            borderRadius: "25px",
            fontWeight: "bold",
            textDecoration: "none",
            transition: "all 0.3s ease",
            boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#9f1239")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#e11d48")}
        >
          📷 Instagram
        </a>
      </div>

      <p style={{ marginTop: "50px", color: "#666", fontSize: "0.95rem" }}>
        Dibuat dengan ❤️ oleh <b>Laras Agustin</b> | React.js © {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default Contact;
