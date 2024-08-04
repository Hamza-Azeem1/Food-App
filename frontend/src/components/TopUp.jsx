import { FaArrowCircleUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const TopUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            {isVisible && (
                <button
                    className="fixed bottom-8 right-8 bg-indigo-500 text-white rounded-full p-3 text-2xl shadow-md"
                    onClick={scrollToTop}
                >
                    <FaArrowCircleUp />
                </button>
            )}
        </div>
    );
};

export default TopUp;
