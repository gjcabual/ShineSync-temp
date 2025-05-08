import React from 'react';
import { Apple, Smartphone } from 'lucide-react';

const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-20 relative overflow-hidden bg-gray-900">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Get ShineSync Today
              </span>
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Download the app and join thousands of users who have simplified their vehicle care routine.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#" 
              className="flex items-center justify-center sm:justify-start px-6 py-4 bg-black rounded-xl hover:bg-gray-900 transition-colors duration-300 group"
            >
              <div className="mr-4">
                <Apple className="w-10 h-10 text-white" />
              </div>
              <div className="text-left">
                <p className="text-gray-400 text-sm">Download on the</p>
                <p className="text-white font-semibold text-xl">App Store</p>
              </div>
              <div className="ml-auto hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
            
            <a 
              href="#" 
              className="flex items-center justify-center sm:justify-start px-6 py-4 bg-black rounded-xl hover:bg-gray-900 transition-colors duration-300 group"
            >
              <div className="mr-4">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <div className="text-left">
                <p className="text-gray-400 text-sm">Get it on</p>
                <p className="text-white font-semibold text-xl">Google Play</p>
              </div>
              <div className="ml-auto hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-blue-400 text-3xl md:text-4xl font-bold">500+</div>
                <p className="text-gray-400 mt-1">Service Providers</p>
              </div>
              <div>
                <div className="text-blue-400 text-3xl md:text-4xl font-bold">20k+</div>
                <p className="text-gray-400 mt-1">Happy Customers</p>
              </div>
              <div>
                <div className="text-blue-400 text-3xl md:text-4xl font-bold">50+</div>
                <p className="text-gray-400 mt-1">Cities Covered</p>
              </div>
              <div>
                <div className="text-blue-400 text-3xl md:text-4xl font-bold">4.8</div>
                <p className="text-gray-400 mt-1">App Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;