import React from "react";

const Reviews = () => {
  const reviews = [
    {
      name: "Samantha D.",
      date: "August 14, 2023",
      text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to shirt.",
      rating: 5,
    },
    {
      name: "Alex M.",
      date: "August 15, 2023",
      text: "The t-shirt exceeded my expectations! The colors are vibrant, and the print quality is top-notch. Being a UI/UX designer myself, I’m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      rating: 5,
    },
    {
      name: "Ethan R.",
      date: "August 16, 2023",
      text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.",
      rating: 5,
    },
    {
      name: "Olivia P.",
      date: "August 17, 2023",
      text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It’s evident that the designer poured their creativity into making this t-shirt stand out.",
      rating: 5,
    },
    {
      name: "Liam K.",
      date: "August 18, 2023",
      text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer’s skill. It’s like wearing a piece of art that reflects my passion for both design and fashion.",
      rating: 5,
    },
    {
      name: "Ava H.",
      date: "August 19, 2023",
      text: "I’m not just wearing a t-shirt; I’m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-white min-h-screen py-10">
      {/* Top Section */}
      <div className="container mx-auto px-4 mb-6">
        <div className="border-b border-gray-300 pb-4 flex justify-between items-center">
        <button className="text-gray-600 hover:text-black">All Products</button>
    
            <button className="text-gray-600 hover:text-black">Rating & Reviews</button>
            <button className="text-gray-600 hover:text-black">FAQs</button>
          
        </div>
      </div>

      {/* Reviews Section */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">All Reviews (451)</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded hover:bg-gray-300">
              Latest
            </button>
            <button className="bg-neutral-900 text-white px-4 py-2 rounded hover:bg-blue-600">
              Write a Review
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="gold"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-800 font-medium">{review.text}</p>
              <p className="mt-4 text-sm text-gray-500">
                {review.name} - <span>{review.date}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="bg-neutral-100 text-black border px-6 py-2 rounded hover:bg-neutral-400 transition">
            Load More Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
