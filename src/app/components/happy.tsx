"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

import Image from "next/image";

// Define the type for the product object
interface Product {
  name: string;
  image: string;
}

function Happy() {
  return (
    <main className="px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mt-10 mb-10">
        {/* Text on the left */}
        <h1 className="text-gray-800 font-black text-lg sm:text-xl md:text-2xl lg:text-3xl">
          OUR HAPPY CUSTOMERS
        </h1>

        {/* Arrows on the right */}
        <div className="flex space-x-2">
          <button className="p-2 rounded-full hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Product Boxes Section */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductBox key={index} product={product} />
        ))}
      </div>
    </main>
  );
}

// Product Box Component
const ProductBox = ({ product }: { product: Product }) => (
  <div className="group shadow-md bg-neutral-100 rounded-lg overflow-hidden">
    <div className="relative w-full h-[180px] flex justify-center items-center">
      <Image
        src={product.image}
        width={300}
        height={180}
        alt={product.name}
        className="rounded-lg object-cover"
      />
    </div>
  </div>
);

// Mock Product Data
const products: Product[] = [
  {
    name: "review1",
    image: "/images/new/Frame 22.png",
  },
  {
    name: "review2",
    image: "/images/new/Frame 61.png",
  },
  {
    name: "review3",
    image: "/images/new/Frame 62.png",
  },
  {
    name: "review4",
    image: "/images/new/Frame 64.png",
  },
];

export default Happy;
