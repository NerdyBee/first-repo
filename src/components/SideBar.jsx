import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { menuData } from '../data/MenuData';
import { Link } from 'react-router-dom';
import { Button } from './Button';

const SideBarContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #cd853f;
    display: grid;
    align-item: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
const CloseIcon = styled(FaTimes)`
    color: #000d1a;
`
const SideBarWrapper = styled.div``

const SideBarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(4, 60px);
    }
`
const SideBarLink = styled(Link)`
    display: flex;
    align-item: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        color: #000d1a;
    }
`

const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

const SideBar = ({isOpen, toggle}) => {
  return <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
          <CloseIcon />
      </Icon>
      <SideBarWrapper>
          <SideBarMenu>
              {menuData.map((menu, index) => (
                  <SideBarLink to={menu.link} key={index}>
                      {menu.title}
                  </SideBarLink>
              ))}
          </SideBarMenu>
          <BtnWrap>
              <Button primary="true" round="true" big="true" to="/contact">
                  Contact
              </Button>
          </BtnWrap>
      </SideBarWrapper>
  </SideBarContainer>;
};

export default SideBar;
