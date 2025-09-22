"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Business, Category } from "../types";
import { BusinessService } from "../services/businessService";
import { CategoryService } from "../services/categoryService";

export default function BusinessesPage() {
  const router = useRouter();
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [businessData, categoryData] = await Promise.all([
          BusinessService.getBusinesses(),
          CategoryService.getAllCategories(),
        ]);
        setBusinesses(businessData);
        setCategories(categoryData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchFilteredBusinesses = async () => {
      try {
        const filteredBusinesses = await BusinessService.getBusinesses({
          category: selectedCategory,
          search: searchQuery,
        });
        setBusinesses(filteredBusinesses);
      } catch (error) {
        console.error("Error filtering businesses:", error);
      }
    };

    if (!loading) {
      fetchFilteredBusinesses();
    }
  }, [selectedCategory, searchQuery, loading]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#185659] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading businesses...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-[#185659]">
              Local Businesses
            </h1>
            <Link
              href="/list-business"
              className="bg-[#ed8c15] text-white px-4 py-2 rounded-lg hover:bg-[#f39c2b] transition-colors"
            >
              List Business
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-6 ">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search businesses, services, or products..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent text-gray-700"
              />
            </div>
            <div className="md:w-64">
              <input
                type="text"
                placeholder="Location"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent text-gray-700"
              />
            </div>
            <button className="bg-[#185659] text-white px-6 py-3 rounded-lg hover:bg-[#1e6a6e] transition-colors">
              Search
            </button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.name
                    ? "bg-[#185659] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-[#ed8c15] hover:text-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold text-[#185659]">
              {businesses.length}
            </span>{" "}
            businesses
          </p>
        </div>

        {/* Business Listings */}
        <div className="grid gap-6">
          {businesses.map((business) => (
            <div
              key={business.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => router.push(`/businesses/${business.id}`)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  router.push(`/businesses/${business.id}`);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Business Image */}
                  <div className="md:w-48 flex-shrink-0">
                    <Image
                      src={business.image}
                      alt={business.name}
                      width={192}
                      height={144}
                      className="w-full h-36 object-cover rounded-lg"
                    />
                  </div>

                  {/* Business Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Link href={`/businesses/${business.id}`}>
                            <h3 className="text-xl font-bold text-[#185659] hover:text-[#1e6a6e] cursor-pointer">
                              {business.name}
                            </h3>
                          </Link>
                          {business.isVerified && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              Verified
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mb-2">
                          {business.category}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          <div className="flex text-[#ed8c15]">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-4 h-4 fill-current"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm font-semibold text-gray-900">
                            {business.rating}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">
                          ({business.reviewCount} reviews)
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-3">{business.description}</p>

                    <div className="flex items-center gap-2 mb-3">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">
                        {business.address}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {business.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Link
                        href={`/businesses/${business.id}`}
                        className="bg-[#185659] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#1e6a6e] transition-colors"
                      >
                        View Details
                      </Link>
                      <Link
                        href={`/businesses/${business.id}/review`}
                        className="bg-[#ed8c15] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#f39c2b] transition-colors"
                      >
                        Write Review
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <nav className="flex items-center gap-2">
            <button className="px-3 py-2 text-sm text-gray-500 hover:text-[#185659]">
              Previous
            </button>
            <button className="px-3 py-2 text-sm bg-[#185659] text-white rounded">
              1
            </button>
            <button className="px-3 py-2 text-sm text-gray-700 hover:text-[#185659]">
              2
            </button>
            <button className="px-3 py-2 text-sm text-gray-700 hover:text-[#185659]">
              3
            </button>
            <button className="px-3 py-2 text-sm text-gray-500 hover:text-[#185659]">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
