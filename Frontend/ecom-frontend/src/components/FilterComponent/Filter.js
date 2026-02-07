import styled from 'styled-components';

/* 1. The Main Layout Wrapper */
export const PageLayout = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px 5%;
  background-color: #f8f9fa;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

/* 2. Overlay (Background dim when mobile sidebar is open) */
export const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'block' : 'none')};
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1000;
    backdrop-filter: blur(2px);
  }
`;

/* 3. Mobile Top Filter Bar (Visible only on mobile) */
export const MobileFilterBar = styled.div`
  display: none; /* Hidden on desktop */

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);

`;

/* 4. Sidebar / Filter Box */
export const FilterBox = styled.div`
  width: 280px;
  position: sticky;
  top: 20px; /* Distance from top when scrolling */
  height: fit-content;
  max-height: calc(100vh - 40px);
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  overflow-y: auto; /* Scrollable if many filters */

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 300px;
    border-radius: 0;
    z-index: 1001;
    /* Transition fixed to ensure smooth slide-in */
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const FilterTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 1.2rem;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
`;

export const FilterItem = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 0.95rem;
  color: #555;
  transition: color 0.2s;

  &:hover {
    color: #ff9800;
  }

  input {
    cursor: pointer;
    accent-color: #ff9800;
  }
`;

/* 5. Utility Alignment for Mobile Bar Icons */
export const ContainerAlignment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;

/* 6. Close Button for Mobile (Hidden on Desktop) */
export const CloseButton = styled.button`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;
  }
`;