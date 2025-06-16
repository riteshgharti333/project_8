import { FaPhone, FaWhatsapp } from "react-icons/fa";

const FloatingButton = () => {
  const phoneNumber = "+919587084879";
  const whatsappNumber = "+919587084879";
  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <div className="flex flex-col gap-3 items-end pointer-events-auto">
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center justify-center
            w-12 h-12
            bg-[#25D366] hover:bg-[#128C7E]
            text-white
            rounded-[30px]
            shadow-lg
            transition-all
            duration-300
            transform
            hover:scale-105
            active:scale-95
            border-2 border-white
            pointer-events-auto
          "
          aria-label="Contact via WhatsApp"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>

        {/* Call Button */}
        <a
          href={`tel:${phoneNumber}`}
          className="
            flex items-center justify-center
            w-12 h-12
            bg-blue-600 hover:bg-blue-700
            text-white
            rounded-[30px]
            shadow-lg
            transition-all
            duration-300
            transform
            hover:scale-105
            active:scale-95
            border-2 border-white
            pointer-events-auto
          "
          aria-label="Call Us"
        >
          <FaPhone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default FloatingButton;
