import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Mail, Twitter, Facebook, Instagram } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { mockAuthors, mockPosts } from '../data/mockData';

export default function AuthorPage() {
  const { id } = useParams<{ id: string }>();
  const author = mockAuthors.find(a => a.id === id);
  const authorPosts = mockPosts.filter(post => post.author.id === id);

  if (!author) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Mwandishi hajapatiakana</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Rudi nyumbani
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Author Profile */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-32 h-32 rounded-full object-cover"
            />
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{author.name}</h1>
              <p className="text-gray-600 mb-6 max-w-2xl">{author.bio}</p>
              
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <a
                  href={`mailto:${author.email}`}
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{author.email}</span>
                </a>
                
                {author.socialLinks.twitter && (
                  <a
                    href={`https://twitter.com/${author.socialLinks.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                
                {author.socialLinks.facebook && (
                  <a
                    href={`https://facebook.com/${author.socialLinks.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                )}
                
                {author.socialLinks.instagram && (
                  <a
                    href={`https://instagram.com/${author.socialLinks.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-gray-900">{authorPosts.length}</div>
                <div className="text-sm text-gray-600">Makala</div>
              </div>
            </div>
          </div>
        </div>

        {/* Author's Posts */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Makala za {author.name}
          </h2>
          
          {authorPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {authorPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">Hakuna makala za mwandishi huyu kwa sasa.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}