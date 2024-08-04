import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopUp from './components/TopUp';

function App() {
  const [cart, setCart] = useState([]);

  const handleCartUpdate = (item) => {
    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);
    if (existingItemIndex !== -1) {
      const newCart = [...cart];
      newCart[existingItemIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        style={{
          width: '70%',
          maxWidth: '400px',
          margin: '0 auto',
          left: '50%',
          top: '30px',
          transform: 'translateX(-50%)',
        }}
      />
      <Header cartItems={cart} />
      <Outlet context={{ cart, setCart, onCartUpdate: handleCartUpdate }} />
      <TopUp />
      <Footer />
    </>
  );
}

export default App;
