import React from 'react';
import { ArrowRight, Apple, Smartphone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-80 -right-20 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="block text-white">Your Vehicle's</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-400 via-teal-300 to-purple-500 text-transparent bg-clip-text">
                Shine on Demand
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Connect with professional car wash services near you. 
              Book, track, and enjoy premium car care - all from your smartphone.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#download" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 shadow-lg shadow-blue-600/30"
              >
                <Apple className="w-5 h-5 mr-2" />
                App Store
              </a>
              <a 
                href="#download" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 shadow-lg shadow-blue-600/30"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Google Play
              </a>
            </div>

            <div className="mt-6">
              <a 
                href="#process" 
                className="inline-flex items-center text-sm font-medium text-blue-300 hover:text-blue-200 group"
              >
                See how it works
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>

          <div className="relative h-[500px] lg:h-auto flex items-center justify-center">
            <div className="absolute w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-full filter blur-xl"></div>
            <div className="relative w-64 sm:w-72 md:w-80 h-auto shadow-xl rounded-3xl overflow-hidden border-4 border-gray-800 transform hover:scale-105 transition-transform duration-300">
              <img 
                src='/src/images/logo4.png'
                alt="ShineSync App" 
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero