import Image from "next/image";
import Link from "next/link";
import { 
  MdRestaurant, 
  MdShoppingBag, 
  MdBuild, 
  MdLocalHospital, 
  MdTheaters, 
  MdDirectionsCar 
} from "react-icons/md";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Perth Background */}
      <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/perth.jpg"
            alt="Perth cityscape"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Main Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20 flex-1 flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)] shadow-black">
            <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] shadow-black">
              Discover Your Local
            </span>
            <span className="block text-[#ed8c15] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] shadow-black">
              Community Tree
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] shadow-black">
            Your complete directory for local businesses in Australia. Find verified local services, showcase your business, 
            read genuine customer review and support the businesses that make your community thrive.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/businesses"
              className="bg-[#185659] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors hover:bg-white hover:text-[#185659] border-2 border-[#185659]"
            >
              Explore Businesses
            </Link>
            <Link 
              href="/list-business"
              className="bg-[#ed8c15] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors hover:bg-white hover:text-[#ed8c15] border-2 border-[#ed8c15]"
            >
              List Your Business
            </Link>
          </div>
        </div>
        
        {/* Hero Search Bar - At bottom of hero section */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="business-search" className="block text-sm font-medium text-gray-700 mb-2">
                    Search for businesses
                  </label>
                  <input
                    type="text"
                    id="business-search"
                    placeholder="Restaurant, coffee shop, dentist..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent text-gray-900"
                  />
                </div>
                <div className="md:w-64">
                  <label htmlFor="location-select" className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <select
                    id="location-select"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent text-gray-900"
                  >
                    <option value="">Select location</option>
                    <option value="perth-cbd">Perth CBD</option>
                    <option value="fremantle">Fremantle</option>
                    <option value="subiaco">Subiaco</option>
                    <option value="northbridge">Northbridge</option>
                    <option value="cottesloe">Cottesloe</option>
                    <option value="south-perth">South Perth</option>
                    <option value="joondalup">Joondalup</option>
                    <option value="mandurah">Mandurah</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button className="bg-[#185659] text-white px-8 py-3 rounded-lg hover:bg-[#1e6a6e] transition-colors font-semibold whitespace-nowrap">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories - Moved above Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#185659] mb-12">
            Popular Business Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Restaurants", icon: MdRestaurant, count: "245+" },
              { name: "Shopping", icon: MdShoppingBag, count: "189+" },
              { name: "Services", icon: MdBuild, count: "156+" },
              { name: "Health", icon: MdLocalHospital, count: "98+" },
              { name: "Entertainment", icon: MdTheaters, count: "76+" },
              { name: "Automotive", icon: MdDirectionsCar, count: "54+" }
            ].map((category) => {
              const IconComponent = category.icon;
              return (
                <Link 
                  key={category.name}
                  href={`/categories/${category.name.toLowerCase()}`}
                  className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-gray-200 hover:border-[#ed8c15] group"
                >
                  <div className="text-4xl mb-3 text-[#185659] group-hover:text-[#ed8c15] transition-colors">
                    <IconComponent className="mx-auto" />
                  </div>
                  <h3 className="font-semibold text-[#185659] mb-1 group-hover:text-[#ed8c15] transition-colors">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} local businesses</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section - Moved below Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#185659] mb-12">
            Why Choose Local<span className="text-[#ed8c15]">Tree</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#185659] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#185659] mb-2">Local Business Discovery</h3>
              <p className="text-gray-600">
                Easily find verified local businesses near you with complete contact details, hours, and location information.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#ed8c15] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#185659] mb-2">Customer Reviews & Ratings</h3>
              <p className="text-gray-600">
                Read authentic customer reviews and ratings to help you choose the best local businesses for your needs.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#185659] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#185659] mb-2">Free Business Listings</h3>
              <p className="text-gray-600">
                List your local business for free and reach thousands of potential customers in your area.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#ed8c15] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#185659] mb-2">Community Connection</h3>
              <p className="text-gray-600">
                Connect with your local community and support Perth businesses that make your neighborhood special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 border-4 border-[#185659] rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-4 border-[#ed8c15] rounded-full"></div>
          <div className="absolute bottom-20 left-32 w-24 h-24 border-4 border-[#185659] rounded-full"></div>
          <div className="absolute bottom-32 right-10 w-12 h-12 border-4 border-[#ed8c15] rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center text-[#185659] mb-12">
            Our Happy <span className="text-[#ed8c15]">Customers</span>
          </h2>
          
          {/*
            Refactored testimonials section to use data and looping.
            Name and title section is now absolutely positioned at the bottom of the card.
          */}
          {(() => {
            const testimonials = [
              {
                quote:
                  "Working with LocalTree's team has been an absolute delight. They are very cooperative and give step by step guidance. Thanks to LocalTree, my business has succeeded in getting better brand value. The number of inquiries increased within a week of listing my business.",
                name: "Richard Thomas",
                title: "Founder, Melbourne",
              },
              {
                quote:
                  "LocalTree made it so easy to find exactly what I was looking for in my area. The verified businesses gave me confidence, and the reviews from other customers were incredibly helpful in making my decision.",
                name: "Sarah Mitchell",
                title: "Customer, Sydney",
              },
              {
                quote:
                  "As a small business owner, getting listed on LocalTree was the best decision I made this year. The verification process was smooth, and I've seen a significant increase in foot traffic and online inquiries.",
                name: "Michael Chen",
                title: "Restaurant Owner, Brisbane",
              },
            ];

            return (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg shadow-lg relative flex flex-col"
                    style={{ minHeight: "320px" }}
                  >
                    <div className="p-8 pb-20 flex-1">
                      <div className="absolute top-4 right-4">
                        <svg className="w-8 h-8 text-[#ed8c15] opacity-20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                        </svg>
                      </div>
                      <div className="flex text-[#ed8c15] mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 italic">
                        &quot;{testimonial.quote}&quot;
                      </p>
                    </div>
                    <div className="absolute left-0 right-0 bottom-0 border-t bg-white px-8 py-4 rounded-b-lg">
                      <h4 className="font-semibold text-[#185659] text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#185659]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Free Business Listing For Higher Visibility
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-4xl mx-auto">
            Increase your brand value and get more customers just by listing your business in LocalTree, 
            a free business listing portal in Australia. Visit our claim listing page to verify your business 
            and earn the verified authentic profile badge and a blue authenticity profile tick on our free 
            business listing portal to gain customer trust, display authenticity, and get more business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/list-business"
              className="bg-[#ed8c15] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#f39c2b] transition-colors"
            >
              List Your Business
            </Link>
            <Link 
              href="/claim-listing"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#185659] transition-colors"
            >
              Claim Your Listing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
