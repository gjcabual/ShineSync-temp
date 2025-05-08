import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { Download, ClipboardList, Calendar, CheckCircle } from 'lucide-react';

const ProcessSteps: React.FC = () => {
  // Function to get the appropriate icon component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Download':
        return <Download className="w-6 h-6 text-white" />;
      case 'ClipboardList':
        return <ClipboardList className="w-6 h-6 text-white" />;
      case 'Calendar':
        return <Calendar className="w-6 h-6 text-white" />;
      case 'CheckCircle':
        return <CheckCircle className="w-6 h-6 text-white" />;
      default:
        return <Download className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="process" className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
              How ShineSync Works
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Getting your vehicle cleaned has never been easier. Four simple steps to spotless results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <div 
              key={step.id} 
              className="relative"
            >
              {/* Step connector line */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 z-0"></div>
              )}
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-600/20 mb-6">
                  {getIconComponent(step.icon)}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center border-2 border-blue-500">
                    <span className="text-white font-bold">{step.id}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 text-center">{step.title}</h3>
                <p className="text-gray-400 text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;