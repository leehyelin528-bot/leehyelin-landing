import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Mail, MessageCircle, Music } from 'lucide-react';
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
              <div className="flex flex-col space-y-3 items-center md:items-start text-sm">
                <a 
                  href="mailto:cello105@hanmail.net" 
                  className="flex items-center space-x-2 hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  <span>cello105@hanmail.net</span>
                </a>
                <a 
                  href="https://www.instagram.com/hyelin.lee.cello" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-white transition-colors"
                >
                  <Instagram size={16} />
                  <span>@hyelin.lee.cello</span>
                </a>
                <a 
                  href="https://www.tiktok.com/@user5810752280047" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-white transition-colors"
                >
                  <Music size={16} />
                  <span>TikTok</span>
                </a>
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

      {/* Floating KakaoTalk Button */}
      <a
        href="https://open.kakao.com/o/sFzCX66"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#FEE500] text-[#371D1E] rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
        aria-label="카카오톡 문의하기"
      >
        {/* Tooltip on hover */}
        <span className="absolute right-full mr-3 px-2 py-1 bg-stone-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
          카카오톡 문의
        </span>
        <MessageCircle size={28} fill="currentColor" />
      </a>
    </div>
  );
};

export default Layout;