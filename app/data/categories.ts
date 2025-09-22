import { Category } from '../types';

export const mockCategories: Category[] = [
  {
    id: 0,
    name: "All",
    slug: "all",
    description: "Browse all businesses",
    businessCount: 150
  },
  {
    id: 1,
    name: "Restaurant",
    slug: "restaurant",
    description: "Dining, cafes, bars, and food services",
    icon: "🍽️",
    businessCount: 45
  },
  {
    id: 2,
    name: "Services",
    slug: "services",
    description: "Professional and technical services",
    icon: "🔧",
    businessCount: 32
  },
  {
    id: 3,
    name: "Shopping",
    slug: "shopping",
    description: "Retail stores, boutiques, and shopping centers",
    icon: "🛍️",
    businessCount: 28
  },
  {
    id: 4,
    name: "Health",
    slug: "health",
    description: "Healthcare, fitness, and wellness services",
    icon: "🏥",
    businessCount: 22
  },
  {
    id: 5,
    name: "Entertainment",
    slug: "entertainment",
    description: "Movies, games, events, and recreational activities",
    icon: "🎬",
    businessCount: 15
  },
  {
    id: 6,
    name: "Automotive",
    slug: "automotive",
    description: "Car services, repairs, and automotive supplies",
    icon: "🚗",
    businessCount: 18
  },
  {
    id: 7,
    name: "Beauty",
    slug: "beauty",
    description: "Salons, spas, and beauty services",
    icon: "💄",
    businessCount: 12
  },
  {
    id: 8,
    name: "Education",
    slug: "education",
    description: "Schools, tutoring, and educational services",
    icon: "📚",
    businessCount: 8
  },
  {
    id: 9,
    name: "Real Estate",
    slug: "real-estate",
    description: "Real estate agents, property management, and housing",
    icon: "🏠",
    businessCount: 14
  },
  {
    id: 10,
    name: "Professional Services",
    slug: "professional-services",
    description: "Legal, financial, consulting, and business services",
    icon: "💼",
    businessCount: 11
  }
];

// Helper function to get category names for forms
export const getCategoryNames = (): string[] => {
  return mockCategories
    .filter(cat => cat.slug !== 'all')
    .map(cat => cat.name);
};
