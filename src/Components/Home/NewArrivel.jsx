"use client";

import Image from "next/image";

export default function NewArrivel() {
  return (
    <section className="py-16">
      <div className="md:flex md:items-center justify-between md:gap-12">
        {/* Left Side - Image */}
        <div className="relative  border">
          <Image
            src="https://i.ibb.co.com/gFvtKXG6/new-Arrivel.jpg" // replace with your model image
            alt="Summer Collection"
            width={600}
            height={600}
            className="rounded-xl shadow-lg"
          />
          {/* Offer Tag */}
          <div className="absolute bottom-5 right-4 bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-full shadow-lg text-sm md:text-base">
            30% OFF
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="mt-10 md:mt-0 md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Great Summer Collections
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            Check out our exclusive summer collections with limited-time offers!  
            Upgrade your wardrobe and enjoy our stylish products at unbeatable prices.
          </p>
          <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-purple-500 transition duration-300">
            Shop Now
          </button>
        </div>

      </div>
    </section>
  );
}
