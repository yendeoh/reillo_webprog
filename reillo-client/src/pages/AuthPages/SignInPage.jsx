import { Link } from 'react-router-dom';
import Button from '../../components/button';

const inputClasses = 'auth-input';
const actionButtonClassName = 'auth-action-btn';

const SignInPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-page-inner">
        <div className="auth-card">
          <div className="auth-header">
            <span className="auth-label">Welcome back</span>
            <h1 className="auth-heading">Sign in to your account</h1>
            <p className="auth-text">
              Use your email and password to securely access your dashboard and saved content.
            </p>
          </div>

          <form className="auth-form">
            <div className="auth-group">
              <label htmlFor="signin-email">Email Address</label>
              <input
                id="signin-email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                className={inputClasses}
              />
            </div>

            <div className="auth-group">
              <label htmlFor="signin-password">Password</label>
              <input
                id="signin-password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                className={inputClasses}
              />
              <p className="auth-caption">
                Use a strong password with letters, numbers, and symbols.
              </p>
            </div>

            <div className="auth-row auth-compact-row">
              <label className="auth-checkbox-label">
                <input type="checkbox" className="auth-checkbox" />
                Remember me
              </label>
              <button type="button" className="auth-forgot-button">
                Forgot password?
              </button>
            </div>

            <div className="auth-actions">
              <Button type="submit" variant="primary" className={actionButtonClassName}>
                Log In
              </Button>

              <div className="auth-actions-two">
                <Button type="button" variant="secondary" className={`${actionButtonClassName} auth-social-btn`}>
                  Log in with Google
                </Button>
                <Button type="button" variant="secondary" className={`${actionButtonClassName} auth-social-btn`}>
                  Log in with Apple
                </Button>
              </div>
            </div>
          </form>

          <div className="auth-bottom">
            No account yet?{' '}
            <Link to="/signup" className="auth-link">
              Create one here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;