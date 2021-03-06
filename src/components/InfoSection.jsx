import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import roomImg from '../images/vertical-room.jpg'

const InfoDiv = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem 0rem;
  margin: 1rem auto;

  @media screen and (max-width: 480px) {
    width: 95%;
  }
`;


const Container = styled.div`
  padding: 2rem calc((100vw - 1100px) / 2);
  margin: 2rem auto 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  grid-template-rows: 600px;

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    padding: 2rem 0 0;
    margin: 0 auto;
    // grid-template-rows: 500px;
  }
`;


const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  //   order: $/{({reverse}) => (reverse ? '2' : '1')};

  h1 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    text-align: center;
  }

  p {
    margin-bottom: 2rem;
    text-align: center;
  }

  h4 {
    color: #94410a;
    margin-top: 2rem;
  }

  ul {
    margin: 0.5rem auto;
    line-height: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  li {
    text-decoration: none;
    color: var(--dark-bg-txt);
    list-style: square;
    margin: 0 1.5rem;
  }

  @media screen and (max-width: 480px) {
    li {
      margin: 3px;
    }
  }
`;

const ColumnRight = styled.div`
  padding: 2rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 90%;
  }

  img {
      width: 100%;
      height: 100%;
      object-fit: cover
  }
`;


const InfoSection = () => {
  return (
    <InfoDiv>
      <Container>
        <ColumnLeft>
          <h1>Welcome to Luxury Hotel</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            laboriosam accusantium, minima illo cum hic magnam repudiandae fugit
            ab est nisi in saepe doloribus nostrum, amet animi dolorum
            voluptates fugiat.
          </p>
          <Button to="/home" primary="false">
            Book Now
          </Button>
          
          <ul>
            <li>Accommodations</li>
            <li>Restaurants</li>
            <li>Laundry</li>
            <li>Gym</li>
            <li>Swimming Pool</li>
            <li>Hall</li>
            <li>Parking</li>
            <li>Free WIFI</li>
            <li>Public Computer</li>
            <li>Bar & Lounge</li>
            <li>Spa & Wellness</li>
            <li>Car Shuttle</li>
          </ul>
        </ColumnLeft>
        <ColumnRight>
          <img src={roomImg} alt="" />
        </ColumnRight>
      </Container>
    </InfoDiv>
  );
};

export default InfoSection;
