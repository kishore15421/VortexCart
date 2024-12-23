import React from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HeroBanner = () => {
  const navigate = useNavigate();
  // Custom Previous and Next Arrow Components
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full p-2 shadow-lg z-10 hover:bg-hover transition"
    >
      <FaArrowLeft />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full p-2 shadow-lg z-10 hover:bg-hover transition"
    >
      <FaArrowRight />
    </button>
  );

  // Slider Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: 'slick-dots custom-dots',
  };

  // Carousel Images
  const banners = [
    {
      title: 'Explore the Future of Shopping',
      description:
        'Discover a seamless and innovative online shopping experience.',
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/2024/Gateway/December/Christmas/GW_PC_Riding-gears-and-more-3000x1200._CB538316642_.jpg',
    },
    {
      title: 'Exclusive Deals on Your Favorite Products',
      description: 'Shop now and save big on the best products in the market.',
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/2024/Gateway/December/Christmas/GW_PC_Riding-gears-and-more-3000x1200._CB538316642_.jpg',
    },
    {
      title: 'Your Trusted Partner in Online Shopping',
      description: 'Find everything you need at unbeatable prices.',
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/2024/Gateway/December/Christmas/GW_PC_Riding-gears-and-more-3000x1200._CB538316642_.jpg',
    },
  ];

  return (
    <div className="bg-gray-50">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="relative w-full h-96">
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-6 md:px-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {banner.title}
              </h2>
              <p className="text-lg md:text-xl text-white mb-6">
                {banner.description}
              </p>
              <button
                className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-hover transition"
                onClick={() => navigate('/products')}
              >
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroBanner;
