import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import LoginPage from '../pages/Login';
import RegistrationPage from '../pages/Registration';
import RestaurantListingPage from '../pages/ResturantListing';
import RestaurantDetailPage from '../pages/ResturantDetails';
import Cart from '../pages/Cart';

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
                path: '/restaurant/:id',
                element: <RestaurantDetailPage />,
            },
            {
                path: '/cart',
                element: <Cart />,  // No need for loader here
            },
        ],
    },
]);

export default router;
