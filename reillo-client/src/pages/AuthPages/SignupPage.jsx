import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import { createUser } from '../../../UserService.js';

const inputClasses = 'auth-input';
const actionButtonClassName = 'auth-action-btn';

const SignupPage = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: ''});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(form);
      navigate('/signin');
    } catch (err) {
      setError(err.response?.data?.message || 'Sign up failed');
    }
  };

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

          <form className="auth-form" onSubmit={handleSubmit}>
            {error && <div className="auth-error">{error}</div>}
            <div className="auth-row">
              <div className="auth-group">
                <label htmlFor="first-name">First Name</label>
                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  autoComplete="given-name"
                  className={inputClasses}
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="auth-group">
                <label htmlFor="last-name">Last Name</label>
                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  autoComplete="family-name"
                  className={inputClasses}
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="auth-group">
              <label htmlFor="signup-email">Email</label>
              <input
                id="signup-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                className={inputClasses}
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="auth-group">
              <label htmlFor="signup-password">Password</label>
              <input
                id="signup-password"
                name="password"
                type="password"
                placeholder="Create a secure password"
                autoComplete="new-password"
                className={inputClasses}
                value={form.password}
                onChange={handleChange}
                required
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

export default SignupPage;