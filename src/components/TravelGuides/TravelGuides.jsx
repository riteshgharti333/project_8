import { FaCompass, FaBookOpen, FaUserTie, FaLanguage, FaRegCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
// import { guideCards } from "../../assets/guideData"; // You'll need to create this data file

 const guideCards = [
  {
    id: 1,
    name: "Rajesh Sharma",
    img: "/images/guides/guide1.jpg",
    rate: "2,500",
    isCertified: true,
    isAvailable: true,
    specializations: ["Heritage Tours", "Food Tours", "Photography"],
    areas: ["Jaipur", "Jodhpur", "Udaipur"],
    languages: ["English", "Hindi", "Rajasthani"],
    experience: 8,
    about: "A passionate historian with deep knowledge of Rajasthan's royal heritage and hidden gems. Specializes in customized cultural experiences."
  },
  {
    id: 2,
    name: "Anita Verma",
    img: "/images/guides/guide2.jpg",
    rate: "3,000",
    isCertified: true,
    isAvailable: false,
    specializations: ["Wildlife Safaris", "Nature Walks", "Eco Tours"],
    areas: ["Ranthambore", "Sariska", "Bharatpur"],
    languages: ["English", "Hindi"],
    experience: 6,
    about: "Expert in wildlife spotting and forest trails with a strong background in ecological conservation and nature-based storytelling."
  },
  {
    id: 3,
    name: "Mohammad Irfan",
    img: "/images/guides/guide3.jpg",
    rate: "2,200",
    isCertified: false,
    isAvailable: true,
    specializations: ["Local Markets", "Street Food", "Cultural Walks"],
    areas: ["Delhi", "Agra", "Lucknow"],
    languages: ["Hindi", "Urdu", "English"],
    experience: 4,
    about: "Energetic and friendly guide known for immersive local market experiences and food trails. Great for short, authentic city tours."
  },
  {
    id: 4,
    name: "Pooja Mehta",
    img: "/images/guides/guide4.jpg",
    rate: "3,500",
    isCertified: true,
    isAvailable: true,
    specializations: ["Luxury Tours", "Historical Tours", "Shopping Assistance"],
    areas: ["Mumbai", "Pune", "Nashik"],
    languages: ["English", "Hindi", "Marathi"],
    experience: 10,
    about: "Premium guide for luxury travelers looking for personalized service, shopping help, and deep insights into local history and culture."
  },
  {
    id: 5,
    name: "Karan Thakur",
    img: "/images/guides/guide5.jpg",
    rate: "2,800",
    isCertified: true,
    isAvailable: false,
    specializations: ["Adventure Treks", "Himalayan Trails", "Camping"],
    areas: ["Manali", "Leh", "Spiti Valley"],
    languages: ["Hindi", "English"],
    experience: 7,
    about: "Adventure enthusiast with mountaineering experience. Best for nature lovers and trekkers looking for challenging yet rewarding journeys."
  },
  {
    id: 6,
    name: "Lakshmi Devi",
    img: "/images/guides/guide6.jpg",
    rate: "2,000",
    isCertified: false,
    isAvailable: true,
    specializations: ["Temple Tours", "Cultural Festivals", "Spiritual Walks"],
    areas: ["Varanasi", "Haridwar", "Rishikesh"],
    languages: ["Hindi", "Sanskrit", "English"],
    experience: 5,
    about: "Spiritual guide offering peaceful, knowledge-rich journeys into the heart of India’s ancient temples and rituals."
  }
];


const TravelGuides = () => {
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
        <span className="text-sm font-semibold tracking-widest text-green-600 uppercase">
          Abhimanyu Holidays
        </span>
        <h1 className="mt-2 text-3xl font-bold text-brand-brown sm:text-5xl">
          Expert
          <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
            {" "}
            Travel Guides
          </span>
        </h1>
        <p className="mt-4 text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Professional guides to enhance your Rajasthan experience with local insights and cultural knowledge
        </p>
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {guideCards.map((guide) => (
          <motion.div
            key={guide.id}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="group"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
              {/* Guide Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src="https://www.iesonline.co.in/blog/images/travel-guide1.jpg"
                  alt={guide.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Badges */}
                <div className="absolute top-4 left-4 space-y-2">
                  {guide.isCertified && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white">
                      CERTIFIED
                    </span>
                  )}
                  {guide.isAvailable && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-500 text-white">
                      AVAILABLE NOW
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-6 flex-grow flex flex-col">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-brand-brown">{guide.name}</h3>
                    <p className="text-lg font-bold text-green-600">
                      ₹{guide.rate}
                      <span className="text-sm font-normal text-gray-500"> /day</span>
                    </p>
                  </div>

                  {/* Specializations */}
                  <div className="mb-3">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                      Specializes In
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {guide.specializations.map((spec, i) => (
                        <span key={i} className="text-xs bg-green-100 text-green-800 rounded-full px-2 py-1">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <FaCompass className="mr-2 text-green-500" />
                      <span>Areas: {guide.areas.join(', ')}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaLanguage className="mr-2 text-green-500" />
                      <span>Languages: {guide.languages.join(', ')}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaRegCalendarAlt className="mr-2 text-green-500" />
                      <span>Experience: {guide.experience} years</span>
                    </div>
                  </div>

                  {/* About */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{guide.about}</p>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-green-500 cursor-pointer text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg hover:bg-white border border-green-500 hover:text-green-500">
                    View Profile
                  </button>
                  <button className="flex-1 bg-white cursor-pointer text-green-500 font-medium py-3 px-4 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg hover:bg-green-500 border border-green-500 hover:text-white">
                    Hire Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TravelGuides;