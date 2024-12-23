import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { images } from '../assets';

const CheckoutPage = () => {
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    country: '',
  });

  const cartItems = [
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
  ];

  const navigate = useNavigate();

  // Calculate total price
  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePlaceOrder = () => {
    // Validate form fields (simple validation)
    if (Object.values(shippingDetails).some((field) => !field.trim())) {
      alert('Please fill in all the shipping details.');
      return;
    }

    // Redirect to Thank You page
    navigate('/thank-you');
  };

  return (
    <section className="py-12 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">
          Checkout
        </h2>

        {/* Cart Summary */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Order Summary</h3>
          <table className="w-full text-left mb-4">
            <thead>
              <tr className="border-b">
                <th className="py-3">Product</th>
                <th className="py-3">Price</th>
                <th className="py-3">Quantity</th>
                <th className="py-3">Total</th>
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
                  <td className="py-3">{item.quantity}</td>
                  <td className="py-3">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right font-bold">
            Total: ${calculateTotal().toFixed(2)}
          </div>
        </div>

        {/* Shipping Details Form */}
        <div>
          <h3 className="text-lg font-bold mb-4">Shipping Details</h3>
          <form className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={shippingDetails.name}
              onChange={handleInputChange}
              className="p-3 border rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={shippingDetails.email}
              onChange={handleInputChange}
              className="p-3 border rounded-lg"
            />
            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={shippingDetails.address}
              onChange={handleInputChange}
              className="p-3 border rounded-lg"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={shippingDetails.city}
              onChange={handleInputChange}
              className="p-3 border rounded-lg"
            />
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              value={shippingDetails.zip}
              onChange={handleInputChange}
              className="p-3 border rounded-lg"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={shippingDetails.country}
              onChange={handleInputChange}
              className="p-3 border rounded-lg"
            />
          </form>
        </div>

        {/* Place Order Button */}
        <div className="text-right mt-6">
          <button
            onClick={handlePlaceOrder}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
