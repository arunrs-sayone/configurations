import React, { useState } from "react";

const Home: React.FC = () => {
  const [state, setstate] = useState("");

  const handleclick = () => {
    const name = "string";
    setstate(name);
  };

  return <div onClick={handleclick}>Home</div>;
};

export default Home;
