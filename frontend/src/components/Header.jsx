import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSearch, FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const Header = ({ cartItems }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { isLoggedIn, logout } = useAuth();
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
        }
    };


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        logout();
        setIsDropdownOpen(false);
        navigate('/');
    };

    return (
        <header className="bg-white shadow-md z-50 relative">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold text-indigo-600">
                    <Link to="/">FoodApp</Link>
                </div>

                {/* Search Bar */}
                <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden w-full max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md ml-5 mr-5">
                    <input
                        type="text"
                        placeholder="Search restaurants, dishes..."
                        className="w-full py-2 px-4 bg-gray-100 text-gray-700 outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={handleSearch}
                    />
                    <button
                        className="bg-indigo-500 text-white p-2 rounded h-[36px] w-[40px] text-center"
                        onClick={handleSearch}
                    >
                        <FaSearch />
                    </button>
                </div>

                <div className="relative flex items-center">
                    {isLoggedIn ? (
                        <>
                            <Link to={'/cart'} className="relative">
                                <FaShoppingCart size={28} />
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                                    {cartItems.length}
                                </span>
                            </Link>
                            {/* User Icon */}
                            <button onClick={toggleDropdown} className="text-gray-700 focus:outline-none ml-4 relative z-20">
                                <FaUserCircle size={28} />
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-36 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                    <Link
                                        to="/my-orders"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        My Orders
                                    </Link>
                                    <Link
                                        to="/user-profile"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Profile
                                    </Link>
                                    <button
                                        onClick={() => {
                                            handleLogout();
                                            setIsDropdownOpen(false);
                                        }}
                                        className="lg:hidden sm:block w-full text-left px-4 py-2 bg-red-500 text-white hover:bg-red-800 rounded-lg"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}


                            {/* Logout Button */}
                            <button
                                onClick={handleLogout}
                                className="hidden lg:block bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 ml-4"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300 ml-4"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    cartItems: PropTypes.arrayOf(PropTypes.object),
};

export default Header;