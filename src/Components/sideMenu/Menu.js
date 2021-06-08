import React from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link href="Home" data-hover="Home">
      </Link>
      <Link to="#About" data-hover="About Me">
      </Link>
      <a href="/" data-hover="Skills">
      </a>
      <a href="/" data-hover="Projects">
      </a>
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
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 16%;
 z-index:100;
  a {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
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

`;

export default Menu;

