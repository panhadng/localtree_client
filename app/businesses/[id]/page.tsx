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
