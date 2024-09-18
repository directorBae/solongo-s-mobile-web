import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";

const ModeTitleContainer = styled.div<{
  color?: string;
  display?: boolean;
}>`
  box-sizing: border-box;

  position: absolute;
  width: 30%;
  height: 40px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 0px 4px 1px rgba(255, 0, 0, 0.5);
  border-radius: 8px;
  border: 1px solid transparent;
  border-image: ${(props) => props.color}; /* 그라디언트 적용 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;

  color: #000000;

  display: ${(props) => (props.display ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const ModeTitle = observer((vm: any) => {
  return (
    <ModeTitleContainer
      color={
        vm.colors ? vm.colors[vm.activatedIndex % vm.colors.length] : undefined
      }
      display={vm.activated}
    >
      {vm.title}
    </ModeTitleContainer>
  );
});

export default ModeTitle;
