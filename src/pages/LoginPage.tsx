import { Navigation } from '../components/Navigation';
import { motion } from 'framer-motion';
import { Mail, Lock, Github, Twitter, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#0A0E14]">
      <Navigation />
      
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join the <span className="text-[#00D4FF]">.NET</span> Community
            </h1>
            <p className="text-white/70 text-xl mb-8">
              Get access to exclusive projects, mentorship, and connect with developers worldwide.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#00D4FF]/20 border-2 border-[#00D4FF] flex items-center justify-center">
                  <span className="text-[#00D4FF] font-bold">✓</span>
                </div>
                <span className="text-white/80">Access to 500+ open-source projects</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#00D4FF]/20 border-2 border-[#00D4FF] flex items-center justify-center">
                  <span className="text-[#00D4FF] font-bold">✓</span>
                </div>
                <span className="text-white/80">1-on-1 mentorship from experts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#00D4FF]/20 border-2 border-[#00D4FF] flex items-center justify-center">
                  <span className="text-[#00D4FF] font-bold">✓</span>
                </div>
                <span className="text-white/80">Exclusive events and workshops</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#00D4FF]/20 border-2 border-[#00D4FF] flex items-center justify-center">
                  <span className="text-[#00D4FF] font-bold">✓</span>
                </div>
                <span className="text-white/80">Certificates for completed projects</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="solid-border rounded-lg p-8 lg:p-12"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </h2>
              <p className="text-white/60">
                {isSignUp 
                  ? 'Join thousands of .NET developers' 
                  : 'Sign in to your account'}
              </p>
            </div>

            {/* Social Login */}
            <div className="space-y-3 mb-8">
              <button className="w-full px-6 py-3 rounded-lg font-medium bg-[#1A1F2E] border-2 border-white/10 hover:border-[#00D4FF] text-white transition-all duration-300 flex items-center justify-center gap-3">
                <Github size={20} />
                Continue with GitHub
              </button>
              <button className="w-full px-6 py-3 rounded-lg font-medium bg-[#1A1F2E] border-2 border-white/10 hover:border-[#00D4FF] text-white transition-all duration-300 flex items-center justify-center gap-3">
                <Twitter size={20} />
                Continue with Twitter
              </button>
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-[#1A1F2E] text-white/60">Or continue with email</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {isSignUp && (
                <div>
                  <label className="block text-white/80 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 bg-[#0A0E14] border-2 border-white/10 focus:border-[#00D4FF] rounded-lg text-white placeholder:text-white/40 focus:outline-none transition-colors"
                  />
                </div>
              )}

              <div>
                <label className="block text-white/80 mb-2 font-medium">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-[#0A0E14] border-2 border-white/10 focus:border-[#00D4FF] rounded-lg text-white placeholder:text-white/40 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 mb-2 font-medium">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="••••••••"
                    required
                    className="w-full pl-12 pr-12 py-3 bg-[#0A0E14] border-2 border-white/10 focus:border-[#00D4FF] rounded-lg text-white placeholder:text-white/40 focus:outline-none transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/60"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {!isSignUp && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-white/10" />
                    <span className="text-white/60 text-sm">Remember me</span>
                  </label>
                  <a href="#" className="text-[#00D4FF] text-sm hover:underline">
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="w-full px-6 py-4 rounded-lg font-bold bg-[#00D4FF] text-[#0A0E14] hover:bg-[#00B8E6] border-2 border-[#00D4FF] hover:border-[#00B8E6] transition-all duration-300"
              >
                {isSignUp ? 'Create Account' : 'Sign In'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <span className="text-white/60">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              </span>
              {' '}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-[#00D4FF] font-medium hover:underline"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
