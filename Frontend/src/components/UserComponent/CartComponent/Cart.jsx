import { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

import {
  Page,
  CartContainer,
  Title,
  CartItem,
  Image,
  Info,
  ProductName,
  Price,
  QuantityBox,
  QtyButton,
  QtyValue,
  Summary,
  Total,
  CheckoutButton,
  CartItemsWrapper
} from './CartStyle'

import { FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi'

const CartPage = () => {
  const url = import.meta.env.VITE_API_URL

  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(true)

  /* FETCH CART */

  const fetchCart = async () => {
    try {
      const token = Cookies.get('jwt_token')
      if (!token) return

      const { data } = await axios.get(`${url}/user/cart`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setCart(data.cart?.items || [])
    } catch (error) {
      console.log('Cart Fetch Error', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCart()
  }, [])

  /* UPDATE QUANTITY */

  const updateQuantity = async (productId, newQty) => {
    try {
      const token = Cookies.get('jwt_token')

      await axios.put(
        `${url}/user/cart/update/${productId}`,
        { quantity: newQty },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      setCart(prev =>
        prev.map(item => (item.productId._id === productId ? { ...item, quantity: newQty } : item))
      )
    } catch (error) {
      console.log('Quantity Update Error', error)
    }
  }

  /* INCREASE */

  const increaseQty = id => {
    const item = cart.find(i => i.productId._id === id)
    if (!item) return
    updateQuantity(id, item.quantity + 1)
  }

  /* DECREASE */

  const decreaseQty = id => {
    const item = cart.find(i => i.productId._id === id)
    if (!item || item.quantity === 1) return
    updateQuantity(id, item.quantity - 1)
  }

  /* DELETE ITEM */

  const deleteItem = async productId => {
    try {
      const token = Cookies.get('jwt_token')

      await axios.delete(`${url}/user/cart/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setCart(prev => prev.filter(item => item.productId._id !== productId))
    } catch (error) {
      console.log('Delete Error', error)
    }
  }

  /* TOTAL */

  const totalAmount = Math.round(
    cart.reduce((sum, item) => sum + item.productId.price * item.quantity, 0)
  )

  if (loading) {
    return <Page>Loading Cart...</Page>
  }

  return (
    <Page>
      <CartContainer>
        <Title>Your Cart</Title>

        {cart.length === 0 && <p>Your cart is empty</p>}

        <CartItemsWrapper>
          {cart.map(item => (
            <CartItem key={item.productId._id}>
              <Image src={item.productId.image_link} />

              <Info>
                <ProductName>{item.productId.name}</ProductName>

                <Price>₹ {item.productId.price}</Price>
              </Info>

              <QuantityBox>
                <QtyButton onClick={() => decreaseQty(item.productId._id)}>
                  <FiMinus />
                </QtyButton>

                <QtyValue>{item.quantity}</QtyValue>

                <QtyButton onClick={() => increaseQty(item.productId._id)}>
                  <FiPlus />
                </QtyButton>
              </QuantityBox>

              <QtyButton onClick={() => deleteItem(item.productId._id)} title="Remove item">
                <FiTrash2 />
              </QtyButton>
            </CartItem>
          ))}
        </CartItemsWrapper>

        {cart.length > 0 && (
          <Summary>
            <Total>Total: ₹ {totalAmount}</Total>

            <CheckoutButton>Checkout</CheckoutButton>
          </Summary>
        )}
      </CartContainer>
    </Page>
  )
}

export default CartPage
