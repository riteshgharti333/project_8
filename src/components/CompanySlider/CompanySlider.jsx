import { useEffect, useRef } from "react";

const cardImg =
  "https://play-lh.googleusercontent.com/fs4b_PJqDHXdUyLeP61GiK4jAkFNyz3ffpzIBpvXCV4B4DkcPKLniYNvQxOmKzHKVKk=w3840-h2160-rw";

const CompanySlider = () => {
  const sliderRef = useRef(null);
  const companies = Array(10).fill(cardImg); // Create multiple items for seamless looping

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrame;
    let speed = 1; // Pixels per frame
    let position = 0;
    const sliderWidth = slider.scrollWidth / 2;

    const animate = () => {
      position -= speed;
      if (position <= -sliderWidth) {
        position = 0;
      }
      slider.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => (speed = 0);
    const handleMouseLeave = () => (speed = 1);
    slider.addEventListener("mouseenter", handleMouseEnter);
    slider.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      slider.removeEventListener("mouseenter", handleMouseEnter);
      slider.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold tracking-widest text-yellow-600 uppercase">
          Abhimanyu Holidays
        </span>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-[#9D4C2C]">
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Companies{" "}
          </span>
          that show trust
        </h1>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r sm:from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l sm:from-white to-transparent z-10"></div>

        <div ref={sliderRef} className="flex gap-10 w-max rounded-lg pb-5">
          {[...companies, ...companies].map((img, index) => (
            <div
              key={index}
              className="w-60 sm:w-100  overflow-hidden  hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-lg"
            >
              <img
                src={cardImg}
                alt={`Client company ${index + 1}`}
                className="w-full h-full object-cover  bg-white rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanySlider;
