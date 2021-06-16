import React from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';
import AboutMe from '../AboutMe';
import { Link } from 'react-scroll';
import Projects from '../Projects';



const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open} >
      <Link
        onClick={() => setOpen(!open)}
        activeClass="active"
        to="Home"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={50}
        duration={1000}
        data-hover="Home"
      >
      </Link>
      <Link
        onClick={() => setOpen(!open)}
        activeClass="active"
        to="AboutMe"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={50}
        duration={1000}
        data-hover="About Me"
      >
      </Link>
      <Link
        onClick={() => setOpen(!open)}
        activeClass="active"
        to="Skills"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={50}
        duration={1000}
        data-hover="Skills"
      >
      </Link>
      <Link
        onClick={() => setOpen(!open)}
        activeClass="active"
        to="Projects"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={50}
        duration={1000}
        data-hover="Projects"
      >
      </Link>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}

const StyledMenu = styled.nav`
  display: ${({ open }) => open ? 'flex' : 'none'};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  
  flex-direction: column;
  justify-content: center;
  background-color: white;
  align-items: center;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 16%;
 z-index:500;
  a {
    font-family: 'Roboto', sans-serif;
    font-size: 35px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 2rem 0;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
    color: black;
    z-index:100;
    position: relative;
  }

a:before {
  content: attr(data-hover);
}
a:after {
  content: attr(data-hover);
  position: absolute;
  color: #7510F7;
  left: 0;
  margin: 0 auto;
  width: 0;
  transition: width 0.7s;
  overflow: hidden;
  white-space: nowrap;
  font-weight: bold;
}
a:hover:after {
  width: 100%;
}

@media (max-width: 2100px) {

    a{
        font-size: 18px;
    }
    }

    @media (max-width: 1255px) {

    a{
        font-size: 16px;
    }
    }

    @media (max-width: 950px) {

    a{
        font-size: 12px;
    }
    }

     @media (max-width: 950px) {

    a{
        font-size: 10px;
    }
    }

       @media (max-width: 610px) {
        width: 100%;
        padding: 0rem;

         a{
        font-size: 14px;
    }
  }
`;

export default Menu;

