import { FaBed, FaMapMarkerAlt, FaStar, FaWifi, FaSwimmingPool, FaParking, FaUtensils } from "react-icons/fa";
import { motion } from "framer-motion";
// import { hotelCards } from "../../assets/hotelData"; // You'll need to create this data file
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const hotelCards = [
  {
    id: 1,
    name: "Royal Heritage Palace",
    location: "Jaipur, Rajasthan",
    description: "Experience royal living in this heritage property with modern amenities and authentic Rajasthani hospitality.",
    price: "12,999",
    rating: 4.8,
    img: "/images/hotels/hotel1.jpg",
    isPopular: true,
    amenities: [
      { name: "Free WiFi", icon: "wifi" },
      { name: "Swimming Pool", icon: "pool" },
      { name: "Free Parking", icon: "parking" },
      { name: "Restaurant", icon: "restaurant" }
    ]
  },
  {
    id: 2,
    name: "Seaside Grand Resort",
    location: "Goa, India",
    description: "Relax at this luxurious beachside resort with stunning ocean views and tropical vibes.",
    price: "9,499",
    rating: 4.5,
    img: "/images/hotels/hotel2.jpg",
    isPopular: true,
    amenities: [
      { name: "Beach Access", icon: "beach_access" },
      { name: "Spa & Wellness", icon: "spa" },
      { name: "Bar", icon: "bar" },
      { name: "Free Breakfast", icon: "breakfast_dining" }
    ]
  },
  {
    id: 3,
    name: "Mountain Mist Retreat",
    location: "Manali, Himachal Pradesh",
    description: "Nestled in the hills, enjoy peace and panoramic views at this cozy mountain resort.",
    price: "6,799",
    rating: 4.2,
    img: "/images/hotels/hotel3.jpg",
    isPopular: false,
    amenities: [
      { name: "Fireplace", icon: "fireplace" },
      { name: "Balcony Views", icon: "landscape" },
      { name: "Room Service", icon: "room_service" },
      { name: "Hot Water", icon: "hot_tub" }
    ]
  },
  {
    id: 4,
    name: "Urban Stay Suites",
    location: "Mumbai, Maharashtra",
    description: "Stay in the heart of the city with easy access to business hubs and nightlife.",
    price: "7,999",
    rating: 4.0,
    img: "/images/hotels/hotel4.jpg",
    isPopular: false,
    amenities: [
      { name: "Air Conditioning", icon: "ac_unit" },
      { name: "Gym", icon: "fitness_center" },
      { name: "Conference Hall", icon: "meeting_room" },
      { name: "24x7 Reception", icon: "support_agent" }
    ]
  },
  {
    id: 5,
    name: "Desert Dune Camp",
    location: "Jaisalmer, Rajasthan",
    description: "A unique desert camping experience with cultural performances and camel rides.",
    price: "5,499",
    rating: 4.6,
    img: "/images/hotels/hotel5.jpg",
    isPopular: true,
    amenities: [
      { name: "Camel Safari", icon: "directions_walk" },
      { name: "Cultural Show", icon: "theater_comedy" },
      { name: "Bonfire", icon: "local_fire_department" },
      { name: "Tent Stay", icon: "tent" }
    ]
  },
  {
    id: 6,
    name: "Backwaters Bliss Villa",
    location: "Alleppey, Kerala",
    description: "Enjoy houseboat rides and lush greenery in this tranquil backwater villa.",
    price: "8,299",
    rating: 4.4,
    img: "/images/hotels/hotel6.jpg",
    isPopular: false,
    amenities: [
      { name: "Houseboat Ride", icon: "directions_boat" },
      { name: "Private Balcony", icon: "balcony" },
      { name: "Local Cuisine", icon: "restaurant_menu" },
      { name: "Yoga Sessions", icon: "self_improvement" }
    ]
  }
];


const Hotels = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="px-0 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
      {/* Premium Header */}
      <div className="text-center mb-10">
        <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
          Abhimanyu Holidays
        </span>
        <h1 className="mt-2 text-3xl font-bold text-brand-brown sm:text-5xl">
          Luxury
          <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
            {" "}
            Hotels
          </span>
        </h1>
        <p className="mt-4 text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Premium accommodations showcasing Rajasthan's royal hospitality and modern comforts
        </p>
      </div>

      {/* Hotels Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {hotelCards.map((hotel) => (
          <motion.div
            key={hotel.id}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="group"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
              {/* Image with badge */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Badges */}
                <div className="absolute top-4 left-4 space-y-2">
                  {hotel.isPopular && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-500 text-white">
                      POPULAR
                    </span>
                  )}
                  {hotel.isSpecial && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-purple-500 text-white">
                      SPECIAL DEAL
                    </span>
                  )}
                </div>

                {/* Rating */}
                <span className="absolute bottom-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-gray-800">
                  <FaStar className="mr-1 text-yellow-400" />
                  {hotel.rating}
                </span>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-6 flex-grow flex flex-col">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-brand-brown">{hotel.name}</h3>
                    <p className="text-lg font-bold text-blue-600">
                      ₹{hotel.price}
                      <span className="text-sm font-normal text-gray-500"> /night</span>
                    </p>
                  </div>

                  <div className="flex items-center text-gray-600 mb-3">
                    <FaMapMarkerAlt className="mr-1 text-blue-500" />
                    <span className="text-sm">{hotel.location}</span>
                  </div>

                  <p className="text-gray-600 mb-4">{hotel.description}</p>

                  {/* Amenities */}
                  <div className="mb-7">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Amenities
                    </h4>
                    <ul className="flex items-center gap-2 flex-wrap">
                      {hotel.amenities.map((amenity, i) => (
                        <li key={i} className="flex items-center text-sm bg-gray-100 rounded-full px-3 py-1">
                          {amenity.icon === 'wifi' && <FaWifi className="mr-1 text-blue-500" />}
                          {amenity.icon === 'pool' && <FaSwimmingPool className="mr-1 text-blue-500" />}
                          {amenity.icon === 'parking' && <FaParking className="mr-1 text-blue-500" />}
                          {amenity.icon === 'restaurant' && <FaUtensils className="mr-1 text-blue-500" />}
                          {amenity.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="w-full bg-blue-500 cursor-pointer text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg hover:bg-white border border-blue-500 hover:text-blue-500">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;