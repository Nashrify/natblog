import React from 'react';
import { Users, Target, Heart, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: 'Amina Hassan',
      role: 'Mkurugenzi Mkuu',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Ana uzoefu wa miaka 10 katika uandishi na usimamizi wa mitandao.'
    },
    {
      name: 'Joseph Mwangi',
      role: 'Mwandishi Mkuu',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Mwandishi mashuhuri wa masuala ya kijamii na utamaduni.'
    },
    {
      name: 'Fatma Salim',
      role: 'Mwandishi wa Afya',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Mtaalamu wa masuala ya afya na lishe kwa jamii.'
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {t('aboutTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tunajivunia kuwa chanzo cha habari na maarifa kwa jamii ya Kiswahili duniani kote. 
            Lengo letu ni kuboresha maisha kupitia habari za kweli na maarifa ya kina.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-4">
              <Target className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Dhamira Yetu</h2>
            </div>
            <p className="text-gray-600">
              Kuwa chanzo cha kwanza cha habari na maarifa kwa jamii ya Kiswahili, 
              tukitoa content ya hali ya juu inayoboresha maisha ya wasomaji wetu.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-4">
              <Heart className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-900">Dira Yetu</h2>
            </div>
            <p className="text-gray-600">
              Kujenga jamii yenye maarifa na maendeleo kupitia ushirikiano wa makala 
              zenye ubora na thamani kwa kila mtu.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Maadili Yetu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ubora</h3>
              <p className="text-gray-600">
                Tunatoa content ya hali ya juu ambayo inapitishwa na wataalamu
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ushirikiano</h3>
              <p className="text-gray-600">
                Tunashirikiana na wasomaji wetu kujenga mazingira ya kujifunza
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Uongozi</h3>
              <p className="text-gray-600">
                Tunaongoza katika kutoa maarifa yanayosaidia jamii kuboresha maisha
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Timu Yetu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Timu yetu ya wataalamu inahakikisha tunakutoa content ya hali ya juu
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-blue-600 text-sm font-medium mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}