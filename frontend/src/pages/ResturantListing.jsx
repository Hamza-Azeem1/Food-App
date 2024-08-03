import { useState } from 'react';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { GiKnifeFork } from 'react-icons/gi';
import { Link } from 'react-router-dom';

import img1 from '../assets/pizza.jpg'
import img2 from '../assets/burger.jpg'
import img3 from '../assets/sushi.jpg'
import img4 from '../assets/pasta.jpg'
import img5 from '../assets/chineese.jpg'
import img6 from '../assets/curry.jpg'
import img7 from '../assets/taco.jpg'
import img8 from '../assets/seafood.jpg'
import img9 from '../assets/bbq.jpg'
import img10 from '../assets/vegan.jpg'
import img11 from '../assets/raman.jpg'
import img12 from '../assets/curry2.jpg'
import img13 from '../assets/fried rice.jpg'
import img14 from '../assets/steak.jpg'
import img15 from '../assets/pizza2.jpg'


const RestaurantListingPage = () => {
    const [filter, setFilter] = useState({ category: 'All', rating: 0, distance: '' });

    const restaurants = [
        { name: "Pizza Palace", category: "Italian", rating: 4.5, distance: "2 km", image: img1 },
        { name: "Burger Haven", category: "Burgers", rating: 4.2, distance: "3 km", image: img2 },
        { name: "Sushi World", category: "Japanese", rating: 4.8, distance: "1.5 km", image: img3 },
        { name: "Pasta House", category: "Italian", rating: 4.7, distance: "2.5 km", image: img4 },
        { name: "Dragon Chinese", category: "Chinese", rating: 4.3, distance: "3.5 km", image: img5 },
        { name: "Spicy Curry", category: "Indian", rating: 4.6, distance: "2 km", image: img6 },
        { name: "Taco Fiesta", category: "Mexican", rating: 4.1, distance: "1 km", image: img7 },
        { name: "Seafood Delight", category: "Seafood", rating: 4.4, distance: "4 km", image: img8 },
        { name: "BBQ Grill", category: "American", rating: 4.5, distance: "3 km", image: img9 },
        { name: "Vegan Paradise", category: "Vegan", rating: 4.9, distance: "2.2 km", image: img10 },
        { name: "Ramen Noodles", category: "Japanese", rating: 4.3, distance: "2.8 km", image: img11 },
        { name: "Curry Corner", category: "Indian", rating: 4.2, distance: "1.5 km", image: img12 },
        { name: "Fried Rice Haven", category: "Chinese", rating: 4.6, distance: "3.2 km", image: img13 },
        { name: "Steak House", category: "American", rating: 4.7, distance: "4 km", image: img14 },
        { name: "Pizza Express", category: "Italian", rating: 4.3, distance: "2.4 km", image: img15 }
    ];

    const categories = ['All', 'Italian', 'Burgers', 'Japanese', 'Chinese', 'Indian', 'Mexican', 'Seafood', 'American', 'Vegan'];

    const handleCategoryChange = (e) => setFilter({ ...filter, category: e.target.value });
    const handleRatingChange = (e) => setFilter({ ...filter, rating: parseFloat(e.target.value) });
    const handleDistanceChange = (e) => setFilter({ ...filter, distance: e.target.value });

    const filteredRestaurants = restaurants.filter(restaurant => {
        return (filter.category === 'All' || restaurant.category === filter.category) &&
            (filter.rating === 0 || restaurant.rating >= filter.rating) &&
            (filter.distance === '' || restaurant.distance === filter.distance);
    });

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto py-12 px-4">
                {/* Filters Section */}
                <div className="mb-8 flex flex-col md:flex-row items-center justify-between">
                    {/* Category Filter */}
                    <div className="flex items-center mb-4 md:mb-0">
                        <label className="mr-2 font-bold">Category:</label>
                        <select className="p-2 bg-white border rounded-md" onChange={handleCategoryChange}>
                            {categories.map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Rating Filter */}
                    <div className="flex items-center mb-4 md:mb-0">
                        <label className="mr-2 font-bold">Rating:</label>
                        <select className="p-2 bg-white border rounded-md" onChange={handleRatingChange}>
                            <option value="0">All</option>
                            <option value="4">4 stars & up</option>
                            <option value="4.5">4.5 stars & up</option>
                        </select>
                    </div>

                    {/* Distance Filter */}
                    <div className="flex items-center">
                        <label className="mr-2 font-bold">Distance:</label>
                        <select className="p-2 bg-white border rounded-md" onChange={handleDistanceChange}>
                            <option value="">All</option>
                            <option value="1 km">1 km</option>
                            <option value="2 km">2 km</option>
                            <option value="3 km">3 km</option>
                            <option value="4 km">4 km</option>
                        </select>
                    </div>
                </div>

                {/* Restaurant Listings */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredRestaurants.map((restaurant, index) => (
                        <Link key={index} to={`/restaurant/${index + 1}`} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold">{restaurant.name}</h3>
                                <div className="flex items-center mt-2">
                                    <GiKnifeFork className="text-gray-500 mr-2" />
                                    <span className="text-gray-700">{restaurant.category}</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    <FaStar className="text-yellow-500 mr-2" />
                                    <span className="text-gray-700">{restaurant.rating} stars</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                                    <span className="text-gray-700">{restaurant.distance}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* No Restaurants Found */}
                {filteredRestaurants.length === 0 && (
                    <div className="text-center text-gray-500 mt-8">
                        No restaurants match your filters.
                    </div>
                )}
            </div>
        </div>
    );
};

export default RestaurantListingPage;
