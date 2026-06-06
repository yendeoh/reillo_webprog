import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logoonly.png';

const NavBar = () => {
  const navigate = useNavigate();
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const firstName = typeof window !== 'undefined' ? localStorage.getItem('firstName') : '';
  const userType = typeof window !== 'undefined' ? (localStorage.getItem('type') || '') : '';

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('firstName');
    localStorage.removeItem('type');
    navigate('/signin');
  };
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
        <div className="navbar-auth">
          {token ? (
            <>
              <span className="navbar-welcome">Hi, {firstName || 'User'}</span>
              {['admin'].includes(userType) && (
                <Link to="/dashboard" className="navbar-auth-link navbar-auth-dashboard">
                  Dashboard
                </Link>
              )}
              <button type="button" className="navbar-auth-link navbar-auth-logout" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="navbar-auth-link navbar-auth-signin">
                Sign In
              </Link>
              <Link to="/signup" className="navbar-auth-link navbar-auth-signup">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;