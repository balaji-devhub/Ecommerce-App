import React from 'react'
import LandingPage from './components/LandingPage/Landing'
import { Route, Routes } from 'react-router-dom'
import ProductView from './components/ProductViewSection/ProductView'
import CartPage from './components/CartComponent/Cart'
import Login from './components/LoginPage/loginpage'
import Register from './components/Register/Register'
import ProductDetail from './components/ProductDetailView/ProductDetail'
import ProtectRoute from './components/ProtectContainer/ProtectFiles'
import AdminLanding from './components/AdminDashboard/admindash'
import AdminProducts from './components/AdminProductPage/AdminProduct'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/admin/dashboard/" element={<AdminLanding />} />
        <Route path="/user/login/" element={<Login />} />
        <Route path="/user/register/" element={<Register />} />
        <Route
          path="/admin/products/"
          element={
            <>
              <AdminProducts />
            </>
          }
        />
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
