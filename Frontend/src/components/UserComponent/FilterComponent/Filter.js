import styled from 'styled-components'

/* PAGE LAYOUT */

export const PageLayout = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px 5%;
  background: #f1f3f6;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`

/* OVERLAY */

export const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'block' : 'none')};
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.45);
    backdrop-filter: blur(2px);
    z-index: 1000;
  }
`

/* MOBILE TOP BAR */

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #fff;
  padding: 14px 20px;

  border-bottom: 1px solid #eee;

  position: sticky;
  top: 0;
  z-index: 999;
`

/* FILTER BOX */

export const FilterBox = styled.div`
  width: 290px;
  position: sticky;
  top: 20px;
  height: fit-content;
  max-height: calc(100vh - 40px);

  background: #fff;
  padding: 22px;
  border-radius: 14px;

  box-shadow: 0 8px 30px rgba(0,0,0,0.06);

  overflow-y: auto;

  /* smooth scrollbar */

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;

    width: 300px;
    height: 100vh;

    border-radius: 0;
    z-index: 1001;

    transform: ${({ open }) =>
    open ? 'translateX(0)' : 'translateX(-100%)'};

    transition: transform 0.35s ease;
  }
`

/* TITLE */

export const FilterTitle = styled.h3`
  font-size: 1.15rem;
  margin-bottom: 18px;
  color: #222;
  font-weight: 600;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
`

/* FILTER ITEM */

export const FilterItem = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 12px;
  cursor: pointer;

  font-size: 0.95rem;
  color: #555;

  transition: all 0.2s ease;

  &:hover {
    color: #2874f0;
    transform: translateX(2px);
  }

  input {
    cursor: pointer;
    accent-color: #2874f0;
  }
`

/* MOBILE ICON ALIGN */

export const ContainerAlignment = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

/* CLOSE BUTTON */

export const CloseButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background: #f5f5f5;
    border: none;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    font-size: 18px;
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 15px;

    &:hover {
      background: #eee;
    }
  }
`