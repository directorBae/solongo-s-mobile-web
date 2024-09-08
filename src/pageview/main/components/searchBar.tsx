import React from "react";
import styled from "styled-components";
import SearchIcon from "../../../assets/svgs/search.svg";

const SearchBarContainer = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: 40px;

  display: flex;
  flex-direction: row;

  position: relative;
`;

const SearchBarBox = styled.input`
  box-sizing: border-box;

  width: 100%;
  height: 40px;
  padding-left: 10px;

  display: flex;

  background: #ffffff;
  border: 0.5px solid rgba(28, 28, 28, 0.5);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  font-size: 14px;
`;

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
    <SearchBarContainer>
      <SearchBarBox placeholder="장소를 입력해주세요..." />
      <SearchIconContainer>
        <img src={SearchIcon} alt="search" />
      </SearchIconContainer>
    </SearchBarContainer>
  );
}
