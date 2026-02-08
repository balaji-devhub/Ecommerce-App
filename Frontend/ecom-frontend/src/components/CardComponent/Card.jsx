import { Card, Image, Title, Price, ProductLink } from './CardStyle'

const ProductCard = ({ title, price, img, productId }) => {
  return (
    <ProductLink to={`/user/products/${productId}/`}>
      <Card>
        <Image src={img} />
        <Title>{title}</Title>
        <Price>₹ {price}</Price>
      </Card>
    </ProductLink>
  )
}

export default ProductCard
