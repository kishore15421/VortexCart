import { images } from '../assets';

export const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 99.99,
    oldPrice: 129.99,
    description:
      'High-quality sound with noise cancellation for a great music experience.',
    image: images.Headphones,
    images: [
      images.Headphones,
      images.Headphones,
      images.Headphones,
      images.Headphones,
    ],
  },
  {
    id: 2,
    name: 'Smartwatch',
    category: 'Wearables',
    price: 199.99,
    description:
      'Stay connected on the go with notifications, fitness tracking, and more.',
    image: images.TV,
    images: [images.TV, images.TV, images.TV, images.TV],
  },
  {
    id: 3,
    name: 'Gaming Mouse',
    category: 'Gaming',
    price: 49.99,
    oldPrice: 59.99,
    description:
      'Ergonomic design and customizable buttons for a superior gaming experience.',
    image: images.Mouse,
    images: [images.Mouse, images.Mouse, images.Mouse],
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    category: 'Audio',
    price: 79.99,
    description:
      'Portable speaker with high bass and long-lasting battery life.',
    image: images.TV,
    images: [images.TV],
  },
  {
    id: 5,
    name: '4K Smart TV',
    category: 'Home Appliances',
    price: 899.99,
    oldPrice: 1199.99,
    description:
      'Immersive 4K Ultra HD resolution with built-in streaming apps.',
    image: images.TV,
    images: [images.TV],
  },
  {
    id: 6,
    name: 'Air Purifier',
    category: 'Home Appliances',
    price: 149.99,
    description: 'Clean and purify air for a healthier home environment.',
    image: images.AP,
    images: [images.AP, images.AP],
  },
  {
    id: 7,
    name: 'Treadmill',
    category: 'Sports Equipment',
    price: 499.99,
    description: 'Foldable treadmill with built-in workout programs.',
    image: images.TM,
    images: [images.TM, images.TM, images.TM],
  },
  {
    id: 8,
    name: 'Office Chair',
    category: 'Furniture',
    price: 129.99,
    description:
      'Ergonomic office chair with lumbar support for comfortable working hours.',
    image: images.Chair,
    images: [images.Chair, images.Chair, images.Chair],
  },
  {
    id: 9,
    name: 'Novel: The Great Adventure',
    category: 'Books',
    price: 19.99,
    description:
      'A thrilling novel filled with suspense and unexpected twists.',
    image: images.Book,
    images: [images.Book, images.Book, images.Book],
  },
  {
    id: 10,
    name: 'Kids Play Tent',
    category: 'Toys',
    price: 39.99,
    description:
      'Fun and durable play tent for kids to enjoy indoor and outdoor activities.',
    image: images.Tent,
    images: [images.Tent, images.Tent, images.Tent],
  },
];
