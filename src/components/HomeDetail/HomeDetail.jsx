import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { homeData } from "../../assets/data";
import { Link } from "react-router-dom";

const img =
  "https://images.pexels.com/photos/1011093/pexels-photo-1011093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const HomeDetail = () => {
  return (
    <div className="px-1 sm:px-6 lg:px-8  max-w-[1400px] mx-auto">
      <div className="text-center mb-0">
        <span className="text-sm font-semibold tracking-widest text-yellow-600 uppercase block mb-2">
          About
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#9D4C2C]  leading-tight">
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Abhimanyu
          </span>{" "}
          Holidays
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row  justify-between w-full gap-10 ">
        <div className="flex-1">
          {homeData.map((item, index) => (
            <p
              key={index}
              className="mt-5 leading-6 text-gray-600 max-[480px]:text-justify text-center"
            >
              {item}
            </p>
          ))}
          <div className="flex justify-center">
            {" "}
            <Link
              to={"/about-us"}
              className="group mt-5 bg-yellow-500 flex gap-1 items-center hover:bg-yellow-600 text-black hover:text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-sm sm:text-base transform hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
            >
              Read More
              <MdOutlineKeyboardArrowRight
                size={20}
                className="transform transition-all ease-in-out duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDetail;
