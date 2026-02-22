import styled from "styled-components";

/* PAGE */

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f1f3f6;
`;

/* TOP BAR */

export const TopBar = styled.div`
  height: 64px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const IconGroup = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
`;

/* MAIN CONTAINER */

export const Container = styled.div`
  max-width: 1200px;
  background: white;
  display: grid;
  grid-template-columns: 45% 55%;
  gap: 40px;
  padding: 30px;
  border-radius: 6px;
  padding-top: 30px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 25px;
    margin: 10px;
    padding: 20px;
  }
`;

/* IMAGE */

export const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const MainImage = styled.img`
  width: 100%;
  max-width: 420px;
  height: 420px;
  object-fit: contain;
`;

/* INFO */

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

/* TITLE */

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #212121;
`;

/* RATING */

export const RatingBadge = styled.div`
  display: inline-flex;
  background: #388e3c;
  color: white;
  padding: 4px 8px;
  font-size: 13px;
  border-radius: 4px;
  width: fit-content;
  margin-bottom: 10px;
`;

/* PRICE */

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 12px 0;
`;

export const Price = styled.span`
  font-size: 28px;
  font-weight: 600;
`;

export const OldPrice = styled.span`
  text-decoration: line-through;
  color: #878787;
`;

export const Discount = styled.span`
  color: #388e3c;
  font-weight: 600;
`;

/* META */

export const Meta = styled.div`
  font-size: 14px;
  color: #555;
  margin-bottom: 12px;
`;

/* OFFERS */

export const OfferBox = styled.div`
  border: 1px solid #eee;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 15px;

  li {
    font-size: 14px;
    margin: 4px 0;
  }
`;

/* DELIVERY */

export const Delivery = styled.div`
  margin-bottom: 15px;

  input {
    padding: 8px;
    width: 150px;
    border: 1px solid #ccc;
  }

  button {
    padding: 9px 14px;
    margin-left: 8px;
    background: #2874f0;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

/* DESCRIPTION */

export const Description = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.6;
`;

/* BUTTONS */

export const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const CartButton = styled.button`
  flex: 1;
  padding: 14px;
  background: #ff9f00;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const BuyButton = styled.button`
  flex: 1;
  padding: 14px;
  background: #fb641b;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }
`;