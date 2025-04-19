"use client";
import 'atropos/css';
import Link from "next/link";
import Head from "next/head";
import Button from "./ui/Button";
import { BiMobileAlt, BiCog, BiPaintRoll, BiBrush, BiBug } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { JSX } from "react";
import Atropos from "atropos/react";

interface Service {
    title: string;
    icon: JSX.Element;
    tags: string[];
    bgColor: string;
    description: string;
    link: string;
}

const services: Service[] = [
    {
        title: "Website Development",
        icon: <FaLaptopCode className="text-blue-600 text-5xl" aria-label="Website Development Icon" />,
        tags: ["Responsive", "SEO Optimized", "High Performance"],
        bgColor: "bg-blue-50",
        description: "Get a modern, fast, and SEO-optimized website to grow your online presence and attract more customers.",
        link: "/services/website-development"
    },
    {
        title: "App Development",
        icon: <BiMobileAlt className="text-pink-600 text-5xl" aria-label="App Development Icon" />,
        tags: ["User-Friendly", "Scalable", "Cross-Platform"],
        bgColor: "bg-pink-50",
        description: "Launch a powerful mobile app tailored to your business needs, ensuring seamless user experience and high engagement.",
        link: "/services/app-development"
    },
    {
        title: "Software Development",
        icon: <BiCog className="text-green-600 text-5xl" aria-label="Software Development Icon" />,
        tags: ["Custom Solutions", "Automation", "Performance-Driven"],
        bgColor: "bg-green-50",
        description: "Streamline your business operations with custom software solutions designed for efficiency and scalability.",
        link: "/services/software-development"
    },
    {
        title: "Logo & Brand Design",
        icon: <BiPaintRoll className="text-orange-600 text-5xl" aria-label="Logo & Brand Design Icon" />,
        tags: ["Unique", "Memorable", "Professional"],
        bgColor: "bg-orange-50",
        description: "Create a strong brand identity with a professionally designed logo that reflects your business vision.",
        link: "/services/logo-brand-design"
    },
    {
        title: "Banner & Flyer Design",
        icon: <BiBrush className="text-teal-600 text-5xl" aria-label="Banner & Flyer Design Icon" />,
        tags: ["Eye-Catching", "Marketing-Ready", "Custom Design"],
        bgColor: "bg-teal-50",
        description: "Promote your business with stunning banners and flyers that capture attention and drive engagement.",
        link: "/services/banner-flyer-design"
    },
    {
        title: "Software Testing",
        icon: <BiBug className="text-purple-600 text-5xl" aria-label="Software Testing Icon" />,
        tags: ["Manual & Automated", "Bug-Free", "Reliable"],
        bgColor: "bg-purple-50",
        description: "Ensure your software runs smoothly with our expert testing services, reducing errors and improving performance.",
        link: "/services/software-testing"
    },
];

export default function ServicesSection() {
    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                <title>Best Website & App Development Services | Your Company</title>
                <meta name="description" content="Get top-quality website, mobile app, and software development services. We create responsive, SEO-optimized, and high-performance digital solutions." />
                <meta name="keywords" content="Website Development, App Development, Software Development, SEO, Branding, Software Testing" />
                <meta name="robots" content="index, follow" />

                {/* Schema Markup for SEO */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Web & App Development Services",
                        "provider": {
                            "@type": "Organization",
                            "name": "Your Company Name"
                        },
                        "description": "Top-notch web, app, and software development services tailored for businesses worldwide.",
                        "serviceType": "Web & Software Development",
                        "areaServed": {
                            "@type": "Place",
                            "name": "Worldwide"
                        }
                    })}
                </script>
            </Head>

            <div className="flex flex-col lg:flex-row items-stretch gap-4 py-16">
                {/* Left Section */}
                <div className=" relative overflow-hidden lg:w-1/3">
                <div
                    className="relative overflow-hidden h-full text-white p-8 py-10 rounded-lg bg-cover bg-center flex flex-col justify-center"
                    style={{ backgroundImage: "url('/developer_bowl_services.webp')" }}
                >
                    <div className="absolute inset-0 bg-gray-900/50 rounded-lg"></div>
                    <div className="relative z-10 text-center flex flex-col justify-between">
                        <h2 className="text-4xl font-bold">
                            Empower Your Business with Our <span className="underline-custom">Services</span>
                        </h2>
                        <p className="mt-4 px-10 text-gray-200 text-lg">
                            We provide top-notch digital solutions to help businesses thrive in the online world. From custom websites to mobile apps and branding, we ensure your business stands out from the competition.
                        </p>
                        <Link className="mt-5" href="/services">
                            <Button type="button" className="w-full">
                                Learn more
                            </Button>
                        </Link>
                    </div>
                </div>
                </div>

                {/* Right Section - Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:w-2/3">
                    {services.map((service, index) => (
                        <div key={index} className={`p-5 drop-shadow-lg rounded-lg ${service.bgColor} bowl-icon-small-top`}>
                            <Link href={service.link} className="text-blue-600 hover:underline mt-4 inline-block">
                                <div className="flex items-center justify-center w-[100px] h-[80px]">
                                    {service.icon}
                                </div>
                                <h2 className="text-xl font-semibold mt-4">{service.title}</h2>
                                {/* <p className="mt-2 text-gray-600">{service.description}</p> */}
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {service.tags.map((tag, idx) => (
                                        <span key={idx} className="bg-white drop-shadow-lg text-gray-700 text-sm px-3 py-1 rounded-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {/* Internal Link to Service Page */}


                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
