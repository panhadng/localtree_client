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
