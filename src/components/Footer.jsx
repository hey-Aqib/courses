'use client';

import Link from 'next/link';
import {
  PhoneCall,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  GraduationCap,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 max-sm:px-6 px-10 text-white" id="contact">
      <div className="mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <GraduationCap size={32} className="text-amber-400" />
              <span className="text-xl font-bold">SkillMaster</span>
            </div>
            <p className="text-gray-100 mb-6">
              Empowering individuals with cutting-edge skills for the modern workplace. Join us on a journey of learning and growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-100 hover:text-amber-400 transition-colors">Home</Link>
              </li>
              <li>
                <a href="#courses" className="text-gray-100 hover:text-amber-400 transition-colors">Courses</a>
              </li>
              <li>
                <a href="#about-us" className="text-gray-100 hover:text-amber-400 transition-colors">About Us</a>
              </li>
              <li>
                <Link href="#" className="text-gray-100 hover:text-amber-400 transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-100 hover:text-amber-400 transition-colors">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <PhoneCall size={18} className="text-amber-400" />
                <span className="text-gray-100">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-amber-400" />
                <span className="text-gray-100">contact@skillmaster.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-amber-400 mt-1" />
                <span className="text-gray-100">123 Learning Street, Education City, TX 75001</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-400">Subscribe</h3>
            <p className="text-gray-100 mb-4">Subscribe to our newsletter for the latest updates on new courses and promotions.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 transition-colors text-gray-900 font-medium py-2 rounded-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-200">
          <p>&copy; {new Date().getFullYear()} SkillMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
