import React from "react";
import styled from "styled-components";
import Cash from "../../../assets/svgs/cash.svg";
import Chatlogs from "../../../assets/svgs/chatlogs.svg";
import Footprint from "../../../assets/svgs/footprint.svg";
import Language from "../../../assets/svgs/language.svg";
import Profile from "../../../assets/svgs/profile.svg";
import Pathfind from "../../../assets/svgs/pathfind.svg";
import Pallete from "../../../assets/svgs/pallete.svg";

const IconContainer = styled.button<{ $isClicked: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;

    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25))
    box-sizing: border-box;

    width: 40px;
    height: 40px;

    background: ${(props) => (props.$isClicked ? "#000000" : "#FFFFFF")};
    border: 0.5px solid #BEBEBE;
    border-radius: 8px;
    outline: none;

    cursor: pointer;
`;

const Icon = styled.img<{ $isClicked: boolean }>`
  filter: ${(props) => (props.$isClicked ? "invert(1)" : "none")};
  align-self: center;
  justify-self: center;
`;

interface IconButtonProps {
  icon:
    | "cash"
    | "chatlogs"
    | "footprint"
    | "language"
    | "profile"
    | "pathfind"
    | "pallete";
  isClicked: boolean;
  onClick: () => void;
}

export default function IconButton({
  icon,
  isClicked,
  onClick,
}: IconButtonProps) {
  const iconToObj = {
    cash: Cash,
    chatlogs: Chatlogs,
    footprint: Footprint,
    language: Language,
    profile: Profile,
    pathfind: Pathfind,
    pallete: Pallete,
  };

  return (
    <IconContainer $isClicked={isClicked} onClick={onClick}>
      <Icon src={iconToObj[icon]} $isClicked={isClicked} />
    </IconContainer>
  );
}
