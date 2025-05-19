import { useState } from 'react';
import { FaUser, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaHotel, FaCar, FaPaperPlane, FaChild, FaUsers } from 'react-icons/fa';

const ServiceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    country: '',
    pickupLocation: '',
    pickupTime: '',
    dropLocation: '',
    dropTime: '',
    adults: 1,
    children: 0,
    arrivalDate: '',
    departureDate: '',
    hotelPreference: '',
    carType: '',
    requirements: ''
  });

  const carTypes = [
    { id: 'economy', name: 'Economy (4 seater)' },
    { id: 'sedan', name: 'Sedan (4 seater)' },
    { id: 'suv', name: 'SUV (6-7 seater)' },
    { id: 'luxury', name: 'Luxury Car' },
    { id: 'tempo', name: 'Tempo Traveller (12 seater)' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-2xl font-extrabold text-brand-brown sm:text-4xl">
            <span className="block">Book Your Premium Cab</span>
            <span className="block bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent mt-2">Travel in Comfort & Style</span>
          </h2>
          <p className="mt-4 text-sm sm:text-lg text-gray-600">
            Fill the form below and we'll get back to you within 24 hours
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Name */}
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-amber-500" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 border"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Contact Number */}
            <div className="relative">
              <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className="h-5 w-5 text-amber-500" />
                </div>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  required
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 border"
                  placeholder="+91 9876543210"
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 border pl-4"
                placeholder="your@email.com"
              />
            </div>

            {/* Country */}
            <div className="relative">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 border pl-4"
                placeholder="Your Country"
              />
            </div>

            {/* Pickup Location */}
            <div className="relative">
              <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700 mb-1">
                Pickup Location
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaMapMarkerAlt className="h-5 w-5 text-amber-500" />
                </div>
                <input
                  type="text"
                  id="pickupLocation"
                  name="pickupLocation"
                  required
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 border"
                  placeholder="Hotel/Airport/Address"
                />
              </div>
            </div>

            {/* Pickup Time */}
            <div className="relative">
              <label htmlFor="pickupTime" className="block text-sm font-medium text-gray-700 mb-1">
                Pickup Time
              </label>
              <input
                type="time"
                id="pickupTime"
                name="pickupTime"
                required
                value={formData.pickupTime}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 border pl-4"
              />
            </div>

            {/* Drop Location */}
            <div className="relative">
              <label htmlFor="dropLocation" className="block text-sm font-medium text-gray-700 mb-1">
                Drop Location
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaMapMarkerAlt className="h-5 w-5 text-amber-500" />
                </div>
                <input
                  type="text"
                  id="dropLocation"
                  name="dropLocation"
                  required
                  value={formData.dropLocation}
                  onChange={handleChange}
                  className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 border"
                  placeholder="Hotel/Airport/Address"
                />
              </div>
            </div>

            {/* Drop Time */}
            <div className="relative">
              <label htmlFor="dropTime" className="block text-sm font-medium text-gray-700 mb-1">
                Drop Time
              </label>
              <input
                type="time"
                id="dropTime"
                name="dropTime"
                required
                value={formData.dropTime}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 border pl-4"
              />
            </div>

            {/* Arrival Date */}
            <div className="relative">
              <label htmlFor="arrivalDate" className="block text-sm font-medium text-gray-700 mb-1">
                Arrival Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCalendarAlt className="h-5 w-5 text-amber-500" />
                </div>
                <input
                  type="date"
                  id="arrivalDate"
                  name="arrivalDate"
                  required
                  value={formData.arrivalDate}
                  onChange={handleChange}
                  className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 border"
                />
              </div>
            </div>

            {/* Departure Date */}
            <div className="relative">
              <label htmlFor="departureDate" className="block text-sm font-medium text-gray-700 mb-1">
                Departure Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCalendarAlt className="h-5 w-5 text-amber-500" />
                </div>
                <input
                  type="date"
                  id="departureDate"
                  name="departureDate"
                  required
                  value={formData.departureDate}
                  onChange={handleChange}
                  className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 border"
                />
              </div>
            </div>

            {/* Adults */}
            <div className="relative">
              <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-1">
                Number of Adults
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUsers className="h-5 w-5 text-amber-500" />
                </div>
                <input
                  type="number"
                  id="adults"
                  name="adults"
                  min="1"
                  required
                  value={formData.adults}
                  onChange={handleChange}
                  className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 border"
                />
              </div>
            </div>

            {/* Children */}
            <div className="relative">
              <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-1">
                Number of Children
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaChild className="h-5 w-5 text-amber-500" />
                </div>
                <input
                  type="number"
                  id="children"
                  name="children"
                  min="0"
                  value={formData.children}
                  onChange={handleChange}
                  className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 border"
                />
              </div>
            </div>

            {/* Hotel Preference */}
            <div className="relative">
              <label htmlFor="hotelPreference" className="block text-sm font-medium text-gray-700 mb-1">
                Hotel Preference
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaHotel className="h-5 w-5 text-amber-500" />
                </div>
                <input
                  type="text"
                  id="hotelPreference"
                  name="hotelPreference"
                  value={formData.hotelPreference}
                  onChange={handleChange}
                  className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 border"
                  placeholder="Hotel name or preference"
                />
              </div>
            </div>

            {/* Car Type */}
            <div className="relative">
              <label htmlFor="carType" className="block text-sm font-medium text-gray-700 mb-1">
                Car Type
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCar className="h-5 w-5 text-amber-500" />
                </div>
                <select
                  id="carType"
                  name="carType"
                  required
                  value={formData.carType}
                  onChange={handleChange}
                  className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 border appearance-none bg-white"
                >
                  <option value="">Select Car Type</option>
                  {carTypes.map((car) => (
                    <option key={car.id} value={car.id}>{car.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div>
            <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">
              Your Requirements / Query
            </label>
            <textarea
              id="requirements"
              name="requirements"
              rows="4"
              value={formData.requirements}
              onChange={handleChange}
              className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 border px-4"
              placeholder="Any special requirements or questions..."
            ></textarea>
          </div>

          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="group relative flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105"
            >
              <FaPaperPlane className="mr-2 group-hover:animate-bounce" />
              Confirm Booking
            </button>
          </div>
        </form>
      </div>

      {/* Add these to your global CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeIn 0.8s ease-out 0.2s both;
        }
        select {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23d97706' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 0.5rem center;
          background-repeat: no-repeat;
          background-size: 1.5em 1.5em;
          padding-right: 2.5rem;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
      `}</style>
    </div>
  );
};

export default ServiceForm;