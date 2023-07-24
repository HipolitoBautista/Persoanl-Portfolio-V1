import React from "react";
import syled from "styled-components";
import Header from "./Home Components/HomeHeader";
import AboutUs from "./Home Components/AboutUs";
import ProjectPreview from "./Home Components/ProjectPreview";
function Home() {
  return (
    <div>
      <Header />
      <AboutUs />
      <ProjectPreview />
    </div>
  );
}

export default Home;
