import React from 'react';
import styled from "styled-components";
import {
  FaCar,
  FaCocktail,
  FaDumbbell,
  FaHome,
  FaHotel,
  FaParking,
  FaSwimmingPool,
  FaTshirt,
  FaUtensils,
  FaWifi,
} from "react-icons/fa";

const BadgeContainer = styled.div`
  padding: 1rem;
  width: 100%;
  background: rgba(83, 83, 83, 0.1);
`;

const BadgeDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  justify-content: space-between;
  padding: 0;
  width: 100%;
  background: rgba(83, 83, 83, 0.1);

  @media screen and (min-width: 300px) {
    grid-template-columns: 1fr;
    padding: 1.5rem;
    gap: 0.1rem;
    font-size: .7rem;
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

  @media screen and (min-width: 1400px) {
    grid-template-columns: repeat(5, 1fr);
    padding: 4rem;
  }
`;

const Badge = styled.div`
  margin: .5rem auto;
  width: 100%;
  font-size: 5rem;
  background: #fff;
  color: var(--secondary-color);
  padding: 1rem;
  text-align: center;

  .glyphicon {
    font-size: 5rem;
    text-align: center;
    margin: 3px 20px;
    -webkit-transition: 0.6s ease-out;
    -moz-transition: 0.6s ease-out;
    transition: 0.6s ease-out;
  }

  &:hover {
    .glyphicon {
      -webkit-transform: rotateZ(720deg);
      -moz-transform: rotateZ(720deg);
      transform: rotateZ(720deg);
    }
  }

  h2 {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: 0.2rem;
  }

  p {
    font-size: 1rem;
    color: #0d0d0d;
  }

  @media screen and (max-width: 500px) {
    margin: 0 auto;
  }
`;

const ServiceIcons = () => {
  return (
    <BadgeContainer>
      <h1 style={{padding: "1rem 0"}} className='heroTitle'>Services & Features</h1>
      <BadgeDiv>
        <Badge>
          <FaHotel className="glyphicon" />
          <h2>Accommodation</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            doloremque eaque sed, maxime accusantium ea?
          </p>
        </Badge>
        <Badge>
          <FaSwimmingPool className="glyphicon" />
          <h2>Swimming Pool</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            doloremque eaque sed, maxime accusantium ea?
          </p>
        </Badge>
        <Badge>
          <FaCar className="glyphicon" />
          <h2>Car Shuttle</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            doloremque eaque sed, maxime accusantium ea?
          </p>
        </Badge>
        <Badge>
          <FaCocktail className="glyphicon" />
          <h2>Bar & Lounge</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            doloremque eaque sed, maxime accusantium ea?
          </p>
        </Badge>
        <Badge>
          <FaDumbbell className="glyphicon" />
          <h2>Fitness Center</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            doloremque eaque sed, maxime accusantium ea?
          </p>
        </Badge>
        <Badge>
          <FaTshirt className="glyphicon" />
          <h2>Laundry</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            doloremque eaque sed, maxime accusantium ea?
          </p>
        </Badge>
        <Badge>
          <FaUtensils className="glyphicon" />
          <h2>Restaurant</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            doloremque eaque sed, maxime accusantium ea?
          </p>
        </Badge>
        <Badge>
          <FaParking className="glyphicon" />
          <h2>Parking</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            doloremque eaque sed, maxime accusantium ea?
          </p>
        </Badge>
        <Badge>
          <FaWifi className="glyphicon" />
          <h2>Internet Access</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            doloremque eaque sed, maxime accusantium ea?
          </p>
        </Badge>
        <Badge>
          <FaHome className="glyphicon" />
          <h2>Event & Meeting Hall</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            doloremque eaque sed, maxime accusantium ea?
          </p>
        </Badge>
      </BadgeDiv>
    </BadgeContainer>
  );
};

export default ServiceIcons;
