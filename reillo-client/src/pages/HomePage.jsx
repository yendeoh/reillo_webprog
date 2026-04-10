import Button from '../components/button';
import cookies1 from '../assets/cookies1.jpg';
import cookies2 from '../assets/cookies2.jpg';
import cookies3 from '../assets/cookies3.jpg';
import cookies5 from '../assets/cookies5.png';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section>
        <div className="hero-grid">
          <div>
            <p className="section-label">Welcome</p>
            <h1 className="hero-title">Freshly Baked Cookies for Every Occasion</h1>
            <p className="hero-text">
              Indulge in our artisanal cookies, baked fresh daily with premium ingredients. Discover the perfect treat for yourself or your loved ones.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <Button to="/about" variant="primary">
                About 
              </Button>
            </div>
          </div>

          <div className="hero-placeholder">
            <div className="hero-placeholder-inner">
              <img src={cookies5} alt="Fresh cookies" style={{ width: '100%', height: '50%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section>
        <div style={{ marginBottom: '1.5rem' }}>
          <p className="section-label">KPI Section</p>
          <h2 className="section-title">Quick overview blocks</h2>
        </div>

        <div className="kpi-grid">
          <div className="kpi-card">
            <p className="kpi-number">12</p>
            <p className="kpi-label">Projects</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-number">08</p>
            <p className="kpi-label">Sections</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-number">24</p>
            <p className="kpi-label">Screens</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-number">04</p>
            <p className="kpi-label">Layouts</p>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section>
        <div style={{ marginBottom: '1.5rem' }}>
          <p className="section-label">Cookies</p>
          <h2 className="section-title">Simple wireframe cards</h2>
          <img src="/styles/cookies1.jpg" alt="cookies1" style={{ marginTop: '1rem', borderRadius: '0.5rem' }} />
        </div>

        <div className="features-grid">
          <article className="feature-card">
            <div className="feature-image">
            </div>
            <h3>Feature Card One</h3>
            <p>A clean placeholder for title, short text, and action.</p>
            <div style={{ marginTop: '1rem' }}>
              <Button variant="primary">View More</Button>
            </div>
          </article>

          <article className="feature-card">
            <div className="feature-image">
              <img src={cookies2} alt="Cookies 2" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }} />
            </div>
            <h3>Feature Card Two</h3>
            <p>Balanced spacing keeps the card layout easy to scan.</p>
            <div style={{ marginTop: '1rem' }}>
              <Button variant="primary">View More</Button>
            </div>
          </article>

          <article className="feature-card">
            <div className="feature-image">
              <img src={cookies3} alt="Cookies 3" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }} />
            </div>
            <h3>Feature Card Three</h3>
            <p>Repeated blocks give the page a consistent wireframe rhythm.</p>
            <div style={{ marginTop: '1rem' }}>
              <Button variant="primary">View More</Button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;