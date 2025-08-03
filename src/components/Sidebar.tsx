import React from 'react';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, Calendar, Tag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { mockPosts } from '../data/mockData';

export default function Sidebar() {
  const { t } = useLanguage();

  const recentPosts = mockPosts.slice(0, 5);
  const popularPosts = mockPosts.filter(post => post.views > 1000).slice(0, 5);
  const allTags = Array.from(new Set(mockPosts.flatMap(post => post.tags))).slice(0, 10);

  return (
    <aside className="space-y-6">
      {/* Search Widget */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Tafuta Makala</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder={t('search')}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-blue-600" />
          <span>Makala za Hivi Karibuni</span>
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              to={`/makala/${post.id}`}
              className="block group"
            >
              <div className="flex space-x-3">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <span>Makala Maarufu</span>
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link
              key={post.id}
              to={`/makala/${post.id}`}
              className="block group"
            >
              <div className="flex space-x-3">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {post.views.toLocaleString()} miwani
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
          <Tag className="w-5 h-5 text-purple-600" />
          <span>Vitambulisho</span>
        </h3>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Link
              key={tag}
              to={`/kategoria/${tag}`}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Ad */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white text-center">
        <h3 className="text-lg font-bold mb-2">Jiandikishe Sasa!</h3>
        <p className="text-sm text-purple-100 mb-4">
          Pata makala mpya moja kwa moja kwenye barua pepe yako
        </p>
        <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
          {t('subscribe')}
        </button>
      </div>
    </aside>
  );
}