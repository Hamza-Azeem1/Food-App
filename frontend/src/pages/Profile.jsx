import { useState, useEffect } from 'react';
import { FaUserEdit, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit } from 'react-icons/fa';

const Profile = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const handleEditInfo = () => {
        console.log('Edit info clicked');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-8 sm:p-10">
                <h1 className="text-3xl font-bold mb-8 flex items-center justify-center text-indigo-600">
                    <FaUserEdit className="mr-2" />
                    User Profile
                </h1>
                <div className="space-y-6">
                    <div className="flex items-center">
                        <FaUserEdit className="text-gray-600 mr-3" />
                        <div>
                            <span className="font-semibold text-gray-700">Name:</span>
                            <span className="ml-2 text-gray-900">{user.name || 'Not Available'}</span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <FaEnvelope className="text-gray-600 mr-3" />
                        <div>
                            <span className="font-semibold text-gray-700">Email:</span>
                            <span className="ml-2 text-gray-900">{user.email || 'Not Available'}</span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <FaPhone className="text-gray-600 mr-3" />
                        <div>
                            <span className="font-semibold text-gray-700">Phone:</span>
                            <span className="ml-2 text-gray-900">{user.phone || 'Not Available'}</span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <FaMapMarkerAlt className="text-gray-600 mr-3" />
                        <div>
                            <span className="font-semibold text-gray-700">Address:</span>
                            <span className="ml-2 text-gray-900">{user.address || 'Not Available'}</span>
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex justify-center">
                    <button
                        className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition duration-300 flex items-center"
                        onClick={handleEditInfo}
                    >
                        <FaEdit className="mr-2" />
                        Edit Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
