import { Button } from './Button';
import { motion } from 'framer-motion';
import { Users, Star, Award } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0E14]">
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.08]" 
        style={{
          backgroundImage: 'linear-gradient(#00D4FF 1.5px, transparent 1.5px), linear-gradient(90deg, #00D4FF 1.5px, transparent 1.5px)',
          backgroundSize: '60px 60px',
          animation: 'gridSlide 25s linear infinite'
        }}
      />
      
      {/* Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#00D4FF] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#00D4FF] to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Connect & Build: The Global
          <br />
          <span className="text-[#00D4FF]">.NET Developer Community</span>
        </h1>
        
        <Button variant="primary" className="mb-12">
          Join Now - It's Free!
        </Button>
        
        <div className="flex items-center justify-center gap-8 flex-wrap mb-16">
          <Button variant="secondary">
            Explore Projects
          </Button>
          <Button variant="secondary">
            Read Docs
          </Button>
          <Button variant="secondary">
            Meet Members
          </Button>
        </div>

        {/* Trust Indicators */}
        <motion.div 
          className="flex items-center justify-center gap-8 flex-wrap text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <Users size={24} className="text-[#00D4FF]" />
            <div className="text-left">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-white/60">Developers</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-white/20"></div>

          <div className="flex items-center gap-2">
            <Star size={24} className="text-[#FFD700]" />
            <div className="text-left">
              <div className="text-2xl font-bold">4.8/5</div>
              <div className="text-sm text-white/60">247 Reviews</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-white/20"></div>

          <div className="flex items-center gap-2">
            <Award size={24} className="text-[#FF8C42]" />
            <div className="text-left">
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm text-white/60">Projects</div>
            </div>
          </div>
        </motion.div>

        {/* Featured Badge */}
        <motion.div 
          className="mt-12 flex items-center justify-center gap-4 text-white/50 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span>✓ Mentioned in:</span>
          <span className="text-white/70 font-medium">Medium</span>
          <span>•</span>
          <span className="text-white/70 font-medium">Dev.to</span>
          <span>•</span>
          <span className="text-white/70 font-medium">Hacker News</span>
        </motion.div>
      </div>
    </section>
  );
};