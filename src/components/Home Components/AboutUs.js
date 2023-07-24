import React from "react";
import styled from "styled-components";
function AboutUs() {
  return (
    <Container>
      <Content>
        <br></br>
        <Heading>
          <span>01</span> <span className="Wording">Introduction</span>
        </Heading>
        <Intro>
          <h1>
            Hello World! <span className="green title">Meet Hipolito</span>
          </h1>
          <p>
            I am Hipolito Bautista, a full stack software developer based in
            Belmopan, Belize. With a solid foundation in software development, I
            earned my Associate's Degree from the University of Belize.
            Currently, I am pursuing my Bachelor's degree, further honing my
            skills and expanding my knowledge in the field. Equipped with a
            comprehensive understanding of both front-end and back-end
            development, I possess the expertise to develop user-centric
            software solutions for you. Passionate about using technology to
            drive meaningful change, I am committed to delivering high-quality
            products that exceed client expectations. I firmly believe that the
            pursuit of knowledge is a lifelong journey, and I actively seek
            opportunities to expand my skills and expertise.
            <span className="green">
              Let's collaborate and bring your software ideas to life.
            </span>
          </p>
        </Intro>
      </Content>
    </Container>
  );
}

export default AboutUs;

const Container = styled.div`
  background: url("images/about-us-background.svg") no-repeat center center
    fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  object-fit: cover;
  background-color: black;
  color: #ffffff;
`;
const Content = styled.div`
  padding-top: 6vw;
  p,
  span {
    font-family: "NeuePlak";
  }

  .green {
    color: #47c083;
  }

  .title {
    font-family: ;
  }
`;

const Intro = styled.div`
  padding: 8vw 14vw;

  h1 {
    font-size: 3vw;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1vw;
  }
`;

const Heading = styled.p`
  padding-left: 9vw;
  font-size: 2vw;

  .Wording {
    padding-left: 4vw;
  }
`;
