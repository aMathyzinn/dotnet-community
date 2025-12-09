import { getFeaturedProjects } from '../data/mockData';
import { Button } from './Button';
import { Users, Star, GitFork, Clock } from 'lucide-react';
import { BlazorDashboardSVG, MauiAppSVG, MicroservicesSVG } from './ProjectSVGs';

const projectImages: Record<string, () => JSX.Element> = {
  '1': BlazorDashboardSVG,
  '2': MauiAppSVG,
  '3': MicroservicesSVG
};

export const FeaturedProjects = () => {
  const projects = getFeaturedProjects();

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'Advanced': return 'text-red-400 bg-red-400/10 border-red-400/30';
      default: return 'text-white/60 bg-white/5 border-white/10';
    }
  };

  return (
    <section className="py-24 px-6 bg-[#0A0E14]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Featured Community Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="solid-border-subtle rounded-lg p-6 hover:border-[#00D4FF] transition-all duration-300">
              <div className="relative mb-6 rounded-lg overflow-hidden border-2 border-[#00D4FF]/20">
                {(() => {
                  const ImageComponent = projectImages[project.id];
                  return <ImageComponent />;
                })()}
                {project.difficulty && (
                  <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold border ${getDifficultyColor(project.difficulty)}`}>
                    {project.difficulty}
                  </div>
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-white/70 mb-4">{project.description}</p>
              
              {/* Stats */}
              <div className="flex items-center gap-4 mb-4 text-sm text-white/60">
                {project.contributors && (
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{project.contributors}</span>
                  </div>
                )}
                {project.githubStars && (
                  <div className="flex items-center gap-1">
                    <Star size={16} />
                    <span>{project.githubStars}</span>
                  </div>
                )}
                {project.githubForks && (
                  <div className="flex items-center gap-1">
                    <GitFork size={16} />
                    <span>{project.githubForks}</span>
                  </div>
                )}
              </div>

              {project.lastUpdated && (
                <div className="flex items-center gap-2 text-xs text-white/50 mb-4">
                  <Clock size={14} />
                  <span>Updated {project.lastUpdated}</span>
                </div>
              )}
              
              {project.technologies && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/80 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="flex items-center justify-between">
                <Button variant="primary" className="text-base px-6 py-3">
                  View Project
                </Button>
                
                <img 
                  src={project.creatorAvatarUrl} 
                  alt={project.creatorName}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#00D4FF]"
                  title={project.creatorName}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};