import React from 'react';
import styled from "styled-components";
import { items } from "../data/RoomData";
import Room from "./Room";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Rooms = () => {
  return (
    <Container>
      {items.map((item) => (
          <Room item={item} key={item.id} />
        ))}
    </Container>
  );
};

export default Rooms;
