import { useState } from "react";
import Map from "../components/map";

const Locality = () => {
  const [active, setActive] = useState("popular");

  return (
    <div className="my-16 md:my-32 px-4">
      {/* Heading Section */}
      <h1 className="font-semibold text-2xl md:text-[50px] leading-[30px] md:leading-[54px] text-center text-dark">
        Leading <span className="text-dark_blue">Localities</span> To Explore
      </h1>
      <h4 className="font-medium text-sm md:text-[17px] leading-[20px] md:leading-[24px] text-gray text-center mt-2">
        Explore a selection of the most desirable neighborhoods, where vibrant
        communities and <br className="hidden md:block" /> exceptional amenities
        come together to create your perfect living environment.
      </h4>

      {/* Tabs Section */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {["popular", "investment", "affordable", "lifeStyle"].map((tab) => (
          <div
            key={tab}
            onClick={() => setActive(tab)}
            className={`cursor-pointer rounded-full px-4 py-2 font-semibold text-sm md:text-[17px] leading-[20px]
              ${
                active === tab
                  ? "border-purple text-dark_blue border"
                  : "border-transparent text-dark"
              }`}
          >
            {tab === "investment"
              ? "Investment Hotspots"
              : tab === "lifeStyle"
              ? "Great Lifestyle"
              : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
      </div>

      {/* Localities and Map Section */}
      <div className="mt-8 md:mt-[30px] flex flex-col md:flex-row justify-center items-center gap-6 md:gap-[38px]">
        {/* Localities List */}
        <div className="w-full md:w-[600px]">
          {[
            { name: "Mira Road", price: "₹9.6K/sq.ft", change: "1.57%" },
            { name: "Andheri West", price: "₹28.1K/sq.ft", change: "-4.8%" },
            { name: "Chembur", price: "₹20.9K/sq.ft", change: "10.7%" },
            { name: "Borivali West", price: "₹22.3/sq.ft", change: "-1.00%" },
            { name: "Malad West", price: "₹18.8K/sq.ft", change: "4.67%" },
            { name: "Kandivali West", price: "₹20.4K/sq.ft", change: "8.57%" },
          ].map((locality, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mt-6">
                <h2 className="text-lg md:text-[22px] font-bold leading-[26px] text-gray">
                  {locality.name}
                  <span className="font-nunito text-sm md:text-[20px] ml-4">
                    {locality.price}
                  </span>
                </h2>
                <h2
                  className={`${
                    locality.change.startsWith("-")
                      ? "text-red-500"
                      : "text-green"
                  } font-semibold text-sm md:text-[20px] leading-[26px]`}
                >
                  {locality.change}
                </h2>
              </div>
              <div className="border border-light w-full mt-4"></div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="w-full md:w-[500px] h-[300px] md:h-auto">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Locality;
