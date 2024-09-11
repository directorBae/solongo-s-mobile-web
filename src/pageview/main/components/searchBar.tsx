import React from "react";
import { InputBarBox, InputBarContainer } from "../../../components/userInput";
import styled from "styled-components";
import SearchIcon from "../../../assets/svgs/search.svg";

const SearchIconContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;

export default function SearchBar() {
  return (
    <InputBarContainer>
      <InputBarBox placeholder="장소를 입력해주세요..." />
      <SearchIconContainer>
        <img src={SearchIcon} alt="search" />
      </SearchIconContainer>
    </InputBarContainer>
  );
}
