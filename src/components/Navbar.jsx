import React, { useState } from 'react';
import styled, {css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import {FaBars} from 'react-icons/fa'


const Nav = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  width: 100%;
  z-index: 100;
  position: fixed;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-item: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
  font-size: 1.5rem;
  font-weight: 500;
`;

const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    margin-right: 10px;
    height: 35px;
    width: 40px;
    cursor: pointer;
    top: 0;
    right: 0;
    transfrom: translate(-50%, 25%);
  }
`; 

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -40px;

  @media screen and (max-width: 960px){
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 14px;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const Navbar = ({toggle}) => {

  const [navBg, setNavBg] = useState(false)

  const changeBg = () => {
    if(window.scrollY >= 60){
      setNavBg(true)
    } else {
      setNavBg(false)
    }
  }

  window.addEventListener('scroll', changeBg)

  return <Nav className={navBg && 'scrolled'}>
    <Logo to="/">Luxury Hotel</Logo>
    <MenuBars onClick={toggle} />
    <NavMenu>
      {menuData.map((item, index) => (
        <NavMenuLinks to={item.link} key={index}>{item.title}</NavMenuLinks>
      ))}
    </NavMenu>
    <NavBtn>
      <Button to="/contact" primary='true'>Conatct Us</Button>
    </NavBtn>
  </Nav>;
};

export default Navbar;
