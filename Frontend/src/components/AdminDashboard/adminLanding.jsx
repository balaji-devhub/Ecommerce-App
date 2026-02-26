import {
  Page,
  Navbar,
  Logo,
  NavLinks,
  Hero,
  HeroContent,
  Title,
  Subtitle,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  Nav,
  StatsSection,
  StatCard
} from './adminLandingStyle'
import { Link } from 'react-router-dom'

const AdminLanding = () => {
  return (
    <Page>
      <Navbar>
        <Logo>ShopX Seller</Logo>

        <NavLinks>
          <Nav to="/admin/dashboard/">Dashboard</Nav>
          <Nav to="#">Products</Nav>
          <Nav to="#">Orders</Nav>
          <Nav to="/user/login/">Login</Nav>
        </NavLinks>
      </Navbar>

      <Hero>
        <HeroContent>
          <Title>Grow Your Business with ShopX</Title>

          <Subtitle>Manage products, track orders, and scale your store easily.</Subtitle>

          <ButtonGroup>
            <PrimaryButton>Add Product</PrimaryButton>
            <SecondaryButton>View Dashboard</SecondaryButton>
          </ButtonGroup>
        </HeroContent>
      </Hero>
    </Page>
  )
}

export default AdminLanding
