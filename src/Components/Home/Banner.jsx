"use client";

import Image from "next/image";
import Link from "next/link";

export default function Banner() {

    const image='https://i.ibb.co.com/F2r2r2s/modern-stationary-collection-arrangement-23-2149309643.jpg'

    return (
        <section className=" text-gray-700 ">
            <div className=" mx-auto flex flex-col md:flex-row items-center justify-between py-16 md:py-40 ">

                {/* Left Content */}
                <div className="max-w-lg text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                        Welcome to <span className="text-yellow-300">E-Shop</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 mb-6">
                        Discover the best deals on fashion, electronics, and lifestyle products.
                        Shop with confidence and upgrade your style today!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link
                            href="/shop"
                            className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
                        >
                            Shop Now
                        </Link>
                        <Link
                            href="/about"
                            className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition duration-300"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                {/* <div className="mt-10 md:mt-0">
                    <Image
                        src={image}
                        alt="Featured Product"
                        width={450}
                        height={450}
                        className="drop-shadow-2xl rounded-xl"
                    />
                </div> */}
            </div>
        </section>
    );
}
