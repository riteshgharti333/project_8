import React from "react";

const Safari = () => {
  const safariPackages = [
    {
      title: "Golden Dunes Sunset Safari",
      description:
        "Experience the magic of sunset over Sam Sand Dunes with our expert guides, traditional entertainment, and authentic Rajasthani dinner under the stars.",
      price: "₹2,499",
      duration: "4 Hours",
      highlight: "Most Popular",
    },
    {
      title: "Royal Desert Camp Experience",
      description:
        "Experience the magic of sunset over Sam Sand Dunes with our expert guides, traditional entertainment, and authentic Rajasthani dinner under the stars.",
      price: "₹4,999",
      duration: "Overnight",
      highlight: "Luxury Pick",
    },
    {
      title: "Adventure Dune Bashing",
      description:
        "Thrilling 4x4 dune bashing experience with professional drivers, followed by traditional folk dance and barbecue.",
      price: "₹3,299",
      duration: "3 Hours",
      highlight: "Adrenaline",
    },
  ];

  return (
    <div className=" px-0 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-white max-w-[1400px] mx-auto">
      {/* Premium Header with Desert Theme */}
      <div className="text-center mb-16">
        <span className="text-sm font-semibold tracking-widest text-amber-600 uppercase">
          Rajputana Cabs® Exclusive
        </span>
        <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">
          <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
            Desert Safari
          </span>{" "}
          Adventures
        </h1>
      </div>

      {/* Premium Safari Cards with Desert Aesthetic */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-1 sm:px-4">
        {safariPackages.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group relative border border-amber-100"
          >
            {/* Image with desert overlay */}
            <div className="relative overflow-hidden h-72">
              <img
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Content with desert theme */}
            <div className="p-3 flex-col justify-between">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-6 text-sm line-clamp-3">
                {item.description}
              </p>

              <div className="flex justify-between items-center">
                <button className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center">
                  Explore
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

export default Safari;
