"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import Login from "../Buttons/Login";

export default function Navbar() {

    return (
        <nav className="HF shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between px-6 py-4 text-gray-700">
                {/* Logo */}
                <Link href="/" className="text-2xl font-extrabold text-gray-700">
                    E-Shop
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex ">
                    <NavLink></NavLink>
                </div>

                <div>
                    <Login></Login>
                </div>
            </div>
        </nav>
    );
}
