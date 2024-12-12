import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';
import Support from './pages/Support';
import DetailsPage from './pages/DetailsPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import Banner from './components/Banner';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />, 
        children: [
            {
                path: '/', 
                element: <Home />,
                children: [
                    { path: 'banner', element: <Banner /> },
                ],
            },
            { path: 'statistics', element: <Statistics /> },
            { path: 'dashboard', element: <Dashboard /> },
            { path: 'support', element: <Support /> },
            { path: 'details/:productId', element: <DetailsPage /> },
            { path: 'cart', element: <CartPage /> }, 
            { path: 'wishlist', element: <WishlistPage /> }, 
        ],
    },
    {
        path: '*',
        element: <ErrorPage />, 
    },
]);

export default router;
