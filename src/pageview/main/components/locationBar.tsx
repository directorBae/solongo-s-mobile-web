import React from "react";
import { InputBarBox, InputBarContainer } from "../../../components/userInput";
import styled from "styled-components";
import CurrentLocationIcon from "../../../assets/svgs/currentLocation.svg";

const CurrentLocationIconContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;

  cursor: pointer;
`;

interface LocationBarProps {
  placeholder: string;
}

export default function LocationBar({ placeholder }: LocationBarProps) {
  return (
    <InputBarContainer>
      <InputBarBox placeholder={placeholder} />
      <CurrentLocationIconContainer>
        <img src={CurrentLocationIcon} alt="CurrentLocation" />
      </CurrentLocationIconContainer>
    </InputBarContainer>
  );
}
