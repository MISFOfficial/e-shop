"use client";


import Link from "next/link";
import RegisterForm from "./RegisterForm/RegisterForm";


export default function Register() {
 

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#5e5ebc] via-[#6d6dd2] to-[#272785]">
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

                {/* Divider */}
                <div className="my-6 flex items-center justify-center">
                    <span className="h-px w-1/3 bg-gray-400"></span>
                    <span className="px-3 text-gray-300 text-sm">or</span>
                    <span className="h-px w-1/3 bg-gray-400"></span>
                </div>

                {/* Social Register */}
                <div className="flex gap-4">
                    <button className="flex-1 bg-white/20 border border-white/30 py-2 rounded-xl hover:bg-white/30 transition">
                        Google
                    </button>
                    <button className="flex-1 bg-white/20 border border-white/30 py-2 rounded-xl hover:bg-white/30 transition">
                        Facebook
                    </button>
                </div>
            </div>
        </div>
    );
}
