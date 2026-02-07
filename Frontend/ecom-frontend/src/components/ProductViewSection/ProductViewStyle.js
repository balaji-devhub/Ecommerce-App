import styled from 'styled-components'

/* PAGE WRAPPER — LOCK SCROLL */
export const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`

/* DESKTOP SIDEBAR */
export const Sidebar = styled.div`
  width: 260px;
  position: sticky;
  top: 90px;
  height: fit-content;
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    display: none;
  }
`

/* PRODUCTS — ONLY THIS SCROLLS */
export const ProductsSection = styled.div`
  flex: 1;
  height: calc(100vh - 90px);
  overflow-y: auto;
  padding-right: 6px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    height: calc(100vh - 56px);
    overflow-y: auto;
  }
`

/* PRODUCT GRID */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 16px;
  }
`
