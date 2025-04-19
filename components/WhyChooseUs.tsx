"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./ui/Button";

const WhyChooseUs = () => {
    // Define animation variants
    const listItemVariants = {
        hidden: { opacity: 0, x: 50 }, // Start off-screen (to the right)
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.2, // Stagger animation
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    return (
        <section className="bg-blue-50 py-16 my-10">
            <div className="px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                {/* Left Side: Image */}
                <div className="relative">
                    <Image
                        src="/choose_us.svg"
                        alt="Why Choose Developer Bowl"
                        width={500}
                        height={350}
                        className="rounded-lg"
                        priority
                    />
                </div>

                {/* Right Side: Content */}
                <div>
                    <h2 className="text-4xl font-bold text-gray-900">
                        Why Choose <span className="">Developer <span className="underline-custom">Bowl</span></span>?
                    </h2>
                    <p className="text-gray-700 mt-3">
                        We offer what every IT company claims to provide—high-quality websites, apps, and software.
                        Yet, businesses choose us. Here’s why:
                    </p>

                    {/* Features with Stats */}
                    <motion.ul 
                        className="my-6 space-y-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {[
                            { text: "3+ Years of Experience in Software Industry" },
                            { text: "50+ Projects Delivered Successfully" },
                            { text: "Top-Notch Tech Stack for Scalable Solutions" },
                            { text: "We Take Customer Satisfaction Seriously" },
                            { text: "No false commitment" },
                        ].map((item, index) => (
                            <motion.li 
                                key={index}
                                className="flex items-center gap-3"
                                variants={listItemVariants}
                                custom={index} // Pass index to stagger animation
                            >
                                <span className="text-blue-600 text-lg">✔️</span>
                                <span><strong>{item.text}</strong></span>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <p>Let’s turn your idea into reality—better, faster, and smarter!</p>

                    {/* Call-to-Action Button */}
                    <Button className="mt-5">Get a Free Consultation</Button>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
