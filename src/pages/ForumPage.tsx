import { Navigation } from '../components/Navigation';
import { motion } from 'framer-motion';
import { MessageSquare, TrendingUp, Clock, User, ThumbsUp, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const forumCategories = [
  { name: 'General Discussion', count: 234, icon: MessageSquare, color: '#00D4FF' },
  { name: 'Help & Support', count: 156, icon: MessageCircle, color: '#7B2BE8' },
  { name: 'Show & Tell', count: 89, icon: TrendingUp, color: '#FF8C42' },
  { name: 'Announcements', count: 23, icon: MessageSquare, color: '#00D4FF' }
];

const discussions = [
  {
    id: 1,
    title: 'Best practices for ASP.NET Core dependency injection',
    author: 'John Smith',
    avatar: 'https://i.pravatar.cc/150?img=12',
    category: 'General Discussion',
    replies: 23,
    likes: 45,
    views: 234,
    lastActivity: '2 hours ago',
    isPinned: true
  },
  {
    id: 2,
    title: 'How to optimize Entity Framework queries?',
    author: 'Maria Rodriguez',
    avatar: 'https://i.pravatar.cc/150?img=5',
    category: 'Help & Support',
    replies: 12,
    likes: 28,
    views: 156,
    lastActivity: '5 hours ago',
    isPinned: false
  },
  {
    id: 3,
    title: 'Just launched my first Blazor app! 🚀',
    author: 'Alex Chen',
    avatar: 'https://i.pravatar.cc/150?img=33',
    category: 'Show & Tell',
    replies: 34,
    likes: 89,
    views: 445,
    lastActivity: '1 day ago',
    isPinned: false
  },
  {
    id: 4,
    title: 'Understanding async/await in C#',
    author: 'Sarah Johnson',
    avatar: 'https://i.pravatar.cc/150?img=47',
    category: 'General Discussion',
    replies: 18,
    likes: 56,
    views: 312,
    lastActivity: '3 hours ago',
    isPinned: false
  },
  {
    id: 5,
    title: 'MAUI vs Xamarin: Migration guide',
    author: 'Carlos Silva',
    avatar: 'https://i.pravatar.cc/150?img=12',
    category: 'General Discussion',
    replies: 45,
    likes: 123,
    views: 678,
    lastActivity: '6 hours ago',
    isPinned: false
  }
];

export const ForumPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDiscussions = selectedCategory === 'All' 
    ? discussions 
    : discussions.filter(d => d.category === selectedCategory);

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
              Community <span className="text-[#00D4FF]">Forum</span>
            </h1>
            <p className="text-white/70 text-xl max-w-3xl mb-8">
              Connect with fellow developers, share knowledge, and get help from the community.
            </p>
            <button className="px-8 py-4 rounded-lg font-bold bg-[#00D4FF] text-[#0A0E14] hover:bg-[#00B8E6] border-2 border-[#00D4FF] hover:border-[#00B8E6] transition-all duration-300">
              Start New Discussion
            </button>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-6 bg-[#0F1419] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {forumCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="solid-border-subtle rounded-lg p-6 hover:border-[#00D4FF] transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ background: `${category.color}20`, border: `2px solid ${category.color}40` }}
                  >
                    <category.icon size={24} style={{ color: category.color }} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{category.name}</h3>
                    <p className="text-white/60 text-sm">{category.count} threads</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 px-6 bg-[#0F1419] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 overflow-x-auto">
            {['All', ...forumCategories.map(c => c.name)].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#00D4FF] text-[#0A0E14] border-2 border-[#00D4FF]'
                    : 'text-white/70 border-2 border-white/10 hover:border-[#00D4FF]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Discussions List */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            {filteredDiscussions.map((discussion, index) => (
              <motion.div
                key={discussion.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="solid-border-subtle rounded-lg p-6 hover:border-[#00D4FF] transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <img 
                    src={discussion.avatar} 
                    alt={discussion.author}
                    className="w-12 h-12 rounded-full border-2 border-[#00D4FF]/30"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        {discussion.isPinned && (
                          <span className="inline-block px-2 py-1 bg-[#00D4FF]/20 text-[#00D4FF] text-xs font-bold rounded mr-2">
                            PINNED
                          </span>
                        )}
                        <h3 className="text-xl font-bold text-white inline">{discussion.title}</h3>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                      <div className="flex items-center gap-1">
                        <User size={16} />
                        <span>{discussion.author}</span>
                      </div>
                      <span>•</span>
                      <span className="text-[#00D4FF]">{discussion.category}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{discussion.lastActivity}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm text-white/60">
                      <div className="flex items-center gap-2">
                        <MessageCircle size={18} />
                        <span>{discussion.replies} replies</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ThumbsUp size={18} />
                        <span>{discussion.likes} likes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>{discussion.views} views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
