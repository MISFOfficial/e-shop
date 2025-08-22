"use client";

import Link from "next/link";
import LoginForm from "./LoginForm/LoginForm";

export default function Login() {

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#5e5ebc] via-[#6d6dd2] to-[#272785]">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl p-8 text-white">

                {/* Header */}
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Welcome Back</h1>
                <p className="text-center text-gray-200 mb-6">Login to your account</p>

                <LoginForm></LoginForm>

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
