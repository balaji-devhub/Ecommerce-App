import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductListPage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh;
`;

export const ProductListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column; /* Stack rows vertically */
  padding: 20px;
  gap: 10px;
`;

export const Product = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 10px 20px;
  display: flex;
  align-items: center; /* Vertical alignment */
  gap: 20px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
`;

export const ProductImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
  flex-shrink: 0;
`;

export const ProductName = styled.p`
  flex: 2; /* Takes up more space */
  font-size: 15px;
  font-weight: 600;
  margin: 0;
  color: #1f2937;
`;

export const Category = styled.p`
  flex: 1;
  font-size: 14px;
  color: #6b7280;
  margin: 0;
  display: none; /* Hide on mobile to save space */
  
  @media (min-width: 640px) {
    display: block;
  }
`;

export const Price = styled.p`
  width: 80px;
  font-size: 15px;
  font-weight: bold;
  color: #111827;
  margin: 0;
  text-align: right;
`;

export const Stock = styled.p`
  width: 100px;
  font-size: 14px;
  font-weight: 600;
  color: ${props => (props.isLow ? '#ef4444' : '#6b7280')};
  margin: 0;
  text-align: center;

  /* Only show stock quantity on large displays */
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;

export const Status = styled.span`
  width: 90px;
  text-align: center;
  font-size: 11px;
  font-weight: bold;
  padding: 4px 0;
  letter-spacing: 1.3px;
  border-radius: 4px;
  text-transform: uppercase;
  color: white;
  background: ${props => {
    if (props.type === 'published') return '#22c55e';
    if (props.type === 'draft') return '#9ca3af';
    return '#9ca3af';
  }};
`;

export const ProductLink = styled(Link)`
text-decoration: none;
color: #000;
`