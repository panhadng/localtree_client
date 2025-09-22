import { Influencer, ApiResponse } from '../types';
import { mockInfluencers } from '../data/influencers';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class InfluencerService {
  // Get all influencers
  static async getAllInfluencers(): Promise<Influencer[]> {
    await delay(250);
    return [...mockInfluencers].sort((a, b) => b.rating - a.rating);
  }

  // Get top influencers (by rating and followers)
  static async getTopInfluencers(limit: number = 3): Promise<Influencer[]> {
    await delay(200);
    
    return mockInfluencers
      .sort((a, b) => {
        // Sort by rating first, then by follower count
        if (b.rating !== a.rating) {
          return b.rating - a.rating;
        }
        // Convert follower strings to numbers for comparison
        const aFollowers = this.parseFollowerCount(a.followers);
        const bFollowers = this.parseFollowerCount(b.followers);
        return bFollowers - aFollowers;
      })
      .slice(0, limit);
  }

  // Get influencer by ID
  static async getInfluencerById(id: number): Promise<Influencer | null> {
    await delay(150);
    
    const influencer = mockInfluencers.find(inf => inf.id === id);
    return influencer || null;
  }

  // Get influencers by location
  static async getInfluencersByLocation(location: string): Promise<Influencer[]> {
    await delay(200);
    
    return mockInfluencers
      .filter(inf => inf.location.toLowerCase().includes(location.toLowerCase()))
      .sort((a, b) => b.rating - a.rating);
  }

  // Get influencers by specialty
  static async getInfluencersBySpecialty(specialty: string): Promise<Influencer[]> {
    await delay(200);
    
    return mockInfluencers
      .filter(inf => 
        inf.specialties.some(spec => 
          spec.toLowerCase().includes(specialty.toLowerCase())
        )
      )
      .sort((a, b) => b.rating - a.rating);
  }

  // Search influencers
  static async searchInfluencers(query: string): Promise<Influencer[]> {
    await delay(250);
    
    const searchLower = query.toLowerCase();
    
    return mockInfluencers
      .filter(inf =>
        inf.name.toLowerCase().includes(searchLower) ||
        inf.location.toLowerCase().includes(searchLower) ||
        inf.bio?.toLowerCase().includes(searchLower) ||
        inf.specialties.some(spec => spec.toLowerCase().includes(searchLower))
      )
      .sort((a, b) => b.rating - a.rating);
  }

  // Get influencers with most reviews
  static async getMostActiveInfluencers(limit: number = 5): Promise<Influencer[]> {
    await delay(200);
    
    return mockInfluencers
      .sort((a, b) => b.reviews - a.reviews)
      .slice(0, limit);
  }

  // Apply to become an influencer
  static async applyToBeInfluencer(applicationData: {
    name: string;
    email: string;
    location: string;
    specialties: string[];
    bio: string;
    socialMediaLinks?: string[];
    portfolio?: string;
  }): Promise<ApiResponse<{ applicationId: number }>> {
    await delay(500);
    
    // Validate required fields
    if (!applicationData.name || !applicationData.email || !applicationData.bio) {
      return {
        data: { applicationId: 0 },
        success: false,
        error: "Name, email, and bio are required"
      };
    }

    if (applicationData.specialties.length === 0) {
      return {
        data: { applicationId: 0 },
        success: false,
        error: "Please select at least one specialty"
      };
    }

    if (applicationData.bio.length < 100) {
      return {
        data: { applicationId: 0 },
        success: false,
        error: "Bio must be at least 100 characters"
      };
    }

    // Simulate successful application
    const applicationId = Math.floor(Math.random() * 10000) + 1000;
    
    return {
      data: { applicationId },
      success: true,
      message: "Application submitted successfully! We'll review it within 3-5 business days and get back to you."
    };
  }

  // Get influencer statistics
  static async getInfluencerStats(): Promise<{
    totalInfluencers: number;
    averageRating: number;
    totalReviews: number;
    topSpecialties: { specialty: string; count: number }[];
  }> {
    await delay(200);
    
    const totalInfluencers = mockInfluencers.length;
    const totalRating = mockInfluencers.reduce((sum, inf) => sum + inf.rating, 0);
    const averageRating = totalRating / totalInfluencers;
    const totalReviews = mockInfluencers.reduce((sum, inf) => sum + inf.reviews, 0);

    // Count specialties
    const specialtyCount: { [key: string]: number } = {};
    mockInfluencers.forEach(inf => {
      inf.specialties.forEach(specialty => {
        specialtyCount[specialty] = (specialtyCount[specialty] || 0) + 1;
      });
    });

    const topSpecialties = Object.entries(specialtyCount)
      .map(([specialty, count]) => ({ specialty, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    return {
      totalInfluencers,
      averageRating: Math.round(averageRating * 10) / 10,
      totalReviews,
      topSpecialties
    };
  }

  // Follow/Unfollow influencer
  static async toggleFollowInfluencer(
    influencerId: number,
    isFollowing: boolean
  ): Promise<ApiResponse<{ following: boolean; followerCount: string }>> {
    await delay(200);
    
    const influencer = mockInfluencers.find(inf => inf.id === influencerId);
    if (!influencer) {
      return {
        data: { following: false, followerCount: '0' },
        success: false,
        error: "Influencer not found"
      };
    }

    // Simulate updating follower count
    const currentFollowers = this.parseFollowerCount(influencer.followers);
    const newFollowerCount = isFollowing ? currentFollowers - 1 : currentFollowers + 1;
    const newFollowerString = this.formatFollowerCount(newFollowerCount);

    return {
      data: { 
        following: !isFollowing, 
        followerCount: newFollowerString 
      },
      success: true,
      message: isFollowing ? "Unfollowed successfully" : "Following successfully"
    };
  }

  // Helper method to parse follower count string to number
  private static parseFollowerCount(followers: string): number {
    const num = parseFloat(followers);
    if (followers.includes('K')) {
      return Math.round(num * 1000);
    } else if (followers.includes('M')) {
      return Math.round(num * 1000000);
    }
    return num;
  }

  // Helper method to format follower count number to string
  private static formatFollowerCount(count: number): string {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  }
}
