import { Business, BusinessFilters, SearchParams, PaginatedResponse, ApiResponse, BusinessFormData, ClaimFormData } from '../types';
import { mockBusinesses } from '../data/businesses';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class BusinessService {
  // Get all businesses with optional filtering
  static async getBusinesses(filters?: BusinessFilters): Promise<Business[]> {
    await delay(300); // Simulate API call
    
    let filteredBusinesses = [...mockBusinesses];

    if (filters) {
      if (filters.category && filters.category !== 'All') {
        filteredBusinesses = filteredBusinesses.filter(
          business => business.category === filters.category
        );
      }

      if (filters.rating) {
        filteredBusinesses = filteredBusinesses.filter(
          business => business.rating >= filters.rating!
        );
      }

      if (filters.verified !== undefined) {
        filteredBusinesses = filteredBusinesses.filter(
          business => business.isVerified === filters.verified
        );
      }

      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        filteredBusinesses = filteredBusinesses.filter(
          business =>
            business.name.toLowerCase().includes(searchLower) ||
            business.description.toLowerCase().includes(searchLower) ||
            business.tags.some(tag => tag.toLowerCase().includes(searchLower))
        );
      }
    }

    return filteredBusinesses;
  }

  // Get businesses with pagination
  static async getBusinessesPaginated(
    searchParams: SearchParams
  ): Promise<PaginatedResponse<Business>> {
    await delay(300);
    
    const { page = 1, limit = 10, sortBy = 'rating', sortOrder = 'desc' } = searchParams;
    
    const businesses = await this.getBusinesses({
      category: searchParams.category,
      search: searchParams.query,
      location: searchParams.location
    });

    // Sort businesses
    businesses.sort((a, b) => {
      let aValue: string | number, bValue: string | number;
      
      switch (sortBy) {
        case 'rating':
          aValue = a.rating;
          bValue = b.rating;
          break;
        case 'reviews':
          aValue = a.reviewCount;
          bValue = b.reviewCount;
          break;
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        default:
          aValue = a.rating;
          bValue = b.rating;
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    // Paginate
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedBusinesses = businesses.slice(startIndex, endIndex);

    return {
      data: paginatedBusinesses,
      pagination: {
        page,
        limit,
        total: businesses.length,
        pages: Math.ceil(businesses.length / limit)
      }
    };
  }

  // Get business by ID
  static async getBusinessById(id: number): Promise<Business | null> {
    await delay(200);
    
    const business = mockBusinesses.find(b => b.id === id);
    return business || null;
  }

  // Get businesses by category
  static async getBusinessesByCategory(category: string): Promise<Business[]> {
    return this.getBusinesses({ category });
  }

  // Get featured/verified businesses
  static async getFeaturedBusinesses(limit: number = 6): Promise<Business[]> {
    await delay(250);
    
    return mockBusinesses
      .filter(business => business.isVerified)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit);
  }

  // Search businesses
  static async searchBusinesses(query: string): Promise<Business[]> {
    return this.getBusinesses({ search: query });
  }

  // Get similar businesses (by category, excluding current business)
  static async getSimilarBusinesses(businessId: number, limit: number = 3): Promise<Business[]> {
    await delay(200);
    
    const currentBusiness = await this.getBusinessById(businessId);
    if (!currentBusiness) return [];

    return mockBusinesses
      .filter(b => b.id !== businessId && b.category === currentBusiness.category)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit);
  }

  // Submit new business (mock)
  static async submitBusiness(businessData: BusinessFormData): Promise<ApiResponse<{ id: number }>> {
    await delay(500);
    
    // Simulate validation
    if (!businessData.businessName || !businessData.category) {
      return {
        data: { id: 0 },
        success: false,
        error: "Business name and category are required"
      };
    }

    // Simulate successful submission
    const newId = mockBusinesses.length + 1;
    
    return {
      data: { id: newId },
      success: true,
      message: "Business submitted successfully. It will be reviewed within 24-48 hours."
    };
  }

  // Claim business (mock)
  static async claimBusiness(claimData: ClaimFormData): Promise<ApiResponse<{ claimed: boolean }>> {
    await delay(600);
    
    // Simulate validation
    if (!claimData.businessName || !claimData.ownerName) {
      return {
        data: { claimed: false },
        success: false,
        error: "Business name and owner name are required"
      };
    }

    return {
      data: { claimed: true },
      success: true,
      message: "Claim request submitted successfully. Our team will review it within 2-3 business days."
    };
  }
}
