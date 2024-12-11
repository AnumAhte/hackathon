"use client";
import React, { useState, useEffect } from 'react';

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

  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left-side Filter Section */}
        <div className="w-full lg:w-1/4 bg-gray-100 rounded-lg shadow-md p-4 mb-8 lg:mb-0">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Filters</h2>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Categories</h3>
            <ul className="space-y-2">
              {['T-shirts', 'Shirts', 'Hoodies', 'Jeans'].map((category) => (
                <li key={category}>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox text-gray-600" />
                    <span className="ml-2 text-gray-700">{category}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Price */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Price</h3>
            <div className="flex items-center">
              <input type="range" min="50" max="200" className="flex-grow mr-3" />
              <span className="text-gray-700">$50 - $200</span>
            </div>
          </div>

          {/* Colors */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Colors</h3>
            <div className="flex flex-wrap gap-2">
              {['green', 'blue', 'purple', 'pink', 'red', 'orange', 'yellow', 'black', 'white'].map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full border-2 ${color === 'black' ? 'border-gray-300' : ''}`}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Size</h3>
            <div className="flex flex-wrap gap-2">
              {['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'].map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Dress Style */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Dress Style</h3>
            <ul className="space-y-2">
              {['Casual', 'Formal', 'Party'].map((style) => (
                <li key={style}>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox text-gray-600" />
                    <span className="ml-2 text-gray-700">{style}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <button className="bg-black text-white px-4 py-2 rounded-lg w-full">
            Apply Filters
          </button>
        </div>

        {/* Product Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Casual</h1>
            <p className="text-gray-600">
              Showing 1-9 of 100 products | Sort by: <span className="font-semibold">Most Popular</span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden relative"
                onMouseEnter={() => !isMobile && setHoveredProductId(product.id)}
                onMouseLeave={() => !isMobile && setHoveredProductId(null)}
                onClick={() => isMobile && setHoveredProductId(product.id)}
              >
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                  <p className="text-gray-600">{product.price}</p>
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

                  {(hoveredProductId === product.id || isMobile) && (
                    <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800">
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasualPage;
