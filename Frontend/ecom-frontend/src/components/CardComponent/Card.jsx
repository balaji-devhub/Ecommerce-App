import { Card, Image, Title, Price } from './CardStyle'

const ProductCard = ({ title, price }) => {
  return (
    <Card>
      <Image />
      <Title>{title}</Title>
      <Price>₹ {price}</Price>
    </Card>
  )
}

export default ProductCard
