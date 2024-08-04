import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const PageNotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full  rounded-lg p-8">
                <h1 className="text-5xl font-bold text-indigo-600 mb-8">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
                <p className="text-gray-600 mb-8">
                    Sorry, the page you are looking for does not exist. You can always go back to the homepage.
                </p>
                <Link
                    to="/"
                    className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition duration-300 flex items-center justify-center"
                >
                    <FaHome className="mr-2" />
                    Go to Homepage
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;
