'use client';

type NavbarProps = {
  onChangeSection: (section: string) => void;
};

export default function Navbar({ onChangeSection }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-divst">
        <div><button onClick={() => onChangeSection('home')}>HOME</button></div>
        <div><button onClick={() => onChangeSection('services')}>SERVICES</button></div>
        <div><button onClick={() => onChangeSection('aboutus')}>ABOUT</button></div>
        <div><button onClick={() => onChangeSection('blog')}>BLOG</button></div>
        <div><button onClick={() => onChangeSection('contact')}>CONTACT</button></div>
      </div>
    </nav>
  );
}
