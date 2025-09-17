"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ClaimListingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    businessAddress: "",
    businessType: "",
    description: "",
    website: "",
    socialMedia: "",
    businessDocuments: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        businessDocuments: e.target.files![0]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Claim submission:", formData);
    setStep(4); // Move to success step
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#185659] mb-4">
            Claim Your Business Listing
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take control of your existing business listing. Get verified with a blue tick mark and manage your business information to increase visibility.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <React.Fragment key={stepNumber}>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= stepNumber
                      ? "bg-[#185659] text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div
                    className={`w-16 h-1 ${
                      step > stepNumber ? "bg-[#185659]" : "bg-gray-200"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          {step === 1 && (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-[#185659] mb-6">
                Step 1: Find Your Business Listing
              </h2>
              <div className="max-w-2xl mx-auto">
                <div className="bg-gray-100 rounded-lg p-6 mb-6">
                  <Image
                    src="/images/logo_2.png"
                    alt="Claim Process"
                    width={200}
                    height={150}
                    className="mx-auto mb-4"
                  />
                  <p className="text-gray-700 mb-4">
                    Your business is already listed on LocalTree. Choose your claiming option to take control and manage your listing.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-2 border-[#ed8c15] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#185659] mb-3">Basic Management</h3>
                    <ul className="text-gray-600 mb-4 space-y-2">
                      <li>• Update business information</li>
                      <li>• Manage contact details</li>
                      <li>• Set business hours</li>
                      <li>• Respond to reviews</li>
                    </ul>
                    <button
                      onClick={() => setStep(2)}
                      className="w-full bg-[#ed8c15] text-white py-2 px-4 rounded-lg hover:bg-[#f39c2b] transition-colors"
                    >
                      Claim with Basic Plan
                    </button>
                  </div>
                  <div className="border-2 border-[#185659] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#185659] mb-3">Premium Management</h3>
                    <ul className="text-gray-600 mb-4 space-y-2">
                      <li>• Everything in Basic</li>
                      <li>• Featured listing placement</li>
                      <li>• Manage photo gallery</li>
                      <li>• Access analytics dashboard</li>
                    </ul>
                    <button
                      onClick={() => setStep(2)}
                      className="w-full bg-[#185659] text-white py-2 px-4 rounded-lg hover:bg-[#1a6063] transition-colors"
                    >
                      Claim with Premium Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-[#185659] mb-6">
                Step 2: Lifetime Management Access at Free of Cost
              </h2>
              <div className="max-w-2xl mx-auto">
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      id="lifetimeClaim"
                      className="w-5 h-5 text-[#185659] mr-3"
                      defaultChecked
                    />
                    <label htmlFor="lifetimeClaim" className="text-lg font-semibold text-[#185659]">
                      LocalTree is offering Lifetime Listing Management at Free of Cost
                    </label>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Get verified with a blue tick mark beside your business profile and gain full control over your listing content to increase business visibility.
                  </p>
                  <button
                    onClick={() => setStep(3)}
                    className="w-full bg-[#185659] text-white py-3 px-6 rounded-lg hover:bg-[#1a6063] transition-colors font-semibold"
                  >
                    CONFIRM CLAIM
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-[#185659] mb-6">
                Step 3: Verify Your Business Ownership
              </h2>
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-blue-800 text-sm">
                    Please provide the following information to verify that you are the rightful owner or authorized representative of this business.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#185659] text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Owner Name *
                    </label>
                    <input
                      type="text"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#185659] text-gray-700"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#185659] text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#185659] text-gray-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Address *
                  </label>
                  <input
                    type="text"
                    name="businessAddress"
                    value={formData.businessAddress}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#185659] text-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type *
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#185659] text-gray-700"
                  >
                    <option value="">Select Business Type</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="medical">Medical Centre</option>
                    <option value="dentist">Dentist</option>
                    <option value="hotel">Hotel</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="services">Services</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#185659] text-gray-700"
                    placeholder="Describe your business..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Website URL
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#185659] text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Social Media
                    </label>
                    <input
                      type="text"
                      name="socialMedia"
                      value={formData.socialMedia}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#185659] text-gray-700"
                      placeholder="Facebook, Instagram, etc."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Documents (License, Registration, etc.)
                  </label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#185659] text-gray-700"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Upload business license, registration, or other verification documents
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ed8c15] text-white py-3 px-6 rounded-lg hover:bg-[#f39c2b] transition-colors font-semibold"
                >
                  Submit Claim Request
                </button>
              </form>
            </div>
          )}

          {step === 4 && (
            <div className="text-center">
              <div className="max-w-2xl mx-auto">
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-[#185659] mb-4">
                    Claim Request Submitted Successfully!
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Please wait for our support team to verify your ownership information. Once approved, you will get a Verified Blue Tick mark and full management access to your business listing.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <p className="text-blue-800 font-medium">
                      🔵 You&apos;ll receive verified status and management access once approved
                    </p>
                  </div>
                  <button
                    onClick={() => window.location.href = '/businesses'}
                    className="bg-[#185659] text-white py-3 px-6 rounded-lg hover:bg-[#1a6063] transition-colors font-semibold"
                  >
                    Browse Businesses
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Additional Information */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-[#185659] mb-4">Why Claim Your Existing Listing?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#185659] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-[#185659] mb-2">Get Verified</h4>
              <p className="text-gray-600 text-sm">Receive a blue tick mark to show customers your business is verified and legitimate</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#ed8c15] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h4 className="font-semibold text-[#185659] mb-2">Control Your Content</h4>
              <p className="text-gray-600 text-sm">Update business hours, descriptions, contact info, and manage your listing content</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#185659] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="font-semibold text-[#185659] mb-2">Engage with Customers</h4>
              <p className="text-gray-600 text-sm">Respond to reviews, answer questions, and build stronger customer relationships</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
