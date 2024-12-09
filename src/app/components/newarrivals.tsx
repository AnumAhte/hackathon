"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import Image from "next/image";

// Define the type for the product object
interface Product {
  name: string;
  image: string;
  discount: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
}

function NewArrivals() {
  return (
    <main className="px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex justify-center items-center mt-10 mb-10">
        <h1 className="text-gray-800 font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl">
          NEW ARRIVALS
        </h1>
      </div>

      {/* Product Boxes Section */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductBox key={index} product={product} />
        ))}
      </div>

      {/* View All Products Button */}
      <div className="w-full flex justify-center items-center mt-10">
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg border-b-2 border-neutral-100 pb-4">
          <button className="w-full bg-white hover:bg-gray-200 py-2 px-5 text-black rounded-full border-2 border-black">
            View All
          </button>
        </div>
      </div>
    </main>
  );
}

// Product Box Component
const ProductBox = ({ product }: { product: Product }) => (
  <div className="group shadow-md bg-neutral-100 flex flex-col items-center justify-between sm:w-full md:w-[300px] lg:w-[220px] h-auto p-4 rounded-lg">
    {/* Product Image */}
    <div className="relative w-full flex justify-center">
      <Image
        src={product.image}
        width={150}
        height={100}
        alt={product.name}
        className="rounded-md"
      />
      <button className="absolute bottom-0 bg-black text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Add to Cart
      </button>
    </div>

    {/* Product Name */}
    <h1 className="font-bold font-sans pt-2 text-center">{product.name}</h1>

    {/* Product Rating */}
    <div className="flex space-x-1 text-yellow-400 text-md pt-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={i < product.rating ? solidStar : regularStar}
        />
      ))}
      <span className="text-gray-400 ml-2">{product.reviews}</span>
    </div>

    {/* Price Section */}
    <div className="flex items-center justify-center gap-2 mt-2">
      {/* Current Price */}
      <span className="text-black font-bold">{product.price}</span>
      
      {/* Original Price */}
      {product.originalPrice && (
        <span className="text-gray-400 font-bold line-through">{product.originalPrice}</span>
      )}
      
      {/* Discount */}
      {product.discount && (
        <span className="bg-pink-500/50 text-red-500 px-2 py-1 rounded-full text-sm">
          {product.discount}
        </span>
      )}
    </div>
  </div>
);

// Mock Product Data
const products: Product[] = [
  {
    name: "T-SHIRT WITH TAPE DETAILS",
    image: "/images/new/Frame 32.png",
    discount: "",
    price: "$120",
    originalPrice: "",
    rating: 4,
    reviews: 4,
  },
  {
    name: "SKINNY FIT JEANS",
    image: "/images/new/Frame 33.png",
    rating: 3.5,
    price: "$240",
    originalPrice: "$260",
    reviews: 3.5,
    discount: "-20%",
  },
  {
    name: "CHECKERED SHIRT",
    image: "/images/new/Frame 34.png",
    discount: "",
    price: "$180",
    originalPrice: "",
    rating: 4,
    reviews: 4,
  },
  {
    name: "SLEEVE STRIPED T-SHIRT",
    image: "/images/new/Frame 38.png",
    discount: "-30%",
    price: "$130",
    originalPrice: "$160",
    rating: 4,
    reviews: 4,
  },
];

export default NewArrivals;
