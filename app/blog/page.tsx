"use client";

import { useState } from "react";
import { blogPosts, categories } from "@/constants/Blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import NewsLetterSection from "@/components/NewsLetterSection";

export default function Blog() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPosts =
        selectedCategory === "All"
            ? blogPosts
            : blogPosts.filter(post => post.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-20">
            <div className="px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                        What We've <span className="underline-custom">Written</span>
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Explore in-depth insights, step-by-step tutorials, and the latest updates from our team of experts tailored to help businesses grow.
                    </p>
                </motion.div>

                {/* Categories */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full font-medium shadow-md transition-colors duration-300 ${selectedCategory === category
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="relative h-48">
                                    <Image
                                        priority
                                        src={post.image}
                                        alt={post.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-300">
                                        <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="text-gray-600 mb-6">{post.excerpt}</p>
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                            <Image
                                                priority
                                                src={post.author.avatar}
                                                alt={post.author.name}
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">{post.author.name}</span>
                                    </div>
                                </div>
                            </motion.article>
                        ))
                    ) : (
                        <p className="text-center col-span-full text-gray-500 text-lg">
                            No posts found in this category.
                        </p>
                    )}
                </div>

                <NewsLetterSection />
            </div>
        </div>
    );
}
