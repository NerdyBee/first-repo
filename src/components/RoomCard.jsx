import React from 'react';
import styled from "styled-components";
import { Button } from './Button';
import Img1 from '../images/room-1.jpeg'

const Card = styled.div`
  display: grid;
  grid-template-columns: 400px;
  grid-template-rows: 210px 250px 20px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: #1d1d1d;
  color: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  font-family: roboto;
  text-align: justify;
  cursor: pointer;
  margin: 30px;
  transform-style: preserve-3d;
  transform: perspective(1000px);
`;
const CardImage = styled.div`
  grid-area: image;
  background: linear-gradient(#fff0 0%, #fff0 70%, #1d1d1d 100%),
    url(${Img1});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
`;
const CardText = styled.div`
  grid-area: text;
  margin: 25px;
  transform: translateZ(30px);
`;
const Price = styled.span`
  color: rgb(255, 7, 110);
  font-size: 13px;
`;
const Title = styled.h2`
  margin-top: 0px;
  font-size: 28px;
`;
const BriefInfo = styled.p`
  color: grey;
  font-size: 14px;
  font-weight: 300;
`;


const RoomCard = () => {
  return (
    <>
      <Card>
        <CardImage></CardImage>
        <CardText>
          <Price>#45,000</Price>
          <Title>Double Delux</Title>
          <BriefInfo></BriefInfo>
          {/* <Button to={`/rooms`} primary="true">
            Feature
          </Button> */}
        </CardText>
      </Card>
      <Card>
        <CardImage></CardImage>
        <CardText>
          <Price>#45,000</Price>
          <Title>Double Delux</Title>
          <BriefInfo></BriefInfo>
          {/* <Button to={`/rooms`} primary="true">
            Feature
          </Button> */}
        </CardText>
      </Card>
    </>
  );
};

export default RoomCard;
