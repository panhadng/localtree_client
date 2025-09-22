import { Review } from '../types';

export const mockReviews: Review[] = [
  // Reviews for Green Leaf Cafe (businessId: 1)
  {
    id: 1,
    businessId: 1,
    user: "Mike Chen",
    userAvatar: "/images/logo_2.png",
    rating: 5,
    date: "2024-01-15",
    title: "Amazing coffee and atmosphere!",
    content: "I've been coming here for months and it never disappoints. The coffee is exceptional, and the staff is always friendly. The avocado toast is my go-to breakfast!",
    helpful: 12,
    isInfluencer: true,
    photos: ["/images/logo_2.png"]
  },
  {
    id: 2,
    businessId: 1,
    user: "Jessica Rodriguez",
    userAvatar: "/images/logo_2.png",
    rating: 4,
    date: "2024-01-10",
    title: "Great place for remote work",
    content: "Perfect spot for getting work done. Good WiFi, comfortable seating, and not too noisy. The pastries are delicious too!",
    helpful: 8,
    isInfluencer: false
  },
  {
    id: 3,
    businessId: 1,
    user: "David Kim",
    userAvatar: "/images/logo_2.png",
    rating: 5,
    date: "2024-01-05",
    title: "Best organic coffee in town",
    content: "As someone who takes coffee seriously, I can say this place knows what they're doing. The single-origin options are fantastic.",
    helpful: 15,
    isInfluencer: true
  },
  // Reviews for Tech Repair Pro (businessId: 2)
  {
    id: 4,
    businessId: 2,
    user: "Sarah Wilson",
    userAvatar: "/images/logo_2.png",
    rating: 5,
    date: "2024-01-12",
    title: "Fixed my phone in 2 hours!",
    content: "Cracked my screen badly and they had it fixed in just 2 hours. Great service and reasonable prices. Highly recommend!",
    helpful: 6,
    isInfluencer: false
  },
  {
    id: 5,
    businessId: 2,
    user: "Alex Thompson",
    userAvatar: "/images/logo_2.png",
    rating: 4,
    date: "2024-01-08",
    title: "Professional and reliable",
    content: "They diagnosed my laptop issue quickly and provided a clear explanation of the repair needed. Fair pricing and quality work.",
    helpful: 4,
    isInfluencer: true
  },
  // Reviews for Bella's Boutique (businessId: 3)
  {
    id: 6,
    businessId: 3,
    user: "Emma Davis",
    userAvatar: "/images/logo_2.png",
    rating: 5,
    date: "2024-01-14",
    title: "Love the unique pieces!",
    content: "Found the perfect dress for a special event. The staff helped me put together a complete look. Will definitely be back!",
    helpful: 9,
    isInfluencer: true
  },
  {
    id: 7,
    businessId: 3,
    user: "Lisa Brown",
    userAvatar: "/images/logo_2.png",
    rating: 5,
    date: "2024-01-11",
    title: "Personal styling service is amazing",
    content: "Booked a personal styling session and it was worth every penny. They really understand fashion and helped me find my style.",
    helpful: 7,
    isInfluencer: false
  },
  // Reviews for Mountain View Fitness (businessId: 4)
  {
    id: 8,
    businessId: 4,
    user: "Chris Johnson",
    userAvatar: "/images/logo_2.png",
    rating: 5,
    date: "2024-01-16",
    title: "Best gym in the area",
    content: "Clean facilities, modern equipment, and great trainers. The group classes are challenging and fun. Worth the membership!",
    helpful: 11,
    isInfluencer: true
  },
  {
    id: 9,
    businessId: 4,
    user: "Maria Garcia",
    userAvatar: "/images/logo_2.png",
    rating: 4,
    date: "2024-01-13",
    title: "Great facilities and staff",
    content: "The personal trainers are knowledgeable and supportive. Equipment is well-maintained. Only wish it was open 24/7.",
    helpful: 5,
    isInfluencer: false
  },
  // Reviews for Artisan Pizza Co (businessId: 5)
  {
    id: 10,
    businessId: 5,
    user: "Tony Martinez",
    userAvatar: "/images/logo_2.png",
    rating: 5,
    date: "2024-01-17",
    title: "Authentic wood-fired pizza",
    content: "Finally found a place that does real wood-fired pizza right. The crust is perfect and the ingredients taste incredibly fresh.",
    helpful: 8,
    isInfluencer: true
  },
  {
    id: 11,
    businessId: 5,
    user: "Jennifer Lee",
    userAvatar: "/images/logo_2.png",
    rating: 4,
    date: "2024-01-15",
    title: "Great pizza, cozy atmosphere",
    content: "Delicious pizza with creative toppings. The atmosphere is warm and inviting. Service was a bit slow but worth the wait.",
    helpful: 3,
    isInfluencer: false
  }
];
