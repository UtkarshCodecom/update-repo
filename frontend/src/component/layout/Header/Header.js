import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../../../images/logo.png";
import DropdownMenu from "./DropdownMenu";
import { useSelector } from "react-redux";


const bn13bouncy = keyframes`
  0% {
    top: 0em;
  }
  40% {
    top: 0em;
  }
  43% {
    top: -0.9em;
  }
  46% {
    top: 0em;
  }
  48% {
    top: -0.4em;
  }
  50% {
    top: 0em;
  }
  100% {
    top: 0em;
  }
`;



const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const selector = useSelector((store)=> store.auth.isAuthenticated)

  const handleLogin = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const islogin = window.location.pathname === '/login'

  return (
    <Container className="contin">
      <Logo showLogo={!isMenuOpen}>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </Logo>
    <NavMenu>
    <NavLink href="/"><span className="hover:text-gray-400 text-lg" >Home</span>
      </NavLink>
    
  
  <NavLink href="/vapt" >
    <span  className="hover:text-gray-400 text-lg">VAPT</span>
  </NavLink>
  <Dropdown>
    <DropdownButton>
      <span className="hover:text-gray-400 text-lg">Courses</span>
    </DropdownButton>
    <DropdownContent>
      <a href="/In-house">In-house</a>
      <a href="/collab">Collab</a>
      <a href="/udemy">Udemy</a>
    </DropdownContent>
  </Dropdown>
   <NavLink href="/other">
    <span className="text-lg">Other Services</span>
  </NavLink>
</NavMenu>

     <StyledLogin href="/login" onClick={handleLogin}>
        Login
      </StyledLogin> 
      <MobileMenu>
        
      </MobileMenu>
      <DropdownMenu />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  color: white; 
  background-color: black;
  margin-bottom: 0px;
  position: relative;
  @media (max-width: 768px) {
    justify-content: flex-end;
    padding: 10px;
  }
`;

const Logo = styled.div`
  flex: 0 0 auto;
  width: 200px;
  height: 100%;
  display: ${({ showLogo }) => (showLogo ? "flex" : "none")}; /* Show or hide the logo based on the showLogo prop */

  @media (max-width: 768px) {
    display: ${({ showLogo }) => (showLogo ? "flex" : "none")}; 
    margin-right: auto;
    /* Reverse the display for small devices */
  }

  a {
    display: block;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: auto; /* Ensure the image maintains its aspect ratio */
      max-height: 100%; /* Ensure the image does not exceed the height of its container */
      object-fit: contain;
    }
  }
`;



const NavMenu = styled.nav`
  display: flex;
  width:100%;
  align-items:center;
  justify-content:center;
  margin-left:auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ gradient }) => (gradient ? "white" : "white")};
  margin: 0px 40px; /* Adjust the margin here */
  text-decoration: none;
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  transition: all 0.3s ease;
  background-color: ${({ gradient }) =>
    gradient
      ? "linear-gradient(90deg, rgba(230, 1, 143, 1) 0%, rgba(2, 0, 252, 1) 50%)"
      : "transparent"};

  &:hover {
    background-color: ${({ gradient }) =>
      gradient ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.1)"};
    transform: translateY(-10px);
    text-decoration: underline;
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

const Dropdown = styled.div`
  color: white;
`;

const DropdownButton = styled.button`
  color: ${({ gradient }) => (gradient ? "white" : "white")};
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
 
`;

const DropdownContent = styled.div`
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  min-width: 150px;
  z-index: 2;
  display: none;
  border-radius: 5px;

  ${Dropdown}:hover & {
    display: block;
  }

  a {
    display: block;
    padding: 10px 20px;
    color: white;
    text-decoration: none;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

const StyledLogin = styled.a`
  display: inline-block;
  padding: 0.3em 2.1em;
  border: 1px solid transparent;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  position: relative;
  animation: ${bn13bouncy} 5s infinite linear;

  border-image: linear-gradient(90deg, rgba(230, 1, 143, 1) 0%, rgba(2, 0, 252, 1) 50%);
  border-image-slice: 1;
  &:hover {
    background-color: white;
    color: #000000;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }
`;

export default Header;
