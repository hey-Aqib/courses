"use client";

import React from "react";
import { useEffect, useState } from "react";
import { courses } from "@/data/courses";
import ApplicationForm from "@/components/course/ApplicationForm";
import {
  Star,
  Clock,
  Users,
  BookOpen,
  Award,
  Check,
  ArrowLeft,
} from "lucide-react";

export default function CourseDetailPage({ params }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [course, setCourse] = useState(null);
  const { id } = React.use(params) || {};

  useEffect(() => {
    if (id) {
      const foundCourse = courses.find((course) => course.id === id);
      setCourse(foundCourse);
    }
  }, [id]);

  useEffect(() => {
    if (course) {
      window.scrollTo(0, 0);
      document.title = `${course.title} | SkillMaster`;
    }

    return () => {
      const defaultTitle = document.querySelector(
        "title[data-default]"
      )?.textContent;
      if (defaultTitle) document.title = defaultTitle;
    };
  }, [course]);

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
        <p className="mb-6">
          The course you're looking for doesn't exist or has been removed.
        </p>
        <button
          onClick={() => router.push("/")}
          className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-gray-200 to-gray-400 text-white py-16">
        <div className="mx-auto max-sm:px-6 px-10">
          <button
            onClick={() => router.push("/")}
            className="flex items-center bg-red-400 hover:bg-red-600 text-white py-3 px-6 rounded-lg mb-4 cursor-pointer"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Courses
          </button>

          <div className="text-black rounded-2xl p-8 max-sm:px-4 flex flex-col lg:flex-row items-center lg:items-start gap-10 ">
            {/* Left Side */}
            <div className="lg:w-2/3">
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-black mb-6">
                {course.shortDescription}
              </p>

              <div className="flex flex-wrap gap-10 mb-6 text-black">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500 font-semibold text-xl">
                    ★ {course.rating}
                  </span>
                  <span className="text-gray-700">average course rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-xl">
                    {course.exercises}
                  </span>
                  <span className="text-gray-700">practice exercises</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-xl">
                    {course.duration.split(" ")[0]}
                  </span>
                  <span className="text-gray-700">hours of content</span>
                </div>
              </div>

              <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg text-lg mb-4 cursor-pointer">
                Get started &nbsp;{" "}
                <span className="line-through text-gray-700">
                  {course.oldPrice}
                </span>{" "}
                <span className="text-white font-bold">${course.price}</span>
              </button>

              <p className="text-sm text-gray-800">
                {course.students.toLocaleString()} learners already enrolled
              </p>
            </div>

            {/* Right Side */}
            <div className="lg:w-1/3">
              <img
                src={course.image}
                alt={course.title}
                className="rounded-2xl object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="mx-auto max-sm:px-6 px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <div className="flex space-x-8">
                {["overview", "syllabus", "instructor"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 px-2 font-medium ${
                      activeTab === tab
                        ? "text-gray-800 border-b-2 border-gray-800"
                        : "text-gray-500 hover:text-gray-800"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="mb-12">
              {activeTab === "overview" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {course.description}
                  </p>
                  <h3 className="text-xl font-semibold mb-4">
                    What You'll Learn
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check
                          size={20}
                          className="text-green-600 mt-1 mr-3 flex-shrink-0"
                        />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Who This Course is For
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check
                          size={20}
                          className="text-gray-800 mt-1 mr-3 flex-shrink-0"
                        />
                        <span className="text-gray-700">
                          Individuals looking to start a career in{" "}
                          {course.category}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check
                          size={20}
                          className="text-gray-800 mt-1 mr-3 flex-shrink-0"
                        />
                        <span className="text-gray-700">
                          Professionals seeking to upgrade their skills in{" "}
                          {course.category}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check
                          size={20}
                          className="text-gray-800 mt-1 mr-3 flex-shrink-0"
                        />
                        <span className="text-gray-700">
                          Anyone interested in learning {course.title} from the
                          ground up
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "syllabus" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Course Syllabus</h2>
                  <div className="space-y-6">
                    {course.syllabus.map((section, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <div className="bg-gray-50 px-6 py-4">
                          <h3 className="font-semibold text-gray-900">
                            {index + 1}. {section.title}
                          </h3>
                        </div>
                        <div className="p-6">
                          <ul className="space-y-3">
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start">
                                <Check
                                  size={18}
                                  className="text-gray-800 mt-1 mr-3 flex-shrink-0"
                                />
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "instructor" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Course Instructor</h2>
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                    <img
                      src={course.instructor.image}
                      alt={course.instructor.name}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {course.instructor.name}
                      </h3>
                      <p className="text-gray-800 mb-4">
                        {course.instructor.title}
                      </p>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center">
                          <Star
                            className="text-amber-400 fill-amber-400 mr-1"
                            size={16}
                          />
                          <span className="text-gray-700 text-sm">
                            {course.rating} Instructor Rating
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Users className="mr-1" size={16} />
                          <span className="text-gray-700 text-sm">
                            {course.students} Students
                          </span>
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="mr-1" size={16} />
                          <span className="text-gray-700 text-sm">
                            3 Courses
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {course.instructor.bio}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Application Form */}
            <div id="application-form" className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Apply for This Course</h2>
              <ApplicationForm courseTitle={course.title} />
            </div>
          </div>

          {/* Related Courses */}
          <div className="hidden lg:block">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Related Courses</h3>
              <div className="space-y-6">
                {courses
                  .filter(
                    (c) => c.category === course.category && c.id !== course.id
                  )
                  .slice(0, 3)
                  .map((related) => (
                    <div key={related.id} className="flex gap-4">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">
                          {related.title}
                        </h4>
                        <div className="flex items-center text-sm mb-1">
                          <Star
                            className="text-amber-400 fill-amber-400 mr-1"
                            size={14}
                          />
                          <span>{related.rating}</span>
                          <span className="mx-2">•</span>
                          <span>{related.duration}</span>
                        </div>
                        <p className="text-gray-800 font-medium">
                          ${related.price}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
