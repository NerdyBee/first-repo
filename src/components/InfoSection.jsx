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
  padding: 2rem calc((100vw - 1300px) / 2);
  margin: 2rem auto 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  grid-template-rows: 600px;

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
  //   order: $/{({reverse}) => (reverse ? '2' : '1')};


  h1 {
    color: #008c94;
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
`;

const Featured = styled.ul`
  margin: 2rem 0.5rem;
  list-style: square outside none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  padding: 1rem 1rem;
  width: 100%;
`;

const FeatureList = styled.li`
  display: flex;
  flex-direction: row;
  line-height: 2.5rem;
  color: #ff893b;
`;

const ColumnRight = styled.div`
  padding: 2rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  //   order: $/{({reverse}) => (reverse ? '1' : '2')};

  @media screen and (max-width: 768px) {
    //   order: $/{({reverse}) => (reverse ? '2' : '1')};
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
          
          <Featured>
            <FeatureList>Accommodations</FeatureList>
            <FeatureList>Restaurants</FeatureList>
            <FeatureList>Laundry</FeatureList>
            <FeatureList>Fitness Center</FeatureList>
            <FeatureList>Swimming Pool</FeatureList>
            <FeatureList>Hall</FeatureList>
            <FeatureList>Parking</FeatureList>
            <FeatureList>Free WIFI</FeatureList>
            <FeatureList>Public Computer</FeatureList>
            <FeatureList>Bar & Lounge</FeatureList>
            <FeatureList>Spa & Wellness</FeatureList>
            <FeatureList>Car Shuttle</FeatureList>
          </Featured>
        </ColumnLeft>
        <ColumnRight>
          <img src={roomImg} alt="" />
        </ColumnRight>
      </Container>
    </InfoDiv>
  );
};

export default InfoSection;
