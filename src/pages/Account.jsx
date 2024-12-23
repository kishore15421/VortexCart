import React, { useState } from 'react';

const AccountPage = () => {
  const [userDetails, setUserDetails] = useState({
    name: 'Agent Tester',
    email: 'agent@one.com',
    phone: '+1 123 456 7890',
    address: '123 Main Street, Springfield',
  });

  const [editMode, setEditMode] = useState(false);
  const [updatedDetails, setUpdatedDetails] = useState(userDetails);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setUserDetails(updatedDetails);
    setEditMode(false);
    alert('Account details updated successfully!');
  };

  return (
    <section className="py-12 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">
          My Account
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Personal Information</h3>
          {editMode ? (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={updatedDetails.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={updatedDetails.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={updatedDetails.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Address
                </label>
                <textarea
                  name="address"
                  value={updatedDetails.address}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg"
                  rows="3"
                />
              </div>
              <button
                className="bg-blue-600 text-white px-6 py-3 rounded-lg mr-2"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="bg-gray-600 text-white px-6 py-3 rounded-lg"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <p className="mb-2">
                <strong>Name:</strong> {userDetails.name}
              </p>
              <p className="mb-2">
                <strong>Email:</strong> {userDetails.email}
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> {userDetails.phone}
              </p>
              <p>
                <strong>Address:</strong> {userDetails.address}
              </p>
              <button
                className="mt-4 bg-primary text-white px-6 py-3 rounded-lg"
                onClick={() => setEditMode(true)}
              >
                Edit Details
              </button>
            </>
          )}
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Order History</h3>
          <ul className="space-y-4">
            <li className="border-b pb-4">
              <p>
                <strong>Order #12345</strong> - Wireless Headphones
              </p>
              <p>Date: 2023-12-20</p>
              <p>Status: Delivered</p>
            </li>
            <li className="border-b pb-4">
              <p>
                <strong>Order #12346</strong> - Smartwatch
              </p>
              <p>Date: 2023-11-15</p>
              <p>Status: Shipped</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AccountPage;
