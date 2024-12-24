// React - imports:
import { createBrowserRouter } from 'react-router-dom';

// Application - Pages imports:
import KnowledgeBasePage from './pages/KnowledgeBase/KnowledgeBasePage';
import UserProfilePage from './pages/UserProfile/UserProfilePage';
import GenericError from './pages/Errors/GenericErrorPage';
import NotFoundPage from './pages/Errors/NotFoundPage';
import RoutesPage from './pages/Routers/RoutesPage';
import EventsPage from './pages/Events/EventsPage';
import HomePage from './pages/Home/HomePage';
import App from './App';

// Main Routers:
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <GenericError />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'routes',
        element: <RoutesPage />
      },
      {
        path: 'events',
        element: <EventsPage />
      },
      {
        path: 'knowledge-base',
        element: <KnowledgeBasePage />
      },
      {
        path: 'user-profile',
        element: <UserProfilePage />
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
