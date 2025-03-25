"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { contactInfo } from "../config/contact";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#232B32]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Image
              src="/images/tecsudo-logo.png"
              alt="TecSudo Logo"
              width={40}
              height={40}
              className="mr-3"
            />
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="font-heading text-white font-bold text-2xl">{contactInfo.companyName}</span>
              {/* <span className="text-[#00E2D6] font-bold text-2xl">{contactInfo.companyName}</span> */}
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-white hover:text-[#00E2D6] transition-colors">
              Services
            </Link>
            <Link href="#portfolio" className="text-white hover:text-[#00E2D6] transition-colors">
              Portfolio
            </Link>
            <Link href="#team" className="text-white hover:text-[#00E2D6] transition-colors">
              Team
            </Link>
            <Link href="#technologies" className="text-white hover:text-[#00E2D6] transition-colors">
              Technologies
            </Link>
            <Link
              href="#contact"
              className="btn-primary px-5 py-2 rounded-full font-medium"
            >
              Contact Us
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#00E2D6]"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 inset-x-0 bg-[#232B32] shadow-lg rounded-b-lg">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="#services"
              className="text-white hover:text-[#00E2D6] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="text-white hover:text-[#00E2D6] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="#team"
              className="text-white hover:text-[#00E2D6] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="#technologies"
              className="text-white hover:text-[#00E2D6] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Technologies
            </Link>
            <Link
              href="#contact"
              className="btn-primary px-5 py-2 rounded-full font-medium inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 