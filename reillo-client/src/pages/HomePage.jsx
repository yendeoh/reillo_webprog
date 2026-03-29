import Button from '../components/button';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section>
        <div className="hero-grid">
          <div>
            <p className="section-label">Hero Section</p>
            <h1 className="hero-title">Welcome to Wireframe Studio Layout</h1>
            <p className="hero-text">
              Discover the art of wireframing with a simple layout system for hero content, key
              numbers, and feature cards.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <Button to="/about" variant="primary">
                Learn More
              </Button>
            </div>
          </div>

          <div className="hero-placeholder">
            <div className="hero-placeholder-inner">
              <div className="placeholder-circle" />
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
          <p className="section-label">Feature Cards</p>
          <h2 className="section-title">Simple wireframe cards</h2>
        </div>

        <div className="features-grid">
          <article className="feature-card">
            <div className="feature-image">
              <div className="feature-icon" />
            </div>
            <h3>Feature Card One</h3>
            <p>A clean placeholder for title, short text, and action.</p>
            <div style={{ marginTop: '1rem' }}>
              <Button variant="primary">View More</Button>
            </div>
          </article>

          <article className="feature-card">
            <div className="feature-image">
              <div className="feature-icon" />
            </div>
            <h3>Feature Card Two</h3>
            <p>Balanced spacing keeps the card layout easy to scan.</p>
            <div style={{ marginTop: '1rem' }}>
              <Button variant="primary">View More</Button>
            </div>
          </article>

          <article className="feature-card">
            <div className="feature-image">
              <div className="feature-icon" />
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