import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  const isNotFoundPage = location.pathname === '/page-not-found' || location.pathname.match(/^\/page-not-found/) !== null;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', color: '#18181b' }}>
      <NavBar />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      {!isNotFoundPage && <Footer />}
    </div>
  );
};

export default Layout;