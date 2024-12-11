"use client";

import React, { useState } from "react";

const TShirtPage = () => {
  const [selectedColor, setSelectedColor] = useState("#6b4f3b");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <nav className="text-sm text-gray-600 mb-6">
        <span className="hover:underline">Home</span> &gt; 
        <span className="hover:underline">Shop</span> &gt; 
        <span className="hover:underline">Men</span> &gt; 
        <span className="text-black">T-shirts</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="space-y-6">
          <img
            src="/images/tshirt/image 1.png"
            alt="T-shirt"
            className="w-full rounded-lg border"
          />
          <div className="flex space-x-4">
            <img
              src="/images/tshirt/image 2.png"
              alt="T-shirt"
              className="w-20 h-20 object-cover border rounded-lg"
            />
            <img
              src="/images/tshirt/image 5.png"
              alt="T-shirt"
              className="w-20 h-20 object-cover border rounded-lg"
            />
            <img
              src="/images/tshirt/image 6.png"
              alt="T-shirt"
              className="w-20 h-20 object-cover border rounded-lg"
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div>
          <h1 className="text-4xl font-bold mb-4">ONE LIFE GRAPHIC T-SHIRT</h1>
          <div className="flex items-center space-x-2 mb-4">
            <div className="text-yellow-500 text-xl">★★★★☆</div>
            <span className="text-gray-500 text-sm">4.5/5</span>
          </div>
          <div className="flex items-center space-x-6 mb-6">
            <span className="text-3xl font-bold text-black">$260</span>
            <span className="text-gray-400 line-through text-lg">$300</span>
            <span className="text-red-500 text-lg">-40%</span>
          </div>
          <p className="text-gray-700 mb-6 text-lg">
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Select Colors */}
          <div className="mb-6">
            <span className="block text-base font-medium text-gray-700 mb-2">Select Colors</span>
            <div className="flex space-x-4">
              <button
                onClick={() => handleColorChange("#6b4f3b")}
                className={`w-10 h-10 rounded-full border ${
                  selectedColor === "#6b4f3b" ? "border-black" : "border-gray-300"
                }`}
                style={{ backgroundColor: "#6b4f3b" }}
              ></button>
              <button
                onClick={() => handleColorChange("#2c3e50")}
                className={`w-10 h-10 rounded-full border ${
                  selectedColor === "#2c3e50" ? "border-black" : "border-gray-300"
                }`}
                style={{ backgroundColor: "#2c3e50" }}
              ></button>
              <button
                onClick={() => handleColorChange("#004d40")}
                className={`w-10 h-10 rounded-full border ${
                  selectedColor === "#004d40" ? "border-black" : "border-gray-300"
                }`}
                style={{ backgroundColor: "#004d40" }}
              ></button>
            </div>
          </div>

          {/* Choose Size */}
          <div className="mb-6">
            <span className="block text-base font-medium text-gray-700 mb-2">Choose Size</span>
            <div className="flex space-x-3">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeChange(size)}
                  className={`px-5 py-3 border rounded-lg text-base font-medium ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-8 flex items-center space-x-6">
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 text-gray-600 hover:text-black"
              >
                -
              </button>
              <span className="px-6 py-2 border-x text-gray-800 text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 text-gray-600 hover:text-black"
              >
                +
              </button>
            </div>
            <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TShirtPage;
