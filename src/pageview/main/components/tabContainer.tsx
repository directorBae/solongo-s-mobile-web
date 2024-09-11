import React from "react";
import styled, { keyframes, css } from "styled-components";

// 나타날 때 아래에서 위로 슬라이드 애니메이션
const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

// 사라질 때 위에서 아래로 슬라이드 애니메이션
const slideDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

const TabContainer = styled.div<{ $isVisible: boolean }>`
  width: 100vw;
  height: 50vh;
  min-height: 450px;

  box-sizing: border-box;
  background: #ffffff;
  border-top: 0.5px solid #bebebe;
  box-shadow: 0px -4px 8px 0.5px rgba(0, 0, 0, 0.25);
  border-radius: 8px 8px 0px 0px;
  display: flex;
  flex-direction: column;
  z-index: 2;

  // 애니메이션 적용 (isVisible에 따라 슬라이드 업/다운)
  ${({ $isVisible }) =>
    $isVisible
      ? css`
          animation: ${slideUp} 0.5s ease-in-out forwards;
        `
      : css`
          animation: ${slideDown} 0.5s ease-in-out forwards;
        `}
`;

const GrabberContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 10px;
`;

const Grabber = styled.div`
  width: 30px;
  height: 4px;

  background: #d9d9d9;
  border-radius: 4px;
`;

const ContextMaxWidth = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.2rem;
  
`;

interface TabProps {
  children: React.ReactNode;
  isVisible: boolean;
}

const BottomTab = ({ children, isVisible }: TabProps) => {
  return (
    <TabContainer $isVisible={isVisible}>
      <GrabberContainer>
        {" "}
        <Grabber />
      </GrabberContainer>
      <ContextMaxWidth>{children}</ContextMaxWidth>
    </TabContainer>
  );
};

export default BottomTab;
