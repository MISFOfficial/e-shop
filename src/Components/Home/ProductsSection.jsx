"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Summer Shirt",
    image: "https://i.ibb.co.com/GrD520T/simmer.jpg",
    description: "Light and airy summer shirt for all occasions.",
  },
  {
    id: 2,
    title: "Casual Sneakers",
    image: "https://i.ibb.co.com/gML1rJy7/show.webp",
    description: "Comfortable sneakers to complete your casual look.",
  },
  {
    id: 3,
    title: "Stylish Sunglasses",
    image: "https://i.ibb.co.com/Kz0Q7c6y/sunglass.jpg",
    description: "Protect your eyes in style with these sunglasses.",
  },
  {
    id: 4,
    title: "Leather Bag",
    image: "https://i.ibb.co.com/0ytb36vf/bag.webp",
    description: "Premium quality leather bag for everyday use.",
  },
  {
    id: 5,
    title: "Jeans",
    image: "https://i.ibb.co.com/Q70zq7C6/giincw.jpg",
    description: "Trendy jeans with perfect fit and comfort.",
  },
  {
    id: 6,
    title: "Hat",
    image: "https://i.ibb.co.com/R4cXtP5W/71t-KXRv-S9-IL-AC-SL1500.jpg",
    description: "Stylish summer hat for sun protection and fashion.",
  },
];

export default function ProductsSection() {
  return (
    <section className="">
      <div>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
          Our Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <Link
                  href={`/products/${product.id}`}
                  className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full shadow hover:bg-purple-500 transition duration-300"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
