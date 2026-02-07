import styled from "styled-components";

export const Card = styled.div`
  background: #fff;
  border-radius: 14px;
  padding: 14px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  transition: 0.3s;

  &:hover {
    transform: translateY(-6px);
  }
`;

export const Image = styled.div`
  height: 160px;
  background: #f2f2f2;
  border-radius: 10px;
  margin-bottom: 12px;
`;

export const Title = styled.h4`
  font-size: 16px;
  margin-bottom: 6px;
`;

export const Price = styled.p`
  font-weight: bold;
  color: #ff9800;
`;
