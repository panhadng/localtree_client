"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CategoryService } from "../services/categoryService";

export default function ListBusinessPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    category: "",
    description: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    website: "",
    email: "",
    needWebsiteHelp: false,
    hours: {
      monday: { open: "", close: "", closed: false },
      tuesday: { open: "", close: "", closed: false },
      wednesday: { open: "", close: "", closed: false },
      thursday: { open: "", close: "", closed: false },
      friday: { open: "", close: "", closed: false },
      saturday: { open: "", close: "", closed: false },
      sunday: { open: "", close: "", closed: false },
    }
  });

  const [photos, setPhotos] = useState<File[]>([]);

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryData = await CategoryService.getCategoriesForForms();
        setCategories(categoryData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleHoursChange = (day: string, field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      hours: {
        ...prev.hours,
        [day]: {
          ...prev.hours[day as keyof typeof prev.hours],
          [field]: value
        }
      }
    }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhotos(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ formData, photos });
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#185659] mb-2">Add Your Business to LocalTree</h1>
            <p className="text-gray-600">Create a new business listing and connect with your local community</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <section>
              <h2 className="text-xl font-semibold text-[#185659] mb-4">Basic Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent text-gray-700"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent text-gray-700"
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell customers about your business, what makes you special, and what services you offer..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent resize-none text-gray-700"
                  required
                />
              </div>
            </section>

            {/* Location */}
            <section>
              <h2 className="text-xl font-semibold text-[#185659] mb-4">Location</h2>
              <div className="grid md:grid-cols-1 gap-6 mb-6">
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent text-gray-700"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent text-gray-700"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                    State *
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent text-gray-700"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent text-gray-700"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-xl font-semibold text-[#185659] mb-4">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent text-gray-700"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent text-gray-700"
                    required
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                  Website (Optional)
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://www.yourbusiness.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent text-gray-700"
                />
                <div className="mt-3">
                  <label className="flex items-center text-gray-700">
                    <input
                      type="checkbox"
                      name="needWebsiteHelp"
                      checked={formData.needWebsiteHelp}
                      onChange={(e) => setFormData(prev => ({ ...prev, needWebsiteHelp: e.target.checked }))}
                      className="mr-3 w-4 h-4 text-[#185659] border-gray-300 rounded focus:ring-[#185659]"
                    />
                    <span className="text-sm">
                      I need help creating a website or would like a website review
                    </span>
                  </label>
                  {formData.needWebsiteHelp && (
                    <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm text-blue-800">
                        📞 Our team will contact you after your listing is approved to discuss website creation or review services.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Business Hours */}
            <section>
              <h2 className="text-xl font-semibold text-[#185659] mb-4">Business Hours</h2>
              <div className="space-y-4">
                {Object.entries(formData.hours).map(([day, hours]) => (
                  <div key={day} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                    <div className="w-24">
                      <span className="font-medium text-gray-700 capitalize">{day}</span>
                    </div>
                    <div className="flex items-center gap-4 flex-1">
                      <label className="flex items-center text-gray-700">
                        <input
                          type="checkbox"
                          checked={hours.closed}
                          onChange={(e) => handleHoursChange(day, 'closed', e.target.checked)}
                          className="mr-2 "
                        />
                        Closed
                      </label>
                      {!hours.closed && (
                        <>
                          <input
                            type="time"
                            value={hours.open}
                            onChange={(e) => handleHoursChange(day, 'open', e.target.value)}
                              className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#185659] focus:border-transparent text-gray-700"
                          />
                          <span className="text-gray-500">to</span>
                          <input
                            type="time"
                            value={hours.close}
                            onChange={(e) => handleHoursChange(day, 'close', e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#185659] focus:border-transparent text-gray-700"
                          />
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Photos */}
            <section>
              <h2 className="text-xl font-semibold text-[#185659] mb-4">Photos</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#185659] transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                  id="business-photos"
                />
                <label htmlFor="business-photos" className="cursor-pointer">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <p className="text-gray-600 mb-2">Upload photos of your business</p>
                  <p className="text-sm text-gray-400">PNG, JPG up to 10MB each (max 10 photos)</p>
                </label>
              </div>
              {photos.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">{photos.length} photo(s) selected</p>
                </div>
              )}
            </section>

            {/* Submit */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#185659] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#1e6a6e] transition-colors"
                >
                  Submit Business Listing
                </button>
                <Link
                  href="/"
                  className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </Link>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Your new business listing will be reviewed and published within 24-48 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
