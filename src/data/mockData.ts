// API mock data endpoints (static data for now, can be replaced with real API calls later)

import type {
  NavigationItemData,
  TestimonialData,
  MemberGrowthData,
  ProjectCreationData,
  TechnologyData,
  FeaturedProjectData,
  CommunityStatsData
} from '../types/schema';

// Navigation data
export const getNavigationItems = (): NavigationItemData[] => {
  return [
    { label: 'Home', href: '#', isActive: true },
    { label: 'Projects', href: '#projects', isActive: false },
    { label: 'Forum', href: '#forum', isActive: false },
    { label: 'Events', href: '#events', isActive: false },
    { label: 'Login', href: '#login', isActive: false }
  ];
};

// Testimonials data
export const getTestimonials = (): TestimonialData[] => {
  return [
    {
      name: 'Maria Rodriguez',
      role: 'Senior Developer',
      company: 'TechCorp',
      quote: 'NETDevs Community has been crucial for my career growth. The resources and support are unmatched.',
      avatarUrl: 'https://i.pravatar.cc/150?img=5'
    },
    {
      name: 'Carlos Silva',
      role: 'Full Stack Developer',
      company: 'DevSolutions',
      quote: 'I went from Junior to Senior in 14 months thanks to the mentorship and real-world projects here!',
      avatarUrl: 'https://i.pravatar.cc/150?img=12'
    },
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      company: 'Microsoft',
      quote: 'The collaborative environment and quality of projects here are exceptional. Highly recommend!',
      avatarUrl: 'https://i.pravatar.cc/150?img=47'
    }
  ];
};

// Member growth chart data
export const getMemberGrowthData = (): MemberGrowthData[] => {
  return [
    { month: 'Jan', members: 45 },
    { month: 'Feb', members: 78 },
    { month: 'Mar', members: 112 },
    { month: 'Apr', members: 135 },
    { month: 'May', members: 156 },
    { month: 'Jun', members: 178 },
    { month: 'Jul', members: 195 },
    { month: 'Aug', members: 215 },
    { month: 'Sep', members: 232 }
  ];
};

// Project creation chart data
export const getProjectCreationData = (): ProjectCreationData[] => {
  return [
    { month: 'Jan', projects: 12 },
    { month: 'Feb', projects: 18 },
    { month: 'Mar', projects: 28 },
    { month: 'Apr', projects: 35 },
    { month: 'May', projects: 32 },
    { month: 'Jun', projects: 38 },
    { month: 'Jul', projects: 45 },
    { month: 'Aug', projects: 42 },
    { month: 'Sep', projects: 52 }
  ];
};

// Technology usage chart data
export const getTechnologyData = (): TechnologyData[] => {
  return [
    { name: 'ASP.NET Core', value: 40, color: '#00D4FF' },
    { name: 'Blazor', value: 25, color: '#FF8C42' },
    { name: 'MAUI', value: 20, color: '#E94B9E' },
    { name: 'Entity Framework', value: 15, color: '#7B2BE8' }
  ];
};

// Featured projects data
export const getFeaturedProjects = (): FeaturedProjectData[] => {
  return [
    {
      id: '1',
      title: 'Blazor Dashboard',
      description: 'Real-time data visualization',
      category: 'dashboard',
      creatorName: 'Maria Rodriguez',
      creatorAvatarUrl: 'https://i.pravatar.cc/150?img=5',
      githubStars: 234,
      githubForks: 45,
      technologies: ['.NET 8', 'C#', 'SignalR'],
      contributors: 12,
      difficulty: 'Intermediate',
      lastUpdated: '2 weeks ago'
    },
    {
      id: '2',
      title: 'MAUI Mobile App',
      description: 'Cross-platform productivity tool',
      category: 'mobile',
      creatorName: 'John Smith',
      creatorAvatarUrl: 'https://i.pravatar.cc/150?img=12',
      githubStars: 189,
      githubForks: 32,
      technologies: ['.NET MAUI', 'C#', 'XAML'],
      contributors: 8,
      difficulty: 'Advanced',
      lastUpdated: '5 days ago'
    },
    {
      id: '3',
      title: 'Microservices API',
      description: 'Scalable backend solution',
      category: 'backend',
      creatorName: 'Alex Chen',
      creatorAvatarUrl: 'https://i.pravatar.cc/150?img=33',
      githubStars: 312,
      githubForks: 67,
      technologies: ['ASP.NET Core', 'Docker', 'RabbitMQ'],
      contributors: 15,
      difficulty: 'Beginner',
      lastUpdated: '1 week ago'
    }
  ];
};

// Community statistics
export const getCommunityStats = (): CommunityStatsData => {
  return {
    totalMembers: 2847,
    memberGrowthPercent: 23,
    totalProjects: 542,
    projectGrowthPercent: 12,
    activePercent: 89,
    yearsOnline: 3
  };
};