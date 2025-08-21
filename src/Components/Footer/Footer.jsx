"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="HF text-gray-700 pt-12">
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Logo & About */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">E-Shop</h2>
                    <p className="text-gray-200 text-sm">
                        Your one-stop destination for trendy fashion and quality products.
                        Shop with us and experience the best deals online!
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-200">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/shop">Shop</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Customer Support */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
                    <ul className="space-y-2 text-gray-200">
                        <li><Link href="/faq">FAQ</Link></li>
                        <li><Link href="/returns">Returns</Link></li>
                        <li><Link href="/shipping">Shipping</Link></li>
                        <li><Link href="/privacy">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4 text-lg">
                        <Link href="https://facebook.com" target="_blank" className="hover:text-gray-300"><FaFacebookF /></Link>
                        <Link href="https://twitter.com" target="_blank" className="hover:text-gray-300"><FaTwitter /></Link>
                        <Link href="https://instagram.com" target="_blank" className="hover:text-gray-300"><FaInstagram /></Link>
                        <Link href="https://linkedin.com" target="_blank" className="hover:text-gray-300"><FaLinkedinIn /></Link>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-400 mt-6 py-4 text-center text-sm text-gray-200">
                © {new Date().getFullYear()} E-Shop. All Rights Reserved.
            </div>
        </footer>
    );
}
