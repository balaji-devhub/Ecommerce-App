import styled from "styled-components";

/* ================= PAGE ================= */

export const PageWrapper = styled.div`
  min-height: 100dvh;
  background: #f1f3f6;
  padding: 30px 16px;

  @media (max-width: 600px) {
    padding: 20px 12px;
  }
`;

/* ================= MAIN CONTAINER ================= */

export const Container = styled.div`
  max-width: 1300px;
  margin: auto;
  background: #fff;
  display: grid;
  grid-template-columns: 45% 55%;
  gap: 40px;
  padding: 40px;
  border-radius: 6px;

  @media (max-width: 1100px) {
    gap: 30px;
    padding: 30px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 24px;
  }

  @media (max-width: 600px) {
    padding: 18px;
  }
`;

/* ================= IMAGE SECTION ================= */

export const ImageSection = styled.div`
  position: sticky;
  top: 100px;
  align-self: start;

  @media (max-width: 900px) {
    position: static;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: 450px;
  object-fit: contain;
  border: 1px solid #eee;
  border-radius: 6px;
  background: #fff;

  @media (max-width: 1100px) {
    height: 400px;
  }

  @media (max-width: 900px) {
    height: 350px;
  }

  @media (max-width: 600px) {
    height: 280px;
  }

  @media (max-width: 400px) {
    height: 220px;
  }
`;

/* ================= INFO SECTION ================= */

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

/* ================= TYPOGRAPHY ================= */

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 500;
  color: #212121;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 18px;
  }

  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

export const Price = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: #212121;
  margin: 15px 0;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

export const Meta = styled.div`
  margin-bottom: 15px;

  p {
    margin: 6px 0;
    font-size: 14px;
    color: #555;

    @media (max-width: 600px) {
      font-size: 13px;
    }
  }

  strong {
    color: #212121;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.7;
  margin-top: 15px;
  border-top: 1px solid #eee;
  padding-top: 15px;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

/* ================= BUTTON ================= */

export const Button = styled.button`
  margin-top: 25px;
  width: 250px;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  background: #fb641b;
  color: #fff;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #e85d04;
  }

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    padding: 14px;
    font-size: 14px;
  }
`;
