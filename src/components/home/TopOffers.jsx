import React from 'react';
import { images } from '../../assets';

const TopOffers = () => {
  const offers = [
    {
      title: 'Smartphone Sale',
      description: 'Up to 50% off on top smartphone brands.',
      image: images.Sale,
      discount: '50%',
    },
    {
      title: 'Fashion Fiesta',
      description: 'Flat 40% off on all fashion items.',
      image: images.Sale,
      discount: '40%',
    },
    {
      title: 'Home Appliances',
      description: 'Save up to 30% on home essentials.',
      image: images.Sale,
      discount: '30%',
    },
    {
      title: 'Gaming Accessories',
      description: 'Grab the latest gaming gear at 20% off.',
      image: images.Sale,
      discount: '20%',
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
          Top Offers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              {/* Offer Image */}
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-48 object-cover"
              />
              {/* Discount Badge */}
              <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold py-1 px-3 rounded-full">
                {offer.discount} OFF
              </div>
              {/* Offer Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {offer.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {offer.description}
                </p>
                <button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-hover transition">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopOffers;
