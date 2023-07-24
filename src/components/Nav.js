import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <Container>
      <Content className={`${show && "NavSolid"}`}>
        {/* Nav left */}
        <HBLogo src="images/HBLogo.svg" alt="Hipolito Bautista Logo" />
        {/* Nav Center */}
        <NavOptions>
          <a href="/Home">Home</a>
          <a href="/Projects">Projects</a>
          <a href="/Resume">Resume</a>
        </NavOptions>

        {/* Nav Right */}
        <Location>Belmopan, Belize</Location>
      </Content>
    </Container>
  );
}

export default Nav;

const Container = styled.div`
  .NavSolid {
    background-color: #0e264d;
    /* transition */
    transition-timing-function: ease-in;
    transition: all 0.8s;
  }
`;
const Content = styled.div`
  @font-face {
    font-family: "NeuePlak";
    src: local("NeuePlak"),
      url("fonts/NeuePlak-WideSemiBold.ttf") format("truetype");
  }

  font-family: "NeuePlak";
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: auto;
  padding: 1.5%;
  font-size: 1.2vw;
  position: fixed;
  left: 0;
  right: 0;
`;
const Location = styled.p``;

const NavOptions = styled.div`
  a {
    all: unset;
    padding: 0px 1vw;
    color: white; /* Change the color to your desired color */
  }
`;

const HBLogo = styled.img`
  height: 1.2vw;
`;
