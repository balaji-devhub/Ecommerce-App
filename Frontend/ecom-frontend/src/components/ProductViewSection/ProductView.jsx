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
const ProductView = () => {
  const url = import.meta.env.VITE_BASE_URL
  const [openFilter, setOpenFilter] = useState(false)
  const [productData, setProductData] = useState([])

  const fetchProducts = async () => {}

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
            {Array.from({ length: 1200 }).map((_, i) => (
              <ProductCard key={i} title={`Product ${i + 1}`} price={999 + i * 100} />
            ))}
          </Grid>
        </ProductsSection>
      </PageWrapper>
    </>
  )
}

export default ProductView
