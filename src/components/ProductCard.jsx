import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product, view }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className={`bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer ${
        view === 'list' ? 'flex' : ''
      }`}
    >
      <img
        src={product.image}
        alt={product.name}
        className={`object-cover ${
          view === 'list' ? 'w-48 h-48' : 'w-full h-48'
        }`}
      />
      <div className="p-4 flex flex-col justify-between">
        <div>
          <p className="text-xs text-gray-500">{product.category}</p>
          <h3 className="text-sm font-bold text-gray-800">{product.name}</h3>
          {view === 'list' && (
            <p className="text-gray-600 text-sm mt-2">{product.description}</p>
          )}
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-lg font-bold text-primary">{product.price}</p>
            {product.oldPrice && (
              <p className="text-sm text-gray-500 line-through">
                {product.oldPrice}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert('Added to Wishlist');
            }}
            className="text-gray-500 hover:text-red-500 flex items-center space-x-1"
            title="Add to Wishlist"
          >
            <FaHeart />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert('Added to Cart');
            }}
            className="text-gray-500 hover:text-primary flex items-center space-x-1"
            title="Add to Cart"
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
