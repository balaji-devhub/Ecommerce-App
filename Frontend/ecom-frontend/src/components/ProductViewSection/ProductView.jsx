import { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

import { PageWrapper, ProductsSection, Grid } from './ProductViewStyle'
import ProductCard from '../CardComponent/Card'
import SidebarFilter from '../FilterComponent/SidebarFilter'
import { TopBar, ContainerAlignment } from '../FilterComponent/Filter'

import { FiFilter } from 'react-icons/fi'
import { BsHandbag } from 'react-icons/bs'
import { RiMenu3Fill } from 'react-icons/ri'
import { PiUserCircleThin } from 'react-icons/pi'

const ProductView = () => {
  const url = import.meta.env.VITE_API_URL
  const navigate = useNavigate()

  const [openFilter, setOpenFilter] = useState(false)
  const [productData, setProductData] = useState([])
  const [loading, setLoading] = useState(false)

  /* FETCH PRODUCTS */

  const fetchProducts = async () => {
    try {
      setLoading(true)

      const token = Cookies.get('jwt_token')

      const response = await axios.get(`${url}/user/products-all/`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setProductData(response?.data?.products || [])
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      {/* Top bar */}
      <TopBar>
        <PiUserCircleThin size={42} />

        <ContainerAlignment>
          <FiFilter size={24} onClick={() => setOpenFilter(true)} />
          <BsHandbag size={24} onClick={() => navigate('/user/cart')} />
          <RiMenu3Fill size={24} onClick={() => setOpenFilter(true)} />
        </ContainerAlignment>
      </TopBar>

      <PageWrapper>
        {/* Sidebar Filter */}
        <SidebarFilter open={openFilter} setOpen={setOpenFilter} />

        {/* Products */}
        <ProductsSection>
          <Grid>
            {loading ? (
              <p>Loading products...</p>
            ) : (
              productData.map(each => (
                <ProductCard
                  key={each._id}
                  title={each.name}
                  price={each.price}
                  rating={each.rating}
                  img={each.image_link}
                  description={each.description}
                  productId={each._id}
                />
              ))
            )}
          </Grid>
        </ProductsSection>
      </PageWrapper>
    </>
  )
}

export default ProductView
