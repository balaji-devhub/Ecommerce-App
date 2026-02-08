import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Oval } from 'react-loader-spinner'
import axios from 'axios'
import Cookies from 'js-cookie'

import {
  PageWrapper,
  Container,
  ImageSection,
  MainImage,
  InfoSection,
  Title,
  Price,
  Description,
  Meta,
  Button
} from './ProductDetailStyle'

const ProductDetail = () => {
  const { id } = useParams()
  const url = import.meta.env.VITE_API_URL

  const [products, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    const fetchProduct = async () => {
      try {
        setError('')

        const token = Cookies.get('jwt_token')
        if (!token) throw new Error('Unauthorized: Please login')

        const { data } = await axios.get(`${url}/user/products/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        console.log(data)
        if (!data?.products) {
          throw new Error('Product not found')
        }

        if (isMounted) {
          setProduct(data.products)
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Failed to fetch product')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    if (id) fetchProduct()

    return () => {
      isMounted = false
    }
  }, [id, url])

  if (loading) {
    return (
      <PageWrapper
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh'
        }}
      >
        <Oval height={60} width={60} color="#6C63FF" secondaryColor="#ddd" strokeWidth={4} />
      </PageWrapper>
    )
  }

  if (error) {
    return (
      <PageWrapper style={{ textAlign: 'center', marginTop: '100px' }}>
        <h2>{error}</h2>
      </PageWrapper>
    )
  }

  if (!products) return null

  const { productname, price, description, category, rating, product_imageurl } = products

  return (
    <PageWrapper>
      <Container>
        <ImageSection>
          <MainImage src={product_imageurl || '/fallback-image.png'} alt={productname} />
        </ImageSection>

        <InfoSection>
          <Title>{productname}</Title>

          <Price>{typeof price === 'number' ? `₹ ${price.toLocaleString()}` : price}</Price>

          <Meta>
            <p>
              <strong>Category:</strong> {category}
            </p>
            {rating && (
              <p>
                <strong>Rating:</strong> ⭐ {rating}
              </p>
            )}
          </Meta>

          <Description>{description}</Description>

          <Button>Add to Cart</Button>
        </InfoSection>
      </Container>
    </PageWrapper>
  )
}

export default ProductDetail
