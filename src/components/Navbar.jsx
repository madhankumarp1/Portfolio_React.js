import logo from '../assets/logo.png'; 
// import '../CSS/navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="nav_main">
        <div className="left">
        <img className="logo" src={logo} alt="logo" />

        </div>
        <div className="center">
          <a href="#about">About</a>
          <a href="https://www.linkedin.com/in/madhan-kumar-p-6b1269276/">Linkedin</a>
          <a href="https://github.com/madhankumarp1">GitHub</a>
        </div>
        <div className="right">
          <button className="call-btn">Let’s Talk</button>
        </div>
        <div className="mobile-menu">
          <button className="menu-toggle">☰</button>
          <div className="mobile-links">
            <a href="#about">About</a>
            <a href="#blog">Blog</a>
            <a href="#services">Services</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
