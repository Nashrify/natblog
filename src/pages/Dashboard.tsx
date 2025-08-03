import React, { useState } from 'react';
import { Edit, Trash2, Eye, Plus, BarChart, Users, MessageCircle, FileText } from 'lucide-react';
import { mockPosts } from '../data/mockData';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Jumla ya Makala', value: '45', icon: FileText, color: 'blue' },
    { label: 'Wasomaji', value: '12.5K', icon: Users, color: 'green' },
    { label: 'Maoni', value: '1.2K', icon: MessageCircle, color: 'purple' },
    { label: 'Miwani', value: '50.3K', icon: Eye, color: 'orange' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard ya Msimamizi</h1>
          <p className="text-gray-600">Simamia na dhibiti content ya blog yako</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Muhtasari' },
                { id: 'posts', label: 'Makala' },
                { id: 'comments', label: 'Maoni' },
                { id: 'analytics', label: 'Takwimu' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Shughuli za Hivi Karibuni</h2>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Makala Mpya</span>
                  </button>
                </div>
                
                <div className="space-y-4">
                  {mockPosts.slice(0, 5).map((post) => (
                    <div key={post.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div>
                          <h3 className="font-medium text-gray-900">{post.title}</h3>
                          <p className="text-sm text-gray-500">{post.views} miwani</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-green-600 transition-colors duration-200">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-red-600 transition-colors duration-200">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'posts' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Dhibiti Makala</h2>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Makala Mpya</span>
                  </button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Kichwa</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Kategoria</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Tarehe</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Miwani</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Vitendo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {mockPosts.map((post) => (
                        <tr key={post.id} className="hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-3">
                              <img
                                src={post.thumbnail}
                                alt={post.title}
                                className="w-10 h-10 object-cover rounded"
                              />
                              <span className="font-medium text-gray-900">{post.title}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-gray-600">{post.category}</td>
                          <td className="py-4 px-4 text-gray-600">
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </td>
                          <td className="py-4 px-4 text-gray-600">{post.views.toLocaleString()}</td>
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-2">
                              <button className="p-1 text-gray-600 hover:text-blue-600">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-1 text-gray-600 hover:text-green-600">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="p-1 text-gray-600 hover:text-red-600">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'comments' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Dhibiti Maoni</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-gray-900">Maria John</p>
                        <p className="text-sm text-gray-600 mt-1">
                          "Makala nzuri sana! Nimejifunza mambo mengi."
                        </p>
                        <p className="text-xs text-gray-500 mt-2">Makala: Mstakabali wa Teknolojia ya AI</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="text-green-600 hover:text-green-700 text-sm">
                          Kubali
                        </button>
                        <button className="text-red-600 hover:text-red-700 text-sm">
                          Kataa
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Takwimu za Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Makala Maarufu</h3>
                    <div className="space-y-3">
                      {mockPosts.slice(0, 5).map((post) => (
                        <div key={post.id} className="flex justify-between items-center">
                          <span className="text-sm text-gray-700 truncate flex-1">{post.title}</span>
                          <span className="text-sm font-medium text-gray-900 ml-2">
                            {post.views.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Kategoria Maarufu</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">Teknolojia</span>
                        <span className="text-sm font-medium text-gray-900">15 makala</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">Afya</span>
                        <span className="text-sm font-medium text-gray-900">12 makala</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">Utamaduni</span>
                        <span className="text-sm font-medium text-gray-900">8 makala</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}