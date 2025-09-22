// Core data types for LocalTree application

export interface Business {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  image: string;
  images?: string[];
  address: string;
  phone?: string;
  website?: string;
  email?: string;
  description: string;
  tags: string[];
  isVerified: boolean;
  isSponsored?: boolean;
  sponsorshipLevel?: 'premium' | 'standard' | 'basic';
  owner?: string;
  amenities?: string[];
  hours?: BusinessHours;
  latitude?: number;
  longitude?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface BusinessHours {
  [key: string]: string;
}

export interface Review {
  id: number;
  businessId: number;
  user: string;
  userAvatar: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  helpful: number;
  isInfluencer: boolean;
  photos?: string[];
}

export interface Influencer {
  id: number;
  name: string;
  avatar: string;
  location: string;
  followers: string;
  reviews: number;
  specialties: string[];
  rating: number;
  badge: string;
  bio?: string;
  joinDate?: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  businessCount?: number;
}

export interface BusinessFormData {
  businessName: string;
  category: string;
  description: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  website: string;
  email: string;
  needWebsiteHelp: boolean;
  hours: {
    monday: DayHours;
    tuesday: DayHours;
    wednesday: DayHours;
    thursday: DayHours;
    friday: DayHours;
    saturday: DayHours;
    sunday: DayHours;
  };
}

export interface DayHours {
  open: string;
  close: string;
  closed: boolean;
}

export interface ClaimFormData {
  businessName: string;
  ownerName: string;
  email: string;
  phone: string;
  businessAddress: string;
  businessType: string;
  description: string;
  website: string;
  socialMedia: string;
  businessDocuments: File | null;
}

export interface ReviewFormData {
  rating: number;
  title: string;
  content: string;
  photos: File[];
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

// Search and Filter types
export interface BusinessFilters {
  category?: string;
  rating?: number;
  location?: string;
  verified?: boolean;
  search?: string;
}

export interface SearchParams {
  query?: string;
  category?: string;
  location?: string;
  sortBy?: 'rating' | 'reviews' | 'name' | 'distance';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}
