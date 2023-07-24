import React from "react";
import styled from "styled-components";

function SingleProjectLeft({ title, description, appType, mockupImg }) {
  return (
    <Container>
      {/* Single Project, Image Right */}
      <Content>
        <Mockup src={mockupImg} alt="Mockup" />

        <Details>
          <div className="title">
            <h1>{title}</h1>
            <img src="images/ProjectArrowGreen.svg" alt="greenArrow" />
          </div>

          <p>{description}</p>
          <p className="appType">{appType}</p>
        </Details>
      </Content>
    </Container>
  );
}

export default SingleProjectLeft;
const Container = styled.div`
  margin: 0px 8vw 0px 0px;
`;

const Content = styled.div`
  color: #ffffff;
  display: flex;
  border: 1px solid #0e264d;
  border-width: 1px 0px 0px 1px;
  box-sizing: border-box;
  padding: 2vw;
  .title {
    display: flex;
    justify-content: space-between;
    margin-right: 10%;

    h1 {
      font-size: 4vw;
    }

    img {
      max-width: 2.5vw;
    }
  }

  p {
    margin-top: 2vw;
    font-family: "NeuePlak";
    font-size: 1.3vw;
  }

  .mockup {
    height: 500%;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: Column;
  margin-left: 6vw;

  .appType {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    font-size: 1vw;
    color: #47c083;
  }
`;
const Mockup = styled.img`
  max-width: 25vw;
`;
