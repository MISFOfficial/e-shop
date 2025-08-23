"use client";

import Link from "next/link";
import RegisterForm from "./RegisterForm/RegisterForm";
import { useSession } from "next-auth/react";


export default function Register() {

    const session=useSession()
    console.log(session)
 
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl p-8 text-white">
                {/* Header */}
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Create Account</h1>
                <p className="text-center text-gray-200 mb-6">Join us and start shopping today</p>

                <RegisterForm></RegisterForm>

                {/* Extra Links */}
                <p className="mt-6 text-center text-sm text-gray-200">
                    Already have an account?{" "}
                    <Link href="/login" className="text-yellow-300 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
