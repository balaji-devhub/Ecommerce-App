import styled from "styled-components";

export const Page = styled.div`
  background: #f5f6f8;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: flex-start; /* Aligns container to the left as per screenshot */
  overflow: hidden;
  padding: 0;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CartContainer = styled.div`
  width: 100%;
  max-width: 900px;
  background: #fff;
  /* border-radius only on right side for that specific "sliding drawer" look */
  border-radius: 0 16px 16px 0; 
  padding: 30px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-shadow: 10px 0 30px rgba(0,0,0,0.05);

  @media (max-width: 768px) {
    max-width: 100%;
    border-radius: 0;
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 1.6rem;
  font-weight: 600;
  color: #000;
`;

export const CartItemsWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 15px;

  /* Matches the thin grey scrollbar in your image */
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 10px;
  }
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

export const Image = styled.div`
  width: 85px;
  height: 85px;
  background-color: #eee;
  background-image: ${props => props.src ? `url(${props.src})` : 'none'};
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  flex-shrink: 0;
`;

export const Info = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ProductName = styled.h4`
  margin-bottom: 4px;
  font-size: 1.1rem;
  font-weight: 500;
  color: #333;
`;

export const Price = styled.p`
  font-weight: 700;
  color: #ff9800; /* Matches the orange price in the image */
  font-size: 1.1rem;
`;

export const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-shrink: 0;
`;

export const QtyButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background: #f5f5f5;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: 0.2s;

  &:hover {
    background: #e8e8e8;
  }
`;

/* New Component for the Trash/Delete Button in your image */
export const DeleteButton = styled.button`
  background: #f5f5f5;
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 10px;
  transition: all 0.2s;

  &:hover {
    background: #fee;
    color: #ff4d4f;
  }
`;

export const QtyValue = styled.span`
  font-weight: 800;
  font-size: 1rem;
`;

export const Summary = styled.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Total = styled.h3`
  color: #333;
  font-size: 1.4rem;
  font-weight: 500;
`;

export const CheckoutButton = styled.button`
  padding: 16px 45px;
  border: none;
  background: #ff9800;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(255, 152, 0, 0.3);

  &:hover {
    background: #f57c00;
    transform: translateY(-1px);
  }
`;