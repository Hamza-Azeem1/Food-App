import { useState, useEffect } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import { toast } from 'react-toastify';

import img1 from '../assets/pizza.jpg';

const RestaurantDetailPage = () => {
    const { id } = useParams();
    const { onCartUpdate } = useOutletContext();  // Access onCartUpdate from context
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        const dummyRestaurant = {
            id: id,
            name: "Pizza Palace",
            category: "Italian",
            rating: 4.5,
            address: "123 Main St, City, Country",
            phone: "+1 234 567 8900",
            hours: "Mon-Sun: 11:00 AM - 10:00 PM",
            image: img1,
            menu: [
                { id: 1, name: "Margherita Pizza", description: "Classic tomato and mozzarella", price: 12.99, image: img1 },
                { id: 2, name: "Pepperoni Pizza", description: "Spicy pepperoni with mozzarella", price: 14.99, image: img1 },
                { id: 3, name: "Vegetarian Pizza", description: "Assorted vegetables with mozzarella", price: 13.99, image: img1 },
            ]
        };
        setRestaurant(dummyRestaurant);
    }, [id]);

    const addToCart = (item) => {
        onCartUpdate(item);
        toast.success(`${item.name} added to cart!`);
    };

    if (!restaurant) return <div>Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-full w-full object-cover md:w-48" src={restaurant.image} alt={restaurant.name} />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{restaurant.category}</div>
                            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{restaurant.name}</h2>
                            <div className="mt-2 flex items-center text-gray-500">
                                <FaStar className="text-yellow-400 mr-1" />
                                <span>{restaurant.rating} stars</span>
                            </div>
                            <div className="mt-4 flex items-center text-gray-500">
                                <FaMapMarkerAlt className="mr-2" />
                                <span>{restaurant.address}</span>
                            </div>
                            <div className="mt-2 flex items-center text-gray-500">
                                <FaPhone className="mr-2" />
                                <span>{restaurant.phone}</span>
                            </div>
                            <div className="mt-2 flex items-center text-gray-500">
                                <FaClock className="mr-2" />
                                <span>{restaurant.hours}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className="mt-16 text-2xl font-extrabold text-gray-900">Menu</h3>
                <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {restaurant.menu.map((item) => (
                        <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img className="w-full h-48 object-cover" src={item.image} alt={item.name} />
                            <div className="p-6">
                                <h4 className="text-xl font-bold">{item.name}</h4>
                                <p className="mt-2 text-gray-600">{item.description}</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-gray-900 font-bold">${item.price.toFixed(2)}</span>
                                    <button
                                        onClick={() => addToCart(item)}
                                        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RestaurantDetailPage;
