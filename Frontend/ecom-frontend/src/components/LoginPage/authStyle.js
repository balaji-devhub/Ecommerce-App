import styled, { keyframes } from "styled-components";

/* Animation */
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-25px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background-image: url("https://res.cloudinary.com/dlucwqoss/image/upload/v1769855665/port-elizabeth-south-africa-29-january-2024_n2wxi1.jpg");
  font-family: "Segoe UI", sans-serif;
  letter-spacing: 1px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Form = styled.form`
  background: rgba(255, 255, 255, 0.18);
  padding: 2.5rem;
  border-radius: 20px;
  width: min(90%, 400px);
  animation: ${fadeIn} 0.7s ease;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: #fff;
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  margin-bottom: 1.2rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  font-size: 0.95rem;
  letter-spacing: 1px;
  transition: 0.3s ease;
  background: rgba(255, 255, 255, 0.25);
  color: #fff;

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
    background: rgba(255, 255, 255, 0.35);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 12px;
  background: rgba(0, 72, 131, 0.35);
  color: #fff;
  font-weight: 600;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: all 0.3s ease;
 

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const LinkText = styled.p`
  text-align: center;
  margin-top: 1rem;
  color: #fff;
  cursor: pointer;

  span {
    font-weight: 600;
    text-decoration: underline;
  }
`;

export const Info = styled.p`
margin-top: "15px";
text-align: "center"; 
color: "#fff";
cursor: pointer;
`

export const ErrorText = styled.p`
color: #be1919;
margin-bottom: 5px;
`