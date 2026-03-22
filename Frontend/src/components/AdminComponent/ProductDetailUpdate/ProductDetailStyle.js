import styled from "styled-components";

export const Container = styled.div`
  background: #456ead;
  min-height: 100vh;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  overflow-y: auto;
`;

export const ProductCard = styled.div`
  background: #ffffff;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: visible;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

export const ImageSection = styled.div`
  flex: 0.8;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fdfdfd;
  border-bottom: 1px solid #eee;

  @media (min-width: 992px) {
    border-bottom: none;
    border-right: 1px solid #f0f0f0;
    position: sticky;
    top: 0;
    height: auto;
    max-height: 100vh;
  }
`;

export const DetailImg = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.08));
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: scale(1.03);
  }
`;

export const FormSection = styled.div`
  flex: 1.2;
  padding: 40px;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    max-height: 100vh;
    overflow-y: auto;
  }

  /* optional scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e0;
    border-radius: 10px;
  }
`;

/* Grid layout for form */
export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  grid-column: ${props => (props.fullWidth ? "1 / -1" : "auto")};

  label {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #718096;
    font-weight: 700;
  }

  input,
  select,
  textarea {
    padding: 12px 16px;
    border: 1.5px solid #e2e8f0;
    border-radius: 8px;
    font-size: 15px;
    color: #2d3748;
    background: #fff;
    transition: all 0.2s ease-in-out;

    &:focus {
      outline: none;
      border-color: #2874f0;
      background: #fff;
      box-shadow: 0 0 0 4px rgba(40, 116, 240, 0.1);
    }

    &:hover {
      border-color: #cbd5e0;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto;
  padding-top: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const BaseButton = styled.button`
  flex: 1;
  padding: 14px 24px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 8px;
  border: none;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:active {
    transform: scale(0.98);
  }
`;

export const UpdateButton = styled(BaseButton)`
  background: #2874f0;
  color: white;

  &:hover {
    background: #1259d3;
    box-shadow: 0 4px 12px rgba(40, 116, 240, 0.3);
  }
`;

export const EditButton = styled(BaseButton)`
  background: #fff;
  color: #2874f0;
  border: 1.5px solid #2874f0;

  &:hover {
    background: #f0f6ff;
  }
`;

export const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 10px;
  color: #1a202c;
`;

export const ChangeImageText = styled.p`
  margin-top: 10px;
  color: #2874f0;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    text-decoration: underline;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const CancelButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: #2874f0;
  font-weight: 600;
  padding: 14px;

  &:hover {
    text-decoration: underline;
  }
`;