import React from "react";
import NvidiaLogo from "./NvidiaLogo";
import AccountButton from "./AccountButton";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white p-5">
        <div className="container mx-auto flex justify-between items-center">
          <div className="ml-32">
            <NvidiaLogo width="80" height="auto" />
          </div>
          <div className="flex space-x-4">
            <div className="p-4 font-semibold font-open-sans text-gray-700 cursor-pointer">
              Products
            </div>
            <div className="p-4 font-semibold font-open-sans text-gray-700 cursor-pointer">
              Solutions
            </div>
            <div className="p-4 font-semibold font-open-sans text-gray-700 cursor-pointer">
              Industries
            </div>
            <div className="p-4 font-semibold font-open-sans text-gray-700 cursor-pointer">
              For You
            </div>
            <div className="p-4 cursor-pointer">
              <AccountButton />
            </div>
          </div>
        </div>

        {/* <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
