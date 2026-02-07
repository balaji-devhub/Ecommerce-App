import { Link } from 'react-router-dom'
import {
  Container,
  Navbar,
  Overlay,
  HeroSection,
  NavLinks,
  Logo,
  SecondaryButton,
  PrimaryButton,
  ButtonGroup,
  Subtitle,
  Title,
  Content,
  MobileMenuIcon
} from './LandingStyle'
import { LuLogOut } from 'react-icons/lu'
import { RiLoginCircleFill } from 'react-icons/ri'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { useState } from 'react'

const LandingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Container>
      <Overlay />

      <Navbar>
        <Logo>ShopX</Logo>

        <MobileMenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <HiX size={28} color="#fff" /> : <HiMenuAlt3 size={28} color="#fff" />}
        </MobileMenuIcon>

        {(isMenuOpen || window.innerWidth > 768) && (
          <NavLinks>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/products" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
            <Link to="/user/cart/" onClick={() => setIsMenuOpen(false)}>
              Cart
            </Link>

            {!isLoggedIn ? (
              <Link
                to="/user/login/"
                onClick={() => {
                  setIsLoggedIn(true)
                  setIsMenuOpen(false)
                }}
              >
                Login <RiLoginCircleFill size={18} />
              </Link>
            ) : (
              <Link
                to="/"
                onClick={() => {
                  setIsLoggedIn(false)
                  setIsMenuOpen(false)
                }}
              >
                Logout <LuLogOut size={18} />
              </Link>
            )}
          </NavLinks>
        )}
      </Navbar>

      <HeroSection>
        <Content>
          <Title>Best Deals on Latest Products</Title>
          <Subtitle>Shop smart. Shop fast. Shop with confidence.</Subtitle>

          <ButtonGroup>
            <PrimaryButton>
              <Link to="/products" onClick={() => setIsMenuOpen(false)}>
                Shop now
              </Link>
            </PrimaryButton>
            <SecondaryButton>Explore</SecondaryButton>
          </ButtonGroup>
        </Content>
      </HeroSection>
    </Container>
  )
}

export default LandingPage
