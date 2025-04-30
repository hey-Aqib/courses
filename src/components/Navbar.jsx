'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, GraduationCap } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isCourseRoute = pathname?.includes('/course/');
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2 text-gray-700'
          : `bg-transparent py-4 ${isCourseRoute ? 'text-gray-700' : 'text-white'}`
      }`}
    >
      <div className="md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2">
            <GraduationCap size={32} />
            <span className="text-xl font-bold">SkillMaster</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-gray-700 transition-colors font-medium">
              Home
            </Link>
            <a href="#courses" className="hover:text-gray-700 transition-colors font-medium">
              Courses
            </a>
            <a href="#about-us" className="hover:text-gray-700 transition-colors font-medium">
              About Us
            </a>
            <a href="#contact" className="hover:text-gray-700 transition-colors font-medium">
              Contact
            </a>
            <button className="bg-gray-700 text-white px-5 py-2 rounded-md hover:bg-gray-800 transition-colors font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col space-y-4 bg-white">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-700 transition-colors font-medium">
              Home
            </Link>
            <a href="#courses" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-700 transition-colors font-medium">
              Courses
            </a>
            <a href="#about-us" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-700 transition-colors font-medium">
              About Us
            </a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-700 transition-colors font-medium">
              Contact
            </a>
            <button className="bg-gray-700 text-white px-5 py-2 rounded-md hover:bg-gray-800 transition-colors font-medium w-full">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
