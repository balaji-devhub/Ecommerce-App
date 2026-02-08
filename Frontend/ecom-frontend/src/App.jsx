import React from 'react'
import LandingPage from './components/LandingPage/Landing'
import { Route, Routes } from 'react-router-dom'
import ProductView from './components/ProductViewSection/ProductView'
import CartPage from './components/CartComponent/Cart'
import Login from './components/LoginPage/loginpage'
import Register from './components/Register/Register'
import ProductDetail from './components/ProductDetailView/ProductDetail'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductView />} />
        <Route path="/user/cart/" element={<CartPage />} />
        <Route path="/user/login/" element={<Login />} />
        <Route path="/user/register/" element={<Register />} />
        <Route path="/user/products/:id" element={<ProductDetail />} />
      </Routes>
    </>
  )
}

export default App
