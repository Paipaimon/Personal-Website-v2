import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: '首页', href: '/' },
    { name: '关于我', href: '/about' },
    { name: '项目作品', href: '/portfolio' },
    { name: '博客', href: '/blog' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300 transform group-hover:scale-105">我的网站</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  isActive(item.href)
                    ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25'
                    : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:shadow-lg hover:shadow-blue-500/25'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 focus:outline-none rounded-lg transition-all duration-300 transform hover:scale-110 hover:rotate-180"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-white/90 backdrop-blur-md border-t border-white/20">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
                isActive(item.href)
                  ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg border-l-4 border-blue-400'
                  : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:shadow-lg hover:border-l-4 hover:border-blue-400'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isOpen ? 'slideInFromRight 0.5s ease-out forwards' : 'none'
              }}
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center">
                <span className="mr-2">
                  {item.name === '首页' && '🏠'}
                  {item.name === '关于我' && '👨‍💻'}
                  {item.name === '项目作品' && '💼'}
                  {item.name === '博客' && '📝'}
                </span>
                {item.name}
                {isActive(item.href) && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </span>
            </Link>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;