import React from 'react';
import styled from 'styled-components';

import Img from '../images/11.jpeg';
import { Button } from './Button';

const Container = styled.div`
  padding: 0 5rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 600px;
  gap: 1rem;
  color: #000;
  background: var(--dark-bg-txt);
  justify-content: center;

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    grid-template-rows: 100%;
    padding: 0;
  }
`;

const LeftColumn = styled.div`
  display: flex;

  img {
    width: 100%;
    padding: 0 2rem;
    object-fit: cover;
  }

  @media screen and (max-width: 760px) {
    justify-content: center;

    img {
      width: 90%;
      object-fit: fit;
      padding: 0;
    }
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  justify-content: center;
  align-items: center;
  line-height: 2rem;
  color: #fff;

  h1 {
    margin: 3rem 0;
    font-size: 3rem;
    line-height: 2.5rem;
    color: var(--dark-bg);
  }

  @media screen and (max-width: 760px) {
    h1 {
        margin: 2rem 0;
        font-size: 2rem;
    }
  }
`;
const About = () => {
  return (
    <>
      <Container>
        <RightColumn>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            numquam aliquam, voluptates ipsa recusandae necessitatibus
            perspiciatis incidunt fuga rem placeat illo tempora illum obcaecati
            amet commodi laudantium nostrum molestiae. Dolore.Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Suscipit numquam aliquam,
            voluptates ipsa recusandae necessitatibus perspiciatis incidunt fuga
            rem placeat illo tempora illum obcaecati amet commodi laudantium
            nostrum molestiae. Dolore.
          </p>
          <Button to='/' primary='true' >Contact Us</Button>
        </RightColumn>
        <LeftColumn>
          <img src={Img} alt="" />
        </LeftColumn>
      </Container>
    </>
  );
};

export default About;
