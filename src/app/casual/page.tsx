import React from 'react';

const CasualPage = () => {
  const products = [
    {
      id: 1,
      name: 'Gradient Graphic T-shirt',
      price: '$145',
      image: '/images/casual/Frame 33 (3).png',
      rating: 3.5,
    },
    {
      id: 2,
      name: 'Polo with Tipping Details',
      price: '$180',
      image: '/images/casual/Frame 34 (3).png',
      rating: 4.5,
    },
    {
      id: 3,
      name: 'Black Striped T-shirt',
      price: '$120',
      image: '/images/casual/Frame 38 (4).png',
      rating: 5.0,
    },
    {
      id: 4,
      name: 'Skinny Fit Jeans',
      price: '$240',
      image: '/images/casual/Frame 71.png',
      rating: 4.0,
    },
    {
      id: 5,
      name: 'Checked Shirt',
      price: '$130',
      image: '/images/casual/Frame 72.png',
      rating: 4.5,
    },
    {
      id: 6,
      name: 'Sleeve Striped T-shirt',
      price: '$80',
      image: '/images/casual/Frame 73.png',
      rating: 3.0,
    },
    {
      id: 7,
      name: 'Vertical Striped Shirt',
      price: '$212',
      image: '/images/casual/Frame 32 (2).png',
      rating: 4.5,
    },
    {
      id: 8,
      name: 'Orange Graphic T-shirt',
      price: '$145',
      image: '/images/casual/Frame 70.png',
      rating: 3.5,
    },
    {
      id: 9,
      name: 'Loose Fit Bermuda Shorts',
      price: '$80',
      image: '/images/casual/Frame 71 (1).png',
      rating: 3.0,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
      {/* Filter Section */}
      <div className="w-full lg:w-1/4 bg-gray-100 rounded-lg shadow-md p-4 mb-6 lg:mb-0">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Filters</h2>
        {/* Categories */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Categories</h3>
          <ul className="space-y-2">
            <li>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-gray-600" />
                <span className="ml-2 text-gray-700">T-shirts</span>
              </label>
            </li>
            <li>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-gray-600" />
                <span className="ml-2 text-gray-700">Shirts</span>
              </label>
            </li>
            <li>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-gray-600" />
                <span className="ml-2 text-gray-700">Hoodies</span>
              </label>
            </li>
          </ul>
        </div>
        {/* Price Range */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Price Range</h3>
          <input type="range" min="0" max="500" className="w-full" />
          <div className="flex justify-between text-gray-700 mt-1">
            <span>$0</span>
            <span>$500</span>
          </div>
        </div>
        {/* Colors */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Colors</h3>
          <div className="flex space-x-2">
            <button className="w-6 h-6 rounded-full bg-red-500"></button>
            <button className="w-6 h-6 rounded-full bg-blue-500"></button>
            <button className="w-6 h-6 rounded-full bg-green-500"></button>
            <button className="w-6 h-6 rounded-full bg-yellow-500"></button>
          </div>
        </div>
        {/* Sizes */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Sizes</h3>
          <div className="flex flex-wrap gap-2">
            {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <button
                key={size}
                className="px-3 py-1 border rounded-lg text-gray-700 hover:bg-gray-200"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        {/* Dress Style */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Dress Style</h3>
          <div className="flex flex-wrap gap-2">
            {['Casual', 'Formal', 'Party', 'Gym'].map((style) => (
              <button
                key={style}
                className="px-3 py-1 border rounded-lg text-gray-700 hover:bg-gray-200"
              >
                {style}
              </button>
            ))}
          </div>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-lg w-full">
          Apply Filters
        </button>
      </div>

      {/* Product Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {products.map((product) => (
    <div
      key={product.id}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {product.name}
        </h2>
        <p className="text-gray-600">{product.price}</p>
        {/* Star Ratings */}
        <div className="flex items-center space-x-1 mt-2">
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={`${
                index < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  ))}



        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
            Previous
          </button>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                {page}
              </button>
            ))}
          </div>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CasualPage;
