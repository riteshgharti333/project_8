import { IoMdArrowDropdown } from "react-icons/io";

export const navData = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "Tour Packages",
    specific: "package",
    icon: IoMdArrowDropdown,
    dropdown: [
      {
        name: "Abhimanyu Holidays Special Tours",
        link: "/tour-package/abhimanyu-holidays-special-tours",
      },
      {
        name: "Rajasthan Tour Packages",
        link: "/tour-package/rajasthan-tour-packages",
      },
      {
        name: "Udaipur Tours",
        link: "/tour-package/udaipur-tours",
      },
      {
        name: "Jaisalmer Tours",
        link: "/tour-package/jaisalmer-tours",
      },
      {
        name: "Jaipur Tour Packages",
        link: "/tour-package/jaipur-tour-packages",
      },
      {
        name: "Golden Triangle Tour Packages",
        link: "/tour-package/golden-triangle-tour-packages",
      },
      {
        name: "Ayodhya Tour Packages",
        link: "/tour-package/ayodhya-tour-packages",
      },
      {
        name: "Himachal Tour Packages",
        link: "/tour-package/himachal-tour-packages",
      },
      {
        name: "Kashmir Tour Packages",
        link: "/tour-package/kashmir-tour-packages",
      },
    ],
  },
  // {
  //   title: "Tempo Traveller",
  //   link: "/",
  // },
  {
    title: "Our Day Tours",
    icon: IoMdArrowDropdown,
    specific: "tour",
    design: "oneDay",

    dropdown: [
      { name: "One Day Tours", link: "/one-day-tours" },
      { name: "Jhalana Leopard Safari", link: "/jhalana-leopard-safari" },
      { name: "Jaipur Evening Tour", link: "/jaipur-evening-tour" },
      { name: "Jaipur Night Tour", link: "/jaipur-night-tour" },
      { name: "Jaipur Sunrise Tour", link: "/jaipur-sunrise-tour" },
      { name: "Jaipur Sightseeing Tour", link: "/jaipur-sightseeing-tour" },
      { name: "One Day Trip to Agra", link: "/one-day-trip-to-agra" },
      {
        name: "Jaipur Ranthambore One Day Trip",
        link: "/jaipur-ranthambore-one-day-trip",
      },
      {
        name: "More...",
        link: "/one-day-tours",
      },

      // {
      //   name: "One Day Trip to Ajmer Pushkar",
      //   link: "/one-day-trip-to-ajmer-pushkar",
      // },
      // {
      //   name: "One Day Trip to Chand Baori & Bhangarh Fort",
      //   link: "/one-day-trip-to-chand-baori-bhangarh-fort",
      // },
      // {
      //   name: "One Day Trip to Sariska from Jaipur",
      //   link: "/one-day-trip-to-sariska-from-jaipur",
      // },
      // {
      //   name: "Jaipur Khatu Shyamji & Salasar Balaji Tour",
      //   link: "/jaipur-khatu-shyamji-salasar-balaji-tour",
      // },
      // {
      //   name: "Chokhi Dhani Jaipur Night Tour",
      //   link: "/chokhi-dhani-jaipur-night-tour",
      // },
      // { name: "Jaipur Temple Tour", link: "/jaipur-temple-tour" },
      // { name: "Jaipur Shopping Tour", link: "/jaipur-shopping-tour" },
    ],
  },

  {
    title: "Hote Booking",

    icon: IoMdArrowDropdown,
    specific: "hotel",
    dropdown: [
      {
        name: "Hotels in Jaipur",
        link: "hotels-in-jaipur",
      },
      {
        name: "Hotels in Udaipur",
        link: "hotels-in-udaipur",
      },
      {
        name: "Hotels in Pushkar",
        link: "hotels-in-pushakr",
      },
      {
        name: "Hotels in Jaisalmer",
        link: "hotels-in-jaisalmer",
      },
      {
        name: "Hotels in Jodhpur",
        link: "hotels-in-jodhpur",
      },
    ],
  },
  {
    title: "Taxi Rental",
    link: "/taxi-rental",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
  {
    title: "Contact",
    link: "/contact-us",
  },
];

/////////////////////////

const card_image =
  "https://images.pexels.com/photos/11346464/pexels-photo-11346464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export const packageCard = [
  {
    img: card_image,
    title: "Jaipur Bus Rental",
    desc: "Rent a bus in Jaipur, like mini bus, 27 seater, 31, 35 seater, 41 seater, 45 seater, and 50/ 52/ 56 seater non-ac bus.",
  },
  {
    img: card_image,
    title: "Jaipur Bus Rental",
    desc: "Rent a bus in Jaipur, like mini bus, 27 seater, 31, 35 seater, 41 seater, 45 seater, and 50/ 52/ 56 seater non-ac bus.",
  },
  {
    img: card_image,
    title: "Jaipur Bus Rental",
    desc: "Rent a bus in Jaipur, like mini bus, 27 seater, 31, 35 seater, 41 seater, 45 seater, and 50/ 52/ 56 seater non-ac bus.",
  },
  {
    img: card_image,
    title: "Jaipur Bus Rental",
    desc: "Rent a bus in Jaipur, like mini bus, 27 seater, 31, 35 seater, 41 seater, 45 seater, and 50/ 52/ 56 seater non-ac bus.",
  },
  {
    img: card_image,
    title: "Jaipur Bus Rental",
    desc: "Rent a bus in Jaipur, like mini bus, 27 seater, 31, 35 seater, 41 seater, 45 seater, and 50/ 52/ 56 seater non-ac bus.",
  },
  {
    img: card_image,
    title: "Jaipur Bus Rental",
    desc: "Rent a bus in Jaipur, like mini bus, 27 seater, 31, 35 seater, 41 seater, 45 seater, and 50/ 52/ 56 seater non-ac bus.",
  },
  {
    img: card_image,
    title: "Jaipur Bus Rental",
    desc: "Rent a bus in Jaipur, like mini bus, 27 seater, 31, 35 seater, 41 seater, 45 seater, and 50/ 52/ 56 seater non-ac bus.",
  },
  {
    img: card_image,
    title: "Jaipur Bus Rental",
    desc: "Rent a bus in Jaipur, like mini bus, 27 seater, 31, 35 seater, 41 seater, 45 seater, and 50/ 52/ 56 seater non-ac bus.",
  },
];

const tourImg =
  "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=600";

export const tourCard = [
  {
    img: tourImg,
    title: "Manali tour package from Jaipur",
    desc: "Plan a minimum 5 days 4 nights tour package for Manali from Jaipur, where you offer all inclusive package with private cab from Jaipur at Rs 9999 per person. View more details.",
  },
  {
    img: tourImg,
    title: "Manali tour package from Jaipur",
    desc: "Plan a minimum 5 days 4 nights tour package for Manali from Jaipur, where you offer all inclusive package with private cab from Jaipur at Rs 9999 per person. View more details.",
  },
  {
    img: tourImg,
    title: "Manali tour package from Jaipur",
    desc: "Plan a minimum 5 days 4 nights tour package for Manali from Jaipur, where you offer all inclusive package with private cab from Jaipur at Rs 9999 per person. View more details.",
  },
  {
    img: tourImg,
    title: "Manali tour package from Jaipur",
    desc: "Plan a minimum 5 days 4 nights tour package for Manali from Jaipur, where you offer all inclusive package with private cab from Jaipur at Rs 9999 per person. View more details.",
  },
  {
    img: tourImg,
    title: "Manali tour package from Jaipur",
    desc: "Plan a minimum 5 days 4 nights tour package for Manali from Jaipur, where you offer all inclusive package with private cab from Jaipur at Rs 9999 per person. View more details.",
  },
  {
    img: tourImg,
    title: "Manali tour package from Jaipur",
    desc: "Plan a minimum 5 days 4 nights tour package for Manali from Jaipur, where you offer all inclusive package with private cab from Jaipur at Rs 9999 per person. View more details.",
  },
];

//////////////////////////////

const book_img =
  "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const bookCards = [
  {
    img: book_img,
    title: "Jaipur to Udaipur taxi",
    desc: "Book our Jaipur to Udaipur taxi our for",

    points: ["₹ 10 per km round trip", "₹ 2000 one way cab"],
  },
  {
    img: book_img,
    title: "Jaipur to Udaipur taxi",
    desc: "Book our Jaipur to Udaipur taxi our for",

    points: ["₹ 10 per km round trip", "₹ 2000 one way cab"],
  },
  {
    img: book_img,
    title: "Jaipur to Udaipur taxi",
    desc: "Book our Jaipur to Udaipur taxi our for",

    points: ["₹ 10 per km round trip", "₹ 2000 one way cab"],
  },
  {
    img: book_img,
    title: "Jaipur to Udaipur taxi",
    desc: "Book our Jaipur to Udaipur taxi our for",

    points: ["₹ 10 per km round trip", "₹ 2000 one way cab"],
  },
  {
    img: book_img,
    title: "Jaipur to Udaipur taxi",
    desc: "Book our Jaipur to Udaipur taxi our for",

    points: ["₹ 10 per km round trip", "₹ 2000 one way cab"],
  },
  {
    img: book_img,
    title: "Jaipur to Udaipur taxi",
    desc: "Book our Jaipur to Udaipur taxi our for",

    points: ["₹ 10 per km round trip", "₹ 2000 one way cab"],
  },
  {
    img: book_img,
    title: "Jaipur to Udaipur taxi",
    desc: "Book our Jaipur to Udaipur taxi our for",

    points: ["₹ 10 per km round trip", "₹ 2000 one way cab"],
  },
  {
    img: book_img,
    title: "Jaipur to Udaipur taxi",
    desc: "Book our Jaipur to Udaipur taxi our for",

    points: ["₹ 10 per km round trip", "₹ 2000 one way cab"],
  },
];

////////////////////////////

export const checkCards = [
  {
    title: "Jodhpur",
    link: "",
  },
  {
    title: "Jodhpur",
    link: "",
  },
  {
    title: "Jodhpur",
    link: "",
  },
  {
    title: "Jodhpur",
    link: "",
  },
  {
    title: "Jodhpur",
    link: "",
  },
  {
    title: "Jodhpur",
    link: "",
  },
  {
    title: "Jodhpur",
    link: "",
  },
  {
    title: "Jodhpur",
    link: "",
  },
  {
    title: "Jodhpur",
    link: "",
  },

  {
    title: "Jodhpur",
    link: "",
  },
];

///////////////////////

import taxi1 from "../assets/images/taxiimg/taxi1_result.webp";
import taxi2 from "../assets/images/taxiimg/taxi2_result.webp";
import taxi3 from "../assets/images/taxiimg/taxi3_result.webp";
import taxi4 from "../assets/images/taxiimg/taxi4_result.webp";
import taxi5 from "../assets/images/taxiimg/taxi5_result.webp";
import taxi6 from "../assets/images/taxiimg/taxi6_result.webp";

export const taxies = [
  {
    img: taxi1,
    vehicle: "Ertiga",
    rate: "16",
    charges: "300",
    seats: 6,
    transmission: "Manual",
    fuelType: "Petrol",
    ac: true,
  },
  {
    img: taxi2,
    vehicle: "Sedan",
    rate: "11",
    charges: "300",
    seats: 4,
    transmission: "Automatic",
    fuelType: "Diesel",
    ac: true,
  },
  {
    img: taxi3,
    vehicle: "Kia",
    rate: "17",
    charges: "300",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
    ac: true,
  },
  {
    img: taxi4,
    vehicle: "Innova Crysta",
    rate: "19",
    charges: "300",
    seats: 7,
    transmission: "Manual",
    fuelType: "Diesel",
    ac: true,
  },
  {
    img: taxi5,
    vehicle: "Tempo Traveller",
    rate: "25",
    charges: "500",
    seats: 12,
    transmission: "Manual",
    fuelType: "Diesel",
    ac: false,
  },
  {
    img: taxi6,
    vehicle: "Bus Service",
    rate: "25",
    charges: "500",
    seats: "40+",
    transmission: "Manual",
    fuelType: "Diesel",
    ac: true,
  },
];

/////////////////////////

export const homeData = [
  "Abhimanyu Holidays is a premier travel and tour company dedicated to crafting unforgettable travel experiences across both domestic and international destinations. Renowned for its reliability, transparency, and meticulous attention to detail, Abhimanyu Holidays is a trusted partner for travelers seeking seamless and memorable vacations.",

  "With a strong commitment to customer satisfaction, the company offers a comprehensive suite of services, including customized tour packages, flight and hotel bookings, and expertly guided tours. One of the key strengths of Abhimanyu Holidays is its personalized approach to travel planning. Every itinerary is thoughtfully designed to reflect the client’s preferences, budget, and travel aspirations — whether it’s a romantic getaway, a family vacation, or a corporate retreat.",

  "Backed by a team of experienced travel professionals and a robust global network of partners, Abhimanyu Holidays continues to expand its footprint in the travel industry, delivering exceptional service and creating journeys that leave lasting impressions.",
];

//////////////////////////////////
import bannerImg1 from "../assets/images/bannerImgs/banner1.jpg";
import bannerImg2 from "../assets/images/bannerImgs/banner2.jpg";
import bannerImg3 from "../assets/images/bannerImgs/banner3.jpg";
import bannerImg4 from "../assets/images/bannerImgs/banner4.jpg";
import bannerImg5 from "../assets/images/bannerImgs/banner5.jpg";

export const bannerData = [
  bannerImg1,
  bannerImg2,
  bannerImg3,
  bannerImg4,
  bannerImg5,
];

////////////////
