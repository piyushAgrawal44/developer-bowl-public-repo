"use client"; // Required for Next.js App Router

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // ✅ Use `usePathname` instead of `useRouter`
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./ui/Button";
import Modal from "./Modal";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // ✅ Get current path
  const linkArr = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-blue-100 py-1 px-2 text-sm text-blue-600 flex justify-center md:justify-between mb-5">
        <span>Best Website & Software Service! <span className="font-semibold hover:underline cursor-pointer">Contact Now</span></span>
        <span className="hidden md:block">Call Now: +123 456 7890</span>
      </div>

      {/* Navbar */}
      <div className={`transition-all duration-300 ${isSticky ? "sticky top-0 left-0 shadow-lg z-50 w-full" : "px-4 md:px-10"}`}>
        <nav className={`relative p-3 w-full bg-gray-100 ${isSticky ? "" : "md:rounded-lg"}`}>
          <div className="mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/developer_bowl_logo.png" alt="Developer Bowl Logo" width={130} height={50} priority />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-4">
              {linkArr.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-gray-700 ${pathname === link.href ? "font-semibold underline-custom" : ""}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Button */}
            <div className="hidden md:block">
              <Button variant="primary" onClick={() => {
                setIsModalOpen(true);
              }}>Get Quote</Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`p-2 focus:outline-none text-gray-600 transform transition-transform duration-300 ${menuOpen ? "rotate-180" : "rotate-0"
                  }`}
              >
                {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
              </button>
            </div>
          </div>

          <div className={`absolute z-10 transition-all ${menuOpen ? 'left-0' : '-left-[200%]'} w-full md:hidden flex flex-col items-center bg-gray-100 mt-2 p-3 space-y-2`}>
            {linkArr.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-gray-700 ${pathname === link.href ? "font-semibold underline-custom " : ""}`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="primary" className="w-full mt-2" onClick={() => {
              setMenuOpen(false)

              setIsModalOpen(true);
            }}>
              Get Quote
            </Button>
          </div>
          {/* Mobile Menu */}

        </nav>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Request a Quote"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Thank you for reaching out to us! Will share you quote very soon", { duration: 5000 });
              setIsModalOpen(false);
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
              defaultValue={`Hello ! I am interested in your offering. Please give me Quote for `}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Submit Request
            </button>
          </form>
        </Modal>

      </div>
    </>
  );
};

export default Navbar;
