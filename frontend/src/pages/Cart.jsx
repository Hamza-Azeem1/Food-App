import PropTypes from 'prop-types';
import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Cart = () => {
    const { cart, setCart } = useOutletContext(); // Access cart and setCart from the context
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        // Calculate total amount and quantity whenever cart changes
        const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalAmt = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
        setTotalQuantity(totalQty);
        setTotalAmount(totalAmt);
    }, [cart]);

    const increaseQuantity = (index) => {
        const newCart = [...cart];
        newCart[index].quantity += 1;
        setCart(newCart);
    };

    const decreaseQuantity = (index) => {
        const newCart = [...cart];
        if (newCart[index].quantity > 1) {
            newCart[index].quantity -= 1;
            setCart(newCart);
        } else {
            // Optionally, you could remove the item if quantity is 1 and user tries to decrease it
            removeItem(index);
        }
    };

    const removeItem = (index) => {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
    };

    if (cart.length === 0) {
        return (
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900">Your Cart</h2>
                <p className="mt-4 text-gray-500">Your cart is empty.</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center sm:text-left">Your Cart</h2>
            <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {cart.map((item, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
                        <img className="w-full h-48 object-cover" src={item.image} alt={item.name} />
                        <div className="p-4 flex flex-col justify-between flex-grow">
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold">{item.name}</h3>
                                <p className="mt-2 text-gray-600 text-sm sm:text-base">{item.description}</p>
                                <p className="mt-4 text-gray-900 font-bold text-base sm:text-lg">${item.price.toFixed(2)}</p>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex items-center">
                                    <button
                                        onClick={() => decreaseQuantity(index)}
                                        className="px-2 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                                    >
                                        -
                                    </button>
                                    <span className="px-4">{item.quantity}</span>
                                    <button
                                        onClick={() => increaseQuantity(index)}
                                        className="px-2 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={() => removeItem(index)}
                                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8 bg-gray-100 p-4 rounded-lg text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold">Bill Details</h3>
                <p className="mt-2 text-gray-800">Total Quantity: {totalQuantity}</p>
                <p className="mt-2 text-gray-800">Total Amount: ${totalAmount.toFixed(2)}</p>
            </div>
        </div>

    );
};

// Add PropTypes validation
Cart.propTypes = {
    cartItems: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
    })),
};

export default Cart;
