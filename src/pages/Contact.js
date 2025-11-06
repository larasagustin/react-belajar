function Contact() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "60px",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffe4e6, #fff1f2)",
        fontFamily: "Poppins, sans-serif",
        color: "#333",
        padding: "40px 20px",
      }}
    >
      <h2 style={{ color: "#dc2626", fontSize: "2rem", marginBottom: "15px" }}>
        Hubungi Saya 📩
      </h2>

      <p
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: "1.8",
          fontSize: "1rem",
        }}
      >
        Terima kasih sudah mampir di halaman saya!  
        Kalau kamu ingin berkenalan, berdiskusi, atau sekadar ngobrol santai,  
        jangan ragu untuk menghubungi saya melalui kontak di bawah ini 💌
      </p>

      {/* Kontak Box */}
      <div
        style={{
          marginTop: "40px",
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          display: "inline-block",
          padding: "30px 50px",
          textAlign: "left",
        }}
      >
        <p>
          📍 <b>Alamat:</b> Gabuswetan, Blok Sumur Tengah
        </p>
        <p>
          🎓 <b>Status:</b> Mahasiswi Semester 5, Magang di PT Grage Media Teknologi Cirebon
        </p>
        <p>
✉️ <b>Email:</b>{" "}
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=agstiin0128@gmail.com"
  target="_blank"
  rel="noreferrer"
  style={{ color: "#dc2626", textDecoration: "none" }}
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
            style={{ color: "#dc2626", textDecoration: "none" }}
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
            style={{ color: "#dc2626", textDecoration: "none" }}
          >
            github.com/larasagustin
          </a>
        </p>
      </div>

      <p style={{ marginTop: "40px", color: "#666" }}>
        Dibuat dengan ❤️ oleh <b>Laras Agustin</b>
      </p>
    </div>
  );
}

export default Contact;
