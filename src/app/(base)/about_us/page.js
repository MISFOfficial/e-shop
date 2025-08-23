"use client";

import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "https://i.ibb.co.com/GrD520T/simmer.jpg",
  },
  {
    name: "Jane Smith",
    role: "Marketing Head",
    image: "https://i.ibb.co.com/GrD520T/simmer.jpg",
  },
  {
    name: "Mike Johnson",
    role: "Product Manager",
    image: "https://i.ibb.co.com/GrD520T/simmer.jpg",
  },
];

const testimonials = [
  {
    name: "Alice Brown",
    feedback:
      "Amazing products and great discounts! Shopping here is always a delight.",
    image: "https://i.ibb.co.com/GrD520T/simmer.jpg",
  },
  {
    name: "David Lee",
    feedback:
      "High-quality items and super fast delivery. Highly recommended!",
    image: "https://i.ibb.co.com/GrD520T/simmer.jpg",
  },
];

export default function AboutUs() {
  return (
    <div className="">

      {/* Hero Banner */}
      <section className="py-20  text-light2 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          About Us
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Discover our story, our mission, and why thousands of customers trust us for premium fashion and lifestyle products.
        </p>
      </section>


      {/* Mission / Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-dark mb-10">
            Our Mission & Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
              <h4 className="text-xl font-bold mb-2 text-dark">Quality Products</h4>
              <p className="text-dark">We ensure that every product you buy is premium quality and meets your expectations.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
              <h4 className="text-xl font-bold mb-2 text-dark">Affordable Prices</h4>
              <p className="text-dark">We provide competitive prices and amazing discounts on all our collections.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
              <h4 className="text-xl font-bold mb-2 text-dark">Customer Satisfaction</h4>
              <p className="text-dark">Our priority is your happiness. We strive to provide a seamless shopping experience.</p>
            </div>
          </div>
        </div>
      </section>

  
      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-dark mb-10">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h4 className="text-xl text-dark font-bold mb-1">{member.name}</h4>
                <p className="text-dark">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20  text-dark">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-light2">What Our Customers Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testi, idx) => (
              <div key={idx} className="bg-white bg-opacity-20 rounded-xl p-6 shadow-lg">
                <p className="text-dark italic mb-4">{testi.feedback}</p>
                <div className="flex items-center justify-center gap-4">
                  <Image
                    src={testi.image}
                    alt={testi.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <span className="font-bold text-dark">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-yellow-400 text-dark text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Upgrade Your Style?
        </h3>
        <Link
          href="/shop"
          className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-purple-500 transition duration-300"
        >
          Shop Now
        </Link>
      </section>

    </div>
  );
}
