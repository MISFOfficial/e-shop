"use client";

import Link from "next/link";
import { FiHome } from "react-icons/fi";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen  text-gray-700 text-center px-6">

            {/* 404 Big Text */}
            <h1 className="text-9xl font-extrabold tracking-widest drop-shadow-lg">
                404
            </h1>

            {/* Message */}
            <p className="mt-6 text-2xl md:text-3xl font-semibold">
                Oops! Page not found.
            </p>
            <p className="mt-2 text-lg text-gray-700">
                Looks like this page has gone shopping 🛒
            </p>

            {/* Button */}
            <Link
                href="/"
                className="mt-8 inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
            >
                <FiHome size={22} /> Back to Home
            </Link>
        </div>
    );
}
