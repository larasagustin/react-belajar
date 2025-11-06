import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#ef4444',
      padding: '10px',
      textAlign: 'center'
    }}>
      <Link to="/" style={{ color: 'white', margin: '0 10px' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', margin: '0 10px' }}>Tentang Saya</Link>
      <Link to="/contact" style={{ color: 'white', margin: '0 10px' }}>Kontak</Link>
    </nav>
  );
}

export default Navbar;
