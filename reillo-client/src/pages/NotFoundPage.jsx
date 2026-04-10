import { Link } from 'react-router-dom';
import Button from '../components/button';

function NotFoundPage() {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-3xl px-4 text-center">
          <p className="section-label mb-4">Error</p>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-zinc-900 mb-6 break-words">404</h1>
          <h2 className="hero-title mb-4 break-words">Page Not Found</h2>
          <p className="hero-text mb-8 overflow-hidden break-words">
            The page you're looking for doesn't exist. The link you followed might be broken or the page may have been moved.
          </p>
          <Button to="/" variant="primary" className="mt-6">
            Back to Home
          </Button>
        </div>
      </section>
    </div>
  );
}

export default NotFoundPage;