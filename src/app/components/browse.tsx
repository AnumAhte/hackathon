import React from "react";
import Image from "next/image";
import Link from "next/link";

const Browse = () => {
  return (
    <div className="bg-[#F0EEED] py-16 px-4"> {/* Light gray background */}
      {/* Title Section */}
      <h1 className="text-center text-3xl font-extrabold text-black uppercase">
        Browse By Dress Style
      </h1>

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {[ 
          { src: "/images/browse/Frame 61 (1).png", href: "#", sizeClass: "w-[300px]" },  // Casual with specific width
          { src: "/images/browse/Frame 62 (1).png", href: "#", sizeClass: "w-[500px]" },  // Formal
          { src: "/images/browse/Frame 64 (1).png", href: "#", sizeClass: "w-[500px]" },  // Party
          { src: "/images/browse/image 14.png", href: "#", sizeClass: "w-[250px]" },  // Gym with specific width
        ].map((item, index) => (
          <Link href={item.href} key={index}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer flex justify-center">
              {/* Image */}
              <Image
                src={item.src}
                alt={`Browse Style ${index}`}
                width={500}
                height={300}
                className={`h-56 object-cover ${item.sizeClass}`}  // Apply custom size class
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Browse;
