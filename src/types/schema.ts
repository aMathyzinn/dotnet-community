// Mock data schema for the landing page

// Navigation data
export interface NavigationItemData {
  label: string;
  href: string;
  isActive?: boolean;
}

// Testimonial data
export interface TestimonialData {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl: string;
}

// Chart data types
export interface MemberGrowthData {
  month: string;
  members: number;
}

export interface ProjectCreationData {
  month: string;
  projects: number;
}

export interface TechnologyData {
  name: string;
  value: number;
  color: string;
}

// Project data
export interface FeaturedProjectData {
  id: string;
  title: string;
  description: string;
  category: string;
  creatorName: string;
  creatorAvatarUrl: string;
  githubStars?: number;
  githubForks?: number;
  technologies?: string[];
  contributors?: number;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  lastUpdated?: string;
}

// Community stats
export interface CommunityStatsData {
  totalMembers: number;
  memberGrowthPercent: number;
  totalProjects: number;
  projectGrowthPercent: number;
  activePercent: number;
  yearsOnline: number;
}