import { Github, Twitter, Linkedin, Mail, MessageSquare } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0E14] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold">
                <span className="text-[#00D4FF]">.NET</span>
                <span className="text-white">Devs</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Conectando desenvolvedores .NET ao redor do mundo para aprender, construir e crescer juntos.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#00D4FF] transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#00D4FF] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#00D4FF] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#00D4FF] transition-colors"
                aria-label="Discord"
              >
                <MessageSquare size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/60 hover:text-[#00D4FF] transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white/60 hover:text-[#00D4FF] transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#forum" className="text-white/60 hover:text-[#00D4FF] transition-colors text-sm">
                  Forum
                </a>
              </li>
              <li>
                <a href="#events" className="text-white/60 hover:text-[#00D4FF] transition-colors text-sm">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#docs" className="text-white/60 hover:text-[#00D4FF] transition-colors text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#tutorials" className="text-white/60 hover:text-[#00D4FF] transition-colors text-sm">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#blog" className="text-white/60 hover:text-[#00D4FF] transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/60 hover:text-[#00D4FF] transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Mail size={16} />
                <a href="mailto:hello@netdevs.com" className="hover:text-[#00D4FF] transition-colors">
                  hello@netdevs.com
                </a>
              </li>
              <li>
                <a href="#support" className="text-white/60 hover:text-[#00D4FF] transition-colors text-sm">
                  Support
                </a>
              </li>
              <li>
                <a href="#feedback" className="text-white/60 hover:text-[#00D4FF] transition-colors text-sm">
                  Feedback
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} .NET Devs Community. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="text-white/40 hover:text-[#00D4FF] transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#terms" className="text-white/40 hover:text-[#00D4FF] transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#cookies" className="text-white/40 hover:text-[#00D4FF] transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
