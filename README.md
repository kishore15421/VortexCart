# VortexCart

VortexCart is a modern and user-friendly e-commerce platform built with React, allowing users to explore products, add items to their cart, and complete purchases seamlessly. This repository includes the source code for the application, ready to be deployed and extended.

---

## Features

### **Core Features**

- **Home Page**: Displays featured and top-selling products.
- **Products Page**: Lists all available products with search and sorting options.
- **Product Details**: Shows detailed information about individual products.
- **Cart Page**: Allows users to view, edit, and remove items from their cart.
- **Checkout Page**: Collects shipping information and places orders.
- **Thank You Page**: Confirms order placement.

### **Additional Features**

- Persistent login state using `localStorage`.
- Dynamic pincode management for location-based services.
- Responsive design suitable for all screen sizes.

---

## Installation

### Prerequisites

- Node.js (>=14.x)
- npm (>=6.x) or Yarn

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/vortexcart.git
   ```

2. Navigate to the project directory:

   ```bash
   cd vortexcart
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   Or, if using Yarn:

   ```bash
   yarn install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   Or:

   ```bash
   yarn start
   ```

5. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## Project Structure

```
.
├── src
│   ├── components        # Reusable UI components
│   ├── data              # JSON data for products
│   ├── pages             # Page components for routing
│   ├── styles            # Global and component-specific styles
│   ├── App.js            # Main application file
│   ├── index.js          # Entry point for React
│   └── ...
├── public                # Static assets
├── package.json          # Project configuration
└── README.md             # Project documentation
```

---

## Scripts

- **`npm start`**: Starts the development server.
- **`npm run build`**: Builds the application for production.
- **`npm test`**: Runs tests.
- **`npm run eject`**: Ejects the project configuration (not recommended).

---

## Usage

### Add New Products

1. Navigate to the `src/data/products.json` file.
2. Add product details in the JSON format:

   ```json
   {
     "id": 11,
     "name": "New Product",
     "category": "Category Name",
     "price": 99.99,
     "description": "Product description here.",
     "image": "https://via.placeholder.com/300x200?text=New+Product"
   }
   ```

3. Save the file, and the product will appear on the Products Page.

### Customize UI

Modify the styles in `src/styles` or update component code in `src/components`.

---

## Deployment

### Deploy to GitHub Pages

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy using your preferred deployment method.

### Hosting on Platforms

- **Vercel** or **Netlify**: Simply connect your repository and deploy.
- **AWS** or **Azure**: Use the build folder to host the static files.

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push the changes:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

- React
- React Router
- Font Awesome
- Tailwind CSS
