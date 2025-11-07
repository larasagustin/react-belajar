import { useEffect, useState } from "react";

function About() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  const orangTerdekat = [
    {
      name: "Mama 💕",
      img: "/mamaku sayang.jpg",
    },
    {
      name: "bro🤝",
      img: "/teman.jpg",
    },
    {
      name: "Adik 🧸",
      img: "/harun.jpg",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fff5f5, #ffe4e6, #fde2e4)",
        color: "#333",
        fontFamily: "Poppins, sans-serif",
        textAlign: "center",
        opacity: fadeIn ? 1 : 0,
        transition: "opacity 1.5s ease-in-out",
        padding: "40px 20px",
      }}
    >
      {/* Foto Profil */}
      <img
        src="/laras.jpg"
        alt="Laras Agustin"
        style={{
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      />

      {/* Judul */}
      <h1 style={{ color: "#b91c1c", fontSize: "32px", marginBottom: "10px" }}>
        Tentang Saya 📚
      </h1>

      <p style={{ maxWidth: "600px", fontSize: "18px", lineHeight: "1.6" }}>
        Halo! Saya <b>Laras Agustin</b>, mahasiswa semester 5 dari{" "}
        <b>Gabuswetan, Blok Sumue Tengah</b>.  
        Saat ini sedang magang di <b>PT Grage Media Teknologi Cirebon</b>.  
        Saya suka ngoding 💻, desain 🎨, dan belajar hal baru 🚀.
      </p>

      <p style={{ fontSize: "16px", marginTop: "15px" }}>
        📸 Instagram:{" "}
        <a
          href="https://www.instagram.com/0lag8_"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#b91c1c", fontWeight: "bold", textDecoration: "none" }}
        >
          @0lag8_
        </a>
      </p>

{/* Tombol Email & GitHub */}
<div
  style={{
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "30px 0",
  }}
>
<a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    window.open("mailto:agstiin0128@gmail.com");
  }}
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
    position: "relative",
    zIndex: 10,
  }}
  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#b91c1c")}
  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ef4444")}
>
  ✉️ Email Saya
</a>




  {/* Tombol GitHub */}
  <a
    href="https://github.com/larasagustin"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      backgroundColor: "#1e3a8a",
      color: "white",
      padding: "10px 25px",
      borderRadius: "25px",
      fontWeight: "bold",
      boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
      textDecoration: "none",
      transition: "all 0.3s ease",
    }}
    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#172554")}
    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1e3a8a")}
  >
    🌐 GitHub Saya
  </a>
</div>


      {/* Orang Terdekat */}
      <h2 style={{ color: "#b91c1c", marginBottom: "20px" }}>Orang Terdekat ❤️</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        {orangTerdekat.map((item, index) => (
          <div
            key={index}
            style={{
              width: "180px",
              backgroundColor: "white",
              borderRadius: "15px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              padding: "15px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ fontSize: "16px", color: "#b91c1c" }}>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
