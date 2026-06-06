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
import SignupPage from './pages/AuthPages/SignupPage';

import DashLayout from './Layouts/DashLayout';
import DashboardPage from './pages/DashboardPages/DashboardPage';
import ReportsPage from './pages/DashboardPages/ReportsPage';
import UsersPage from './pages/DashboardPages/UsersPage';
import DashArticleListPage from './pages/DashboardPages/DashArticleListPage';
import { ArticleProvider } from './contexts/ArticleContext.jsx';
const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
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
      {
        path: 'signin',
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <SignInPage />,
          },
        ],
      },
      {
        path: 'signup',
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <SignupPage />,
          },
        ],
      },
      {
        path: 'dashboard',
        element: <DashLayout />,
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
            path: 'articles',
            element: <DashArticleListPage />,
          },
          {
            path: 'userspage',
            element: <UsersPage />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <ArticleProvider>
      <RouterProvider router={router} />
    </ArticleProvider>
  );
}

export default App;