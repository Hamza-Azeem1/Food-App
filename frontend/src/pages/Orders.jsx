import { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaClock } from 'react-icons/fa';

import img1 from '../assets/pizza.jpg';
import img2 from '../assets/pizza2.jpg'

const Orders = () => {
    const [orders] = useState([
        {
            orderId: '12345',
            items: [
                { id: 1, name: "Margherita Pizza", description: "Classic tomato and mozzarella", price: 12.99, image: img1 },
                { id: 2, name: "Pepperoni Pizza", description: "Spicy pepperoni with mozzarella", price: 14.99, image: img2 }
            ],
            totalAmount: 27.98,
            status: 'Delivered',
            orderDate: '2024-07-29'
        },
        {
            orderId: '12346',
            items: [
                { id: 3, name: "Vegetarian Pizza", description: "Assorted vegetables with mozzarella", price: 13.99, image: img1 }
            ],
            totalAmount: 13.99,
            status: 'Pending',
            orderDate: '2024-07-30'
        },
        {
            orderId: '12347',
            items: [
                { id: 1, name: "Margherita Pizza", description: "Classic tomato and mozzarella", price: 12.99, image: img2 }
            ],
            totalAmount: 12.99,
            status: 'Canceled',
            orderDate: '2024-07-28'
        }
    ]);

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Delivered':
                return <FaCheckCircle className="text-green-500" />;
            case 'Pending':
                return <FaClock className="text-yellow-500" />;
            case 'Canceled':
                return <FaTimesCircle className="text-red-500" />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8 sm:p-10">
                <h1 className="text-3xl font-bold mb-8 text-indigo-600">My Orders</h1>
                {orders.map((order) => (
                    <div key={order.orderId} className="mb-8 border-b pb-4">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <h2 className="text-xl font-semibold">Order ID: {order.orderId}</h2>
                                <p className="text-gray-600">Order Date: {order.orderDate}</p>
                            </div>
                            <div className="flex items-center">
                                {getStatusIcon(order.status)}
                                <span className="ml-2 text-lg font-semibold">{order.status}</span>
                            </div>
                        </div>
                        <ul className="space-y-4">
                            {order.items.map((item) => (
                                <li key={item.id} className="flex items-center">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded-lg mr-4"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold">{item.name}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                        <p className="text-gray-800 font-semibold">${item.price.toFixed(2)}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 text-right">
                            <p className="text-xl font-bold">Total: ${order.totalAmount.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;
