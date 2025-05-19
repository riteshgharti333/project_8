import React from "react";

const Taxi = () => {
  const taxiServices = [
    {
      title: "Local Jaipur Taxi",
      description:
        "Explore Jaipur's heritage sites with our reliable local taxi service. Perfect for city tours and short trips and location",
      range: "Within Jaipur",
      image:
        "https://images.unsplash.com/photo-1651910031161-7c75098bce75?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Nearby Destinations",
      description:
        "Comfortable rides to popular attractions within 100km of Jaipur including Amer Fort, Chand Baori, and more.",
      range: "1-100 km from Jaipur",
      image:
        "https://images.unsplash.com/photo-1651910031161-7c75098bce75?ixlib=rb-4.1.0&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Outstation Travel",
      description:
        "Premium intercity taxi service for longer journeys to Delhi, Udaipur, Jodhpur and other Rajasthan destinations.",
      range: "100+ km from Jaipur",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.1.0&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  return (
    <div className="px-0 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white max-w-[1400px] mx-auto">
      {/* Premium Header */}
      <div className="text-center mb-16">
        <span className="text-sm font-semibold tracking-widest text-yellow-600 uppercase">
          Abhimanyu Holidays
        </span>
        <h1 className="mt-2 text-3xl font-bold text-brand-brown sm:text-5xl">
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Premium Taxi Services
          </span>{" "}
          From Jaipur
        </h1>
        <p className="mt-4 text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Reliable, comfortable transportation for all your travel needs
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-1 sm:px-4">
        {taxiServices.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl group relative border border-gray-100"
          >
            {/* Image with overlay */}
            <div className="relative overflow-hidden h-60">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute bottom-4 left-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {service.range}
              </span>
            </div>

            {/* Content */}
            <div className="p-3">
              <h3 className="text-xl font-bold text-brand-brown mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                {service.description}
              </p>

              <button className="w-full px-5 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                Book This Service
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Taxi;
