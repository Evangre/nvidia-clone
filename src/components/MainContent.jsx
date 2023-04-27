import React from "react";

const MainContent = () => {
  return (
    <div className="main-content bg-gray-200">
      {/* Add your content here */}
      <div className="container mx-auto p-12">
        <h1 className="text-5xl font-semibold m-16 font-open-sans">
          The leader in artificial intelligence
        </h1>
        <p className="text-lg mt-10 ml-16 font-nunito">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, cum
          exercitationem omnis rerum, doloremque eius distinctio maxime suscipit
          molestias odio pariatur deleniti nisi esse placeat reiciendis
          accusantium? Rerum, alias praesentium. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Atque, cum maiores? Maiores, libero nemo
          suscipit quis eveniet ex sunt pariatur, sapiente eaque minus id
          accusamus perferendis ad impedit soluta aperiam.
        </p>
        <button className="mx-16 mt-8 bg-green-500 hover:bg-green-800 rounded p-3 text-white font-open-sans">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default MainContent;
