"use client";
import { Database, Lightbulb, Rocket, ShieldCheck, Users, Target } from "lucide-react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { Plans } from "./aboutData";
import Atropos from "atropos/react";
import { useState } from "react";
import Modal from "@/components/Modal";
import Button from "@/components/ui/Button";
import Head from "next/head";
import toast from "react-hot-toast";



export default function About() {
  const [selectedPlan, setSelectedPlan] = useState<Plans | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleSelectPlan = (plan: Plans) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPlan(null);
  };
  return (
    <>
      <Head>
        <title>DeveloperBowl | About Us - Top IT Company in India</title>
        <meta
          name="description"
          content="DeveloperBowl is a leading IT company in India offering software development, mobile app solutions, and innovative digital services. Learn more about our mission, values, and plans."
        />
        <meta
          name="keywords"
          content="IT Company in India, Software Development, Web Development, Mobile App Development, DeveloperBowl, UI/UX Design, Indian Tech Company"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://developerbowl.com/about" />

        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "DeveloperBowl About",
      "url": "https://developerbowl.com",
      "logo": "https://developerbowl.com/logo.png",
      "sameAs": [
        "https://www.linkedin.com/company/developerbowl",
        "https://www.twitter.com/developerbowl"
      ],
      "description": "Leading IT company in India offering software and mobile solutions."
    }
    `}
        </script>

      </Head>
      <div className="w-full h-fit py-10 overflow-hidden bg-white text-black">
        {/* Intro Section */}
        <div className="grid grid-cols-12 gap-6 max-xl:px-10 max-sm:px-4 mt-10">
          <div className="col-span-6 max-md:col-span-12 flex flex-col gap-6 justify-center">
            <h2 className="text-4xl font-bold leading-tight text-black">
              About <span className="text-blue-600">DeveloperBowl</span> - Software Innovation Hub
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We specialize in building world-class <span className="font-semibold text-blue-600">Software Applications</span>,
              <span className="font-semibold text-blue-600"> Mobile Apps</span>, and cutting-edge digital solutions.
            </p>
            <p className="text-md text-gray-600 leading-relaxed">
              Our team ensures high-quality products with innovative technologies, scalability, and security.
              We thrive on transforming ideas into reality through seamless execution and unmatched expertise.
            </p>

            <div className="flex gap-6 mt-6">
              <div className="flex flex-col items-center text-center border-r-2 pr-6 border-gray-300">
                <Database width={40} height={40} className="text-blue-600" />
                <p className="font-semibold mt-2 text-black">Strategy Plan</p>
              </div>
              <div className="flex flex-col items-center text-center border-r-2 pr-6 border-gray-300">
                <Lightbulb width={40} height={40} className="text-blue-600" />
                <p className="font-semibold mt-2 text-black">Innovative Ideas</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Rocket width={40} height={40} className="text-blue-600" />
                <p className="font-semibold mt-2 text-black">Scalable Solutions</p>
              </div>
            </div>
          </div>

          <div className="col-span-6 max-md:col-span-12 flex lg:justify-end lg:pe-10 relative">
            <Atropos className="my-atropos" activeOffset={50} shadow={false}>
              <Image src="/about-us/about_us_03.webp" alt="Team working on innovative software solutions at DeveloperBowl" width={500} height={500} priority className="rounded-xl shadow-lg object-contain" />
            </Atropos>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="bg-blue-50 px-4 sm:px-6 lg:px-8 py-12 mt-16">
          <h2 className="text-3xl font-bold text-center text-black mb-8">Our Core <span className="underline-custom">Values</span></h2>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-4 max-md:col-span-12 text-center">
              <ShieldCheck className="mx-auto text-blue-600" size={40} />
              <h3 className="font-bold text-xl mt-4">Integrity</h3>
              <p className="text-gray-600 mt-2">We uphold the highest standards of honesty and transparency in all our actions.</p>
            </div>
            <div className="col-span-4 max-md:col-span-12 text-center">
              <Users className="mx-auto text-blue-600" size={40} />
              <h3 className="font-bold text-xl mt-4">Collaboration</h3>
              <p className="text-gray-600 mt-2">Teamwork and partnership are at the core of our culture and success.</p>
            </div>
            <div className="col-span-4 max-md:col-span-12 text-center">
              <Target className="mx-auto text-blue-600" size={40} />
              <h3 className="font-bold text-xl mt-4">Customer Focus</h3>
              <p className="text-gray-600 mt-2">We aim to exceed expectations by delivering tailored solutions to our clients.</p>
            </div>
          </div>

        </div>

        {/* Creative Skills Section with Icons */}
        <div className="bg-white py-20 px-4 sm:px-6 lg:px-20 relative overflow-hidden">
          <h2 className="text-4xl font-bold text-center text-black mb-4">
            <span className=" underline-custom">Skills</span> We're Proud Of
          </h2>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            We blend code, creativity & user-first thinking to craft stunning digital experiences.
          </p>
          <svg
            viewBox="0 0 1200 200"
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[130px] w-[90%] h-[200px] pointer-events-none z-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="
                M 170 150
                Q 300 70, 600 150
                T 1000 150
              "
              stroke="#60A5FA"
              strokeWidth="6"
              strokeDasharray="14"
              fill="transparent"
              strokeLinecap="round"
            />
          </svg>


          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Frontend */}
            <div className="col-span-1 lg:col-span-4 flex flex-col items-center group relative ">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-4xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Rocket />
              </div>
              <h3 className="text-xl font-bold mt-6 text-black">Frontend Development</h3>
              <p className="text-gray-600 text-center mt-2 px-4">
                Modern, fast & responsive UIs using React, Next.js, Tailwind and more — pixel-perfect every time.
              </p>
            </div>

            {/* Backend */}
            <div className="col-span-1 lg:col-span-4 flex flex-col items-center group relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-4xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Database />
              </div>
              <h3 className="text-xl font-bold mt-6 text-black">Backend Development</h3>
              <p className="text-gray-600 text-center mt-2 px-4">
                Solid backend architectures using Node.js, Express, MongoDB, PostgreSQL & cloud-native tech.
              </p>
            </div>

            {/* UI/UX */}
            <div className="col-span-1 lg:col-span-4 flex flex-col items-center group relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center text-white text-4xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Lightbulb />
              </div>
              <h3 className="text-xl font-bold mt-6 text-black">UI/UX Design</h3>
              <p className="text-gray-600 text-center mt-2 px-4">
                Empathy-driven, clean, and modern UI/UX using Figma, Adobe XD, and real design thinking.
              </p>
            </div>
          </div>
        </div>


        {/* Plan Section */}
        <div className="bg-gradient-to-b from-white to-blue-50 px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mt-16">
            <h2 className="text-4xl font-bold text-black">
              Our <span className="underline-custom">Pricing</span>
            </h2>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
              Providing top-notch digital solutions to help your business grow.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-6 mt-10">
            {Plans.map((p) => (
              <div
                key={p.id}
                className="bg-white relative col-span-4 max-xl:col-span-6 max-lg:col-span-12 py-10 px-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center blue-bowl-icon-small-top"
              >
                <h3 className="font-bold text-2xl text-black">{p.title}</h3>
                <div className="text-4xl font-bold text-black mt-4">{p.price}</div>
                <ul className="my-4 space-y-2">
                  {p.plainDes.map((des, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <FaCheck className="text-blue-600" />
                      {des}
                    </li>
                  ))}
                </ul>
                <Button

                  className="!rounded-full"
                  onClick={() => handleSelectPlan(p)}
                >

                  Select Plan
                </Button>
              </div>
            ))}
          </div>
        </div>


        <Modal isOpen={showModal} onClose={handleCloseModal} title={`Enquiry for: ${selectedPlan?.title}`}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("🎉 Your enquiry has been submitted!", { duration: 5000 });
              handleCloseModal();
            }}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded px-3 py-2"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded px-3 py-2"
              required
            />
            <input
              type="tel"
              min={10}
              max={10}
              placeholder="Your Phone"
              className="border border-gray-300 rounded px-3 py-2"
              required
            />
            <textarea
              placeholder="Your Message"
              className="border border-gray-300 rounded px-3 py-2"
              rows={3}
              defaultValue={`Hello ! I am interested in ${selectedPlan?.title} plan. Please contact me asap!`}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Submit Enquiry
            </button>
          </form>
        </Modal>
      </div>
    </>
  );
}
