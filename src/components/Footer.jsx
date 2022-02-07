import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const FooterDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  justify-content: space-between;
  padding: 4rem;
  width: 100%;
  color: #fff;
  background: var(--dark-bg);
  line-height: 2rem;

  @media screen and (min-width: 300px) {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    padding: 1.5rem;
  }

  @media screen and (min-width: 850px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 1.5rem;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 4rem;
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

    li > *:hover {
        color: var(--primary-color);
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

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.8rem;

  & > * {
    margin: 1rem 2rem;
    cursor: pointer;
  }
  
  & > *:hover {
    background: #fff;
  }
`

const Footer = () => {
  return <div>
      <FooterDiv>
          <First>
            {/* <img src="https://i.ibb.co/sHZz13b/logo.png"/> */}
            <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem"}}>Luxury</h2>
            <p>7637 Opposite Goverment House, Rayfield.</p>
            <p>Jos, Plateau State.</p>
            <p>Nigeria.</p>
            <h4 style={{color: "#ff893b"}}>Phone</h4>
            <p>+234-8036071791, +234-800000000</p>
            <h4 style={{color: "#ff893b"}}>Email</h4>
            <p>info@luxuryhotel.com</p>
          </First>
          <Second>
              <h4 style={{color: "black", marginBottom: "1rem", fontSize: "1.5rem"}}> About Us</h4>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, consequatur? But horizontal lines can only be a full pixel high.</p>
               <SocialIcons>
                <Link to="/"> <FaFacebook style={{color: "#009"}} /> </Link>
                <FaTwitter style={{color: "#009"}} />
                <FaYoutube style={{color: "#900"}} />
               </SocialIcons>
          </Second>
          <Third>
            <ul>
            <h4>Nav</h4>
                <li> <Link to='/'> Home</Link> </li>
                <li> <Link to='/'> Room</Link> </li>
                <li> <Link to='/'> Service</Link> </li>
                <li> <Link to='/'> Events</Link> </li>
                <li> <Link to='/'> About Us</Link> </li>
                <li> <Link to='/'> Contact</Link> </li>
            </ul>
            <ul>
            <h4>Quick Link</h4>
                <li> <Link to='/'> Contact Us</Link> </li>
                <li> <Link to='/'> Career</Link> </li>
                <li> <Link to='/'> Register</Link> </li>
                <li> <Link to='/'> Sign In</Link> </li>
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
