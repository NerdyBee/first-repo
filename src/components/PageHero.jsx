import React from 'react';
import styled from 'styled-components';
import Img from '../images/1.jpeg';

const Container = styled.div`
  color: #fff;
  background-image: url(${Img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  padding: 3rem 0;
  overflow: hidden;
  position: relative;
`;


// const Container = styled.div`
//   overflow: auto;
//   position: relative;

// :before {
//     content: "";
//     left: 0;
//     right: 0;
//     top:-175px;
//     z-index: -1;

//     display: block;
//     background-image: url(${Img});
//     background-size:cover;
//     background-position:center top;

//     width: 100%;
//     height: 300px;
// }
// `;

const Content = styled.div`
  text-align: center;
  color: #000;

  h1 {
    color: var(--secondary-color);
    padding: 0.5rem 0;
  }

  span {
    font-weight: 500;
    letter-spacing: .5em;
  }
`;


const PageHero = () => {
  return <div>
    <Container>
      <Content>
        <h1>Page</h1>
        <span>Home ... Page</span>
      </Content>
    </Container>
  </div>;
};

export default PageHero;
