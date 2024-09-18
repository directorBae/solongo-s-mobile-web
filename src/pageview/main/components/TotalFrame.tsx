import React, { ReactElement } from "react";
import styled from "styled-components";
import SearchBar from "./searchBar";
import IconButton from "./iconButton";
import BottomTab from "./tabContainer";
import KakaoMap from "./map/kakaomap";
import { observer } from "mobx-react";
import ModeTitle from "./modeTitle";

const TotalFrameContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;

  z-index: 1;
  pointer-events: none;

  input,
  button {
    pointer-events: auto;
  }
`;

const FunctionContainer = styled.div`
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LeftSideButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RightSideButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BottomTabContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;

  box-sizing: border-box;

  div {
    pointer-events: auto;
  }
`;

interface TotalFrameProps {
  vm: any;
  tabView?: ReactElement | null;
}

const TotalFrame = observer(({ vm, tabView }: TotalFrameProps) => {
  return (
    <>
      <KakaoMap />
      <TotalFrameContainer>
        <FunctionContainer>
          <SearchBar />
          <ButtonsContainer>
            <LeftSideButton>
              <IconButton
                icon="pallete"
                isClicked={vm.isIconClicked["pallete"]}
                onClick={() => vm.setMode("pallete")}
              />
              {/*<IconButton
                icon="footprint"
                isClicked={vm.showMode === "footprint"}
                onClick={() => vm.setMode("footprint")}
              /> */}
              <IconButton
                icon="chatlogs"
                isClicked={vm.showMode.VMMode === "chatlogs"}
                onClick={() => vm.setMode("chatlogs")}
              />
              {/* <IconButton
                icon="cash"
                isClicked={vm.showMode === "cash"}
                onClick={() => vm.setMode("cash")}
              /> */}
              <IconButton
                icon="pathfind"
                isClicked={vm.showMode.VMMode === "pathfind"}
                onClick={() => vm.setMode("pathfind")}
              />
            </LeftSideButton>
            <ModeTitle vm={null} />
            <RightSideButton>
              {/* <IconButton
                icon="profile"
                isClicked={vm.showMode === "profile"}
                onClick={() => vm.setMode("profile")}
              /> */}
              <IconButton
                icon="language"
                isClicked={vm.showMode.VMMode === "language"}
                onClick={() => vm.setMode("language")}
              />
            </RightSideButton>
          </ButtonsContainer>
        </FunctionContainer>
        <BottomTabContainer>
          <BottomTab children={tabView} isVisible={vm.showMode.showBottomTab} />
        </BottomTabContainer>
      </TotalFrameContainer>
    </>
  );
});

export default TotalFrame;
