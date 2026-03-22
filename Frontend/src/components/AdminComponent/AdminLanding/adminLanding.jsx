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
import Header from '../AdminHeader/AdminHeaderComponent'

const AdminLanding = () => {
  return (
    <Page>
      <Header />
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

{
  /* <Navbar>
        <Logo>ShopX Seller</Logo>

        <NavLinks>
          <Nav to="#">Products</Nav>
          <Nav to="#">Orders Details</Nav>
          <Nav to="/admin/login/">Login</Nav>
        </NavLinks>
      </Navbar> */
}
