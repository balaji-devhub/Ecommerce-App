import { useState } from 'react'
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
  const [cart, setCart] = useState([
    { id: 1, name: 'Wireless Headphones', price: 1999, qty: 1 },
    { id: 2, name: 'Smart Watch', price: 2999, qty: 2 },
    { id: 3, name: 'Bluetooth Speaker', price: 1499, qty: 1 },
    { id: 4, name: 'Power Bank', price: 999, qty: 1 },
    { id: 5, name: 'USB Cable', price: 299, qty: 2 },
    { id: 6, name: 'Laptop Stand', price: 1899, qty: 1 },
    { id: 7, name: 'Keyboard', price: 2499, qty: 1 },
    { id: 8, name: 'Mouse', price: 799, qty: 1 }
  ])

  const increaseQty = id => {
    setCart(prev => prev.map(item => (item.id === id ? { ...item, qty: item.qty + 1 } : item)))
  }

  const decreaseQty = id => {
    setCart(prev =>
      prev.map(item => (item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item))
    )
  }

  const deleteItem = id => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <Page>
      <CartContainer>
        <Title>Your Cart</Title>

        <CartItemsWrapper>
          {cart.map(item => (
            <CartItem key={item.id}>
              <Image />

              <Info>
                <ProductName>{item.name}</ProductName>
                <Price>₹ {item.price}</Price>
              </Info>

              <QuantityBox>
                <QtyButton onClick={() => decreaseQty(item.id)}>
                  <FiMinus />
                </QtyButton>

                <QtyValue>{item.qty}</QtyValue>

                <QtyButton onClick={() => increaseQty(item.id)}>
                  <FiPlus />
                </QtyButton>
              </QuantityBox>

              <QtyButton onClick={() => deleteItem(item.id)} title="Remove item">
                <FiTrash2 />
              </QtyButton>
            </CartItem>
          ))}
        </CartItemsWrapper>

        <Summary>
          <Total>Total: ₹ {totalAmount}</Total>
          <CheckoutButton>Checkout</CheckoutButton>
        </Summary>
      </CartContainer>
    </Page>
  )
}

export default CartPage
