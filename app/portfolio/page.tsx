"use client";

import Head from "next/head";
import WorkCard from "@/components/WorkCard";
import { categories, projects } from "@/constants/Project";
import { motion } from "framer-motion";
import CTASection from "@/components/CTAsection";
import { useState } from "react";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects based on the selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
      <main>
        <Head>
          <title>Our Work | Developer Bowl Projects</title>
          <meta
            name="description"
            content="Explore a variety of projects delivered by Developer Bowl, ranging from web development to AI-powered apps."
          />
        </Head>

        {/* Projects Section */}
        <section className="min-h-screen py-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-gray-900">
              What We've <span className="underline-custom">Built</span>
            </h2>
            <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
              Our portfolio speaks for itself. From sleek websites to robust AI applications,
              here’s a glimpse into our expertise.
            </p>
          </div>

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
                className={`px-6 py-2 rounded-full font-medium shadow-md transition-colors duration-300
                  ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <WorkCard key={index} project={project} index={index} />
            ))}
          </div>
        </section>

        <CTASection />
      </main>
    </>
  );
}
