import React from "react";
import styled from "styled-components";

const Button = styled.button<{ $isShadow: boolean; $width: string }>`
  box-sizing: border-box;

  width: ${(props) => props.$width};
  height: 30px;

  background: #ffffff;
  border: ${(props) => (props.$isShadow ? `0.5px solid #bebebe` : `none`)};
  box-shadow: ${(props) =>
    props.$isShadow ? `0px 2px 4px rgba(0, 0, 0, 0.25)` : `none`};
  border-radius: 8px;

  outline: none;
  cursor: pointer;

  font-family: Pretendard;
  font-weight: 500;
  font-size: 0.9em;
`;

interface ActionButtonProps {
  text: string;
  onClick: (() => void) | null;
  isShadow?: boolean;
  width?: string;
}

export default function ActionButton({
  text,
  onClick,
  isShadow,
  width,
}: ActionButtonProps) {
  return (
    <Button
      onClick={() => onClick}
      $isShadow={isShadow ? isShadow : false}
      $width={width ? width : "40%"}
    >
      {text}
    </Button>
  );
}
