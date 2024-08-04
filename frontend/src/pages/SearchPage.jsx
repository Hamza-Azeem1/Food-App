import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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

const SearchPage = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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

    useEffect(() => {
        if (query) {
            const results = restaurants.filter(restaurant =>
                restaurant.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredRestaurants(results);
        }
    }, [query]);

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Search Results for {query}</h1>
            {filteredRestaurants.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredRestaurants.map((restaurant, index) => (
                        <Link key={index} to={`/restaurant/${index + 1}`} className="bg-white rounded-lg shadow p-4">
                            <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h2 className="text-xl font-bold">{restaurant.name}</h2>
                            <p className="text-gray-700">{restaurant.category}</p>
                            <p className="text-gray-700">Rating: {restaurant.rating}</p>
                            <p className="text-gray-700">Distance: {restaurant.distance}</p>
                        </Link>
                    ))}
                </ul>
            ) : (
                <p className="text-red-500">No results found for {query}</p>
            )}
        </div>
    );
};

export default SearchPage;
