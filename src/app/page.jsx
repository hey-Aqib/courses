"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Star, Clock, Users } from "lucide-react";
import { courses } from "@/data/courses";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const categories = [...new Set(courses.map((course) => course.category))];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "" || course.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <HeroSection />

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="mx-auto max-sm:px-6 px-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Courses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our wide range of professional training programs designed to help you acquire in-demand skills for today's job market.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mb-10">
            {/* Search */}
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for courses..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      {course.category}
                    </span>
                    <div className="flex items-center">
                      <Star className="text-amber-400 fill-amber-400" size={16} />
                      <span className="ml-1 text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.shortDescription}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-5">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-1" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">${course.price}</span>
                    <Link
                      href={`/course/${course.id}`}
                      className="bg-blue-800 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-colors"
                    >
                      View Course
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-600 text-lg">No courses found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("");
                }}
                className="mt-4 text-blue-700 hover:text-blue-800 font-medium"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <AboutSection />
    </div>
  );
};

export default HomePage;
