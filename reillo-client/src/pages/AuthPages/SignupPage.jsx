import { Link } from 'react-router-dom';
import Button from '../../components/button';

const inputClasses = 'auth-input';
const actionButtonClassName = 'auth-action-btn';

const SignUpPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-page-inner">
        <div className="auth-card">
          <div className="auth-header">
            <span className="auth-label">Create account</span>
            <h1 className="auth-heading">Join the community</h1>
            <p className="auth-text">
              Start your account with a fast, secure sign-up flow and access your saved content instantly.
            </p>
          </div>

          <form className="auth-form">
            <div className="auth-row">
              <div className="auth-group">
                <label htmlFor="first-name">First Name</label>
                <input
                  id="first-name"
                  type="text"
                  placeholder="First name"
                  autoComplete="given-name"
                  className={inputClasses}
                />
              </div>
              <div className="auth-group">
                <label htmlFor="last-name">Last Name</label>
                <input
                  id="last-name"
                  type="text"
                  placeholder="Last name"
                  autoComplete="family-name"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="auth-group">
              <label htmlFor="signup-email">Email</label>
              <input
                id="signup-email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                className={inputClasses}
              />
            </div>

            <div className="auth-group">
              <label htmlFor="signup-password">Password</label>
              <input
                id="signup-password"
                type="password"
                placeholder="Create a secure password"
                autoComplete="new-password"
                className={inputClasses}
              />
              <p className="auth-caption">
                8+ characters, including letters, numbers, and symbols.
              </p>
            </div>

            <div className="auth-actions">
              <Button type="submit" variant="primary" className={actionButtonClassName}>
                Create Account
              </Button>

              <div className="auth-actions-two">
                <Button type="button" variant="secondary" className={`${actionButtonClassName} auth-social-btn`}>
                  Sign up with Google
                </Button>
                <Button type="button" variant="secondary" className={`${actionButtonClassName} auth-social-btn`}>
                  Sign up with Apple
                </Button>
              </div>
            </div>
          </form>

          <div className="auth-bottom">
            Already have an account?{' '}
            <Link to="/signin" className="auth-link">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;