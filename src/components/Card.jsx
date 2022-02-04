import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const CardDiv = styled.section`
  display: flex;
  gap: 1.5rem;
  min-width: 380px;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media screen and (max-width: 780px) {
    width: 95%;
    flex-direction: column;
  }
`;

// const Container = styled.div`
//   padding: 1rem calc((100vw - 1300px) / 2);
//   display: grid;
//   gap: 3rem;
//   grid-template-columns: repeat(4, 1fr);

//   @media screen and (max-width: 760px) {
//     grid-template-columns: 1fr;
//   }
// `;

const Title = styled.h2`
  position: relative;
  width: max-content;
  margin: 1rem 0;

  :after {
    content: "";
    position: absolute;
    height: 4px;
    left: calc(var(--padding) * -1);
    bottom: 0;
    margin-bottom: -0.29rem;
    width: calc(100% + var(--padding));
    background: #84f62c;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 1500ms ease-in-out;
  }
`;

const CardContent = styled.div`
  --padding: 1.5rem;
  padding: var(--padding);
  background: linear-gradient(
    hsl(0 0% 0% / 0),
    hsl(20 0% 0% / 0.3) 20%,
    hsl(0 0% 0% / 1)
  );

  transform: translateY(68%);
  transition: transform 500ms ease;

  & > *:not(${Title}) {
    opacity: 0;
    transition: opacity 500ms linear;
  }
`;

const Card = styled.div`
  color: #fff;
  background-image: url(${(props) => props.img});
  background-size: cover;
  padding: 10rem 0 0;
  max-width: 50ch;
  border-radius: 0.5rem;
  overflow: hidden;

  transition: transform 500ms ease;

  :hover {
    transform: scale(1.05);
  }

  &:hover ${CardContent} {
    transform: translateY(0);
  }

  &:hover ${CardContent} > *:not(${Title}) {
    opacity: 1;
  }

  &:hover ${Title}:after {
    transform: scaleX(1);
  }
`;

const PriceTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  color: azure;
  padding: 0.3rem 0.6rem 0.5rem;
  border-bottom-right-radius: 1rem;
  font-size: 1rem;
  text-align: center;
  transition: 0.4s linear;
  -webkit-transition: 0.4s linear;
  -moz-transition: 0.4s linear;
  -ms-transition: 0.4s linear;
  -o-transition: 0.4s linear;

  h6 {
    margin-bottom: 0;
    font-size: 0.9rem;
    font-weight: 300;
    letter-spacing: .25rem;
  }
`;

const BriefInfo = styled.p`
    margin: .5rem 0;
    line-height: 1.2rem;
`;

const CardBody = styled.div`
    color: rgb(255 255 255 / 0.8)
`

const RoomCard = ({ item }) => {
  return (
    <CardDiv>
      <Card img={item.fields.images[0].fields.file.url}>
        <PriceTop>
          <h6># {item.fields.price}</h6>
          <p>per night</p>
        </PriceTop>
        <CardContent>
          <Title>{item.fields.name}</Title>
          <CardBody>
            <BriefInfo>{item.fields.description.substring(0, 200)}</BriefInfo>
          </CardBody>
          <Button to={`/rooms/${item.fields.slug}`} primary="true">
            Feature
          </Button>
        </CardContent>
      </Card>
    </CardDiv>
  );
};

export default RoomCard;
