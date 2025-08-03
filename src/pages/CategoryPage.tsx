import React from 'react';
import { useParams } from 'react-router-dom';
import { Tag } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import Sidebar from '../components/Sidebar';
import { mockPosts } from '../data/mockData';

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const filteredPosts = mockPosts.filter(post => 
    post.category.toLowerCase() === slug?.toLowerCase() ||
    post.tags.some(tag => tag.toLowerCase() === slug?.toLowerCase())
  );

  return (
    <div className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-3">
            {/* Category Header */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Tag className="w-6 h-6 text-blue-600" />
                <h1 className="text-3xl font-bold text-gray-900 capitalize">
                  {slug}
                </h1>
              </div>
              <p className="text-gray-600">
                {filteredPosts.length} makala zimepatikana katika kategoria hii
              </p>
            </div>

            {/* Posts Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <Tag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Hakuna makala
                </h3>
                <p className="text-gray-600">
                  Hakuna makala katika kategoria hii kwa sasa.
                </p>
              </div>
            )}
          </div>
          
          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}