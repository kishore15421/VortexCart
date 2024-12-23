import React from 'react';
import HeroBanner from '../components/home/HeroPage';
import TopOffers from '../components/home/TopOffers';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 4); // First 4 products as featured
  const topSellingProducts = products.slice(4, 8); // Next 4 products as top selling

  return (
    <div className="bg-background">
      <HeroBanner />
      <TopOffers />
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6 text-secondary">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6 text-primary">
            Top Selling Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {topSellingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
