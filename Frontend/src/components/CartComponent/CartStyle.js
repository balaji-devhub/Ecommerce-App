import styled from "styled-components";

/* PAGE */

export const Page = styled.div`
  background: #2f3e5c;
  min-height: 100vh;

  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* CONTAINER */

export const CartContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-top: 20px;

  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

/* TITLE */

export const Title = styled.h2`
  grid-column: span 2;
  font-weight: bold;
  margin-bottom: 10px;
  color: black;

  @media (max-width: 900px) {
    grid-column: span 1;
  }
`;

/* ITEMS */

export const CartItemsWrapper = styled.div`
  background: white;
  border-radius: 10px;
  overflow-y: auto;

  padding: 10px 0;

  max-height: calc(100vh - 160px);

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 10px;
  }

  @media (max-width: 900px) {
    max-height: none;
  }
`;

/* ITEM */

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: 110px 1fr auto auto;
  gap: 20px;
  align-items: center;

  padding: 18px;
  border-bottom: 1px solid #eee;

  @media (max-width: 768px) {
    grid-template-columns: 80px 1fr;
    gap: 12px;
  }
`;

/* IMAGE */

export const Image = styled.img`
  width: 90px;
  height: 90px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

/* INFO */

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ProductName = styled.h4`
  font-size: 15px;
  line-height: 1.3;
`;

export const Price = styled.p`
  font-weight: 600;
  color: #111;
`;

/* QUANTITY */

export const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 6px;
  }
`;

export const QtyButton = styled.button`
  border: none;
  background: white;
  padding: 8px 12px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #f5f5f5;
  }
`;

export const QtyValue = styled.div`
  padding: 6px 14px;
  min-width: 30px;
  text-align: center;
`;

/* SUMMARY */

export const Summary = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;

  height: fit-content;
  position: sticky;
  top: 90px;

  @media (max-width: 900px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    border-radius: 14px 14px 0 0;
    box-shadow: 0 -6px 20px rgba(0,0,0,0.08);

    padding: 18px;
  }
`;

/* TOTAL */

export const Total = styled.h3`
  margin-bottom: 15px;
`;

/* CHECKOUT */

export const CheckoutButton = styled.button`
  width: 100%;
  background: #fb641b;
  color: white;
  border: none;
  padding: 14px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 6px;

  transition: 0.2s;

  &:hover {
    background: #e85d04;
  }
`;