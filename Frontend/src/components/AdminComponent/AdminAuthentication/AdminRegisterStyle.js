import styled from "styled-components";

/* Page Wrapper */
export const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
 
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

/* Navbar */
export const Navbar = styled.nav`
  height: 60px;
  width: 100%;
  background: #146c94;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  color: white;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Logo = styled.h2`
  font-size: 18px;
  margin: 0;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

/* Content Area */
export const Content = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
  box-sizing: border-box;
`;

/* Typography */
export const Title = styled.h2`
  margin: 0 0 10px 0;
  color: #333;
  font-size: 22px;
`;

export const Breadcrumb = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 30px;
`;

/* Form Container */
export const FormContainer = styled.div`
  width: 100%;
 margin-top: 40px;
  padding: 40px;
  border-radius: 6px;
 
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 25px;
  }
`;

/* Form Row */
export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  margin-bottom: 22px;
  gap: 15px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 6px;
  }
`;

/* Elements */
export const Label = styled.label`
  font-size: 14px;
  color: #333;
  font-weight: 500;
`;

const SharedInputStyles = `
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border-color: #146c94;
    box-shadow: 0 0 0 1px #146c94;
  }
`;

export const Input = styled.input`${SharedInputStyles}`;

export const TextArea = styled.textarea`
  ${SharedInputStyles}
  resize: vertical;
  min-height: 100px;
`;

export const Select = styled.select`
  ${SharedInputStyles}
  background: white;
  cursor: pointer;
`;

export const ScopeText = styled.span`
  font-size: 14px;
  color: #555;
`;

/* Buttons */
export const ButtonGroup = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 12px;
  justify-content: flex-start;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const CancelButton = styled.button`
  padding: 10px 24px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  transition: background 0.2s;

  &:hover {
    background: #f8f8f8;
  }
`;

export const RegisterButton = styled.button`
  padding: 10px 24px;
  border: none;
  background: #ffcc00;
  color: #000;
  font-weight: 600;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  transition: background 0.2s;

  &:hover {
    background: #f2b800;
  }
`;