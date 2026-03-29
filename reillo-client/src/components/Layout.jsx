import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', color: '#18181b' }}>
      <NavBar />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;