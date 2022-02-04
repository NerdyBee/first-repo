import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  justify-content: space-between;
  padding: 2rem;
  width: 100%;
  color: #fff;
  background: var(--dark-bg);

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;
const First = styled.div`
  padding 1rem 0;

  h2 {
      color: var(--secondary-color);
  }

//   img {
//       width: 100px;
//   }
`
const Second = styled.div``
const Third = styled.div`
    display: flex;
    justify-content: center;
    
    ul {
        margin: .5rem auto;
        line-height: 2rem;
    }

    li > * {
        text-decoration: none;
        color: var(--dark-bg-txt);
    }
`
const Fourth = styled.div``
const FootMark = styled.div`
    font-size: 1rem;
    color: var(--dark-bg-txt);
    padding: .5rem;
    text-align: center;
    border: 0;
    background: #000;
`


const Footer = () => {
  return <div>
      <FooterDiv>
          <First>
            {/* <img src="https://i.ibb.co/sHZz13b/logo.png"/> */}
            <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem"}}>Luxury</h2>
            <p>7637 Laurel Dr. King Of Prussia, PA 19406</p>
            <p>Use this tool as test data for an automated system or find your next pen</p>
          </First>
          <Second>
              <h4 style={{color: "black", marginBottom: "1rem", fontSize: "1.5rem"}}> About Company</h4>
               <p>But horizontal lines can only be a full pixel high.</p>
               
          </Second>
          <Third>
            <ul>
                <li> <Link to='/'> Home</Link> </li>
                <li> <Link to='/'> About</Link> </li>
                <li> <Link to='/'> Service</Link> </li>
                <li> <Link to='/'> Team</Link> </li>
                <li> <Link to='/'> Help</Link> </li>
                <li> <Link to='/'> Contact</Link> </li>
            </ul>
            <ul>
                <li> <Link to='/'> Cab Faciliy</Link> </li>
                <li> <Link to='/'> Fax</Link> </li>
                <li> <Link to='/'> Terms</Link> </li>
                <li> <Link to='/'> Policy</Link> </li>
                <li> <Link to='/'> Refunds</Link> </li>
                <li> <Link to='/'> Paypal</Link> </li>
            </ul>
          </Third>
          <Fourth>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum magni distinctio nesciunt harum enim totam accusamus incidunt repellendus ullam! Quia!</p></Fourth>
      </FooterDiv>
      <FootMark><p>© Copyright 2022. All Rights Reserved.</p></FootMark>
  </div>;
};

export default Footer;
