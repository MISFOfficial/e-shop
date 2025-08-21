"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const products = [
  { id: 1, name: "Product 1", image: "https://i.ibb.co.com/ZRcJHm7d/Mac-Boo-K-Air-M1-Space-Gray-i-Stock-BD.webp" },
  { id: 2, name: "Product 2", image: "https://i.ibb.co.com/rG42FfCW/Apple-i-Phone-13.jpg" },
  { id: 3, name: "Product 3", image: "https://i.ibb.co.com/DgKZNK9V/s400874176-1.webp" },
  { id: 4, name: "Product 4", image: "https://i.ibb.co.com/Qv8FYRMD/Motorola-Edge-50-5-G-Koala-Gray-9468.jpg" },
  { id: 5, name: "Product 2", image: "https://i.ibb.co.com/rG42FfCW/Apple-i-Phone-13.jpg" },
];

export default function ProductMarquee() {
  // Duplicate the products to create seamless looping
  const seamlessProducts = [...products, ...products, ...products];

  return (
    <div className="py-6 border-y-4">
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={false}
        loop={0} // infinite loop
      >
        {seamlessProducts.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-40 h-40 object-cover "
          >
            <Image
              src={product.image}
              alt={product.name}
              width={120}
              height={120}
              className="rounded-lg shadow-md"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
