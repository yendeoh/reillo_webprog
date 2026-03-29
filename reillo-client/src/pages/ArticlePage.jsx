import Button from '../components/button';

const ArticlePage = () => {
  return (
    <div>
      {/* Header Section */}
      <section>
        <p className="section-label">Articles</p>
        <h1 className="hero-title">Featured articles in a simple card grid</h1>
        <p className="hero-text">
          A clean wireframe section for article thumbnails, titles, short descriptions, and one
          clear action per card.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <Button to="/">Back Home</Button>
        </div>
      </section>

      {/* Featured Articles */}
      <section>
        <div style={{ marginBottom: '1.5rem' }}>
          <p className="section-label">Featured Articles</p>
          <h2 className="section-title">Article card grid</h2>
        </div>

        <div className="features-grid">
          <article className="feature-card">
            <div className="feature-image">
              <div className="feature-icon" />
            </div>
            <p className="section-label" style={{ marginTop: '1rem', marginBottom: 0 }}>Article 01</p>
            <h3>Wireframe layout basics</h3>
            <p>A simple placeholder for a featured article with image, title, and short copy.</p>
            <div style={{ marginTop: '1rem' }}>
              <Button>Read More</Button>
            </div>
          </article>

          <article className="feature-card">
            <div className="feature-image">
              <div className="feature-icon" />
            </div>
            <p className="section-label" style={{ marginTop: '1rem', marginBottom: 0 }}>Article 02</p>
            <h3>Building clean sections</h3>
            <p>Another card using the same layout pattern for a consistent article grid.</p>
            <div style={{ marginTop: '1rem' }}>
              <Button>Read More</Button>
            </div>
          </article>

          <article className="feature-card">
            <div className="feature-image">
              <div className="feature-icon" />
            </div>
            <p className="section-label" style={{ marginTop: '1rem', marginBottom: 0 }}>Article 03</p>
            <h3>Using cards and lists</h3>
            <p>The same low-fidelity treatment keeps the card section easy to scan.</p>
            <div style={{ marginTop: '1rem' }}>
              <Button>Read More</Button>
            </div>
          </article>

          <article className="feature-card">
            <div className="feature-image">
              <div className="feature-icon" />
            </div>
            <p className="section-label" style={{ marginTop: '1rem', marginBottom: 0 }}>Article 04</p>
            <h3>Low-fidelity article flow</h3>
            <p>A final article card to complete the featured grid layout.</p>
            <div style={{ marginTop: '1rem' }}>
              <Button>Read More</Button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;