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
  StatsSection,
  StatCard
} from './adminStyle'

const AdminLanding = () => {
  return (
    <Page>
      <Navbar>
        <Logo>ShopX Seller</Logo>

        <NavLinks>
          <a href="#">Dashboard</a>
          <a href="#">Products</a>
          <a href="#">Orders</a>
          <a href="#">Analytics</a>
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
