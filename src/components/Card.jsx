import React from "react";

const Card = ({ imageUrl, title, content }) => {
  return (
    <div className="bg-white rounded shadow p-4 m-4">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
