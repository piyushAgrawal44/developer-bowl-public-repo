"use client";

import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import Button from "@/components/ui/Button";
import toast from "react-hot-toast";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        toast.success("🎉 Your enquiry has been submitted!", {duration: 5000});
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
    };

    return (
        <section className="py-16">
            <div className="mx-auto lg:px-10">
                {/* Header */}
                <h2 className="text-3xl font-bold text-gray-900 text-center">
                    Get in <span className="underline-custom">Touch</span> With Us
                </h2>
                <p className="text-gray-700 text-center mt-2">
                    Have a question or need help? Feel free to reach out!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                    {/* Left Side: Contact Info */}
                    <div className="bg-blue-50 drop-shadow-lg rounded-lg p-5 lg:p-8 space-y-6">
                        {/* Google Map Embed */}
                        <div className="mb-6">
                            <iframe
                                className="w-full h-60 rounded-lg"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d308873.66529090365!2d81.30640223170003!3d21.253694684464577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda23be28229%3A0x163ee1204ff9e240!2sRaipur%2C%20Chhattisgarh!5e1!3m2!1sen!2sin!4v1742839496463!5m2!1sen!2sin"
                                loading="lazy"
                                
                            ></iframe>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaPhone className="text-blue-600 text-xl" />
                            <span className="text-gray-800 font-semibold">+123 456 7890</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-blue-600 text-xl flex-shrink-0" />
                            <span className="text-gray-800 font-semibold break-all md:break-normal">
                                contact@developerbowl.com
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaMapMarkerAlt className="text-blue-600 text-xl" />
                            <span className="text-gray-800 font-semibold">Raipur, Chhattisgarh, India</span>
                        </div>


                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="bg-white drop-shadow-lg rounded-lg p-5 lg:p-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border rounded-lg"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-2 border rounded-lg"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                className="w-full px-4 py-2 border rounded-lg"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows={4}
                                className="w-full px-4 py-2 border rounded-lg"
                                required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            <Button type="submit" className="w-full">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
