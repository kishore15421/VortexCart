import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetailsPage from './pages/ProductDetails';
import Login from './pages/Login';
import AccountPage from './pages/Account';
import CartPage from './pages/CartPage';
import ProductsPage from './pages/ProductsPage';
import CheckoutPage from './pages/CheckoutPage';
import ThankYouPage from './pages/ThankYouPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route
          path="*"
          element={
            <section className="py-24 bg-slate-200 text-center text-primary min-h-96">
              Page Not found
            </section>
          }
        />
      </Routes>
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-6">
            Subscribe to our newsletter for the latest updates and offers.
          </p>
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-l-lg border-none outline-none w-1/2"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-primary font-bold rounded-r-lg hover:bg-gray-100"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </Router>
  );
};

export default App;
