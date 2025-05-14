import {
  aboutData,
  aboutServices,
  founderData,
  visionData,
} from "../../assets/aboutData";
import { MdOutlineVerified } from "react-icons/md";
import useFullUrl from "../../utils/useFullUrl";

const banner_img =
  "https://images.unsplash.com/photo-1518614768202-663a3a0ecf59?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const about_img =
  "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?ixlib=rb-4.1.0&auto=format&fit=crop&w=1374&q=80";

const About = () => {
  
    const fullUrl = useFullUrl();

  return (
    <div>
      <div className=" relative ">
        <img
          src={banner_img}
          alt=""
          className="h-[400px] w-full object-cover block brightness-50"
        />
        <h1 className="text-6xl w-full text-center font-bold text-white sm:text-7xl uppercase absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          About Us
        </h1>
      </div>

      {/* ////////////// */}
      <div className="max-w-[1100px] m-auto mt-20 flex flex-col gap-20 max-[480pc]:px-2 px-5">
        <div>
          <h1 className=" max-[480pc]:text-2xl text-3xl font-bold text-gray-900 sm:text-4xl uppercase">
            Company{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Profile
            </span>
          </h1>
          {aboutData.map((item, index) => (
            <p key={index} className="mt-5  max-[480pc]:text-1xl text-gray-600">
              {item}
            </p>
          ))}
        </div>

        <div className="flex gap-10 items-center  flex-col lg:flex-row">
          <div className="flex-6">
            <h1 className=" max-[480pc]:text-2xl text-3xl font-bold text-gray-900 sm:text-4xl uppercase">
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                About Owner
              </span>{" "}
              – The Pink City Holidays
            </h1>
            {founderData.map((item, index) => (
              <p key={index} className="mt-5 leading-6 text-gray-600">
                {item}
              </p>
            ))}
          </div>
          <div className="flex-4">
            <img
              src={about_img}
              alt=""
              className="rounded-xl w-full h-150 object-cover"
            />
          </div>
        </div>

        <div className="flex gap-10 items-center  flex-col lg:flex-row-reverse">
          <div className="flex-6">
            <h1 className="   max-[480pc]:text-2xl text-3xl font-bold text-gray-900 sm:text-4xl uppercase1">
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                About Manager
              </span>{" "}
              – The Pink City Holidays
            </h1>
            {founderData.map((item, index) => (
              <p key={index} className="mt-5 leading-6 text-gray-600">
                {item}
              </p>
            ))}
          </div>
          <div className="flex-4">
            <img
              src={about_img}
              alt=""
              className="rounded-xl w-full h-150 object-cover"
            />
          </div>
        </div>

        <div>
          <h1 className=" max-[480pc]:text-2xl text-3xl font-bold text-gray-900 sm:text-4xl uppercase">
            Our
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              {" "}
              Certificates
            </span>
          </h1>
          <div
            className="
   grid max-[480px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10"
          >
            <div className="relative group overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Image container with elegant overlay effect */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={about_img}
                  alt="Quality Research Organization"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>
              </div>

              {/* Decorative accent bar - animated on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-amber-500 to-red-500 opacity-90 group-hover:from-red-600 group-hover:via-amber-600 group-hover:to-red-600 transition-colors duration-300"></div>

              <div className="bg-white p-5 rounded-b-lg">
                <p className="text-lg font-semibold text-gray-800 text-center mb-2 transition-colors duration-300 group-hover:text-gray-900">
                  Quality Research Organization
                </p>
              </div>

              {/* Hover state shine effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine duration-1000"></div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Image container with elegant overlay effect */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={about_img}
                  alt="Quality Research Organization"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>
              </div>

              {/* Decorative accent bar - animated on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-amber-500 to-red-500 opacity-90 group-hover:from-red-600 group-hover:via-amber-600 group-hover:to-red-600 transition-colors duration-300"></div>

              <div className="bg-white p-5 rounded-b-lg">
                <p className="text-lg font-semibold text-gray-800 text-center mb-2 transition-colors duration-300 group-hover:text-gray-900">
                  Quality Research Organization
                </p>
              </div>

              {/* Hover state shine effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine duration-1000"></div>
              </div>
            </div>{" "}
            <div className="relative group overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Image container with elegant overlay effect */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={about_img}
                  alt="Quality Research Organization"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>
              </div>

              {/* Decorative accent bar - animated on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-amber-500 to-red-500 opacity-90 group-hover:from-red-600 group-hover:via-amber-600 group-hover:to-red-600 transition-colors duration-300"></div>

              <div className="bg-white p-5 rounded-b-lg">
                <p className="text-lg font-semibold text-gray-800 text-center mb-2 transition-colors duration-300 group-hover:text-gray-900">
                  Quality Research Organization
                </p>
              </div>

              {/* Hover state shine effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine duration-1000"></div>
              </div>
            </div>{" "}
            <div className="relative group overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Image container with elegant overlay effect */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={about_img}
                  alt="Quality Research Organization"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>
              </div>

              {/* Decorative accent bar - animated on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-amber-500 to-red-500 opacity-90 group-hover:from-red-600 group-hover:via-amber-600 group-hover:to-red-600 transition-colors duration-300"></div>

              <div className="bg-white p-5 rounded-b-lg">
                <p className="text-lg font-semibold text-gray-800 text-center mb-2 transition-colors duration-300 group-hover:text-gray-900">
                  Quality Research Organization
                </p>
              </div>

              {/* Hover state shine effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine duration-1000"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-10 items-center flex-col lg:flex-row">
          <div className="flex-6">
            <h1 className="  max-[480pc]:text-2xl text-3xl font-bold text-gray-900 sm:text-4xl uppercase leading-13">
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Our
              </span>{" "}
              Services
            </h1>
            <p className="mt-5 leading-6 text-gray-600">
              With our consistent efforts and value added services, we are able
              to establish ourselves as a leading travel services provider in
              our market within a short span of time. Our range of services
              includes:
            </p>

            <ul className="mt-5 ml-5">
              {aboutServices.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-5 mb-5 text-[15px] font-semibold"
                >
                  <MdOutlineVerified className="text-[20px] text-blue-900 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-4">
            <img
              src={about_img}
              alt=""
              className="rounded-xl w-full h-150 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-primary-color py-10 px-2  sm:p-10 my-20">
        <h1 className="text-center text-white text-5xl font-bold mb-15 uppercase max-[480px]:text-4xl">
          Our
          <span className="text-yellow-500"> Vision</span>
        </h1>
        <div className="grid max-[480px]:grid-cols-1 max-[480px]:gap-10  grid-cols-2 gap-5 sm:gap-10 max-w-[1000px] m-auto">
          {visionData.map((item, index) => (
            <div className="flex flex-col items-center text-center" key={index}>
              <item.icon className="text-white text-[70px]" />

              <div>
                <h1 className="text-yellow-500 font-bold text-3xl my-5 ">
                  {item.title}
                </h1>
                <p className="text-white text-sm sm:text-md">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  s;
};

export default About;
