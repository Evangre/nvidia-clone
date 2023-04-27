import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Recommended from "./components/Recommended";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainContent />
      <Recommended />
    </div>
  );
};

export default App;
