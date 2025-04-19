"use client";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Button from "@/components/ui/Button";
import WhyChooseUs from "@/components/WhyChooseUs";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect, } from "react";
import ServicesSection from "@/components/ServicesSection";
import { FiPhoneCall } from "react-icons/fi";
import WorkSamples from "@/components/WorkSamples";
import CTASection from "@/components/CTAsection";
import Atropos from "atropos/react";

export default function Home() {
  

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="grid grid-cols-12 gap-y-5 items-center mt-10">
        {/* Left Content */}
        <div className="col-span-12 md:col-span-6">
          <h1 className="text-3xl lg:text-4xl font-bold">
            <span >Developer <span className="underline-custom">Bowl</span></span>:
            Your Trusted Partner for <span className="text-blue-600">Website & App Development</span>
          </h1>
          <h2 className="text-lg lg:text-xl mt-2 mb-4 text-gray-700">
            🚀 Elevate Your Business with the <strong>Best Website Development Services</strong>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We specialize in creating **high-performance websites, mobile apps, and custom software**
            tailored to your business needs. Our expert developers use the latest technology
            to ensure speed, security, and seamless user experience.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-4 items-center">
            {/* Get a Free Consultation Button */}
            <a href="/contact" className="block">
              <Button type="button">Get a Free Consultation</Button>
            </a>

            {/* Click-to-Call Button */}
            <a href="tel:+91098789878" className="flex items-center gap-x-2">
              <div className="p-1 border rounded-lg flex items-center">
                <div className="bg-blue-100 text-blue-600 rounded-lg p-1"> <FiPhoneCall size={22} /></div>
              </div>
              <div>
                <span className="block text-[12px] text-gray-500 font-semibold leading-[1.2]">
                  Available: 9AM - 10PM
                </span>
                <span className="font-bold text-lg text-gray-800">+91 098789878</span>
              </div>
            </a>
          </div>

          {/* Testimonials */}
          <div className="max-w-full lg:max-w-[400px] mt-6">
            <TestimonialCarousel />
          </div>
        </div>

        {/* Right Image */}
        <div className={`order-first md:order-last col-span-12 md:col-span-6 px-5`} data-aos="fade-left">
          <Atropos className="my-atropos" activeOffset={50} shadow={false}>
          <Image
            src="/hero_image.svg"
            alt="Best Website Development Services - Developer Bowl"
            width={600} height={400}
            className="w-full max-w-[600px] mx-auto"
            priority
          />
          </Atropos>
        </div>
      </section>

      {/* SEO-Optimized Section */}
      <WhyChooseUs />
      {/* <WhatWeOffer /> */}
      <ServicesSection />

      <WorkSamples />

      <CTASection />
    </>
  );
}
