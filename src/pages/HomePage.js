import React from "react";
import Hero from "../components/Hero";

function HomePage(props) {
  return (
    <div>
      <Hero {...props} />
    </div>
  );
}

export default HomePage;
