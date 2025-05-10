import "./HomeBanner.scss";

const banner_img =
  "https://images.unsplash.com/photo-1518614768202-663a3a0ecf59?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const HomeBanner = () => {
  return (
    <div className="relative overflow-hidden homeBanner h-[90vh]">
      {/* Background Image */}
      <div className="absolute inset-0 banner-img">
        <img
          src={banner_img}
          alt="Taxi service in Rajasthan"
          className="block w-full h-full object-cover brightness-50 object-top"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-0 sm:px-6">
          <div className="banner-content w-full md:max-w-2xl ml-auto p-4 sm:p-6 lg:p-0 rounded-lg animate-fadeInRight">
            <h3 className="text-yellow-400 text-sm sm:text-md font-semibold mb-2 tracking-widest animate-slideInRight delay-100">
              RAJPUTANA CABS® - AWARD WINNING TAXI SERVICE
            </h3>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight animate-slideInRight delay-200">
              Premium Taxi Services in{" "}
              <span className="text-yellow-400">Jaipur</span>{" "}
              <br className="hidden sm:block" />
              Across Rajasthan
            </h1>

            <div className="space-y-3 sm:space-y-4 text-gray-200 mb-6 sm:mb-8">
              <p className="text-sm sm:text-base leading-relaxed animate-slideInRight delay-300">
                Since 2013, we've provided premium chauffeur-driven and
                self-drive car rentals across Rajasthan, Delhi NCR, and
                Chandigarh. Experience luxury travel with our fleet of Sedans,
                Innovas, Crystas, Fortuners, and Tempo Travellers.
              </p>
            </div>

            <ul className="space-y-2 sm:space-y-3 text-white mb-6 sm:mb-8 text-sm sm:text-base">
              <li className="flex items-center gap-2 animate-slideInRight delay-500">
                <span className="bg-yellow-500 p-1 rounded-full">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </span>
                <span>+91 9928399846 / 9983010250</span>
              </li>
              <li className="flex items-center gap-2 animate-slideInRight delay-600">
                <span className="bg-green-500 p-1 rounded-full">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </span>
                <span>WhatsApp: +91 9928399846</span>
              </li>
              <li className="flex items-center gap-2 animate-slideInRight delay-700">
                <span className="bg-blue-500 p-1 rounded-full">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <span>info@rajputanacabs.com</span>
              </li>
            </ul>

            <button className="banner-btn bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 animate-bounceIn delay-1000 cursor-pointer text-sm sm:text-base">
              BOOK YOUR CAB NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
