import React, { useState } from 'react';
import { Filter, Grid, List } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import Sidebar from '../components/Sidebar';
import { useLanguage } from '../contexts/LanguageContext';
import { mockPosts } from '../data/mockData';

export default function BlogFeed() {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  
  const categories = Array.from(new Set(mockPosts.map(post => post.category)));
  
  const filteredPosts = selectedCategory 
    ? mockPosts.filter(post => post.category === selectedCategory)
    : mockPosts;

  return (
    <div className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    {t('articles')}
                  </h1>
                  <p className="text-gray-600">
                    {filteredPosts.length} makala zimepatikana
                  </p>
                </div>
                
                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                  {/* Category Filter */}
                  <div className="flex items-center space-x-2">
                    <Filter className="w-4 h-4 text-gray-500" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Kategoria zote</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* View Mode Toggle */}
                  <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow' : ''}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow' : ''}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2' 
                : 'grid-cols-1'
            }`}>
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="flex space-x-2">
                <button className="px-4 py-2 text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                  Awali
                </button>
                <button className="px-4 py-2 text-white bg-blue-600 border border-blue-600 rounded-lg">
                  1
                </button>
                <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                  2
                </button>
                <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                  3
                </button>
                <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                  Ifuatayo
                </button>
              </nav>
            </div>
          </div>
          
          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}