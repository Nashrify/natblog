import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag } from 'lucide-react';
import { format } from 'date-fns';
import { useLanguage } from '../contexts/LanguageContext';
import { BlogPost } from '../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { t } = useLanguage();

  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
          <Link to={`/makala/${post.id}`}>
            {post.title}
          </Link>
        </h2>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <Link 
                to={`/mwandishi/${post.author.id}`}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {post.author.name}
              </Link>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{format(new Date(post.publishedAt), 'dd MMM yyyy')}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Tag className="w-4 h-4 text-gray-400" />
            <div className="flex flex-wrap gap-1">
              {post.tags.slice(0, 2).map((tag) => (
                <Link
                  key={tag}
                  to={`/kategoria/${tag}`}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded hover:bg-gray-200 transition-colors duration-200"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          
          <Link
            to={`/makala/${post.id}`}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
          >
            {t('readFullArticle')}
          </Link>
        </div>
      </div>
    </article>
  );
}