import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />, // ErrorPage for any invalid routes
        children: [
            { path: '/', element: <Home /> },
            { path: 'statistics', element: <Statistics /> },
            { path: 'dashboard', element: <Dashboard /> },
        ],
    },
    {
        path: '*',
        element: <ErrorPage />, // Catch-all route for undefined paths
    },
]);

export default router;
