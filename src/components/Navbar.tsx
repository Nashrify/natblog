import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/makala', label: t('articles') },
    { href: '/kuhusu', label: t('about') },
    { href: '/wasiliana', label: t('contact') },
  ];

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Blog Yetu</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActiveLink(link.href)
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder={t('search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'sw' ? 'EN' : 'SW'}</span>
            </button>

            {/* Auth Links */}
            <div className="flex items-center space-x-4">
              <Link
                to="/ingia"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {t('login')}
              </Link>
              <Link
                to="/jisajili"
                className="bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                {t('signup')}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActiveLink(link.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder={t('search')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Mobile Language & Auth */}
              <div className="flex items-center justify-between px-3 py-2">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-700 hover:text-blue-600"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === 'sw' ? 'English' : 'Kiswahili'}</span>
                </button>
                
                <div className="flex space-x-2">
                  <Link
                    to="/ingia"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm font-medium text-gray-700 hover:text-blue-600 px-3 py-2"
                  >
                    {t('login')}
                  </Link>
                  <Link
                    to="/jisajili"
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-blue-700"
                  >
                    {t('signup')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}