"use client";
import { useState } from "react";
import TestimonialCarousel from "./TestimonialCarousel";
import { FAQ } from "@/types/App";
import { FAQList } from "@/constants/Faq";
import { FaMinus, FaPlus } from "react-icons/fa";
import Head from "next/head";

export default function FaqSection() {
    const [faqData, setFaqData] = useState<FAQ[]>(FAQList);

    const toggleFAQ = (index: number) => {
        setFaqData((prev) =>
            prev.map((f, i) => (i === index ? { ...f, isToggle: !f.isToggle } : { ...f, isToggle: false }))
        );
    };

    // Generating JSON-LD for FAQ Schema Markup
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQList.map((f) => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer,
            },
        })),
    };

    return (
        <>
            {/* SEO Metadata */}
            <Head>
                <title>FAQ - Your Website Name</title>
                <meta name="description" content="Find answers to the most frequently asked questions about our services, processes, and policies." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Head>

            <section className="grid grid-cols-6 lg:grid-cols-12 px-6 md:px-10 my-15 gap-4">
                {/* Left Side: Introduction & Testimonials */}
                <div className="col-span-6">
                    <header className="text-left ">
                        <h1 className="text-4xl font-bold text-black">
                            Frequently Asked <span className="underline-custom">Questions</span>
                        </h1>
                        <p className="text-primary text-sm pt-8">
                            Get answers to common questions about our services, processes, and policies. Whether you're looking for details about how we work, what technologies we use, or how we ensure top-notch quality, we've got you covered. Our goal is to provide transparent and reliable information to help you make informed decisions. Explore the questions below to learn more about our approach, customer support, and how we handle projects efficiently.
                        </p>
                    </header>

                    {/* Testimonials Section */}
                    <div className="text-left mt-10">
                        <h2 className="text-xl font-bold text-black">
                            Customer <span>Feedback</span>
                        </h2>
                    </div>
                    <div className="mt-2 w-full lg:w-[500px]">
                        <TestimonialCarousel />
                    </div>
                </div>

                {/* Right Side: FAQ Section */}
                <div className="col-span-6 space-y-4">
                    {faqData.map((f, i) => (
                        <article key={i} className={`${f?.isToggle ? 'bg-blue-600':"bg-blue-50"}  p-5 rounded-lg shadow-md`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                            <button
                                className="flex justify-between items-center w-full text-lg font-semibold text-black"
                                onClick={() => toggleFAQ(i)}
                                aria-expanded={f.isToggle}
                                aria-controls={`faq-answer-${i}`}
                            >
                                <span itemProp="name" className={`${f?.isToggle ? 'text-white':""}`}>{f.question}</span>
                                <div className="relative w-5 h-5">
                                    <FaMinus className={`absolute transition-all duration-300 ease-in-out inset-0 ${f?.isToggle ? 'text-white':"text-blue-600"} transition-transform duration-300 ${f.isToggle ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`} />
                                    <FaPlus className={`absolute inset-0 text-blue-600 transition-transform duration-300 ${!f.isToggle ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`} />
                                </div>
                            </button>
                            <div
                                id={`faq-answer-${i}`}
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${f.isToggle ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                                itemScope
                                itemProp="acceptedAnswer"
                                itemType="https://schema.org/Answer"
                            >
                                <p className={`mt-3 ${f?.isToggle ? 'text-white':"text-gray-700"}`} itemProp="text">{f.answer}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}
