import { Review, ApiResponse } from '../types';
import { mockReviews } from '../data/reviews';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class ReviewService {
  // Get reviews for a specific business
  static async getReviewsByBusinessId(businessId: number): Promise<Review[]> {
    await delay(200);
    
    return mockReviews
      .filter(review => review.businessId === businessId)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  // Get all reviews (for admin or analytics)
  static async getAllReviews(): Promise<Review[]> {
    await delay(300);
    return [...mockReviews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  // Get reviews by a specific user
  static async getReviewsByUser(userName: string): Promise<Review[]> {
    await delay(200);
    
    return mockReviews
      .filter(review => review.user === userName)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  // Get reviews by influencers only
  static async getInfluencerReviews(): Promise<Review[]> {
    await delay(250);
    
    return mockReviews
      .filter(review => review.isInfluencer)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  // Get recent reviews (for homepage or dashboard)
  static async getRecentReviews(limit: number = 5): Promise<Review[]> {
    await delay(200);
    
    return mockReviews
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  }

  // Get top-rated reviews
  static async getTopRatedReviews(limit: number = 5): Promise<Review[]> {
    await delay(200);
    
    return mockReviews
      .filter(review => review.rating >= 4)
      .sort((a, b) => {
        // Sort by rating first, then by helpful count
        if (b.rating !== a.rating) {
          return b.rating - a.rating;
        }
        return b.helpful - a.helpful;
      })
      .slice(0, limit);
  }

  // Submit a new review
  static async submitReview(
    businessId: number,
    reviewData: {
      rating: number;
      title: string;
      content: string;
      userName: string;
      userAvatar?: string;
      photos?: string[];
    }
  ): Promise<ApiResponse<{ id: number }>> {
    await delay(400);
    
    // Validate required fields
    if (!reviewData.rating || !reviewData.title || !reviewData.content) {
      return {
        data: { id: 0 },
        success: false,
        error: "Rating, title, and content are required"
      };
    }

    if (reviewData.rating < 1 || reviewData.rating > 5) {
      return {
        data: { id: 0 },
        success: false,
        error: "Rating must be between 1 and 5"
      };
    }

    if (reviewData.content.length < 50) {
      return {
        data: { id: 0 },
        success: false,
        error: "Review content must be at least 50 characters"
      };
    }

    // Simulate successful submission
    const newId = mockReviews.length + 1;
    
    return {
      data: { id: newId },
      success: true,
      message: "Review submitted successfully!"
    };
  }

  // Mark review as helpful
  static async markReviewHelpful(reviewId: number): Promise<ApiResponse<{ helpful: number }>> {
    await delay(150);
    
    const review = mockReviews.find(r => r.id === reviewId);
    if (!review) {
      return {
        data: { helpful: 0 },
        success: false,
        error: "Review not found"
      };
    }

    // Simulate incrementing helpful count
    const newHelpfulCount = review.helpful + 1;
    
    return {
      data: { helpful: newHelpfulCount },
      success: true,
      message: "Thank you for your feedback!"
    };
  }

  // Get review statistics for a business
  static async getReviewStats(businessId: number): Promise<{
    totalReviews: number;
    averageRating: number;
    ratingDistribution: { [key: number]: number };
  }> {
    await delay(200);
    
    const businessReviews = mockReviews.filter(review => review.businessId === businessId);
    
    if (businessReviews.length === 0) {
      return {
        totalReviews: 0,
        averageRating: 0,
        ratingDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
      };
    }

    const totalRating = businessReviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / businessReviews.length;

    const ratingDistribution = businessReviews.reduce(
      (dist, review) => {
        dist[review.rating] = (dist[review.rating] || 0) + 1;
        return dist;
      },
      { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } as { [key: number]: number }
    );

    return {
      totalReviews: businessReviews.length,
      averageRating: Math.round(averageRating * 10) / 10, // Round to 1 decimal
      ratingDistribution
    };
  }

  // Report inappropriate review
  static async reportReview(
    reviewId: number,
    reason: string
  ): Promise<ApiResponse<{ reported: boolean }>> {
    await delay(300);
    
    if (!reason) {
      return {
        data: { reported: false },
        success: false,
        error: "Please provide a reason for reporting"
      };
    }

    return {
      data: { reported: true },
      success: true,
      message: "Review reported. Our team will review it within 24 hours."
    };
  }
}
