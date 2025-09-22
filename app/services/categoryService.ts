import { Category } from '../types';
import { mockCategories, getCategoryNames } from '../data/categories';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class CategoryService {
  // Get all categories
  static async getAllCategories(): Promise<Category[]> {
    await delay(100);
    return [...mockCategories];
  }

  // Get categories for forms (excluding "All")
  static async getCategoriesForForms(): Promise<string[]> {
    await delay(50);
    return getCategoryNames();
  }

  // Get category by slug
  static async getCategoryBySlug(slug: string): Promise<Category | null> {
    await delay(100);
    
    const category = mockCategories.find(cat => cat.slug === slug);
    return category || null;
  }

  // Get category by ID
  static async getCategoryById(id: number): Promise<Category | null> {
    await delay(100);
    
    const category = mockCategories.find(cat => cat.id === id);
    return category || null;
  }

  // Get categories with business counts
  static async getCategoriesWithCounts(): Promise<Category[]> {
    await delay(150);
    
    // In a real app, this would calculate actual business counts from the database
    return mockCategories.map(category => ({
      ...category,
      businessCount: category.businessCount || 0
    }));
  }

  // Get top categories by business count
  static async getTopCategories(limit: number = 5): Promise<Category[]> {
    await delay(120);
    
    return mockCategories
      .filter(cat => cat.slug !== 'all')
      .sort((a, b) => (b.businessCount || 0) - (a.businessCount || 0))
      .slice(0, limit);
  }

  // Search categories
  static async searchCategories(query: string): Promise<Category[]> {
    await delay(100);
    
    const searchLower = query.toLowerCase();
    
    return mockCategories
      .filter(cat =>
        cat.name.toLowerCase().includes(searchLower) ||
        cat.description?.toLowerCase().includes(searchLower)
      )
      .sort((a, b) => (b.businessCount || 0) - (a.businessCount || 0));
  }

  // Get category statistics
  static async getCategoryStats(): Promise<{
    totalCategories: number;
    totalBusinesses: number;
    averageBusinessesPerCategory: number;
    mostPopularCategory: Category | null;
  }> {
    await delay(150);
    
    const categoriesWithBusinesses = mockCategories.filter(cat => cat.slug !== 'all');
    const totalCategories = categoriesWithBusinesses.length;
    const totalBusinesses = categoriesWithBusinesses.reduce(
      (sum, cat) => sum + (cat.businessCount || 0), 
      0
    );
    const averageBusinessesPerCategory = totalBusinesses / totalCategories;
    
    const mostPopularCategory = categoriesWithBusinesses
      .sort((a, b) => (b.businessCount || 0) - (a.businessCount || 0))[0] || null;

    return {
      totalCategories,
      totalBusinesses,
      averageBusinessesPerCategory: Math.round(averageBusinessesPerCategory * 10) / 10,
      mostPopularCategory
    };
  }

  // Get category suggestions based on business data
  static async getCategorySuggestions(businessDescription: string): Promise<Category[]> {
    await delay(200);
    
    const descriptionLower = businessDescription.toLowerCase();
    const suggestions: { category: Category; score: number }[] = [];

    mockCategories
      .filter(cat => cat.slug !== 'all')
      .forEach(category => {
        let score = 0;
        
        // Check if category name appears in description
        if (descriptionLower.includes(category.name.toLowerCase())) {
          score += 10;
        }
        
        // Check if description keywords match category
        if (category.description) {
          const descWords = category.description.toLowerCase().split(' ');
          descWords.forEach(word => {
            if (word.length > 3 && descriptionLower.includes(word)) {
              score += 2;
            }
          });
        }
        
        // Add category-specific keyword matching
        const categoryKeywords = this.getCategoryKeywords(category.slug);
        categoryKeywords.forEach(keyword => {
          if (descriptionLower.includes(keyword.toLowerCase())) {
            score += 5;
          }
        });

        if (score > 0) {
          suggestions.push({ category, score });
        }
      });

    return suggestions
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(s => s.category);
  }

  // Helper method to get keywords for each category
  private static getCategoryKeywords(slug: string): string[] {
    const keywordMap: { [key: string]: string[] } = {
      'restaurant': ['food', 'dining', 'eat', 'meal', 'cuisine', 'chef', 'menu', 'kitchen'],
      'services': ['repair', 'fix', 'service', 'professional', 'technical', 'support'],
      'shopping': ['store', 'shop', 'retail', 'buy', 'sell', 'clothing', 'fashion'],
      'health': ['medical', 'doctor', 'fitness', 'gym', 'wellness', 'therapy', 'care'],
      'entertainment': ['fun', 'movie', 'game', 'event', 'music', 'show', 'recreation'],
      'automotive': ['car', 'auto', 'vehicle', 'mechanic', 'tire', 'oil', 'brake'],
      'beauty': ['salon', 'spa', 'hair', 'nail', 'massage', 'beauty', 'cosmetic'],
      'education': ['school', 'learn', 'teach', 'tutor', 'class', 'education', 'training'],
      'real-estate': ['property', 'house', 'home', 'rent', 'buy', 'real estate', 'agent'],
      'professional-services': ['legal', 'law', 'finance', 'accounting', 'consulting', 'business']
    };

    return keywordMap[slug] || [];
  }
}
