import { Link } from "react-router-dom"
import styled from "styled-components"

/* Breakpoints */

const tablet = "768px"
const mobile = "480px"

/* Page */

export const Page = styled.div`
  min-height: 100vh;
  background: #0b1e2d;
  color: white;
  overflow-x: hidden;
`

/* Navbar */

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 60px;
  align-items: center;

  @media (max-width: ${tablet}) {
    padding: 18px 30px;
  }

  @media (max-width: ${mobile}) {
    padding: 16px 20px;
  }
`

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: ${mobile}) {
    font-size: 20px;
  }
`

export const NavLinks = styled.div`
  display: flex;
  gap: 28px;
  cursor: pointer;

  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
  }

  @media (max-width: ${tablet}) {
    gap: 18px;

    a {
      font-size: 14px;
    }
  }

  @media (max-width: ${mobile}) {
    display: none;
  }
`

/* Hero */

export const Hero = styled.div`
  min-height: 70vh;
  display: flex;
  align-items: center;
  padding: 0 80px;

  @media (max-width: ${tablet}) {
    padding: 0 40px;
    min-height: 60vh;
  }

  @media (max-width: ${mobile}) {
    padding: 0 20px;
    text-align: center;
    justify-content: center;
  }
`

export const HeroContent = styled.div`
  max-width: 600px;
  font-weight: bold;
  letter-spacing: 1.2px;

  @media (max-width: ${mobile}) {
    max-width: 100%;
  }
`

export const Title = styled.h1`
  font-size: 56px;
  margin-bottom: 20px;
  line-height: 1.2;
  font-weight: bold;
  letter-spacing: 1.4px;
  margin-top: 50px;

  @media (max-width: ${tablet}) {
    font-size: 42px;
  }

  @media (max-width: ${mobile}) {
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  font-size: 18px;
  opacity: 0.85;
  margin-bottom: 30px;

  @media (max-width: ${mobile}) {
    font-size: 16px;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: ${mobile}) {
    flex-direction: column;
    align-items: center;
  }
`

export const PrimaryButton = styled.button`
  background: #ff9800;
  border: none;
  padding: 14px 28px;
  border-radius: 40px;
  font-size: 16px;
  cursor: pointer;
  color: #fff;

  &:hover {
    background: #ff8700;
  }

  @media (max-width: ${mobile}) {
    width: 200px;
  }
`

export const SecondaryButton = styled.button`
  background: transparent;
  border: 2px solid white;
  padding: 14px 28px;
  border-radius: 40px;
  color: white;
  cursor: pointer;

  &:hover {
    background: rgba(255,255,255,0.1);
  }

  @media (max-width: ${mobile}) {
    width: 200px;
  }
`

/* Stats Section */

export const StatsSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 60px;

  @media (max-width: ${tablet}) {
    gap: 24px;
    padding: 40px 20px;
  }

  @media (max-width: ${mobile}) {
    flex-direction: column;
    align-items: center;
  }
`

export const StatCard = styled.div`
  background: rgba(255,255,255,0.08);
  padding: 30px;
  border-radius: 16px;
  width: 200px;
  text-align: center;
  backdrop-filter: blur(6px);

  h2 {
    font-size: 32px;
  }

  p {
    opacity: 0.8;
  }

  @media (max-width: ${mobile}) {
    width: 90%;
  }
`

export const Nav = styled(Link)`
cursor: pointer;
text-decoration: none;
`