import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import Home1 from "../assets/home1.png";
import Home2 from "../assets/home2.png";
import Home3 from "../assets/home3.png";
import Star from "../assets/star.png";
import Heart from "../assets/heart.png";

const Home = () => {
  const [selectedCity, setSelectedCity] = useState("Goa");

  return (
    <>
      {/* Header Section */}
      <div className="px-4 md:px-8">
        <h1 className="text-dark text-3xl md:text-5xl font-semibold text-center mt-12 md:mt-24">
          Find Your Perfect <span className="text-purple">Rental Home</span>
        </h1>
        <h4 className="text-center mt-2 font-medium text-sm md:text-base">
          Beautifully curated rental homes that perfectly match your style and
          needs, making your <br /> search for the ideal living space effortless
          and enjoyable.
        </h4>
      </div>

      {/* City Selection and Search Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center mt-8 md:mt-12 gap-4 px-4">
        <div className="flex flex-wrap justify-center gap-2">
          {[
            "Goa",
            "Mumbai",
            "Bangalore",
            "Delhi",
            "Chennai",
            "Hyderabad",
            "Pune",
          ].map((city) => (
            <div
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`cursor-pointer rounded-full px-5 py-2 h-10 font-semibold flex justify-center items-center ${
                selectedCity === city
                  ? "border-dark_blue text-dark_blue border-2"
                  : "text-dark"
              }`}
            >
              {city}
            </div>
          ))}
        </div>

        {/* Search Input */}
        <div className="search flex items-center relative w-full lg:w-auto max-w-lg">
          <input
            type="text"
            placeholder="Find your city"
            className="rounded-full outline-none p-4 pr-12 w-full"
          />
          <div className="magnify-icon absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            <IoIosSearch className="text-2xl" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center px-12 mt-8">
        {/* CONTENT 1 */}
        <div className="content-1 relative">
          <img className="rounded-2xl w-full" src={Home1} alt="home1" />
          <img
            className="absolute top-4 right-4 w-6 h-5 cursor-pointer"
            src={Heart}
            alt="heart"
          />
          <div className="flex justify-between mt-4">
            <h3 className="font-bold text-lg md:text-xl">Flat In North Goa</h3>
            <div className="flex items-center">
              <img src={Star} alt="star" />
              <p className="font-nunito text-base md:text-lg">4.94(31)</p>
            </div>
          </div>
          <p className="font-semibold text-gray mt-1">
            Goan Studio Near Vagator Beach
          </p>
          <p className="font-semibold text-gray">2 Beds</p>
          <div className="flex gap-2 font-nunito">
            <p className="line-through text-gray">₹48,186</p>
            <p className="font-bold">₹43,788 month</p>
          </div>
        </div>

        {/* CONTENT 2 */}
        <div className="content-2 relative">
          <img className="rounded-2xl w-full" src={Home2} alt="home2" />
          <img
            className="absolute top-4 right-4 w-6 h-5 cursor-pointer"
            src={Heart}
            alt="heart"
          />
          <div className="flex justify-between mt-4">
            <h3 className="font-bold text-lg md:text-xl">Flat In Arambol</h3>
            <div className="flex items-center">
              <img src={Star} alt="star" />
              <p className="font-nunito text-base md:text-lg">4.94(31)</p>
            </div>
          </div>
          <p className="font-semibold text-gray mt-1">Studio apartment</p>
          <p className="font-semibold text-gray">1 Bed</p>
          <div className="flex gap-2 font-nunito">
            <p className="line-through text-gray">₹51,592</p>
            <p className="font-bold">₹43,788 month</p>
          </div>
        </div>

        {/* CONTENT 3 */}
        <div className="content-3 relative">
          <img
            className="rounded-2xl w-full h-[300px]"
            src={Home3}
            alt="home3"
          />
          <img
            className="absolute top-4 right-4 w-6 h-5 cursor-pointer"
            src={Heart}
            alt="heart"
          />
          <div className="flex justify-between mt-4">
            <h3 className="font-bold text-lg md:text-xl">
              Flat In Stay In Siolim
            </h3>
            <div className="flex items-center">
              <img src={Star} alt="star" />
              <p className="font-nunito text-base md:text-lg">4.94(31)</p>
            </div>
          </div>
          <p className="font-semibold text-gray mt-1">Jenny's home</p>
          <p className="font-semibold text-gray">2 Beds</p>
          <div className="flex gap-2 font-nunito">
            <p className="line-through text-gray">₹35,976</p>
            <p className="font-bold">₹26,968 month</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[32px]">
        <button className="w-[133px] h-[45px] bg-dark_blue text-white cursor-pointer font-semibold text-[15px] leading-[17px] rounded-full">
          View All
        </button>
      </div>
    </>
  );
};

export default Home;
