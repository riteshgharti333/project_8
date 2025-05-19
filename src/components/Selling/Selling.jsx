import React from "react";

const Selling = () => {
  const bestSellingTours = [
    {
      title: "Golden Triangle Tour",
      description:
        "Explore Delhi, Agra, and Jaipur on this classic 5-day journey featuring the Taj Mahal, Amber Fort, and India Gate with luxury accommodations.",
      price: "₹24,999",
      duration: "5 Days",
      highlight: "Bestseller",
      image:
        "https://images.unsplash.com/photo-1651910031161-7c75098bce75?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Rajasthan Cultural Odyssey",
      description:
        "Immerse yourself in royal heritage with visits to Jaipur, Udaipur, Jodhpur, and Jaisalmer including palace stays and cultural performances.",
      price: "₹32,999",
      duration: "7 Days",
      highlight: "Luxury",
      image:
        "https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-4.1.0&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Taj Mahal Sunrise Experience",
      description:
        "Exclusive early-access tour to witness sunrise at the Taj Mahal followed by Agra Fort visit and gourmet breakfast at a heritage hotel.",
      price: "₹8,499",
      duration: "1 Day",
      highlight: "Exclusive",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.1.0&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  return (
    <div className="px-0 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white max-w-[1400px] mx-auto">
      {/* Premium Header */}
      <div className="text-center mb-16">
        <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
          Traveler's Choice
        </span>
        <h1 className="mt-2 text-3xl font-bold text-brand-brown  sm:text-5xl">
          <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
            Our Best Selling
          </span>{" "}
          Tours
        </h1>
        <p className="mt-4  text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Curated experiences loved by thousands of travelers
        </p>
      </div>

      {/* Premium Tour Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-1 sm:px-4">
        {bestSellingTours.map((tour, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group relative border border-gray-100"
          >
            {/* Image with overlay */}
            <div className="relative overflow-hidden h-72">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span
                className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${
                  tour.highlight === "Bestseller"
                    ? "bg-blue-500 text-white"
                    : tour.highlight === "Luxury"
                    ? "bg-amber-600 text-white"
                    : "bg-purple-500 text-white"
                }`}
              >
                {tour.highlight}
              </span>
            </div>

            {/* Content */}
            <div className="p-3 flex flex-col h-[calc(100%-288px)]">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  {tour.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {tour.description}
                </p>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center space-x-4">
                  <span className="text-blue-600 font-bold">{tour.price}</span>
                  
                </div>
                <button className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center">
                  Book Now
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selling;
