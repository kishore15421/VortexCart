import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { FaTh, FaList } from 'react-icons/fa';

const ProductListingPage = () => {
  const [view, setView] = useState('grid'); // Default view
  const [sortOption, setSortOption] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const products = [
    {
      id: 1,
      name: '1pc Home Kitchen Foldable Water Ladle',
      category: 'Home & Kitchen',
      price: '$7.28',
      oldPrice: '$12.14',
      image: 'https://via.placeholder.com/300x200?text=Product+1',
      description:
        'Online Shopping at the cheapest price for various categories.',
    },
    {
      id: 2,
      name: '1PC Portable Umbrella Style Food Cover',
      category: 'Home & Kitchen',
      price: '$30.00',
      image: 'https://via.placeholder.com/300x200?text=Product+2',
      description: 'Durable plastic material, dishwasher safe.',
    },
    // Add more products here
  ];

  // Sorting logic
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === 'priceLow') {
      return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
    } else if (sortOption === 'priceHigh') {
      return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
    }
    return 0; // Default sorting
  });

  // Pagination logic
  const totalRecords = products.length;
  const totalPages = Math.ceil(totalRecords / productsPerPage);
  const displayedProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4 md:px-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6">
          <a href="/" className="hover:underline">
            Home
          </a>{' '}
          &gt; <span className="text-gray-800 font-bold">Home & Kitchen</span>
        </nav>

        {/* Header */}
        <div className="flex justify-between flex-wrap items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Home & Kitchen</h1>
          <div className="flex items-center flex-wrap space-x-4">
            <span className="text-gray-600">
              Showing {displayedProducts.length} of {totalRecords} results
            </span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 ml-auto"
            >
              <option value="default">Default sorting</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
            </select>
            <div className="flex space-x-2">
              <button
                onClick={() => setView('grid')}
                className={`p-2 ${
                  view === 'grid' ? 'text-primary' : 'text-gray-600'
                } hover:text-primary`}
              >
                <FaTh />
              </button>
              <button
                onClick={() => setView('list')}
                className={`p-2 ${
                  view === 'list' ? 'text-primary' : 'text-gray-600'
                } hover:text-primary`}
              >
                <FaList />
              </button>
            </div>
          </div>
        </div>

        {/* Products */}
        <div
          className={
            view === 'list'
              ? 'space-y-6'
              : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
          }
        >
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} view={view} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === i + 1
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListingPage;
