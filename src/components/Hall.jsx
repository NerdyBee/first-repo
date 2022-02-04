import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import roomImg from "../images/banquet-1.jpg";

const InfoDiv = styled.section`
  width: 100%;
  height: 100%;
  padding: 0rem 1rem;
  margin: 1rem auto;

  @media screen and (max-width: 480px) {
    width: 95%;
  }
`;

const Container = styled.div`
  width: 90%;
  max-width: 80vw;
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: aqua; */

  @media screen and (max-width: 760px) {
    flex-direction: column;
    width: 100%;
    margin: 0 20px;
  }
`;

const Left = styled.div`
  width: 60%;
  height: 600px;
  background: url(${roomImg}) no-repeat center / cover;
  border-radius: 8px;

  @media screen and (max-width: 760px) {
    width: 100%;
    height: 400px;
  }
`;
const Right = styled.div`
  width: 60%;
  min-height: 400px;
  background-color: #303137;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-radius: 8px;
  color: white;
  margin-left: -200px;

  h1 {
    font-size: 2.5rem;
    font-weight: lighter;
  }

  p {
    margin: 20px 0;
    font-weight: 500;
    line-height: 25px;
  }

  @media screen and (max-width: 760px) {
    width: 90%;
    margin: 0;
    margin-top: -120px;
  }
`;

const Content = styled.div``

const Hall = () => {
  return (
    <InfoDiv>
      <Container>
        <Left></Left>
        <Right>
          <Content>
            <h1>Banquet & Meeting Hall</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              mollitia cum suscipit voluptate quisquam sint! Amet dolor
              cupiditate, atque animi a vitae illum nihil ipsa!
            </p>
          <Button to={`/halls`} primary="true">
            Read More
          </Button>
          </Content>
        </Right>
      </Container>
    </InfoDiv>
  );
};

export default Hall;
