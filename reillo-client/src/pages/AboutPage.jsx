import Button from '../components/button';
import aboutMeImg from '../assets/aboutme.jpg';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section>
        <div className="hero-grid">
          <div className="hero-placeholder">
            <div className="hero-placeholder-inner">
              <img src={aboutMeImg} alt="About the Creator" style={{ width: '50%', height: '50%', objectFit: 'flex', borderRadius: '9999px' }} />
            </div>
          </div>

          <div>
            <p className="section-label">About the Creator</p>
            <h1 className="hero-title">
              Rhoedney Isid S. Reillo
            </h1>
            <p className="hero-text">
              With a passion for artisanal baking and a commitment to quality ingredients, I've dedicated my career to creating the perfect cookie. Every batch is made with love and care to bring you the most delicious treats.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Overview */}
      <section>
        <div style={{ marginBottom: '1.5rem' }}>
          <p className="section-label">My Background</p>
          <h2 className="section-title">Years of Baking Excellence</h2>
        </div>

        <div className="kpi-grid">
          <div className="kpi-card">
            <p className="kpi-number">12</p>
            <p className="kpi-label">Years Baking</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-number">50+</p>
            <p className="kpi-label">Recipes</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-number">100K+</p>
            <p className="kpi-label">Customers</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-number">15</p>
            <p className="kpi-label">Awards</p>
          </div>
        </div>
      </section>

      {/* Section Flow */}
      <section>
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: '1fr' }}>
          <div style={{ gridColumn: '1 / -1' }}>
            <p className="section-label">My Journey</p>
            <h2 className="section-title">From Home Baker to Cookie Shop Owner</h2>

            <div style={{ marginTop: '1.5rem', display: 'grid', gap: '1rem', gridTemplateColumns: '1fr' }}>
              <article className="kpi-card">
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>The Beginning</h3>
                <p style={{ marginTop: '0.75rem', fontSize: '0.875rem', lineHeight: 1.5, color: '#52525b' }}>
                  Everything started in my grandmother's kitchen with her secret recipes. Her passion for baking inspired me to perfect the craft and share these delights with the world.
                </p>
              </article>

              <article className="kpi-card">
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>My Expertise</h3>
                <p style={{ marginTop: '0.75rem', fontSize: '0.875rem', lineHeight: 1.5, color: '#52525b' }}>
                  Specializing in gluten-free, vegan, and classic varieties, I ensure every cookie is made with the finest organic ingredients and baked fresh daily.
                </p>
              </article>

              <article className="kpi-card">
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Our Promise</h3>
                <p style={{ marginTop: '0.75rem', fontSize: '0.875rem', lineHeight: 1.5, color: '#52525b' }}>
                  Quality, freshness, and customer satisfaction are at the heart of everything we do. Each bite is a testament to our commitment to excellence.
                </p>
              </article>
            </div>
          </div>

          <div className="kpi-card" style={{ gridColumn: '1 / -1' }}>
            <p className="section-label">Awards & Recognition</p>
            <div style={{ marginTop: '1.25rem', display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <p style={{ fontWeight: 600 }}>Best Chocolate Chip</p>
                <p style={{ fontSize: '0.875rem', color: '#52525b' }}>2023</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <p style={{ fontWeight: 600 }}>Most Creative Recipe</p>
                <p style={{ fontSize: '0.875rem', color: '#52525b' }}>2022</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <p style={{ fontWeight: 600 }}>Customer Favorite</p>
                <p style={{ fontSize: '0.875rem', color: '#52525b' }}>2023</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <p style={{ fontWeight: 600 }}>Organic Excellence</p>
                <p style={{ fontSize: '0.875rem', color: '#52525b' }}>2024</p>
              </div>
            </div>
            <div style={{ marginTop: '1.25rem' }}>
              <Button>Get In Touch</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;