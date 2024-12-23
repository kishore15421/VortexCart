import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { images } from '../assets';

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      quantity: 1,
      image: images.Headphones,
    },
    {
      id: 2,
      name: 'Smartwatch',
      price: 199.99,
      quantity: 2,
      image: images.Watch,
    },
  ]);

  // Calculate total price
  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle quantity change
  const handleQuantityChange = (id, increment) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + increment) }
          : item
      )
    );
  };

  // Handle item removal
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const checkout = () => {
    navigate('/checkout');
  };

  return (
    <section className="py-12 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">
          Shopping Cart
        </h2>

        {cartItems.length > 0 ? (
          <>
            <table className="w-full text-left mb-6">
              <thead>
                <tr className="border-b">
                  <th className="py-3">Product</th>
                  <th className="py-3">Price</th>
                  <th className="py-3">Quantity</th>
                  <th className="py-3">Total</th>
                  <th className="py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-3 flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <span>{item.name}</span>
                    </td>
                    <td className="py-3">${item.price.toFixed(2)}</td>
                    <td className="py-3 flex items-center">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </td>
                    <td className="py-3">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="py-3">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-between items-center">
              <Link
                to="/products"
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
              >
                Continue Shopping
              </Link>
              <div>
                <h3 className="text-lg font-bold">
                  Total: ${calculateTotal().toFixed(2)}
                </h3>
                <button
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4 hover:bg-blue-700"
                  onClick={checkout}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">
            <p className="text-lg">Your cart is empty.</p>
            <Link
              to="/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4 inline-block hover:bg-blue-700"
            >
              Shop Now
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
