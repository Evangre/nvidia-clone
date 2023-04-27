import React from "react";
import { BsFillGearFill } from "react-icons/bs";
import Card from "./Card";

const Recommended = () => {
  return (
    <div className="Recommended bg-gray-800">
      <div className="container mx-auto py-12">
        <div className="text-white font-poppins mx-16 text-2xl flex gap-4">
          Recommended <BsFillGearFill size={20} />
        </div>
        <div className="flex flex-wrap justify-center pt-5">
          <Card
            imageUrl="https://example.com/image1.jpg"
            title="Card 1"
            content="Card content goes here"
          />
          <Card
            imageUrl="https://example.com/image2.jpg"
            title="Card 2"
            content="Card content goes here"
          />
          <Card
            imageUrl="https://example.com/image3.jpg"
            title="Card 3"
            content="Card content goes here"
          />
          <Card
            imageUrl="https://example.com/image4.jpg"
            title="Card 4"
            content="Card content goes here"
          />
        </div>
      </div>
    </div>
  );
};

export default Recommended;
