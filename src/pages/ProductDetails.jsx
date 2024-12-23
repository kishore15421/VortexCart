import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import ProductCard from '../components/ProductCard'; // Reusable ProductCard component
import { products } from '../data/products';

const ProductDetailsPage = () => {
  const { id } = useParams(); // Fetch product ID from route params

  // Mock Product Data
  const product = products.find((p) => p.id === parseInt(id));
  const [currentImage, setCurrentImage] = useState(product?.images?.[0]);

  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4 md:px-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6">
          <a href="/" className="hover:underline">
            Home
          </a>{' '}
          &gt;{' '}
          <a href="/category" className="hover:underline">
            Electronics
          </a>{' '}
          &gt;{' '}
          <span className="text-gray-800 font-bold">{product.name || id}</span>
        </nav>

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div>
            <Zoom>
              <img
                src={currentImage}
                alt={product.name}
                className="w-full h-auto rounded-lg"
              />
            </Zoom>
            <div className="flex flex-wrap space-x-4 mt-4">
              {product?.images?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-20 h-20 object-cover cursor-pointer rounded-lg ${
                    currentImage === image ? 'border-2 border-primary' : ''
                  }`}
                  onClick={() => setCurrentImage(image)}
                />
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>
            <div className="text-lg text-gray-600 mb-2">
              <span className="text-primary font-bold">{product.price}</span>
              {product.oldPrice && (
                <span className="text-gray-500 line-through ml-2">
                  {product.oldPrice}
                </span>
              )}
            </div>
            <p className="text-gray-700 mb-4">{product.offers}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-hover transition">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Reviews</h2>
          {product?.reviews?.length > 0
            ? product?.reviews?.map((review, index) => (
                <div key={index} className="border-b border-gray-300 pb-4 mb-4">
                  <p className="font-bold text-gray-800">{review.reviewer}</p>
                  <p className="text-sm text-yellow-500">
                    {'⭐'.repeat(review.rating)}
                  </p>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))
            : 'You are the First Reviewer'}
        </div>

        {/* Related Products Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products
              ?.filter((idN) => idN !== id)
              .slice(0, 3)
              ?.map((product) => (
                <ProductCard key={product.id} product={product} view="grid" />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
