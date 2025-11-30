export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="footer-inner">
        <p className="footer-copy">&copy; {year} Zestark. All Rights Reserved.</p>
        <nav className="footer-nav">
          <a href="#home-section">Home</a>
          <a href="#services-section">Services</a>
          <a href="#aboutus-section">About</a>
          <a href="#blog-section">Blog</a>
          <a href="#contact-section">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
