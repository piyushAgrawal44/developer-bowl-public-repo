"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";
import { projects } from "@/constants/Project";
import WorkCard from "./WorkCard";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";


export default function WorkSamples() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Our <span className="underline-custom">Portfolio</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our latest projects that showcase innovation, performance, and cutting-edge technologies.
          </p>
        </motion.div>


        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <WorkCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Want to See More?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Check out our complete portfolio or get in touch to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={'/portfolio'} className="flex justify-center">
            <Button variant="primary" className="!rounded-full flex gap-2 items-center">
              View All Projects
              <BsArrowUpRight className="w-5 h-5" />
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
