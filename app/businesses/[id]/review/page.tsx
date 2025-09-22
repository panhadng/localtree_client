"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";

export default function WriteReviewPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle review submission here
    console.log({ rating, title, review, photos });
    // Redirect to business page after submission
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhotos(Array.from(e.target.files));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="LocalTree Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="text-2xl font-bold text-[#185659]">LocalTree</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href={`/businesses/${resolvedParams.id}`} className="text-gray-700 hover:text-[#185659]">
                ← Back to Business
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-[#185659] mb-2">Write a Review</h1>
          <p className="text-gray-600 mb-8">Share your experience to help others discover great local businesses.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Overall Rating *
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="focus:outline-none"
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    onClick={() => setRating(star)}
                  >
                    <svg 
                      className={`w-8 h-8 ${
                        star <= (hoveredRating || rating) 
                          ? 'text-[#ed8c15] fill-current' 
                          : 'text-gray-300'
                      } transition-colors`} 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                    </svg>
                  </button>
                ))}
                <span className="ml-2 text-gray-600">
                  {rating > 0 && (
                    <>
                      {rating} star{rating !== 1 ? 's' : ''} - 
                      {rating === 1 && ' Poor'}
                      {rating === 2 && ' Fair'}
                      {rating === 3 && ' Good'}
                      {rating === 4 && ' Very Good'}
                      {rating === 5 && ' Excellent'}
                    </>
                  )}
                </span>
              </div>
            </div>

            {/* Review Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Review Title *
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Summarize your experience in a few words"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent"
                required
              />
            </div>

            {/* Review Text */}
            <div>
              <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-2">
                Your Review *
              </label>
              <textarea
                id="review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Tell others about your experience. What did you like? What could be improved?"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent resize-none"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                Minimum 50 characters ({review.length}/50)
              </p>
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Add Photos (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#185659] transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                  id="photo-upload"
                />
                <label htmlFor="photo-upload" className="cursor-pointer">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <p className="text-gray-600">Click to upload photos</p>
                  <p className="text-sm text-gray-400">PNG, JPG up to 10MB each</p>
                </label>
              </div>
              {photos.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">{photos.length} photo(s) selected</p>
                  <div className="flex flex-wrap gap-2">
                    {photos.map((photo, index) => (
                      <span key={index} className="bg-[#185659] text-white px-3 py-1 rounded-full text-sm">
                        {photo.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Guidelines */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Review Guidelines</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Be honest and constructive in your feedback</li>
                <li>• Focus on your personal experience</li>
                <li>• Avoid personal attacks or offensive language</li>
                <li>• Don&apos;t include personal information</li>
                <li>• Reviews should be based on actual visits</li>
              </ul>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={!rating || !title || !review || review.length < 50}
                className="flex-1 bg-[#185659] text-white py-3 rounded-lg font-semibold hover:bg-[#1e6a6e] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Submit Review
              </button>
              <Link
                href={`/businesses/${resolvedParams.id}`}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
