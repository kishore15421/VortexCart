// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock login validation
    if (email === 'user@example.com' && password === 'password') {
      alert('Login successful');
      navigate('/'); // Redirect to home page
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <section className="py-24 bg-gray-100 text-center min-h-screen">
      <div className="container mx-auto px-6 max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 w-full rounded-lg border border-gray-300"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 w-full rounded-lg border border-gray-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
