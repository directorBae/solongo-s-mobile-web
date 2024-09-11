import { observer } from "mobx-react";
import React, { useState } from "react";
import styled from "styled-components";
import ContentsCard from "../components/contentsCard";
import { CardContent } from "../../../store/types/types";

// 가로 스크롤 박스의 스타일
const SliderWrapper = styled.div`
  overflow-x: auto; /* 가로 스크롤 활성화 */
  white-space: nowrap; /* 카드들이 한 줄로 나열되게 설정 */
  padding: 1rem;

  scrollbar-width: thin; /* Firefox에서 스크롤바 얇게 */
  scrollbar-color: #888 #f1f1f1; /* Firefox용 스크롤바 색상 설정 */
`;

const SlideItem = styled.div`
  display: inline-block; /* 카드들을 한 줄로 나열하기 위해 설정 */

  margin-right: 10px;

  transition: transform 0.3s ease, opacity 0.3s ease; /* 애니메이션 추가 */
  &:hover {
    transform: scale(1.05); /* 호버 시 확대 */
  }
`;

interface TabProps {
  vm: any;
}

const FunctionTab = observer(({ vm }: TabProps) => {
  const contents = vm.contentsList;

  return (
    <SliderWrapper>
      {contents.map((content: CardContent, index: number) => (
        <SlideItem key={index}>
          <ContentsCard
            color={vm.colors[index % contents.length]["bg"]}
            textColor={vm.colors[index % contents.length]["text"]}
            contents={content}
            buttons={vm.cardButtons}
          />
        </SlideItem>
      ))}
    </SliderWrapper>
  );
});

export default FunctionTab;
