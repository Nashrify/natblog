import React from 'react';
import HeroSection from '../components/HeroSection';
import BlogCard from '../components/BlogCard';
import Sidebar from '../components/Sidebar';
import { useLanguage } from '../contexts/LanguageContext';
import { mockPosts } from '../data/mockData';

export default function HomePage() {
  const { t } = useLanguage();
  const featuredPosts = mockPosts.slice(0, 6);

  return (
    <div>
      <HeroSection />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('latestArticles')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pata makala za kisasa kuhusu masuala mbalimbali yanayohusiana na maisha yetu ya kila siku
            </p>
          </div>
          
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1 mt-12 lg:mt-0">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}