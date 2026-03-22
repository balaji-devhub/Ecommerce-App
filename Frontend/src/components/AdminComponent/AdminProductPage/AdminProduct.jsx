import { useEffect, useState } from 'react'
import Header from '../AdminHeader/AdminHeaderComponent'
import {
  ProductListPage,
  ProductListContainer,
  Product,
  ProductImg,
  ProductName,
  Category,
  ProductLink,
  Price,
  Stock,
  Status
} from './AdminProductPageStyle'
import axios from 'axios'
import Cookies from 'js-cookie'

const url = import.meta.env.VITE_API_URL

const AdminProductList = () => {
  const [productData, setProductData] = useState([])
  const token = Cookies.get('jwt_token')

  const getAdminProductData = async () => {
    try {
      const { data } = await axios.get(`${url}/admin/product/all`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setProductData(data.products)
    } catch (error) {
      console.error('Failed to fetch products:', error)
    }
  }

  useEffect(() => {
    getAdminProductData()
  }, [])

  console.log(productData)

  return (
    <ProductListPage>
      <Header />

      <ProductListContainer>
        {productData?.map(each => (
          <ProductLink key={each._id} to={`/admin/product/detail/${each._id}`}>
            <Product>
              <ProductImg src={each.image_link || '/no-image.png'} alt={each.name} />

              <ProductName>{each.name}</ProductName>

              <Category>{each.category}</Category>

              <Price>${each.price}</Price>

              <Stock>{each.stock}</Stock>

              <Status>{'29/44 left'}</Status>
            </Product>
          </ProductLink>
        ))}
      </ProductListContainer>
    </ProductListPage>
  )
}

export default AdminProductList
