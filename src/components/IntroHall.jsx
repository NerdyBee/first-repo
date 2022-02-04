import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import roomImg from '../images/banquet-1.jpg'

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
  padding: 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  color: var(--dark-bg-txt);
  background: var(--dark-bg);

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;


const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: revert;

  p {
    margin-bottom: 2rem;
    text-align: center;
  }
  h4 {
    color: #94410a;
    margin-top: 2rem;
  }
`;

const ColumnRight = styled.div`
  padding: 3rem;
  display: flex;

  @media screen and (max-width: 768px) {
    // order: $/{(props) => (props.reverse ? "2" : "1")};
    width: 90%;
    padding: 1rem;
    margin: 0 auto;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const IntroHall = ({reverse}) => {
  return (
    <InfoDiv>
      <h1 style={{ color: "black", textAlign: "center", marginBottom: "1rem", fontSize: "2rem" }}>Banquet & Meeting Hall</h1>
      <Container>
        <ColumnRight>
          <img src={roomImg} alt="" />
        </ColumnRight>
        <ColumnLeft>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            laboriosam accusantium, minima illo cum hic magnam repudiandae fugit
            ab est nisi in saepe doloribus nostrum, amet animi dolorum
            voluptates fugiat.
          </p>
          <Button to="/home">Book Now</Button>
        </ColumnLeft>
      </Container>
    </InfoDiv>
  );
};

export default IntroHall;
