import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import React from "react";
import Logo from "./components/Logo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LocalTree - Discover Local Businesses",
  description:
    "Find, review, and rate local businesses in your community. Connect with local businesses and become a social influencer.",
  keywords: "local business, reviews, ratings, community, local directory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Sticky Header - Taller with smaller fonts */}
        <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link href="/" className="flex items-center">
                <Logo width={55} height={55} textSize="xl" imageClassName="mr-3" />
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <Link
                  href="/about"
                  className="text-sm text-gray-700 hover:text-[#185659] transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/businesses"
                  className="text-sm text-gray-700 hover:text-[#185659] transition-colors"
                >
                  Browse
                </Link>
                <Link
                  href="/categories"
                  className="text-sm text-gray-700 hover:text-[#185659] transition-colors"
                >
                  Categories
                </Link>

                <Link
                  href="/contact"
                  className="text-sm text-gray-700 hover:text-[#185659] transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="/claim-listing"
                  className="text-sm text-gray-700 hover:text-[#185659] transition-colors"
                >
                  Claim Your Listing
                </Link>
                <Link
                  href="/signup"
                  className="bg-[#ed8c15] text-white px-4 py-2 rounded-lg hover:bg-[#f39c2b] transition-colors text-sm"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        {children}

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <Logo width={48} height={48} textSize="lg" className="mb-4" />
                <p className="text-gray-600">
                  Connecting communities through local business discovery and
                  authentic reviews.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#185659] mb-4">For Users</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/businesses"
                      className="text-gray-600 hover:text-[#185659]"
                    >
                      Browse Businesses
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/categories"
                      className="text-gray-600 hover:text-[#185659]"
                    >
                      Categories
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/reviews"
                      className="text-gray-600 hover:text-[#185659]"
                    >
                      Write Reviews
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/influencers"
                      className="text-gray-600 hover:text-[#185659]"
                    >
                      Become Influencer
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#185659] mb-4">
                  For Businesses
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/list-business"
                      className="text-gray-600 hover:text-[#185659]"
                    >
                      List Your Business
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/claim-listing"
                      className="text-gray-600 hover:text-[#185659]"
                    >
                      Claim Your Listing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="text-gray-600 hover:text-[#185659]"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/support"
                      className="text-gray-600 hover:text-[#185659]"
                    >
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#185659] mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-600 hover:text-[#185659]"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-600 hover:text-[#185659]"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-gray-600 hover:text-[#185659]"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-gray-600 hover:text-[#185659]"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
              <p>&copy; 2025 LocalTree. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
