import Button from '../components/button';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section>
        <div className="hero-grid">
          <div className="hero-placeholder">
            <div className="hero-placeholder-inner">
              <div style={{
                width: '7rem',
                height: '7rem',
                borderRadius: '9999px',
                border: '2px solid #d4d4d8',
                background: '#f4f4f5'
              }} />
            </div>
          </div>

          <div>
            <p className="section-label">About Section</p>
            <h1 className="hero-title">
              A profile wireframe focused on layout, spacing, and content grouping.
            </h1>
            <p className="hero-text">
              This page follows the same low-fidelity system as the homepage with a simple hero,
              overview blocks, and supporting sections for profile details.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/articles">Open Articles</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Overview */}
      <section>
        <div style={{ marginBottom: '1.5rem' }}>
          <p className="section-label">Profile Overview</p>
          <h2 className="section-title">Quick summary blocks</h2>
        </div>

        <div className="kpi-grid">
          <div className="kpi-card">
            <p className="kpi-number">05</p>
            <p className="kpi-label">Years</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-number">16</p>
            <p className="kpi-label">Projects</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-number">09</p>
            <p className="kpi-label">Clients</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-number">03</p>
            <p className="kpi-label">Focus Areas</p>
          </div>
        </div>
      </section>

      {/* Section Flow */}
      <section>
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: '1fr' }}>
          <div style={{ gridColumn: '1 / -1' }}>
            <p className="section-label">Section Flow</p>
            <h2 className="section-title">Stacked content wireframe</h2>

            <div style={{ marginTop: '1.5rem', display: 'grid', gap: '1rem', gridTemplateColumns: '1fr' }}>
              <article className="kpi-card">
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Intro Block</h3>
                <p style={{ marginTop: '0.75rem', fontSize: '0.875rem', lineHeight: 1.5, color: '#52525b' }}>
                  A simple opening area for biography, role, or supporting information.
                </p>
              </article>

              <article className="kpi-card">
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Experience Block</h3>
                <p style={{ marginTop: '0.75rem', fontSize: '0.875rem', lineHeight: 1.5, color: '#52525b' }}>
                  Repeated section styling keeps the page readable and easy to extend.
                </p>
              </article>

              <article className="kpi-card">
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Details Block</h3>
                <p style={{ marginTop: '0.75rem', fontSize: '0.875rem', lineHeight: 1.5, color: '#52525b' }}>
                  Another placeholder area for skills, notes, or references.
                </p>
              </article>
            </div>
          </div>

          <div className="kpi-card" style={{ gridColumn: '1 / -1' }}>
            <p className="section-label">Visual Grid</p>
            <div style={{ marginTop: '1.25rem', display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div className="feature-image">
                <div className="feature-icon" />
              </div>
              <div className="feature-image">
                <div className="feature-icon" />
              </div>
              <div className="feature-image">
                <div className="feature-icon" />
              </div>
              <div className="feature-image">
                <div className="feature-icon" />
              </div>
            </div>
            <div style={{ marginTop: '1.25rem' }}>
              <Button>View Section</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;