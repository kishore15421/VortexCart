import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products as productsData } from '../data/products';

const ProductsPage = () => {
  const [products, setProducts] = useState(productsData);
  const [sortOption, setSortOption] = useState('default');
  const [searchTerm, setSearchTerm] = useState('');

  // Handle sorting
  const handleSort = (option) => {
    setSortOption(option);
    const sortedProducts = [...products];
    if (option === 'priceLow') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === 'priceHigh') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else {
      setProducts(productsData); // Reset to default
      return;
    }
    setProducts(sortedProducts);
  };

  // Handle search
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-12 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">
          Products
        </h2>

        {/* Search and Sort */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-3 border rounded-lg w-1/3"
          />
          <select
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
            className="p-3 border rounded-lg"
          >
            <option value="default">Sort By</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.category}</p>
                  <div className="mt-2">
                    <span className="text-primary font-bold">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.oldPrice && (
                      <span className="text-gray-500 line-through ml-2">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
              <button className="bg-primary text-white w-full py-2 hover:bg-secondary">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
