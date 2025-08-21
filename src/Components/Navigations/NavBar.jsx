"use client";

import Link from "next/link";
import NavLink from "./NavLink";

export default function Navbar() {

    return (
        <nav className="HF shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between px-6 py-4 text-white">
                {/* Logo */}
                <Link href="/" className="text-2xl font-extrabold text-gray-700">
                    E-Shop
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex ">
                    <NavLink></NavLink>
                </div>         
            </div> 
        </nav>
    );
}
