import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  height: 60px;
  width: 100%;
  background: #0b1e2d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  color: white;
  box-sizing: border-box;
  position: relative;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const Logo = styled.div`
  font-size: 28px;
  font-weight: 600;
  white-space: nowrap;
`;

/* Navigation Links */
export const NavLinks = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;

    position: absolute;
    top: 70px;
    right: 20px;

    width: 200px;
    padding: 30px 20px;

    background: black;
    border-radius: 20px;

    align-items: center;
    gap: 24px;

    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
  }
`;

export const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 400;
  cursor: pointer;
  opacity: 0.9;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

/* Hamburger Menu */
export const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;

  span {
    height: 2px;
    width: 25px;
    background: white;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;