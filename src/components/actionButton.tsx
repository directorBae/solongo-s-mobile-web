import React from "react";
import styled from "styled-components";

const Button = styled.button`
  box-sizing: border-box;

  width: 30%;
  height: 40px;

  background: #ffffff;
  border: 0.5px solid #bebebe;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  outline: none;
`;

interface ActionButtonProps {
  text: string;
  onClick: () => void;
}

export default function ActionButton({ text, onClick }: ActionButtonProps) {
  return <Button onClick={onClick}>{text}</Button>;
}
