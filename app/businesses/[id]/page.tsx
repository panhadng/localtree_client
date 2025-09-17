import Image from "next/image";
import Link from "next/link";

// Mock data - in a real app, this would come from your database
const mockBusiness = {
  id: 1,
  name: "Green Leaf Cafe",
  category: "Restaurant",
  rating: 4.8,
  reviewCount: 124,
  images: ["/images/logo.png", "/images/logo.png", "/images/logo.png"],
  address: "123 Main St, Downtown",
  phone: "(555) 123-4567",
  website: "www.greenleafcafe.com",
  hours: {
    "Monday": "7:00 AM - 8:00 PM",
    "Tuesday": "7:00 AM - 8:00 PM",
    "Wednesday": "7:00 AM - 8:00 PM",
    "Thursday": "7:00 AM - 8:00 PM",
    "Friday": "7:00 AM - 9:00 PM",
    "Saturday": "8:00 AM - 9:00 PM",
    "Sunday": "8:00 AM - 7:00 PM"
  },
  description: "Green Leaf Cafe is your neighborhood's premier destination for organic coffee, fresh pastries, and healthy meals. We source our beans directly from sustainable farms and bake everything fresh daily. Our cozy atmosphere makes it perfect for work, meetings, or just relaxing with friends.",
  amenities: ["Free WiFi", "Outdoor Seating", "Wheelchair Accessible", "Pet Friendly", "Parking Available"],
  tags: ["Coffee", "Organic", "Breakfast", "Lunch", "Vegan Options"],
  isVerified: true,
  owner: "Sarah Johnson"
};

const mockReviews = [
  {
    id: 1,
    user: "Mike Chen",
    userAvatar: "/images/logo.png",
    rating: 5,
    date: "2024-01-15",
    title: "Amazing coffee and atmosphere!",
    content: "I've been coming here for months and it never disappoints. The coffee is exceptional, and the staff is always friendly. The avocado toast is my go-to breakfast!",
    helpful: 12,
    isInfluencer: true
  },
  {
    id: 2,
    user: "Jessica Rodriguez",
    userAvatar: "/images/logo.png",
    rating: 4,
    date: "2024-01-10",
    title: "Great place for remote work",
    content: "Perfect spot for getting work done. Good WiFi, comfortable seating, and not too noisy. The pastries are delicious too!",
    helpful: 8,
    isInfluencer: false
  },
  {
    id: 3,
    user: "David Kim",
    userAvatar: "/images/logo.png",
    rating: 5,
    date: "2024-01-05",
    title: "Best organic coffee in town",
    content: "As someone who takes coffee seriously, I can say this place knows what they're doing. The single-origin options are fantastic.",
    helpful: 15,
    isInfluencer: true
  }
];

export default function BusinessProfilePage({ params }: { params: { id: string } }) {
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
              <Link href="/businesses" className="text-gray-700 hover:text-[#185659]">
                ← Back to Businesses
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Business Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Images */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 gap-4">
                <Image
                  src={mockBusiness.images[0]}
                  alt={mockBusiness.name}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="grid grid-cols-2 gap-4">
                  {mockBusiness.images.slice(1).map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt={`${mockBusiness.name} ${index + 2}`}
                      width={300}
                      height={200}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Business Info */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold text-[#185659]">{mockBusiness.name}</h1>
                {mockBusiness.isVerified && (
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                    Verified
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 mb-4">{mockBusiness.category}</p>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex text-[#ed8c15]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-xl font-semibold text-gray-900">{mockBusiness.rating}</span>
                  <span className="text-gray-500">({mockBusiness.reviewCount} reviews)</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">{mockBusiness.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-700">{mockBusiness.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  <a href={`https://${mockBusiness.website}`} className="text-[#185659] hover:underline">
                    {mockBusiness.website}
                  </a>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {mockBusiness.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Link 
                  href={`/businesses/${params.id}/review`}
                  className="bg-[#ed8c15] text-white px-6 py-3 rounded-lg hover:bg-[#f39c2b] transition-colors"
                >
                  Write a Review
                </Link>
                <button className="bg-[#185659] text-white px-6 py-3 rounded-lg hover:bg-[#1e6a6e] transition-colors">
                  Save Business
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-[#185659] mb-4">About</h2>
              <p className="text-gray-700 leading-relaxed">{mockBusiness.description}</p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-[#185659] mb-4">Amenities</h2>
              <div className="grid grid-cols-2 gap-3">
                {mockBusiness.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#185659]">Reviews ({mockReviews.length})</h2>
                <Link 
                  href={`/businesses/${params.id}/review`}
                  className="bg-[#ed8c15] text-white px-4 py-2 rounded-lg hover:bg-[#f39c2b] transition-colors"
                >
                  Write Review
                </Link>
              </div>

              <div className="space-y-6">
                {mockReviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex items-start gap-4">
                      <Image
                        src={review.userAvatar}
                        alt={review.user}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-gray-900">{review.user}</h4>
                          {review.isInfluencer && (
                            <span className="bg-[#ed8c15] text-white text-xs px-2 py-1 rounded-full">
                              Influencer
                            </span>
                          )}
                          <span className="text-gray-500 text-sm">{review.date}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex text-[#ed8c15]">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                              </svg>
                            ))}
                          </div>
                        </div>

                        <h5 className="font-semibold text-gray-900 mb-2">{review.title}</h5>
                        <p className="text-gray-700 mb-3">{review.content}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <button className="flex items-center gap-1 hover:text-[#185659]">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>
                            Helpful ({review.helpful})
                          </button>
                          <button className="hover:text-[#185659]">Reply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Hours */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#185659] mb-4">Hours</h3>
              <div className="space-y-2">
                {Object.entries(mockBusiness.hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-gray-700">{day}</span>
                    <span className="text-gray-900">{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#185659] mb-4">Location</h3>
              <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Map Coming Soon</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">{mockBusiness.address}</p>
            </div>

            {/* Similar Businesses */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#185659] mb-4">Similar Businesses</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Image
                      src="/images/logo.png"
                      alt="Similar business"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded object-cover"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Similar Cafe {i}</h4>
                      <p className="text-xs text-gray-500">4.5 ★ (89 reviews)</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

Now let me create the review writing page:

```tsx:localtree_client/app/businesses/[id]/review/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function WriteReviewPage({ params }: { params: { id: string } }) {
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
              <Link href={`/businesses/${params.id}`} className="text-gray-700 hover:text-[#185659]">
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
                <li>• Don't include personal information</li>
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
                href={`/businesses/${params.id}`}
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
```

Now let me create the business listing form for business owners:

```tsx:localtree_client/app/list-business/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

  const categories = [
    "Restaurant", "Shopping", "Services", "Health", "Entertainment", 
    "Automotive", "Beauty", "Education", "Real Estate", "Professional Services"
  ];

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
          </div>
        </nav>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#185659] mb-2">List Your Business</h1>
            <p className="text-gray-600">Join LocalTree and connect with your local community</p>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent resize-none"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#185659] focus:border-transparent"
                />
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
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={hours.closed}
                          onChange={(e) => handleHoursChange(day, 'closed', e.target.checked)}
                          className="mr-2"
                        />
                        Closed
                      </label>
                      {!hours.closed && (
                        <>
                          <input
                            type="time"
                            value={hours.open}
                            onChange={(e) => handleHoursChange(day, 'open', e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#185659] focus:border-transparent"
                          />
                          <span className="text-gray-500">to</span>
                          <input
                            type="time"
                            value={hours.close}
                            onChange={(e) => handleHoursChange(day, 'close', e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#185659] focus:border-transparent"
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
                Your business listing will be reviewed and published within 24-48 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
```

Finally, let me create the influencer signup page:

```tsx:localtree_client/app/influencers/page.tsx
import Image from "next/image";
import Link from "next/link";

const topInfluencers = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "/images/logo.png",
    location: "Downtown District",
    followers: "2.3K",
    reviews: 156,
    specialties: ["Restaurants", "Coffee Shops", "Nightlife"],
    rating: 4.9,
    badge: "Top Reviewer"
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    avatar: "/images/logo.png",
    location: "Tech Quarter",
    followers: "1.8K",
    reviews: 134,
    specialties: ["Tech Services", "Coworking", "Lunch Spots"],
    rating: 4.8,
    badge: "Local Expert"
  },
  {
    id: 3,
    name: "Emma Thompson",
    avatar: "/images/logo.png",
    location: "Arts District",
    followers: "3.1K",
    reviews: 203,
    specialties: ["Shopping", "Beauty", "Entertainment"],
    rating: 4.9,
    badge: "Style Guru"
  }
];

export default function InfluencersPage() {
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
              <Link href="/signup" className="bg-[#ed8c15] text-white px-4 py-2 rounded-lg hover:bg-[#f39c2b] transition-colors">
                Become an Influencer
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#185659] to-[#1e6a6e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Become a Local Influencer
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-green-100">
            Share your local expertise, build your reputation, and help your community discover the best businesses. 
            Join our network of trusted local voices.
          </p>
          <Link 
            href="/signup"
            className="bg-[#ed8c15] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#f39c2b] transition-colors inline-block"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#185659] mb-12">
            Why Become a LocalTree Influencer?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#ed8c15] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#185659] mb-2">Build Your Reputation</h3>
              <p className="text-gray-600">
                Establish yourself as a trusted voice in your community and gain recognition for your local expertise.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#185659] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#185659] mb-2">Connect with Community</h3>
              <p className="text-gray-600">
                Help your neighbors discover great local businesses and build stronger community connections.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#ed8c15] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#185659] mb-2">Exclusive Perks</h3>
              <p className="text-gray-600">
                Get early access to new businesses, special discounts, and invitations to exclusive local events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Influencers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#185659] mb-12">
            Meet Our Top Local Influencers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {topInfluencers.map((influencer) => (
              <div key={influencer.id} className="bg-white rounded-lg shadow-sm p-6 text-center">
                <Image
                  src={influencer.avatar}
                  alt={influencer.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="mb-2">
                  <span className="bg-[#ed8c15] text-white text-xs px-2 py-1 rounded-full">
                    {influencer.badge}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#185659] mb-1">{influencer.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{influencer.location}</p>
                
                <div className="flex justify-center items-center gap-4 mb-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold text-[#185659]">{influencer.followers}</div>
                    <div className="text-gray-500">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-[#185659]">{influencer.reviews}</div>
                    <div className="text-gray-500">Reviews</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-[#185659]">{influencer.rating}</div>
                    <div className="text-gray-500">Rating</div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Specializes in:</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {influencer.specialties.map((specialty) => (
                      <span key={specialty} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  href={`/influencers/${influencer.id}`}
                  className="bg-[#185659] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#1e6a6e] transition-colors"
                >
                  View Profile
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#185659] mb-12">
            How to Become an Influencer
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#185659] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-[#185659] mb-2">Sign Up</h3>
              <p className="text-gray-600 text-sm">Create your LocalTree account and complete your profile.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#185659] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-[#185659] mb-2">Write Reviews</h3>
              <p className="text-gray-600 text-sm">Share honest, detailed reviews of local businesses you visit.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#185659] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-[#185659] mb-2">Build Following</h3>
              <p className="text-gray-600 text-sm">Gain followers who trust your recommendations and insights.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#ed8c15] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-[#185659] mb-2">Get Recognized</h3>
              <p className="text-gray-600 text-sm">Earn badges, perks, and recognition as a trusted local voice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#185659]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Make Your Voice Heard?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join LocalTree today and start building your reputation as a trusted local influencer.
          </p>
          <Link 
            href="/signup"
            className="bg-[#ed8c15] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#f39c2b] transition-colors"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
```

Perfect! I've created a comprehensive LocalTree platform with all the features you requested. Here's what I've built:

## 🌳 LocalTree - Complete Local Business Platform

### **Key Features Implemented:**

1. **Beautiful Homepage** with your logo and color scheme (dark green #185659 and cold orange #ed8c15)
2. **Business Listings Page** - Browse and search local businesses
3. **Detailed Business Profiles** - Complete business information, photos, reviews, hours
4. **Review System** - Users can write detailed reviews with ratings and photos
5. **Business Listing Form** - Business owners can list their businesses
6. **Influencer Program** - Dedicated page for users to become local influencers

### **Design Features:**
- ✅ Uses your LocalTree logo throughout
- ✅ Consistent color theme with dark green (#185659) and cold orange (#ed8c15)
- ✅ Responsive design that works on all devices
- ✅ Professional, modern UI with smooth transitions
- ✅ Accessibility-friendly with proper contrast and navigation

### **User Experience:**
- **For Customers**: Browse businesses, read reviews, write reviews, discover local gems
- **For Business Owners**: List their business with complete details, hours, photos
- **For Influencers**: Build reputation, gain followers, get exclusive perks

### **Pages Created:**
1. `/` - Homepage with hero section and features
2. `/businesses` - Business listings with search and filters
3. `/businesses/[id]` - Individual business profiles
4. `/businesses/[id]/review` - Write review form
5. `/list-business` - Business registration form
6. `/influencers` - Influencer program page

The platform is ready to use and includes mock data for demonstration. You can now run the development server with `npm run dev` to see your LocalTree platform in action!

Would you like me to add any additional features like user authentication, categories pages, or database integration?
