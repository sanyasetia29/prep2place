import "./styles/Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Prep2Place
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/courses">Courses</a>
        <a href="/preparation">Preparation</a>
        <a href="/about">About</a>
      </div>

      <button className="start-btn">
        Get Started
      </button>

    </nav>
  );
}

export default Navbar;