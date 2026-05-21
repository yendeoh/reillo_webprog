import { Outlet } from 'react-router-dom';
import cookies5 from '../assets/cookies5.png';

const AuthLayout = () => {
  return (
    <section className="auth-layout">
      <div className="auth-layout-grid">
        <div className="auth-aside">
          <div className="auth-aside-card">
            <img src={cookies5} alt="Fresh cookies" className="auth-aside-image" />
            <div className="auth-aside-content">
              <span className="auth-aside-label">Freshly baked</span>
              <h2 className="auth-aside-heading">Cookies, comfort, and connection</h2>
              <p className="auth-aside-text">
                Sign in or create an account to save favorites, explore recipes, and stay updated on new batches.
              </p>
            </div>
            <div className="auth-aside-ring" />
          </div>
        </div>

        <main className="auth-main">
          <div className="auth-main-inner">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;