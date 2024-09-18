import React from "react";
import styled from "styled-components";

const Button = styled.button<{
  $isShadow: boolean;
  $width: string;
  $height: string;
  $fontSize: string;
}>`
  box-sizing: border-box;

  width: ${(props) => props.$width};
  height: ${(props) => props.$height};

  background: #ffffff;
  border: 0.5px solid #bebebe;
  box-shadow: ${(props) =>
    props.$isShadow ? `0px 2px 4px rgba(0, 0, 0, 0.25)` : `none`};
  border-radius: 8px;

  outline: none;
  cursor: pointer;

  font-family: Pretendard;
  font-weight: 500;
  font-size: ${(props) => props.$fontSize};
`;

interface ActionButtonProps {
  text: string;
  onClick: () => void;
  isShadow?: boolean;
  width?: string;
  height?: string;
  fontSize?: string;
}

export default function ActionButton({
  text,
  onClick,
  isShadow,
  width,
  height,
  fontSize,
}: ActionButtonProps) {
  return (
    <Button
      onClick={onClick}
      $isShadow={isShadow ? isShadow : false}
      $width={width ? width : "40%"}
      $height={height ? height : "30px"}
      $fontSize={fontSize ? fontSize : "0.9em"}
    >
      {text}
    </Button>
  );
}
