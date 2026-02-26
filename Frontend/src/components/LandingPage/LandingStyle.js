import styled, { keyframes } from "styled-components";

/* Animations */

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* MAIN CONTAINER */

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url("https://res.cloudinary.com/dlucwqoss/image/upload/v1769855665/port-elizabeth-south-africa-29-january-2024_n2wxi1.jpg")
    center/cover no-repeat;
  position: relative;
  overflow-x: hidden;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

/* DARK OVERLAY */

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
`;

/* NAVBAR */

export const Navbar = styled.nav`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  animation: ${fadeDown} 0.8s ease-out;

  @media (max-width: 768px) {
    padding: 16px 20px;
  }
`;

/* MOBILE MENU ICON */

export const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

/* LOGO */

export const Logo = styled.h1`
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.08);
    color: #ff9800;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0%;
    height: 3px;
    background: #ff9800;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

/* NAV LINKS */

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: 0.3s;

    &:hover {
      color: #ff9800;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    right: 20px;
    background: rgba(0, 0, 0, 0.9);
    flex-direction: column;
    padding: 16px 20px;
    border-radius: 12px;
    gap: 16px;
  }
`;

/* HERO SECTION */

export const HeroSection = styled.div`
  position: relative;
  z-index: 2;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  padding: 0 60px;

  @media (max-width: 768px) {
    padding: 0 20px;
    justify-content: center;
    text-align: center;
  }
`;

/* CONTENT */

export const Content = styled.div`
  max-width: 600px;
  color: #fff;
  animation: ${fadeUp} 1s ease-out;

  @media (max-width: 768px) {
    margin: auto;
  }
`;

/* TITLE */

export const Title = styled.h1`
  font-size: 56px;
  margin-bottom: 20px;

  animation: ${fadeUp} 1s ease-out;
  animation-delay: 0.2s;
  animation-fill-mode: both;

  @media (max-width: 768px) {
    font-size: 42px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

/* SUBTITLE */

export const Subtitle = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #ddd;

  animation: ${fadeUp} 1s ease-out;
  animation-delay: 0.4s;
  animation-fill-mode: both;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

/* BUTTON GROUP */

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;

    button:last-child {
      display: none;
    }
  }
`;

/* PRIMARY BUTTON */

export const PrimaryButton = styled.button`
  padding: 14px 30px;
  border: none;
  background: #ff9800;
  color: #000;
  font-size: 16px;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.3s ease;

  &:hover {
    background: #ffa726;
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

/* SECONDARY BUTTON */

export const SecondaryButton = styled.button`
  padding: 14px 30px;
  border: 2px solid #fff;
  background: transparent;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: #000;
    transform: translateY(-4px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;