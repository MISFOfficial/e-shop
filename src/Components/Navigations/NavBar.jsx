"use client";

import Link from "next/link";
import { useState } from "react";
import {FiChevronDown } from "react-icons/fi";

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);

    return (
        <nav className="HF shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between px-6 py-4 text-white">
                {/* Logo */}
                <Link href="/" className="text-2xl font-extrabold tracking-wide">
                    E-Shop
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-lg font-medium">
                    <Link href="/" className="relative group">
                        Home
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                    </Link>

                    {/* Dropdown */}
                    <div
                        className="relative group cursor-pointer"
                        onMouseEnter={() => setDropdown(true)}
                        onMouseLeave={() => setDropdown(false)}
                    >
                        <span className="flex items-center">
                            Shop <FiChevronDown className="ml-1 text-sm" />
                        </span>
                        {dropdown && (
                            <div className="absolute top-8 left-0 bg-white text-gray-800 rounded-lg shadow-md py-3 w-40">
                                <Link href="/shop/men" className="block px-4 py-2 hover:bg-gray-100">Men</Link>
                                <Link href="/shop/women" className="block px-4 py-2 hover:bg-gray-100">Women</Link>
                                <Link href="/shop/electronics" className="block px-4 py-2 hover:bg-gray-100">Electronics</Link>
                            </div>
                        )}
                    </div>

                    <Link href="/about" className="relative group">
                        About
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                    </Link>

                    <Link href="/contact" className="relative group">
                        Contact
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                    </Link>
                </div>         
            </div> 
        </nav>
    );
}
