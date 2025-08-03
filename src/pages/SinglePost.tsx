import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, Share2, Facebook, Twitter, MessageCircle, Send, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import { useLanguage } from '../contexts/LanguageContext';
import { mockPosts } from '../data/mockData';
import Sidebar from '../components/Sidebar';

export default function SinglePost() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: '1',
      author: { name: 'Maria John', avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=50' },
      content: 'Makala nzuri sana! Nimejifunza mambo mengi.',
      createdAt: '2025-01-15T12:00:00Z'
    },
    {
      id: '2',
      author: { name: 'Ahmed Said', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=50' },
      content: 'Asante kwa maarifa haya. Naomba uendelee kutupa makala za aina hii.',
      createdAt: '2025-01-15T14:30:00Z'
    }
  ]);

  const post = mockPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Makala haijapatiakana</h1>
          <Link to="/makala" className="text-blue-600 hover:text-blue-700">
            Rudi kwenye orodha ya makala
          </Link>
        </div>
      </div>
    );
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        id: Date.now().toString(),
        author: { 
          name: 'Mtumiaji', 
          avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=50'
        },
        content: comment,
        createdAt: new Date().toISOString()
      };
      setComments([...comments, newComment]);
      setComment('');
    }
  };

  const shareUrl = window.location.href;
  const shareText = post.title;

  return (
    <div className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-3">
            <article className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Back Button */}
              <div className="p-6 border-b border-gray-200">
                <Link 
                  to="/makala"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Rudi kwenye makala
                </Link>
              </div>

              {/* Featured Image */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-6">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Article Header */}
              <div className="p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center justify-between mb-8 pb-6 border-b border-gray-200">
                  <div className="flex items-center space-x-6">
                    <Link 
                      to={`/mwandishi/${post.author.id}`}
                      className="flex items-center space-x-3 group"
                    >
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                          {post.author.name}
                        </p>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{format(new Date(post.publishedAt), 'dd MMM yyyy')}</span>
                        </div>
                      </div>
                    </Link>
                    
                    <div className="text-sm text-gray-500">
                      {post.readTime} dakika za kusoma
                    </div>
                  </div>

                  {/* Share Buttons */}
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-500 mr-2">Shiriki:</span>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors duration-200"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={`https://wa.me/?text=${shareText} ${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                    >
                      <Share2 className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <Tag className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">Vitambulisho:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
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
              </div>

              {/* Comments Section */}
              <div className="p-8 bg-gray-50 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Maoni ({comments.length})</span>
                </h3>

                {/* Comment Form */}
                <form onSubmit={handleCommentSubmit} className="mb-8">
                  <div className="flex space-x-4">
                    <img
                      src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=50"
                      alt="Picha yako"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Andika maoni yako hapa..."
                        rows={3}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      />
                      <div className="flex justify-end mt-3">
                        <button
                          type="submit"
                          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                        >
                          <Send className="w-4 h-4" />
                          <span>Tuma</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                {/* Comments List */}
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex space-x-4">
                      <img
                        src={comment.author.avatar}
                        alt={comment.author.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-medium text-gray-900">{comment.author.name}</span>
                            <span className="text-sm text-gray-500">
                              {format(new Date(comment.createdAt), 'dd MMM yyyy, HH:mm')}
                            </span>
                          </div>
                          <p className="text-gray-700">{comment.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
          
          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}