'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const navigationItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'WHAT WE DO', href: '/services' },
  { label: 'SPECIALISTS IN', href: '/specialists' },
  { label: 'OUR BLOG', href: '/blog' },
  { label: 'CONTACT US', href: '/contact' },
];

export function Navigation() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="bg-[#1a2332] dark:bg-[#1a2332] text-white py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition-colors ${
                  pathname === item.href
                    ? 'text-[#00a8cc]'
                    : 'text-white hover:text-[#00a8cc]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Right Icons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-white hover:text-[#00a8cc] transition-colors">
              <Search size={20} />
            </button>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-white hover:text-[#00a8cc] transition-colors p-2 rounded-lg"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-white hover:text-[#00a8cc] transition-colors p-2 rounded-lg"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-[#00a8cc] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Desktop Accent line under active nav */}
        <div className="hidden md:block mt-3 h-1 bg-[#00a8cc]" style={{ width: '60px' }}></div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 border-t border-[#2c3e50] pt-4">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-2 text-sm font-semibold transition-colors ${
                  pathname === item.href
                    ? 'text-[#00a8cc] bg-[#2c3e50]'
                    : 'text-white hover:text-[#00a8cc] hover:bg-[#2c3e50]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full text-left py-3 px-2 text-sm font-semibold text-white hover:text-[#00a8cc] hover:bg-[#2c3e50] transition-colors flex items-center gap-2">
              <Search size={16} /> Search
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
