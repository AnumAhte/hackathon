import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Next.js Link

const Browse = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title with Background Color */}
      <div className="bg-[#F0EEED] py-6 rounded-xl shadow-md">
        <h1 className="text-center text-4xl font-extrabold tracking-wide uppercase text-gray-900">
          Browse By Dress Style
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {[
          { title: 'Casual', src: '/images/browse/Frame 61 (1).png', href: '/casual' }, // Updated to match the "Casual" page route
          { title: 'Formal', src: '/images/browse/Frame 62 (1).png', href: '#' },
          { title: 'Party', src: '/images/browse/Frame 64 (1).png', href: '#' },
          { title: 'Gym', src: '/images/browse/image 14.png', href: '#' },
        ].map((item, index) => (
          <Link href={item.href} key={index}>
            {/* Use Link for wrapping */}
            <div className="flex flex-col items-center bg-gray-100 rounded-xl shadow-lg p-6 transition-transform hover:scale-105 cursor-pointer">
              {/* Image */}
              <Image
                src={item.src}
                alt={item.title}
                width={200}
                height={200}
                className="rounded-xl object-cover mb-4"
              />
              {/* Title */}
              <h2 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Browse;
