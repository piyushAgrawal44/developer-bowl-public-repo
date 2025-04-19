"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import FaqSection from "./FaqSection";
import Button from "./ui/Button";
import toast from "react-hot-toast";

export default function Footer() {
    const [isClient, setIsClient] = useState(false);
    const [email, setEmail] = useState("");



    const handleSubscribe = (e: any) => {
        e.preventDefault();
        if (!email || !email.includes("@")) {
            toast.error("🚫 Please enter a valid email address.");
            return;
        }
        toast.success("Thanks for subscribing !")
        setEmail("");
    };

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;
    return (
        <>
            <FaqSection />
            <footer className="bg-gray-900 text-white">
                <div className="mx-auto px-6 lg:px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Column 1: About */}
                    <div>
                        <h2 className="text-3xl font-bold">Developer <span className="underline-custom">Bowl</span></h2>
                        <p className="text-gray-400 mt-3 leading-relaxed">
                            Your trusted partner for website, app, and software development.
                            We bring digital ideas to life with cutting-edge technology.
                        </p>
                        <Link href="/contact">
                            <Button className="mt-5">Get a Free Consultation</Button>
                        </Link>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                            {["Home", "About", "Services", "Blog", "Portfolio", "Contact"].map((page) => (
                                <li key={page}>
                                    <Link href={`/${page.toLowerCase()}`} className="text-gray-400 hover:text-white transition duration-200">
                                        {page}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold">Contact Us</h3>
                        <p className="flex items-center mt-4 text-gray-400">
                            <FiMail className="mr-2 text-blue-400" /> contact@developerbowl.com
                        </p>
                        <p className="flex items-center mt-2 text-gray-400">
                            <FiPhoneCall className="mr-2 text-green-400" /> +91 98789 87878
                        </p>

                        {/* Social Icons */}
                        <div className="flex mt-5 space-x-3">
                            <a href="https://facebook.com" target="_blank" className="p-2 bg-blue-800 rounded-full hover:bg-blue-700 transition duration-300">
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com" target="_blank" className="p-2 bg-blue-500 rounded-full hover:bg-blue-400 transition duration-300">
                                <FaTwitter />
                            </a>
                            <a href="https://linkedin.com" target="_blank" className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition duration-300">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://instagram.com" target="_blank" className="p-2 bg-pink-600 rounded-full hover:bg-pink-500 transition duration-300">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Column 4: Newsletter Signup */}
                    <div>
                        <h3 className="text-xl font-semibold">Subscribe for Free Growth Tips</h3>
                        <p className="text-gray-400 mt-2">Stay updated with our latest tech insights & offers.</p>
                        <form onSubmit={handleSubscribe} className="mt-4 flex">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="p-2 bg-gray-100 text-gray-800 rounded-l-md w-full outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <button type="submit" className="bg-blue-600 hover:bg-blue-700 transition duration-300 px-4 py-2 rounded-r-md text-white font-semibold">
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-700 py-5 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Developer Bowl. All rights reserved.
                </div>
            </footer>
        </>
    );
}
