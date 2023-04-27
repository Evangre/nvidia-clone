import React from "react";
import { BsFillGearFill } from "react-icons/bs";

const Recommended = () => {
  return (
    <div className="Recommended bg-gray-800">
      <div className="container mx-auto p-12 h-96">
        <div className="text-white font-open-sans mx-16 text-3xl flex gap-4">
          Recommended <BsFillGearFill size={20} />
        </div>
      </div>
    </div>
  );
};

export default Recommended;
