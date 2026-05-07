import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// HomePage Structure
import Layout from './components/Layout';
import ArticlePage from './pages/LandingPages/ArticlePage';
import ArticleListPage from './pages/LandingPages/ArticleListPage';
import HomePage from './pages/LandingPages/HomePage';
import AboutPage from './pages/LandingPages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

import AuthLayout from './Layouts/AuthLayout';
import SignInPage from './pages/AuthPages/SignInPage';
import SignUpPage from './pages/AuthPages/SignUpPage';

import DashLayout from './Layouts/DashLayout';
import DashboardPage from './pages/DashboardPages/DashboardPage';
import ReportsPage from './pages/DashboardPages/ReportsPage';
import UsersPage from './pages/DashboardPages/UsersPage';
const routes = [
  {
    path: '/',
    element: <Layout />,
    errorelement: <NotFoundPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'articles',
        element: <ArticleListPage />,
      },
      {
        path: 'articles/:name',
        element: <ArticlePage />,
      },
      {
        path: 'page-not-found',
        element: <NotFoundPage />,
      },
    ],
  },
    {
    path: 'Auth/',
    element: <AuthLayout />,
    errorelement: <NotFoundPage />,
    children: [
      {
        path: 'signin',
        element: <SignInPage />,
      },
      {
        path: 'signup',
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: 'dashboard/',
    element: <DashLayout />,
    errorelement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
            {
        path: 'reportspage',
        element: <ReportsPage />,
      },
            {
        path: 'userspage',
        element: <UsersPage />,
      }
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;