import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Forum', href: '/forum' },
    { label: 'Events', href: '/events' },
    { label: 'Login', href: '/login' }
  ];

  return (
    <nav className="fixed top-9 left-0 right-0 z-50 bg-[#0F1419]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold">
            <span className="text-[#00D4FF]">.NET</span>
            <span className="text-white">Devs Community</span>
          </span>
        </Link>
        
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className={`text-base font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-[#00D4FF]' 
                    : 'text-white/70 hover:text-[#00D4FF]'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};