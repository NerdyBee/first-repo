import React from 'react';
import styled from "styled-components";
import { items } from '../data/RoomData';
import RoomCard from './Card';

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: rgba(83, 83, 83, 0.1);
`;

const HeroTitle = styled.h1`
  color: var(--primary-color);
  text-align: center;
`

const FeaturedRooms = () => {
  return (
    <>
    <HeroTitle>Featured Rooms</HeroTitle>
    <Container>
      {items
        .filter((item) => item.fields.featured === true)
        .map((item) => (
          <RoomCard item={item} key={item.id} />
        ))}
    </Container>
    </>
  );
};

export default FeaturedRooms;
