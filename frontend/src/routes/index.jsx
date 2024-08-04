import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import LoginPage from '../pages/Login';
import RegistrationPage from '../pages/Registration';
import RestaurantListingPage from '../pages/ResturantListing';
import RestaurantDetailPage from '../pages/ResturantDetails';
import Cart from '../pages/Cart';
import SearchPage from '../pages/SearchPage';
import Profile from '../pages/Profile';
import Orders from '../pages/Orders';
import PageNotFound from '../pages/PageNotFound';

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
                element: <Cart />,
            },
            {
                path: '/search',
                element: <SearchPage />,
            },
            {
                path: '/user-profile',
                element: <Profile />,
            },
            {
                path: '/my-orders',
                element: <Orders />,
            },
            {
                path: '/*',
                element: <PageNotFound />
            }
        ],
    },
]);

export default router;
