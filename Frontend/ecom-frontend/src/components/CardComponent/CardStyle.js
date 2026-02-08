import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background: #fff;
  border-radius: 14px;
  cursor: pointer;
  padding: 14px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  transition: 0.3s;
  overflow: hidden; /* prevents image overflow */

  &:hover {
    transform: translateY(-6px);
  }
`;

export const Image = styled.img`
  width: 100%;          /* full width of card */
  height: 200px;        /* fixed height for uniform look */
  object-fit: cover;    /* crop nicely without distortion */
  border-radius: 10px;  /* smooth edges */
`;

export const Title = styled.h4`
  font-size: 16px;
  margin: 10px 0 6px 0;
`;

export const Price = styled.p`
  font-weight: bold;
  color: #ff9800;
`;


export const ProductLink = styled(Link)`
text-decoration: none;
color: #000;
`