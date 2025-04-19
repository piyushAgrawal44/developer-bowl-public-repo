"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { useEffect, useState } from "react";

// Structured Testimonial Data
const testimonials = [
    {
        name: "Dr. Shalabh Agrawal",
        position: "Shiv Hospital & Diagnostic",
        feedback: "DeveloperBowl provides highly professional service with a friendly environment. Highly recommended!",
        image: "/shalabh_agrawal.webp",
    },
    {
        name: "Dr. N S Patel",
        position: "Lakshya Clinic",
        feedback: "Great experience, feels like family. DeveloperBowl is one of the best in website development.",
        image: "/nspatel.webp",
    },
];

export default function TestimonialCarousel({carouselData }: { slidesPerView?: number, width?: number, height?: number, carouselData?: any[] }) {

    const [carousel, setCarousel] = useState(carouselData?.length ? carouselData : testimonials)

    return (
        <div>
            {/* Swiper Testimonial Slider */}
            <Swiper
                modules={[Autoplay, Navigation]}
                navigation={{
                    prevEl: ".prev",
                    nextEl: ".next",
                }}
                loop={true}
                autoplay={{ delay: 4000 }}
                spaceBetween={20}
                slidesPerView={1}
                className="relative w-full p-0"
            >
                {carousel.map((item, index) => (
                    <SwiperSlide key={index} className="p-2">
                        <div className="bg-white drop-shadow-lg p-3 rounded-lg">
                            <div className="flex items-center gap-3">
                                <Image
                                    src={item.image}
                                    alt={`Testimonial by ${item.name} - ${item.position}`}
                                    width={50} height={50}
                                    className="rounded-full border border-gray-200"
                                    priority
                                />
                                <div>
                                    <h3 className="font-semibold text-sm">{item.name}</h3>
                                    <p className="text-xs text-gray-500">{item.position}</p>
                                </div>
                            </div>
                            <blockquote className="text-sm mt-3 text-gray-700 italic">
                                "{item.feedback}"
                            </blockquote>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons (with ARIA labels for accessibility) */}
            <div className="flex justify-start items-center gap-x-3 mt-2 px-2">
                <button className="prev rounded-full p-2 bg-blue-100 text-blue-600" aria-label="Previous Testimonial">
                    <HiArrowLeft />
                </button>
                <button className="next rounded-full p-2 bg-blue-100 text-blue-600" aria-label="Next Testimonial">
                    <HiArrowRight />
                </button>
            </div>

            {/* JSON-LD Schema Markup for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Review",
                        "itemReviewed": {
                            "@type": "Organization",
                            "name": "DeveloperBowl"
                        },
                        "review": testimonials.map((item) => ({
                            "@type": "Review",
                            "author": {
                                "@type": "Person",
                                "name": item.name
                            },
                            "reviewBody": item.feedback,
                            "publisher": {
                                "@type": "Organization",
                                "name": item.position
                            }
                        }))
                    }),
                }}
            />
        </div>
    );
}
