import React from 'react';
import styled from "styled-components";
import { items } from "../data/RoomData";
import RoomCard from "./Card";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Rooms = () => {
  return (
    <Container>
      {items.map((item) => (
          <RoomCard item={item} key={item.id} />
        ))}
    </Container>
  );
};

export default Rooms;
