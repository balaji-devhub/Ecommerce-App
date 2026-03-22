import React, { useEffect, useState } from 'react'
import {
  Container,
  ProductCard,
  ImageSection,
  DetailImg,
  FormSection,
  InputGroup,
  ButtonGroup,
  UpdateButton,
  EditButton,
  Title,
  ChangeImageText,
  Row,
  CancelButton
} from './ProductDetailStyle'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'

const url = import.meta.env.VITE_API_URL

const AdminProductDetail = () => {
  const [isEditing, setIsEditing] = useState(false)

  const [product, setProduct] = useState({
    name: '',
    price: '',
    stock: '',
    status: '',
    image_link: ''
  })

  const token = Cookies.get('jwt_token')
  const { id } = useParams()

  const getSpecificProductDetails = async () => {
    try {
      const response = await axios.get(`${url}/admin/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setProduct(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getSpecificProductDetails()
  }, [])

  const handleUpdate = () => {
    setIsEditing(false)
    alert('Product Updated Successfully!')
  }

  return (
    <Container>
      <ProductCard>
        <ImageSection>
          <DetailImg src={product.image_link} alt={product.name} />
          <ChangeImageText>Change Image</ChangeImageText>
        </ImageSection>

        <FormSection>
          <Title>{isEditing ? 'Edit Product Details' : product.name}</Title>

          <InputGroup>
            <label>Product Name</label>
            <input name="name" value={product.name} disabled={!isEditing} />
          </InputGroup>

          <Row>
            <InputGroup>
              <label>Price ($)</label>
              <input name="price" type="number" value={product.price} disabled={!isEditing} />
            </InputGroup>

            <InputGroup>
              <label>Stock Count</label>
              <input name="stock" type="number" value={product.stock} disabled={!isEditing} />
            </InputGroup>
          </Row>

          <InputGroup>
            <label>Status</label>
            <select name="status" value={product.status} disabled={!isEditing}>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="inactive">Inactive</option>
            </select>
          </InputGroup>

          <ButtonGroup>
            {!isEditing ? (
              <EditButton onClick={() => setIsEditing(true)}>Edit Details</EditButton>
            ) : (
              <>
                <UpdateButton onClick={handleUpdate}>Update Product</UpdateButton>

                <CancelButton onClick={() => setIsEditing(false)}>Cancel</CancelButton>
              </>
            )}
          </ButtonGroup>
        </FormSection>
      </ProductCard>
    </Container>
  )
}

export default AdminProductDetail
