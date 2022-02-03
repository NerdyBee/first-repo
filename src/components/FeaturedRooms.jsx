import React from 'react';
import styled from "styled-components";
import { items } from '../data/RoomData';
import Room from './Room';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;


const FeaturedRooms = () => {
  return (
    <Container>
      {items
        .filter((item) => item.fields.featured === true)
        .map((item) => (
          <Room item={item} key={item.id} />
        ))}
    </Container>
  );
};

export default FeaturedRooms;
