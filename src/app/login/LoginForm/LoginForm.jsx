// 'use server'

import React, { useState } from 'react';
import { FiMail, FiLock } from "react-icons/fi";
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { Slide, toast } from 'react-toastify';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const router = useRouter()

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const result = await signIn('credentials', { email, password, redirect: false })

            console.log('logins result', result)
            if (result.status === 200) {
                router.push('/')
            }

        } catch (error) {
            alert('dfadsfas')
        }
    };
    return (
        <div>
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
        </div>
    );
};

export default LoginForm;