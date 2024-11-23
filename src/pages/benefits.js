import { useState } from "react";
import benefit1 from "../assets/benefit1.png";
import benefit2 from "../assets/benefit2.png";
import benefit3 from "../assets/benefit3.png";

const Benefits = () => {
  const [active, setActive] = useState("renters");

  return (
    <>
      {/* Heading Section */}
      <div className="mt-16 md:mt-40 px-4">
        <h1 className="text-center text-2xl md:text-[50px] font-semibold text-dark leading-[35px] md:leading-[55px]">
          Discover The <span className="text-purple">Benefits</span> Of <br />
          Renting With Us
        </h1>
        <h4 className="text-gray font-medium text-sm md:text-[17px] leading-[20px] md:leading-[24px] text-center mt-2">
          Beautifully curated rental homes that perfectly match your style and
          needs, making <br className="hidden md:block" /> your search for the
          ideal living space effortless and enjoyable.
        </h4>
      </div>

      {/* Tabs Section */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {["renters", "landlords", "agents"].map((tab) => (
          <div
            key={tab}
            onClick={() => setActive(tab)}
            className={`cursor-pointer rounded-full px-4 py-2 font-semibold text-sm md:text-[17px] leading-[20px] ${
              active === tab
                ? "border-purple text-dark_blue border"
                : "border-transparent text-dark"
            }`}
          >
            {tab === "landlords" ? "Landlords/Property Managers" : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-[24px] mt-8 md:mt-[31px] px-4">
        {/* Card 1 */}
        <div className="border border-light_gray rounded-xl w-full md:w-[338px] flex flex-col items-center">
          <img
            className="w-full md:w-[238px] h-auto md:h-[210px] my-6 md:my-[40px]"
            src={benefit1}
            alt="benefit1"
          />
          <h3 className="font-bold text-lg md:text-[23px] leading-[27px] text-center mb-6 md:mb-[30px]">
            Match with your ideal roommate
          </h3>
        </div>

        {/* Card 2 */}
        <div className="border border-light_gray rounded-xl w-full md:w-[338px] flex flex-col items-center">
          <img
            className="w-full md:w-[238px] h-auto md:h-[210px] my-6 md:my-[40px]"
            src={benefit2}
            alt="benefit2"
          />
          <h3 className="font-bold text-lg md:text-[23px] leading-[27px] text-center mb-6 md:mb-[30px]">
            Seamless <br className="hidden md:block" /> Communication
          </h3>
        </div>

        {/* Card 3 */}
        <div className="border border-light_gray rounded-xl w-full md:w-[338px] flex flex-col items-center">
          <img
            className="w-full md:w-[238px] h-auto md:h-[210px] my-6 md:my-[40px]"
            src={benefit3}
            alt="benefit3"
          />
          <h3 className="font-bold text-lg md:text-[23px] leading-[27px] text-center mb-6 md:mb-[30px]">
            Discover Activities <br className="hidden md:block" /> Around You
          </h3>
        </div>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center gap-2 mt-8 md:mt-[31px]">
        <div className="w-[20px] md:w-[30px] h-[8px] md:h-[11px] rounded-full bg-dark_blue"></div>
        <div className="w-[8px] md:w-[11px] h-[8px] md:h-[11px] rounded-full bg-light"></div>
        <div className="w-[8px] md:w-[11px] h-[8px] md:h-[11px] rounded-full bg-light"></div>
      </div>
    </>
  );
};

export default Benefits;
