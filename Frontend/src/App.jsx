import React from 'react'
import LandingPage from './components/UserComponent/LandingPage/Landing'
import { Route, Routes } from 'react-router-dom'
import ProductView from './components/UserComponent/ProductViewSection/ProductView'
import CartPage from './components/UserComponent/CartComponent/Cart'
import Login from './components/UserComponent/LoginPage/loginpage'
import Register from './components/UserComponent/Register/Register'
import ProductDetail from './components/UserComponent/ProductDetailView/ProductDetail'
import ProtectRoute from './components/UserComponent/ProtectContainer/ProtectFiles'
import AdminLanding from './components/AdminComponent/AdminLanding/adminLanding'
import AdminRegistration from './components/AdminComponent/AdminAuthentication/AdminRegister'
import AdminProductList from './components/AdminComponent/AdminProductPage/AdminProduct'
import AdminProductDetail from './components/AdminComponent/ProductDetailUpdate/ProductDetail'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/admin/product/detail/:id" element={<AdminProductDetail />} />
        <Route path="/admin/products/" element={<AdminProductList />} />
        <Route path="/admin/register/" element={<AdminRegistration />} />
        <Route path="/admin/dashboard/" element={<AdminLanding />} />
        <Route path="/user/login/" element={<Login />} />
        <Route path="/user/register/" element={<Register />} />

        <Route
          path="/"
          element={
            <>
              <LandingPage />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectRoute>
              <ProductView />
            </ProtectRoute>
          }
        />
        <Route
          path="/user/cart/"
          element={
            <ProtectRoute>
              <CartPage />
            </ProtectRoute>
          }
        />

        <Route
          path="/user/products/:id"
          element={
            <ProtectRoute>
              <ProductDetail />
            </ProtectRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
