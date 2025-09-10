
import { Link } from 'react-router-dom';
import {  Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import SpinningLogo from './SpinningLogo';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative z-10">
          {/* Logo Section */}
          <div className="text-center mb-12">
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="mb-4">
                <SpinningLogo size="xl" variant="dark" className="hover:scale-110 transition-transform duration-500" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  HopePath Technology
                </h2>
                <p className="text-gray-400 text-sm mt-1">Digital Solutions for Tomorrow's World</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Delivering modern, scalable, high-quality digital solutions for businesses worldwide. 
              We transform ideas into powerful digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1BzRKLyugJ/" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300 hover:scale-110">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300 hover:scale-110">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300 hover:scale-110">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://github.com/KhyberKamawal" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300 hover:scale-110">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer" > <a href="/Services">Website Development</a></li>
              <li className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"><a href="/Services"> Web Applications</a></li>
              <li className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"><a href="/Services">Mobile App Development</a></li>
              <li className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"><a href="/Services">SEO Optimization</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>Hopepathtechnology@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span>+93 77 6583537</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span>E11/2 Markaz , Islamabad </span>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-gray-400 relative z-10">
          <p>&copy; 2025 HopePath Technology. All rights reserved. | Crafted with ❤️ for digital excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
