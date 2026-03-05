import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Oval } from 'react-loader-spinner'

import {
  PageWrapper,
  TopBar,
  IconGroup,
  Container,
  ImageSection,
  MainImage,
  InfoSection,
  Title,
  RatingBadge,
  PriceRow,
  Price,
  OldPrice,
  Discount,
  Meta,
  OfferBox,
  Delivery,
  Description,
  ButtonRow,
  CartButton,
  BuyButton
} from './ProductDetailStyle'

import SidebarFilter from '../FilterComponent/SidebarFilter'
import { FiFilter } from 'react-icons/fi'
import { BsHandbag } from 'react-icons/bs'
import { RiMenu3Fill } from 'react-icons/ri'
import { PiUserCircleThin } from 'react-icons/pi'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const url = import.meta.env.VITE_API_URL

  const [openFilter, setOpenFilter] = useState(false)
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  /* FETCH PRODUCT */

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const token = Cookies.get('jwt_token')

        if (!token) {
          navigate('/login')
          return
        }

        const { data } = await axios.get(`${url}/user/products/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        setProduct(data.products)
      } catch (err) {
        console.log('Product Fetch Error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id, url, navigate])

  /* ADD TO CART */

  const ProductAddingtoCart = async productId => {
    try {
      const token = Cookies.get('jwt_token')

      if (!token) {
        navigate('/login')
        return
      }

      const response = await axios.post(
        `${url}/user/cart/add/`,
        { id: productId },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      console.log(response.data)

      if (response.data.status) {
        alert('Product added to cart')
      }
    } catch (error) {
      console.log('Cart Error:', error)
    }
  }

  /* LOADER */

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
        <Oval height={60} width={60} color="#2874f0" />
      </PageWrapper>
    )
  }

  if (!product) return null

  const { name, price, description, category, rating, image_link, _id } = product

  const oldPrice = Math.round(price * 1.2)
  const discount = Math.round(((oldPrice - price) / oldPrice) * 100)

  return (
    <PageWrapper>
      {/* TOP BAR */}

      <TopBar>
        <PiUserCircleThin size={40} />

        <IconGroup>
          <FiFilter size={26} onClick={() => navigate('/products')} />
          <BsHandbag size={26} onClick={() => navigate('/user/cart')} />
          <RiMenu3Fill size={26} onClick={() => setOpenFilter(true)} />
        </IconGroup>
      </TopBar>

      {/* FILTER SIDEBAR */}

      {openFilter && <SidebarFilter openFilter={openFilter} setOpenFilter={setOpenFilter} />}

      {/* PRODUCT */}

      <Container>
        <ImageSection>
          <MainImage src={image_link} alt={name} />
        </ImageSection>

        <InfoSection>
          <Title>{name}</Title>

          {rating && <RatingBadge>⭐ {rating}</RatingBadge>}

          <PriceRow>
            <Price>₹{price}</Price>
            <OldPrice>₹{oldPrice}</OldPrice>
            <Discount>{discount}% off</Discount>
          </PriceRow>

          <Meta>
            <strong>Category:</strong> {category}
          </Meta>

          <OfferBox>
            <strong>Available Offers</strong>
            <ul>
              <li>10% Instant discount on cards</li>
              <li>No cost EMI available</li>
              <li>Free delivery</li>
            </ul>
          </OfferBox>

          <Delivery>
            <strong>Delivery</strong>
            <br />
            <input placeholder="Enter Pincode" />
            <button>Check</button>
          </Delivery>

          <Description>{description}</Description>

          <ButtonRow>
            <CartButton onClick={() => ProductAddingtoCart(_id)}>Add to Cart</CartButton>

            <BuyButton>Buy Now</BuyButton>
          </ButtonRow>
        </InfoSection>
      </Container>
    </PageWrapper>
  )
}

export default ProductDetail
