import React from "react";
import styled from "styled-components";
import ProjectRight from "../SingleProjectRight";
import ProjectLeft from "../SingleProjectLeft";
function ProjectPreview() {
  return (
    <Container>
      <Content>
        <br></br>
        <Heading>
          <span>02</span> <span className="Wording">Project Preview</span>
        </Heading>
        <ProjSection>
          <ViewAll>
            <PortfolioButton>
              <p>My Portfolio</p>
              <img src="images/ButtonArrow.svg" />
            </PortfolioButton>
          </ViewAll>
          <Projects>
            <ProjectRight
              description=" 
            My first tutorial based application which facilitated the refinement
            of my skills in Javascript, HTML, CSS and React. Through this
            experience, I was able to significantly bolster my capabilities in
            these essential technologies."
              appType="Web Application"
              mockupImg="images/disneyMockup.svg"
              title="Disney+ Clone"
            />
            <ProjectLeft
              description=" The Netflix clone marked my introductory first with APIs, representing a pivotal tutorial-based project that granted me valuable insights into harnessing API functionality. This undertaking served as an opportunity for me to deepen my understanding of utilizing API documentation."
              appType="Web Application"
              mockupImg="images/netflixMockup.svg"
              title="Netflix Clone"
            />
          </Projects>
        </ProjSection>
      </Content>
    </Container>
  );
}

export default ProjectPreview;

const Container = styled.div`
  background-image: linear-gradient(
    to top,
    #010818,
    #09162b,
    #0c2140,
    #0f2b56,
    #14366d
  );
`;

const Content = styled.div`
  padding: 2vw 0;
`;

const Projects = styled.div`
  flex: 6;
`;

const Heading = styled.p`
  padding-left: 9vw;
  font-size: 2vw;
  color: #ffffff;
  margin-bottom: 2vw;
  .Wording {
    padding-left: 4vw;
  }

  span {
    font-family: "NeuePlak" !important;
  }
`;

const ProjSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const ViewAll = styled.div`
  color: white;
  flex: 1.5;
  border: 1px solid #0e264d;
  border-width: 1px 0px 0px 0px;
  padding: 2.4vw 1.4vw;
`;
const PortfolioButton = styled.div`
  font-family: "NeuePlak";
  background-color: #47c083;
  display: flex;

  padding: 2vw;
  width: 15vw;
  height: 6vw;
  max-height: 80px;
  display: inline-flex;
  font-size: 1vw;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 50px;
  margin: 0 10px;

  img {
    width: 1.2vw;
    padding-bottom: 0.2vw;
    margin: 0.8vw;
  }
`;
