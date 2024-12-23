import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { FaLocationPin } from 'react-icons/fa6';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [showLoginModal, setShowLoginModal] = useState(false); // Show login modal
  const [showPincodeModal, setShowPincodeModal] = useState(false); // Show pincode modal
  const [pincode, setPincode] = useState(localStorage.getItem('pincode') || ''); // Get saved pincode

  // Sync isLoggedIn state with localStorage on component mount
  useEffect(() => {
    const savedLoginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(savedLoginStatus);
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'kishore15421@gmail.com' && password === 'a') {
      localStorage.setItem('isLoggedIn', true);
      setIsLoggedIn(true);
      setShowLoginModal(false);
      alert('Login successful');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    alert('Logged out successfully');
  };

  const handlePincodeSave = (newPincode) => {
    localStorage.setItem('pincode', newPincode);
    setPincode(newPincode);
    setShowPincodeModal(false);
  };

  return (
    <header className="w-full shadow-md bg-surface">
      {/* Top Bar */}
      <div className="bg-gray-100 text-gray-600 text-sm py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <span>Welcome to the VortexCart Store</span>
          <div className="flex align-center space-x-4">
            <button
              onClick={() => setShowPincodeModal(true)}
              className="flex hover:text-primary items-center"
            >
              <FaLocationPin />
              {pincode ? `Pincode: ${pincode}` : 'Pincode'}
            </button>
            {isLoggedIn ? (
              <>
                <Link
                  to="/account"
                  className="flex hover:text-primary items-center"
                >
                  <FaUser />
                  My Account
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex hover:text-primary items-center text-sm"
                >
                  <FiLogOut />
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => setShowLoginModal(true)}
                className="flex hover:text-primary items-center text-sm"
              >
                <FaUser />
                Login / Account
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Logo, Search Bar, and Cart */}
      <div className="py-4 px-4 md:px-12">
        <div className="container mx-auto flex items-center justify-between md:justify-start">
          <h1 className="text-2xl font-bold flex-shrink-0">
            <Link to="/" className="text-secondary flex items-center">
              Vortex<span className="text-primary">Cart</span>
            </Link>
          </h1>
          <div className="hidden md:flex mx-auto w-full max-w-md items-center bg-secondary text-primary rounded-md px-4 py-2">
            <input
              type="text"
              placeholder="Search for Products"
              className="bg-transparent outline-none flex-grow text-sm placeholder-primary"
            />
            <FaSearch />
          </div>
          <Link
            to="/cart"
            className="relative ml-auto md:ml-0 hover:text-primary flex-shrink-0"
          >
            <FaShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-error text-surface text-xs rounded-full px-1">
              2
            </span>
          </Link>
        </div>
        <div className="mt-4 md:hidden w-full flex items-center bg-secondary text-primary rounded-md px-4 py-2">
          <input
            type="text"
            placeholder="Search for Products"
            className="bg-transparent outline-none flex-grow text-sm placeholder-primary"
          />
          <FaSearch />
        </div>
      </div>

      {/* Pincode Modal */}
      {showPincodeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <div className="flex justify-end">
              <FaTimes
                className="cursor-pointer hover:text-primary"
                onClick={() => setShowPincodeModal(false)}
              />
            </div>
            <h2 className="text-xl font-bold mb-4">Enter Pincode</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const newPincode = e.target.pincode.value;
                if (/^\d{6}$/.test(newPincode)) {
                  handlePincodeSave(newPincode);
                } else {
                  alert('Please enter a valid 6-digit pincode.');
                }
              }}
            >
              <input
                type="text"
                name="pincode"
                placeholder="Enter 6-digit Pincode"
                className="w-full p-2 border rounded mb-4"
                defaultValue={pincode}
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <div className="flex justify-end">
              <FaTimes
                className="cursor-pointer hover:text-primary"
                onClick={() => setShowLoginModal(false)}
              />
            </div>
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const email = e.target.email.value;
                const password = e.target.password.value;
                handleLogin(email, password);
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border rounded mb-4"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-2 border rounded mb-4"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
