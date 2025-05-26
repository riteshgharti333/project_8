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
    dropdown: [{ name: "Jaipur Tour Package", link: "jaipur-tour-package" }],
  },
  // {
  //   title: "Tempo Traveller",
  //   link: "/",
  // },
  {
    title: "Our Tours",

    icon: IoMdArrowDropdown,
    specific: "tour",
    dropdown: [
      { name: "Jaipur Sightseeing Tour", link: "jaipur-sightseeing-tour" },
    ],
  },
  {
    title: "Car Rental",
    icon: IoMdArrowDropdown,
    specific: "rental",
    dropdown: [
      {
        name: "Car Rental Service in Jaipur",
        link: "car-rental-service-in-jaipur",
      },
    ],
  },
  {
    title: "Tempo Traveller",

    icon: IoMdArrowDropdown,
    specific: "tempo",
    dropdown: [
      {
        name: "Tempo Traveller in Jaipur",
        link: "tempo-traveller-in-jaipur",
      },
    ],
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
];

/////////////////////////

export const homeData = [
  "Bhimanyou Holidays is a premier travel and tour company that specializes in curating unforgettable travel experiences for both domestic and international destinations. With a focus on customer satisfaction, the company offers a range of services including customized tour packages, flight and hotel bookings, and guided tours. Bhimanyou Holidays has earned a reputation for reliability, transparency, and attention to detail, making it a trusted partner for travelers seeking hassle-free vacations.",

  "One of the standout features of Bhimanyou Holidays is its personalized approach to travel planning. Each itinerary is crafted to suit the preferences, budget, and travel goals of the client, ensuring a unique and enriching experience. Whether it’s a romantic getaway, a family trip, or a corporate retreat, the company ensures that every aspect — from transportation to accommodation — is handled with precision and care.",

  "With a team of experienced travel professionals and a strong network of partners across the globe, Bhimanyou Holidays continues to grow as a leading name in the travel industry.",
];
