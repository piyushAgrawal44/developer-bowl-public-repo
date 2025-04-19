"use client";
import "atropos/css";
import Atropos from "atropos/react";
import { useState } from "react";
import toast from "react-hot-toast";

function NewsLetterSection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      toast.error("🚫 Please enter a valid email address.");
      return;
    }

    toast.success("🎉 Thanks for subscribing!");
    setEmail(""); // Clear input after submission
  };

  return (
    <>
      <Atropos className="my-atropos" shadow={false}>
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights and updates in the world of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full text-gray-50 bg-blue-500 focus:outline-none ring-2 ring-blue-400 focus:ring-blue-100 placeholder-white"
            />
            <button
              onClick={handleSubscribe}
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>
      </Atropos>
    </>
  );
}

export default NewsLetterSection;
