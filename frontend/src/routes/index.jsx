import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import LoginPage from '../pages/Login';
import RegistrationPage from '../pages/Registration';
import RestaurantListingPage from '../pages/ResturantListing';
import RestaurantDetailPage from '../pages/ResturantDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/register',
                element: <RegistrationPage />,
            },
            {
                path: '/resturant-listing',
                element: <RestaurantListingPage />,
            },
            {
                path: '/resturant/:id',
                element: <RestaurantDetailPage />,
            },
        ],
    },
]);

export default router;
