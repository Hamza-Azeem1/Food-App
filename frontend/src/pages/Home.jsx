import { FiArrowRight } from 'react-icons/fi';
import { FaPizzaSlice, FaHamburger, FaFish } from 'react-icons/fa';
import { GiNoodles, GiSushis, GiIndianPalace } from 'react-icons/gi';
import img1 from '../assets/hero.jpg'
import img2 from '../assets/burger.jpg'
import img3 from '../assets/pizza.jpg'
import img4 from '../assets/sushi.jpg'
import { Link } from 'react-router-dom';

const HomePage = () => {
    const featuredRestaurants = [
        {
            name: "Pizza Palace",
            description: "Best pizza in town with fresh ingredients.",
            image: img3,
        },
        {
            name: "Burger Haven",
            description: "Juicy burgers made to perfection.",
            image: img2,
        },
        {
            name: "Sushi World",
            description: "Authentic sushi with a modern twist.",
            image: img4,
        },
    ];

    const categories = [
        { name: 'Italian', icon: <FaPizzaSlice className="text-4xl" /> },
        { name: 'Chinese', icon: <GiNoodles className="text-4xl" /> },
        { name: 'Indian', icon: <GiIndianPalace className="text-4xl" /> },
        { name: 'Burgers', icon: <FaHamburger className="text-4xl" /> },
        { name: 'Seafood', icon: <FaFish className="text-4xl" /> },
        { name: 'Sushi', icon: <GiSushis className="text-4xl" /> },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${img1})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                    <h1 className="text-white text-4xl md:text-6xl font-bold text-center">Welcome to FoodApp</h1>
                    <button className="mt-6 bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300 flex items-center">
                        Order Now <FiArrowRight className="ml-2" />
                    </button>
                </div>
            </section>

            {/* Categories */}
            <section className="py-12 bg-gray-200">
                <h2 className="text-3xl font-bold text-center mb-8">Categories</h2>
                <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
                    {categories.map((category, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center">
                            {category.icon}
                            <h3 className="mt-4 text-lg font-bold">{category.name}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Restaurants */}
            <section className="py-12">
                <h2 className="text-3xl font-bold text-center mb-8">Featured Restaurants</h2>
                <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
                    {featuredRestaurants.map((restaurant, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold">{restaurant.name}</h3>
                                <p className="mt-2 text-gray-600">{restaurant.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <Link
                        to={'/resturant-listing'}
                        className="bg-yellow-500 text-white text-center py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300 flex items-center"
                    >
                        Explore more <FiArrowRight className="ml-2" />
                    </Link>
                </div>
            </section>



        </div>
    );
};

export default HomePage;
