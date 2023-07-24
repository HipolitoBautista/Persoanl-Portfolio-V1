import React from "react";
import styled from "styled-components";
import Nav from "../Nav";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function HomeHeader() {
  return (
    <Container>
      <Nav />
      <Content>
        <TagWrapper>
          <h1>Turning Ideas Into</h1>
          <PortfolioButton>
            <p>My Portfolio</p>
            <img src="images/ButtonArrow.svg" />
          </PortfolioButton>
        </TagWrapper>

        <TagWrapper>
          <ConnectButton>
            <p>Connect With Me</p>
            <img src="images/ButtonArrow.svg" />
          </ConnectButton>
          <h1>Digital Solutions</h1>
        </TagWrapper>
      </Content>
    </Container>
  );
}

export default HomeHeader;

const Container = styled.div`
  background-image: linear-gradient(
    to right bottom,
    #010818,
    #09162b,
    #0c2140,
    #0f2b56,
    #14366d
  );

  justify-content: center;
  color: #ffffff;
`;

const Content = styled.div`
  padding: 15vw 0;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 15%;
  margin: 5px;

  h1 {
    display: inline-flex;
    font-size: 5vw;
  }
`;

const PortfolioButton = styled.div`
  font-family: "NeuePlak";
  background-color: #47c083;
  display: flex;

  padding: 15px;
  width: auto;
  height: 10vw;
  max-height: 80px;
  display: inline-flex;
  font-size: 2vw;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 0 10px;

  img {
    width: 1.4vw;
    padding-bottom: 0.2vw;
    margin: 0.8vw;
  }
`;

const ConnectButton = styled.div`
  font-family: "NeuePlak";
  border: 1px solid #47c083;
  display: flex;
  padding: 15px;
  width: auto;
  height: 10vw;
  max-height: 80px;
  display: inline-flex;
  font-size: 2vw;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 0 10px;

  img {
    width: 1.4vw;
    padding-bottom: 0.2vw;
    margin: 0.8vw;
  }
`;
