import { Link, useNavigate } from 'react-router-dom';
import Button from './button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleEmptyLink = (e) => {
    e.preventDefault();
    navigate('/page-not-found');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Reillo</h3>
          <p className="footer-description">
            A modern, simple blogging platform for sharing ideas and insights.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Navigation</h4>
          <nav className="footer-links">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/articles" className="footer-link">Articles</Link>
            <Link to="/about" className="footer-link">About</Link>
          </nav>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Resources</h4>
          <nav className="footer-links">
            <a href="#" onClick={handleEmptyLink} className="footer-link">Documentation</a>
            <a href="#" onClick={handleEmptyLink} className="footer-link">Blog</a>
            <a href="#" onClick={handleEmptyLink} className="footer-link">Contact</a>
          </nav>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Connect</h4>
          <div className="footer-socials">
            <a href="#" onClick={handleEmptyLink} className="footer-social" aria-label="Twitter">Twitter</a>
            <a href="#" onClick={handleEmptyLink} className="footer-social" aria-label="GitHub">GitHub</a>
            <a href="#" onClick={handleEmptyLink} className="footer-social" aria-label="LinkedIn">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Reillo. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#" onClick={handleEmptyLink} className="footer-link-small">Privacy Policy</a>
          <a href="#" onClick={handleEmptyLink} className="footer-link-small">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
