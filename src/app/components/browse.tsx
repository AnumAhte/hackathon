import React from 'react';
import Image from 'next/image';

const Browse = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-12">
        Browse By Dress Style
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {  src: "/images/browse/Frame 61 (1).png" },
          {  src: "/images/browse/Frame 62 (1).png" },
          {  src: "/images/browse/Frame 64 (1).png" },
          {  src: "/images/browse/image 14.png" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-md p-4"
          >
            <Image
              src={item.src}
              alt=""
              width={200}
              height={200}
              className="rounded-lg object-cover mb-4"
            />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
