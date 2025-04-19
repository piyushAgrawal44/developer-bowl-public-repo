"use client";
import Atropos from "atropos/react";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaBolt,
  FaBrain,
  FaCode,
  FaDatabase,
  FaGlobe,
  FaMobileAlt, FaShieldAlt,
  FaUserFriends,
  FaCheckCircle
} from "react-icons/fa";

const services = [
  {
    class: "left-0 top-0",
    title: "Web Development",
    icon: <FaGlobe className="w-8 h-8" />,
    description: "Custom websites and web applications built with cutting-edge technologies.",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Performance Focus",
      "Modern Frameworks"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    class: "right-0 top-0",
    title: "Mobile Development",
    icon: <FaMobileAlt className="w-8 h-8" />,
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: [
      "Cross-platform Solutions",
      "Native Performance",
      "Offline Capabilities",
      "Push Notifications"
    ],
    color: "from-blue-400 to-blue-500"
  },
  {
    class: "right-0 bottom-0",
    title: "Backend Development",
    icon: <FaDatabase className="w-8 h-8" />,
    description: "Scalable and secure backend solutions for your applications.",
    features: [
      "API Development",
      "Database Design",
      "Cloud Integration",
      "Security Focus"
    ],
    color: "from-blue-600 to-blue-700"
  },
  {
    class: "left-0 bottom-0",
    title: "AI & Machine Learning",
    icon: <FaBrain className="w-8 h-8" />,
    description: "Intelligent solutions powered by artificial intelligence and machine learning.",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Recommendation Systems"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    class: "left-0 top-0",
    title: "DevOps & Cloud",
    icon: <FaBolt className="w-8 h-8" />,
    description: "Streamlined development and deployment processes with modern DevOps practices.",
    features: [
      "CI/CD Pipelines",
      "Cloud Migration",
      "Container Orchestration",
      "Infrastructure as Code"
    ],
    color: "from-blue-400 to-blue-500"
  },
  {
    class: "right-0 top-0",
    title: "UI/UX Design",
    icon: <FaUserFriends className="w-8 h-8" />,
    description: "User-centered design solutions that enhance user experience and engagement.",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems"
    ],
    color: "from-blue-600 to-blue-700"
  }
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We analyze your requirements and create a detailed project plan."
  },
  {
    step: "02",
    title: "Design",
    description: "Our team creates beautiful and functional designs for your project."
  },
  {
    step: "03",
    title: "Development",
    description: "We build your solution using the latest technologies and best practices."
  },
  {
    step: "04",
    title: "Delivery",
    description: "After thorough testing, we deploy your solution and provide ongoing support."
  }
];

export default function Services() {
  const [serviceIndex, setServiceIndex] = useState<number>(-1)
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}

      <div className="grid grid-cols-12 gap-6  max-xl:px-10 max-sm:px-0 mt-10">
        <div className="col-span-6 max-xl:col-span-12 flex flex-col gap-6 justify-center">
          <h2 className="text-4xl font-bold leading-tight text-black">
            Our <span className="text-blue-600">Services</span> - Empowering Your Digital Vision
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-blue-600">DeveloperBowl</span>, we offer a suite of top-notch services including
            <span className="font-semibold text-blue-600"> Web Development</span>,
            <span className="font-semibold text-blue-600"> Mobile App Development</span>, and
            <span className="font-semibold text-blue-600"> Custom Software Solutions</span>.
          </p>
          <p className="text-md text-gray-600 leading-relaxed">
            We cater to startups, businesses, and enterprises by crafting tailored digital solutions that are innovative, reliable, and scalable — helping you achieve your goals faster and smarter.
          </p>

          <div className="grid grid-cols-12   gap-6 mt-6">
            <div className="col-span-4 max-sm:col-span-12 flex flex-col items-center text-center sm:border-r-2 sm:pr-6 border-gray-300">
              <FaCode fontSize={34} className="text-blue-600" />
              <p className="font-semibold mt-2 text-black">Web & App Development</p>
            </div>
            <div className="col-span-4 max-sm:col-span-12 flex flex-col items-center text-center sm:border-r-2 sm:pr-6 border-gray-300">
              <FaMobileAlt fontSize={34} className="text-blue-600" />
              <p className="font-semibold mt-2 text-black">UI/UX Design</p>
            </div>
            <div className="col-span-4 max-sm:col-span-12 flex flex-col items-center text-center">
              <FaShieldAlt fontSize={34} className="text-blue-600" />
              <p className="font-semibold mt-2 text-black">SaaS & Automation</p>
            </div>
          </div>
        </div>

        <div className="col-span-6 max-xl:col-span-12 flex justify-center relative">
          <Atropos className="my-atropos" activeOffset={50} shadow={false}>
            <Image
              src="/developer_bowl_services_hero.png"
              alt="DeveloperBowl Services"
              width={500}
              height={500}
              priority
              className="rounded-xl"
            />
          </Atropos>
        </div>
      </div>



      {/* Services Grid */}
      <section className="py-20">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setServiceIndex(index)}
                onMouseLeave={() => setServiceIndex(-1)}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300
                  ${serviceIndex === index ? "white-bowl-icon-small-top" : "blue-bowl-icon-small-top"}
                  `}
              >
                <div className={`absolute overflow-hidden rounded-2xl h-0 w-0 group-hover:h-full transition-all duration-400  group-hover:w-full bg-blue-500 ${service?.class ? service?.class : "left-0 top-0"} `}></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${service?.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative">
                  <div className="bg-blue-50 p-4 text-blue-500 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service?.icon}
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-white text-gray-900 mb-4">{service?.title}</h3>
                  <p className="text-gray-600 group-hover:text-white mb-6">{service?.description}</p>
                  <ul className="space-y-3">
                    {service?.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 group-hover:text-white text-gray-600">
                        <FaCheckCircle className="w-5 h-5 group-hover:text-white text-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="underline-custom">Process</span>
            </h2>
            <p className="text-gray-600 text-lg">
              A systematic approach to delivering exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-blue-50 h-full p-6 rounded-2xl">
                  <div className="text-4xl font-bold text-blue-600 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
                    <div className="w-8 h-0.5 bg-blue-200" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <Atropos className="my-atropos" activeOffset={50} shadow={false}>
          <div className="px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-12 text-center text-white"
            >
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
              <div className="relative">
                <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can help bring your ideas to life with our expertise and innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Atropos className="my-atropos" activeOffset={50} shadow={false}>
                    <Link href={'/contact'}><button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors duration-300">
                      Get Started
                    </button></Link>
                  </Atropos>
                </div>
              </div>
            </motion.div>
          </div>
        </Atropos>
      </section>
    </div>
  );
}
