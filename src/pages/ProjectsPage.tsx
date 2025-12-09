import { Navigation } from '../components/Navigation';
import { motion } from 'framer-motion';
import { Search, Filter, Users, Star, GitFork, Clock } from 'lucide-react';
import { useState } from 'react';
import React from 'react';
import { BlazorDashboardSVG, MauiAppSVG, MicroservicesSVG, ECommerceSVG, AIChatBotSVG, DevOpsSVG } from '../components/ProjectSVGs';

const projectImages: Record<string, () => React.JSX.Element> = {
  '1': BlazorDashboardSVG,
  '2': MauiAppSVG,
  '3': MicroservicesSVG,
  '4': ECommerceSVG,
  '5': AIChatBotSVG,
  '6': DevOpsSVG
};

const allProjects = [
  {
    id: '1',
    title: 'Blazor Dashboard',
    description: 'Real-time data visualization dashboard with SignalR integration',
    contributors: 12,
    stars: 234,
    forks: 45,
    difficulty: 'Intermediate',
    lastUpdated: '2 weeks ago',
    technologies: ['.NET 8', 'C#', 'Blazor', 'SignalR'],
    category: 'Web'
  },
  {
    id: '2',
    title: 'MAUI Mobile App',
    description: 'Cross-platform productivity tool for iOS and Android',
    contributors: 8,
    stars: 189,
    forks: 32,
    difficulty: 'Advanced',
    lastUpdated: '5 days ago',
    technologies: ['.NET MAUI', 'C#', 'XAML'],
    category: 'Mobile'
  },
  {
    id: '3',
    title: 'Microservices API',
    description: 'Scalable backend solution with Docker and RabbitMQ',
    contributors: 15,
    stars: 312,
    forks: 67,
    difficulty: 'Beginner',
    lastUpdated: '1 week ago',
    technologies: ['ASP.NET Core', 'Docker', 'RabbitMQ'],
    category: 'Backend'
  },
  {
    id: '4',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration',
    contributors: 20,
    stars: 456,
    forks: 89,
    difficulty: 'Intermediate',
    lastUpdated: '3 days ago',
    technologies: ['ASP.NET Core', 'React', 'PostgreSQL'],
    category: 'Web'
  },
  {
    id: '5',
    title: 'AI Chat Bot',
    description: 'Intelligent chatbot using Azure OpenAI and Semantic Kernel',
    contributors: 10,
    stars: 278,
    forks: 54,
    difficulty: 'Advanced',
    lastUpdated: '1 day ago',
    technologies: ['.NET 8', 'Azure OpenAI', 'Semantic Kernel'],
    category: 'AI/ML'
  },
  {
    id: '6',
    title: 'DevOps Pipeline',
    description: 'CI/CD automation toolkit with GitHub Actions',
    contributors: 6,
    stars: 145,
    forks: 28,
    difficulty: 'Beginner',
    lastUpdated: '4 days ago',
    technologies: ['.NET', 'GitHub Actions', 'Docker'],
    category: 'DevOps'
  }
];

const categories = ['All', 'Web', 'Mobile', 'Backend', 'AI/ML', 'DevOps'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || project.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'Advanced': return 'text-red-400 bg-red-400/10 border-red-400/30';
      default: return 'text-white/60 bg-white/5 border-white/10';
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0E14]">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-[#0F1419] border-b border-[#00D4FF]/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Explore <span className="text-[#00D4FF]">Projects</span>
            </h1>
            <p className="text-white/70 text-xl max-w-3xl">
              Browse through {allProjects.length}+ open-source .NET projects. Find the perfect project to contribute and grow your skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-6 bg-[#0F1419] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#1A1F2E] border border-[#00D4FF]/30 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#00D4FF]"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-12 pr-8 py-3 bg-[#1A1F2E] border border-[#00D4FF]/30 rounded-lg text-white focus:outline-none focus:border-[#00D4FF] cursor-pointer"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div className="relative">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="pl-4 pr-8 py-3 bg-[#1A1F2E] border border-[#00D4FF]/30 rounded-lg text-white focus:outline-none focus:border-[#00D4FF] cursor-pointer"
              >
                {difficulties.map(diff => (
                  <option key={diff} value={diff}>{diff}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="text-white/60">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="solid-border-subtle rounded-lg p-6 hover:border-[#00D4FF] transition-all duration-300"
              >
                <div className="relative mb-6 rounded-lg overflow-hidden border-2 border-[#00D4FF]/20">
                  {(() => {
                    const ImageComponent = projectImages[project.id];
                    return <ImageComponent />;
                  })()}
                  <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold border ${getDifficultyColor(project.difficulty)}`}>
                    {project.difficulty}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-white/60">
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{project.contributors}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={16} />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={16} />
                    <span>{project.forks}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-white/50 mb-4">
                  <Clock size={14} />
                  <span>Updated {project.lastUpdated}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/80 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="w-full px-6 py-3 rounded-lg font-bold bg-[#00D4FF] text-[#0A0E14] hover:bg-[#00B8E6] border-2 border-[#00D4FF] hover:border-[#00B8E6] transition-all duration-300">
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
