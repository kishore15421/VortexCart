import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <section className="py-12 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl bg-white shadow-md rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Thank You for Your Order!
        </h2>
        <p className="text-lg mb-6">
          Your order has been placed successfully. You will receive a
          confirmation email shortly.
        </p>
        <Link
          to="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </div>
    </section>
  );
};

export default ThankYouPage;
