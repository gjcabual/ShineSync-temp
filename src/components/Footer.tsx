import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-white font-bold text-xl mb-4 flex items-center">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">ShineSync</span>
            </div>
            <p className="mb-4">
              Connecting vehicle owners with professional cleaning services for a hassle-free experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Home</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors duration-200">Features</a></li>
              <li><a href="#process" className="hover:text-blue-400 transition-colors duration-200">How It Works</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition-colors duration-200">Testimonials</a></li>
              <li><a href="#download" className="hover:text-blue-400 transition-colors duration-200">Download</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                <span>Butuan City, Agusan del Norte, Philippines 8600</span>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@shinesync.com" className="hover:text-blue-400 transition-colors duration-200">info@shinesync.com</a>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors duration-200">+63 9505 458 794</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {currentYear} ShineSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;