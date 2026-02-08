import { useState } from 'react'
import axios from 'axios'
import { PageWrapper, ProductsSection, Grid } from './ProductViewStyle'
import ProductCard from '../CardComponent/Card'
import SidebarFilter from '../FilterComponent/SidebarFilter'
import { MobileFilterBar, ContainerAlignment } from '../FilterComponent/Filter'
import { FiFilter } from 'react-icons/fi'
import { BsHandbag } from 'react-icons/bs'
import { RiMenu3Fill } from 'react-icons/ri'
import { PiUserCircleThin } from 'react-icons/pi'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

const ProductView = () => {
  const url = import.meta.env.VITE_API_URL
  const [openFilter, setOpenFilter] = useState(false)
  const [productData, setProductData] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const token = Cookies.get('jwt_token')
      const response = await axios.get(`${url}/user/products-all/`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setProductData(response.data.products)
      // console.log(response.data.products)
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
      {/* Mobile Filter Icon */}
      <MobileFilterBar>
        <PiUserCircleThin size={52} style={{ paddingLeft: '10px' }} />
        <ContainerAlignment>
          <FiFilter size={26} onClick={() => setOpenFilter(true)} />
          <BsHandbag size={26} onClick={() => setOpenFilter(true)} />
          <RiMenu3Fill size={26} onClick={() => setOpenFilter(true)} />
        </ContainerAlignment>
      </MobileFilterBar>

      <PageWrapper>
        {/* Desktop always visible | Mobile toggle */}
        <SidebarFilter open={openFilter} setOpen={setOpenFilter} />

        <ProductsSection>
          <Grid>
            {productData.map(each => (
              <ProductCard
                key={each._id}
                title={each.productname}
                price={each.price}
                rating={each.rating}
                img={each.product_imageurl}
                description={each.description}
                productId={each._id}
              />
            ))}
          </Grid>
        </ProductsSection>
      </PageWrapper>
    </>
  )
}

export default ProductView
