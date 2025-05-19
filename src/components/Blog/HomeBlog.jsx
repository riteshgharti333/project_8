import React from "react";
import { FaArrowRight, FaCalendarAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeBlog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Must-Visit Destinations in Rajasthan",
      excerpt:
        "Discover the royal heritage and breathtaking landscapes of Rajasthan with our guide to the most spectacular places to visit.",
      date: "June 15, 2023",
      author: "Rajputana Team",
      image:
        "https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-4.1.0&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Essential Tips for a Comfortable Road Trip in India",
      excerpt:
        "Learn how to make your long-distance taxi journey more enjoyable with these expert tips from our experienced drivers.",
      date: "May 22, 2023",
      author: "Travel Expert",
      image:
        "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.1.0&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Why Choose Premium Taxi Services for Business Travel",
      excerpt:
        "Discover how premium transportation can enhance your business trips with comfort, reliability, and professionalism.",
      date: "April 10, 2023",
      author: "Corporate Traveler",
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.1.0&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  return (
    <div className="px-0 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white max-w-[1400px] mx-auto">
      {/* Blog Header */}
      <div className="text-center mb-16">
        <span className="text-sm font-semibold tracking-widest text-yellow-600 uppercase">
          Travel Insights
        </span>
        <h2 className="mt-2 text-3xl font-bold text-brand-brown sm:text-5xl">
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Latest
          </span>{" "}
          Blog Posts
        </h2>
        <p className="mt-4 text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Discover travel tips, destination guides, and transportation insights
          from our experts
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-1 sm:px-4">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl group relative border border-gray-100"
          >
            {/* Blog Image */}
            <div className="relative overflow-hidden h-60">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Blog Content */}
            <div className="p-3">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span className="flex items-center mr-4">
                  <FaCalendarAlt className="mr-1 text-yellow-500" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <FaUser className="mr-1 text-yellow-500" />
                  {post.author}
                </span>
              </div>

              <h3 className="text-xl font-bold text-brand-brown mb-3 hover:text-yellow-500 cursor-pointer transition-all duration-300 ease-in-out ">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-6">{post.excerpt}</p>

              <a
                href="#"
                className="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700 transition-colors duration-300"
              >
                Read More
                <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-16 text-center">
        <Link
          to={"/blogs"}
          className="px-8 py-3 border-2 border-yellow-500 text-yellow-500 font-medium rounded-lg hover:bg-yellow-500 hover:text-white transition-all duration-300"
        >
          View All Blog Posts
        </Link>
      </div>
    </div>
  );
};

export default HomeBlog;
