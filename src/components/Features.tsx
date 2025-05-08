import React from 'react';
import { FEATURES } from '../constants';
import { Badge, Car, SprayCan, Calendar, MapPin, Shield, BadgePercent } from 'lucide-react';

const Features: React.FC = () => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Calendar':
        return <Calendar className="w-8 h-8 text-blue-400" />;
      case 'MapPin':
        return <MapPin className="w-8 h-8 text-blue-400" />;
      case 'Shield':
        return <Shield className="w-8 h-8 text-blue-400" />;
      case 'BadgePercent':
        return <BadgePercent className="w-8 h-8 text-blue-400" />;
      case 'Car':
        return <Car className="w-8 h-8 text-blue-400" />;
      case 'SprayCan':
        return <SprayCan className="w-8 h-8 text-blue-400" />;
      default:
        return <Badge className="w-8 h-8 text-blue-400" />;
    }
  };

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Perfect Shine, Every Time
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            ShineSync offers a complete solution for keeping your vehicle spotless without the hassle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 hover:shadow-blue-500/10 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-3 inline-flex rounded-lg bg-gray-800 mb-5 group-hover:bg-blue-500/10 transition-colors duration-300">
                {getIconComponent(feature.icon)}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Experience the App
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Our intuitive interface makes booking and managing your car wash services effortless. Try ShineSync today and see the difference.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <Badge className="w-5 h-5 text-blue-400 mr-2" />
                Easy booking interface
              </li>
              <li className="flex items-center text-gray-300">
                <Badge className="w-5 h-5 text-blue-400 mr-2" />
                Real-time service tracking
              </li>
              <li className="flex items-center text-gray-300">
                <Badge className="w-5 h-5 text-blue-400 mr-2" />
                Secure payment system
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="transform translate-y-8">
              <img 
                src="/3.png" 
                alt="ShineSync App Screenshot 1" 
                className="rounded-2xl shadow-xl border-4 border-gray-800"
              />
            </div>
            <div>
              <img 
                src="/9.png" 
                alt="ShineSync App Screenshot 2" 
                className="rounded-2xl shadow-xl border-4 border-gray-800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features