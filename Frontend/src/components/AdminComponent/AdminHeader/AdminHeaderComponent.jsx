import React, { useState } from 'react'
import { Nav, Logo, NavLinks, NavItem, MenuIcon } from './AdminHeaderStyle'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Nav>
      <Logo>ShopX</Logo>

      <NavLinks isOpen={menuOpen}>
        <NavItem to="/admin/products/">Products</NavItem>
        <NavItem>Data</NavItem>
        <NavItem>Logout →</NavItem>
      </NavLinks>

      <MenuIcon onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </MenuIcon>
    </Nav>
  )
}

export default Header
