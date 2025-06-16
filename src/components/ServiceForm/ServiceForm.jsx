import { useRef } from "react";
import {
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaHotel,
  FaPaperPlane,
  FaChild,
  FaUsers,
} from "react-icons/fa";
import { toast } from "react-toastify";

const fields = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "John Doe",
    icon: <FaUser className="h-5 w-5 text-amber-500" />,
    required: true,
  },
  {
    name: "contactNumber",
    label: "Contact Number",
    type: "tel",
    placeholder: "+91 9876543210",
    icon: <FaPhone className="h-5 w-5 text-amber-500" />,
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "your@email.com",
    required: true,
  },
  {
    name: "country",
    label: "Country",
    type: "text",
    placeholder: "Your Country",
    required: true,
  },
  {
    name: "pickupLocation",
    label: "Pickup Location",
    type: "text",
    placeholder: "Hotel/Airport/Address",
    icon: <FaMapMarkerAlt className="h-5 w-5 text-amber-500" />,
    required: true,
  },
  {
    name: "pickupTime",
    label: "Pickup Time",
    type: "time",
    required: true,
  },
  {
    name: "dropLocation",
    label: "Drop Location",
    type: "text",
    placeholder: "Hotel/Airport/Address",
    icon: <FaMapMarkerAlt className="h-5 w-5 text-amber-500" />,
    required: true,
  },
  {
    name: "dropTime",
    label: "Drop Time",
    type: "time",
    required: true,
  },

  {
    name: "hotelPreference",
    label: "Hotel Preference",
    type: "text",
    placeholder: "Hotel name or preference",
    icon: <FaHotel className="h-5 w-5 text-amber-500" />,
  },
];

const ServiceForm = () => {
  const formRef = useRef();
  const handleSubmit = () => {
    toast.success("Thank you! Your message has been sent.");
  };

  return (
    <div>
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-2xl font-extrabold text-brand-brown sm:text-4xl">
          <span>Get In </span>
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent mt-2">
            Touch
          </span>
        </h2>
      </div>

      <form
        ref={formRef}
        action="https://formsubmit.co/riteshgharti333@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-6 animate-fade-in-up border border-[#ddd] p-3 rounded-2xl bg-white shadow-2xl"
      >
        {/* Hidden Inputs */}
        <input type="hidden" name="_template" value="table" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {fields.map((field) => (
            <div className="relative" key={field.name}>
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {field.label}
              </label>
              <div className="relative">
                {field.icon && (
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {field.icon}
                  </div>
                )}
                {field.type === "select" ? (
                  <select
                    id={field.name}
                    name={field.name}
                    required={field.required}
                    className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 border bg-white appearance-none"
                  >
                    {field.options.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    min={field.min}
                    required={field.required}
                    className={`${
                      field.icon ? "pl-10" : "pl-4"
                    } block w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 border`}
                    placeholder={field.placeholder}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Requirements Textarea */}
        <div>
          <label
            htmlFor="requirements"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your Requirements / Query
          </label>
          <textarea
            id="requirements"
            name="requirements"
            rows="4"
            className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3 border px-4"
            placeholder="Any special requirements or questions..."
          ></textarea>
        </div>

        {/* Submit Button */}
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

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
        }
      `}</style>
    </div>
  );
};

export default ServiceForm;
