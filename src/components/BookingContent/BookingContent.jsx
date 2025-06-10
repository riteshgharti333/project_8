import EnquiryForm from "../EnquiryForm/EnquiryForm";

const BookingContent = ({ hotelData }) => {
  return (
    <div className="sm:max-w-[750px] lg:max-w-[1100px] m-auto flex flex-col gap-20 mt-10 px-2">
      <div className="">
        <h2 className="text-2xl font-bold text-brand-brown">
          {hotelData.title}
        </h2>

        {hotelData.desc.map((item, index) => (
          <p className="mt-5 text-gray-600" key={index}>
            {item}
          </p>
        ))}

        <h2 className="text-2xl mt-5 font-bold text-brand-brown">
          {hotelData.listTitle}
        </h2>

        <ul className="ml-5 list-disc marker:text-yellow-500">
          {hotelData.lists.map((item, index) => (
            <li className="mt-3 text-gray-600" key={index}>
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-5 text-gray-600">{hotelData.smDesc}</p>
      </div>
      <EnquiryForm />
    </div>
  );
};

export default BookingContent;
