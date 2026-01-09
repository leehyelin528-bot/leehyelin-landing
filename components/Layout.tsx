import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Mail } from 'lucide-react';
import { NAV_ITEMS, SITE_NAME } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-stone-50 text-stone-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" className="font-serif text-2xl font-bold tracking-tight text-primary-800">
                {SITE_NAME}
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-accent-gold border-b-2 border-accent-gold pb-1'
                        : 'text-stone-600 hover:text-primary-600'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-stone-600 hover:text-primary-800 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200 animate-fade-in-down">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'bg-primary-50 text-primary-800'
                        : 'text-stone-600 hover:text-primary-800 hover:bg-stone-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary-900 text-stone-300 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-serif text-lg mb-4">{SITE_NAME}</h3>
              <p className="text-sm leading-relaxed text-stone-400">
                첼리스트이자 교육자로서,<br />
                음악과 이야기를 통해 삶을 위로합니다.
              </p>
            </div>
            <div>
              <h3 className="text-white font-serif text-lg mb-4">Contact</h3>
              <div className="flex flex-col space-y-2 items-center md:items-start text-sm">
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>contact@hyerinlee.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Instagram size={16} />
                  <span>@hyerin_cello</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-serif text-lg mb-4">Menu</h3>
              <ul className="space-y-2 text-sm">
                {NAV_ITEMS.map((item) => (
                  <li key={item.path}>
                    <NavLink to={item.path} className="hover:text-white transition-colors">
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-primary-800 text-center text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Hyerin Lee. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;