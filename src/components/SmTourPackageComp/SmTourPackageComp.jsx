const SmTourPackageComp = ({ smPackageData }) => {
  const { stContent1, stContent2, stContentDay } = smPackageData;
  return (
    <div>
      <div className="flex flex-col gap-10">
        <div>
          <h2 className="text-2xl font-bold text-brand-brown">
            {stContent1.title}
          </h2>
          <div className="flex gap-3 mt-4 flex-wrap">
            <span>
              <span className="text-yellow-600">Duration</span> :
              <span className="font-bold text-gray-600">
                {" "}
                {stContent1.duration}
              </span>
            </span>

            <span>
              <span className="text-yellow-600">Destination</span> :
              <span className="font-bold text-gray-600">
                {" "}
                {stContent1.destination}
              </span>
            </span>
          </div>

          <p className="mt-5 text-gray-600">{stContent1.desc}</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-brand-brown">
            {stContent2.title}
          </h2>
          {stContent2.lists.map((item, index) => (
            <ul className="list-disc pl-5 marker:text-yellow-500">
              <li className="mt-3 text-gray-600" key={index}>
                {item}
              </li>
            </ul>
          ))}
        </div>

        <div className="">
          <h2 className="text-2xl font-bold text-brand-brown mb-8">
            {stContentDay.title}
          </h2>

          <div className="space-y-8">
            {stContentDay.lists.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              >
                {/* Day Header */}
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4">
                  <h3 className="text-xl font-bold text-white flex max-[480px]:flex-col  max-[480px]:items-start  max-[480px]:gap-2  items-center">
                    <span className="bg-white text-amber-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                      {index + 1}
                    </span>
                    Day {index + 1}: {item.title}
                  </h3>
                </div>

                {/* Day Content */}
                <div className="p-2 sm:p-6 flex flex-col gap-3">
                  {item.desc.map((item, index) => (
                    <p className="text-gray-700 " key={index}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmTourPackageComp;
