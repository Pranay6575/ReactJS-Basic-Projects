import styled from "styled-components";

export const Button = styled.button`
  min-height: 44px;
  min-width: 220px;
  padding: 10px 18px;
  color: white;
  border-radius: 5px;
  background: #000;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid white;
  transition: 0.2 background ease-in;

  &:hover {
    background-color: white;
    color: #000;
    border: 1px solid black;
    transition: 0.4s background ease-in;
  }
`;