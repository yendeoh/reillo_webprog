import { Link } from 'react-router-dom';
import logo from '../assets/logoonly.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/about" className="navbar-link">
            About
          </Link>
          <Link to="/articles" className="navbar-link">
            Articles
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;