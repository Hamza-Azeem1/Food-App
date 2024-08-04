import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import scrollToTop from '../helpers/Scroll'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-200 py-8">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* About Section */}
                <div>
                    <h3 className="text-lg font-bold mb-4">FoodApp</h3>
                    <p className="text-gray-400">
                        FoodApp offers the best food delivery service with a wide range of restaurant options.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                    <ul onClick={scrollToTop}>
                        <li className="mb-2"><Link to="/" className="hover:text-white">Home</Link></li>
                        <li className="mb-2"><Link to="/resturant-listing" className="hover:text-white">Restaurants</Link></li>
                        <li className="mb-2"><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
                        <li className="mb-2"><Link to="/about" className="hover:text-white">About Us</Link></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                    <p className="text-gray-400">123 Food Street</p>
                    <p className="text-gray-400">City, Country</p>
                    <p className="text-gray-400">Email: info@foodapp.com</p>
                    <p className="text-gray-400">Phone: +123-456-7890</p>
                </div>

                {/* Social Media Links */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                            <FaTwitter size={20} />
                        </a>
                        <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                            <FaInstagram size={20} />
                        </a>
                        <a href="https://youtube.com" className="text-gray-400 hover:text-white">
                            <FaYoutube size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
                &copy; 2024 FoodApp. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
