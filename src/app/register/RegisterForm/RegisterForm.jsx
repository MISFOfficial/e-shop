import registerUser from '@/app/actions/auth/registerUser';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useState } from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

const RegisterForm = () => {

    const route = useRouter()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        const result = await registerUser({ name, email, password });

        console.log(result)
        const { insertedId } = result
        if (insertedId) {
            alert('ok')
            route.push('/')
        }
        else {
            alert('account already created')
        }
    };
    return (
        <div>
            {/* Form */}
            <form onSubmit={handleRegister} className="space-y-5">
                {/* Name */}
                <div className="relative">
                    <FiUser className="absolute left-3 top-3 text-gray-300 text-xl" />
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                    />
                </div>

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


                {/* Register Button */}
                <button
                    type="submit"
                    className="w-full bg-yellow-400 text-light2 font-semibold py-3 rounded-xl shadow-lg hover:bg-yellow-300 transition duration-300"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;