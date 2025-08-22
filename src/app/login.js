"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMail, FiLock } from "react-icons/fi";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Logging in with", email, password);
        // Add your login logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#5e5ebc] via-[#6d6dd2] to-[#272785]">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl p-8 text-white">

                {/* Header */}
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Welcome Back</h1>
                <p className="text-center text-gray-200 mb-6">Login to your account</p>

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-5">
                    {/* Email */}
                    <div className="relative">
                        <FiMail className="absolute left-3 top-3 text-gray-300 text-xl" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <FiLock className="absolute left-3 top-3 text-gray-300 text-xl" />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-yellow-400 text-gray-900 font-semibold py-3 rounded-xl shadow-lg hover:bg-yellow-300 transition duration-300"
                    >
                        Login
                    </button>
                </form>

                {/* Extra Links */}
                <div className="mt-6 flex justify-between text-sm text-gray-200">
                    <Link href="/forgot-password" className="hover:underline">
                        Forgot Password?
                    </Link>
                    <Link href="/register" className="hover:underline">
                        Create Account
                    </Link>
                </div>

                {/* Divider */}
                <div className="my-6 flex items-center justify-center">
                    <span className="h-px w-1/3 bg-gray-400"></span>
                    <span className="px-3 text-gray-300 text-sm">or</span>
                    <span className="h-px w-1/3 bg-gray-400"></span>
                </div>

                {/* Social Login */}
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
