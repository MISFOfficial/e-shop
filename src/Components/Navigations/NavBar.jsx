"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import { signOut, useSession } from "next-auth/react";
import Profile from "./Profile";

export default function Navbar() {

    const { status } = useSession()

    // if (status === "loading") {
    //     return <p className="text-gray-500">Loading session...</p>;
    // }


    console.log(status)

    return (
        <nav className="HF shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between px-6 py-2 text-light2">
                {/* Logo */}
                <Link href="/" className="text-2xl font-extrabold text-light2">
                    E-Shop
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-15">
                    <NavLink></NavLink>

                    <div>
                        {status === 'authenticated' ? <div>
                            <Profile></Profile>
                        </div> : (<>
                            <div className="flex items-center gap-10 font-bold text-xl text-light2">
                                <Link href={'/login'}>
                                    Sign In
                                </Link>
                                <Link href={'/register'}>
                                    Register
                                </Link>
                            </div>
                        </>)}
                    </div>
                </div>


            </div>
        </nav>
    );
}
