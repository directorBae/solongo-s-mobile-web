import { observer } from "mobx-react";
import React, { useState } from "react";
import styled from "styled-components";
import ContentsCard from "../components/contentsCard";
import { CardContent } from "../../../store/types/types";
import ActionButton from "../../../components/actionButton";

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: Pretendard;
  width: 100%;
  padding: 1rem;
`;

const SliderWrapper = styled.div`
  overflow: hidden; /* Slider 영역 외부 숨기기 */
  width: 100%;
`;

const Slider = styled.div<{ $translateX: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out; /* 부드러운 슬라이드 애니메이션 */
  transform: translateX(${(props) => props.$translateX}px);
  width: fit-content;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  margin-top: 1rem;
`;

interface TabProps {
  vm: any;
}

const FunctionTab = observer(({ vm }: TabProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const contents = vm.contentsList;
  console.log(contents);

  // 왼쪽으로 슬라이드
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // 오른쪽으로 슬라이드
  const handleNext = () => {
    if (currentIndex < contents.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div>
      <Title>{vm.title}</Title>

      <SliderWrapper>
        <Slider $translateX={-currentIndex * (225 + 10)}>
          {contents.map((content: CardContent, index: number) => (
            <ContentsCard
              key={index}
              color={vm.colors[0]["bg"]}
              textColor={vm.colors[0]["text"]}
              contents={content}
            />
          ))}
        </Slider>
      </SliderWrapper>

      <ButtonContainer>
        <ActionButton
          text="이전"
          onClick={handlePrev}
          isShadow={true}
          width="30%"
        />
        <ActionButton
          text="다음"
          onClick={handleNext}
          isShadow={true}
          width="30%"
        />
      </ButtonContainer>
    </div>
  );
});

export default FunctionTab;
